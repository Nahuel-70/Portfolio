import { neon } from '@netlify/neon';

const sql = neon();

export const handler = async () => {
  try {
    // Query corregida para tu estructura de tabla
    const result = await sql`SELECT is_available FROM settings WHERE id = 1 LIMIT 1`;
    
    // Verificar si encontramos el registro
    const isAvailable = result.length > 0 ? result[0].is_available : false;
    
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