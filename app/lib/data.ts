import { sql } from '@vercel/postgres';
import {
  User
} from './definations';

export async function fetchUser(id: string): Promise<User | null> {
  try {
    const result = await sql`
      SELECT * FROM users WHERE id = ${id}
    `;
    return result[0] || null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}
