import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Save to Neon Database
    // Note: This assumes a 'contacts' table exists. 
    // If it doesn't, this will fail. We should provide a setup script.
    try {
      await sql`
        INSERT INTO contacts (name, email, subject, message, created_at)
        VALUES (${name}, ${email}, ${subject}, ${message}, NOW())
      `;
    } catch (dbError) {
      console.error('Database insertion error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save to database' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Message sent successfully'
    }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending your message' },
      { status: 500 }
    );
  }
}
