import { neon } from '@netlify/neon';

const sql = neon();

export const handler = async () => {
  try {
    const [setting] = await sql`SELECT * FROM settings WHERE key = 'is_available'`;
    return {
      statusCode: 200,
      body: JSON.stringify({ isAvailable: setting?.value === 'true' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching availability' }),
    };
  }
};
