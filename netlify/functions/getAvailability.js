import { neon } from '@netlify/neon';

const sql = neon();

export const handler = async () => {
  try {
    const result = await sql`SELECT value FROM settings WHERE key = 'is_available' LIMIT 1`;
    
    const isAvailable = result.length > 0 ? result[0].value === 'true' : false;
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isAvailable }),
    };
    
  } catch (error) {
    console.error('Error fetching availability:', error);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        isAvailable: false,
        error: 'Database error'
      }),
    };
  }
};