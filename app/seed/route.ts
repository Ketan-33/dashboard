import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users } from '../lib/placeholder-data';
import { v4 as uuidv4 } from 'uuid';

const client = await db.connect();

async function seedUsers() {
    await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await client.query(`
        CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            date DATE NOT NULL,
            status VARCHAR(255) NOT NULL
        );
    `);

    const insertedUsers = await Promise.all(
        users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            const userId = uuidv4(); // Generate a valid UUID
            return client.query(
                `
                INSERT INTO users (id, name, email, password, date, status)
                VALUES ($1, $2, $3, $4, $5, $6)
                ON CONFLICT (id) DO NOTHING;
            `,
                [userId, user.name, user.email, hashedPassword, user.date, user.status]
            );
        })
    );

    return insertedUsers;
}

export async function GET() {
    try {
        await client.sql`BEGIN`;
        await seedUsers();
        await client.sql`COMMIT`;

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        await client.sql`ROLLBACK`;
        return Response.json({ error }, { status: 500 });
    }
}
