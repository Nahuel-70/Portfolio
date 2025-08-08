import { neon } from '@netlify/neon';

export const handler = async () => {
  try {
    if (!process.env.DATABASE_URL) {
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ 
          error: 'Database configuration error',
          isAvailable: false // Valor por defecto
        }),
      };
    }

    const sql = neon(process.env.DATABASE_URL);
    
    const result = await sql`SELECT value FROM settings WHERE key = 'is_available' LIMIT 1`;
    
    const isAvailable = result.length > 0 ? result[0].value === 'true' : false;
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ isAvailable }),
    };
    
  } catch (error) {
    console.error('Error en getAvailability:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        error: 'Error fetching availability',
        isAvailable: false
      }),
    };
  }
};