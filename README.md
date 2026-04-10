🚀 StudyMate AI
Your Smart AI-Powered Learning Companion

StudyMate AI is a full-stack AI-powered learning platform that helps students study smarter by generating notes, summaries, and solving doubts in real-time. It combines modern web technologies with AI to deliver a seamless and efficient learning experience.

✨ Features
🤖 AI Study Assistant – Get instant answers to your doubts
📄 Smart Notes Generation – Convert content into concise notes
🧠 Summarization – Quickly understand long topics
🔐 Authentication – Secure user login using JWT
⚡ Scalable Backend – Optimized APIs for performance
🌐 Responsive UI – Clean and modern interface
🛠️ Tech Stack

Frontend

React.js
Tailwind CSS

Backend

Node.js
Express.js

Database

MongoDB (Atlas)

Authentication

JSON Web Tokens (JWT)

AI Integration

📁 Project Structure
studymate-ai/
│── client/          # Frontend (React)
│── server/          # Backend (Node + Express)
│── controllers/     # Business logic
│── routes/          # API routes
│── models/          # Database schemas
│── middleware/      # Auth & request handling
│── config/          # DB & environment config

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/studymate-ai.git
cd studymate-ai
2️⃣ Setup Backend
cd server
npm install

Create a .env file in /server and add:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key

Run backend:

npm run dev
3️⃣ Setup Frontend
cd client
npm install
npm run dev
🔐 API Overview
Method	Endpoint	Description
POST	/auth/register	Register user
POST	/auth/login	Login user
POST	/ai/generate	Generate notes/answers
🚀 Future Improvements
📚 Personalized learning paths
📝 Quiz & test generation
📊 Progress tracking dashboard
💬 Chat-based AI tutor
📱 Mobile responsiveness improvements
🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

📄 License

This project is licensed under the MIT License.

⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!

Gemini API
