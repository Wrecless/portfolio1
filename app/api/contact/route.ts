import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const { name, email, message } = await req.json()

    // Here you would typically send an email or store the message in a database
    // For this example, we'll just log the data
    console.log('Contact form submission:', { name, email, message })

    // In a real application, you'd want to add error handling and validation

    return NextResponse.json({ message: 'Message sent successfully' })
}