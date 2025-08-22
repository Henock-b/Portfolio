import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    // Here you would typically handle the contact form submission,
    // e.g., save it to a database or send an email.
    console.log('Contact form submission:', { name, email, message });
    
    res.status(200).json({ status: 'success', message: 'Contact form submitted successfully.' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

  