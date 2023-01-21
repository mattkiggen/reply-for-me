// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

serve(async (req) => {
  const { prompt } = await req.json();

  const response = await fetch(`https://api.openai.com/v1/completions`, {
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0,
      max_tokens: 100,
    }),
    headers: {
      Authorization: `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
});
