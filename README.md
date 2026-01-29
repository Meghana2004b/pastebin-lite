A simple Pastebin-like web application that allows users to create, store, and share text content via a unique URL.
This project was built as part of the Aganitha Full Stack Developer take-home exercise (2026).

Features
Create a paste with text content
Generate a unique paste ID
Access paste content using a shareable URL
Backend API returns JSON responses
Clean and minimal UI
Responsive design
Styled using custom CSS and Tailwind

🛠️ Technology Stack
Next.js (App Router)
Node.js
TypeScript
Tailwind CSS
REST API (Next.js API Routes)
The application uses Next.js full-stack capabilities (frontend + backend in one framework).

📁 Project Structure
Copy code

pastebin-lite/
│
├── app/
│   ├── api/
│   │   └── paste/
│   │       └── route.ts      # API routes (POST / GET)
│   ├── layout.tsx
│   ├── page.tsx              # Main UI
│   └── globals.css           # Global styles
│
├── public/
│   └── code-background.jpg   # Background image
│
├── prisma/
│   └── schema.prisma         # (Optional / future use)
│
├── package.json
├── next.config.ts
├── README.md
└── .env

🔗 API Endpoints
➤ Create Paste
POST /api/paste
Request body:
Copy code
Json
{
  "content": "Hello World"
}
Response:
Copy code
Json
{
  "id": "test123",
  "message": "Paste created"
}
➤ Get Paste
GET /api/paste?id=test123
Response:
Copy code
Json
{
  "content": "Hello World"
}

🎨 UI & Styling
Increased font size for readability
Attractive background image
Card-style container with shadow
Clean button hover effects
Dark mode support using prefers-color-scheme

▶️ How to Run Locally
Copy code
Bash
npm install
npm run dev
Open:
Copy code
http://localhost:3000

🌍 Deployment
The application is deployed using Vercel (recommended by Aganitha).
Public URL provided in submission form.

🧠 Design Decisions
Used Next.js App Router to combine frontend and backend
API routes return strict JSON (for automated testing)
Simple ID-based paste retrieval
Clean and understandable structure for interview explanation

📹 Demo Video
A walkthrough video demonstrating:
Project structure
API functionality
UI behavior
Deployment
Video link provided in submission.

🤖 AI Assistance Disclosure
AI (ChatGPT) was used as an assistant for:
Debugging
Architecture clarification
Improving UI/UX
Writing documentation
