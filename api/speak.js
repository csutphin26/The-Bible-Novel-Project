/**
 * Vercel serverless function: ElevenLabs text-to-speech.
 * POST body: { text: "..." }
 * Returns: audio/mpeg or JSON error.
 * Env: ELEVENLABS_API_KEY (required), ELEVENLABS_VOICE_ID (optional).
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    res.status(503).json({ error: 'ElevenLabs API key not configured' });
    return;
  }

  const body = typeof req.body === 'object' ? req.body : {};
  const text = typeof body.text === 'string' ? body.text.trim() : '';
  if (!text) {
    res.status(400).json({ error: 'Missing text' });
    return;
  }

  const voiceId = process.env.ELEVENLABS_VOICE_ID || 'EXAVITQu4vr4xnSDxMaL';
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      'xi-api-key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'audio/mpeg',
    },
    body: JSON.stringify({
      text,
      model_id: 'eleven_monolingual_v1',
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    res.status(response.status).json({ error: 'ElevenLabs request failed', details: err });
    return;
  }

  const audio = await response.arrayBuffer();
  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Cache-Control', 'private, max-age=3600');
  res.send(Buffer.from(audio));
}
