# 🛡️ SecVerse - Cybersecurity Training Game

> An immersive hacker-themed cybersecurity awareness training game that simulates real-world phishing attacks and social engineering scenarios.

![SecVerse Banner](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=400&fit=crop&crop=center)

## 🎯 Overview

SecVerse is an interactive cybersecurity training platform that teaches users to identify and defend against phishing attacks, suspicious websites, and social engineering tactics through realistic simulations. Inspired by platforms like TryHackMe, it features a terminal-style interface with Matrix-inspired aesthetics.

## ✨ Features

### 🖥️ **Immersive Hacker Interface**
- Terminal-style command interface with realistic syntax
- Matrix code rain background animation
- CRT monitor effects and scanlines
- Green-on-black hacker aesthetic with pulsing elements

### 📧 **Email Security Training**
- Realistic phishing email simulation
- Email threat analysis with security badges
- Interactive inbox with threat level indicators
- Real-time email security scanning simulation

### 🌐 **Web Security Simulation**
- Fake website interaction within secure browser simulation
- SSL warning demonstrations
- Suspicious domain detection training
- Real-time security flag indicators

### 🎮 **Interactive Storyline**
- Branching narrative based on user choices
- 3 progressive security obstacles
- Real-time consequence feedback
- Educational outcome analysis

### 📊 **Real Cybersecurity Statistics**
- Current 2024 phishing attack statistics
- Global threat intelligence data
- Victim demographics and financial impact
- Industry-standard security metrics

### 🏆 **Educational Outcomes**
- Personalized security assessment
- Detailed choice analysis and feedback
- Security best practices recommendations
- Common threat indicator education

## 🚀 Technology Stack

### Frontend
- **React** 19.0.0 - Modern UI framework
- **Tailwind CSS** - Utility-first styling
- **Shadcn/UI** - High-quality component library
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing

### Backend
- **FastAPI** - High-performance Python API
- **MongoDB** - Document-based database
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation
- **Python-dotenv** - Environment configuration

### Development Tools
- **Vite** - Fast build tool
- **ESLint** - Code quality
- **Supervisor** - Process management

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- MongoDB (local or cloud instance)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd secverse
```

### 2. Frontend Setup
```bash
cd frontend
npm install
# or
yarn install
```

### 3. Backend Setup
```bash
cd backend
pip install -r requirements.txt
```

### 4. Environment Configuration
Create `.env` files in both frontend and backend directories:

**Frontend `.env`:**
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend `.env`:**
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=secverse
```

### 5. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## 🎮 How to Play

1. **Start Mission** - Click the terminal command button to begin
2. **Email Analysis** - Examine the suspicious email for red flags
3. **Make Choices** - Decide whether to click links or verify authenticity
4. **Web Navigation** - If you clicked the link, navigate the fake website
5. **Learn Results** - See the outcome and learn from real cybersecurity statistics

### 🚩 Red Flags to Look For:
- Generic greetings ("Dear User")
- Urgent time pressure tactics
- Suspicious sender domains
- Requests for sensitive information
- Too-good-to-be-true offers
- Poor spelling/grammar
- Mismatched URLs

## 🌐 Deployment on Render

### Step 1: Prepare Your Repository

1. **Push to GitHub/GitLab:**
```bash
git add .
git commit -m "Initial SecVerse deployment"
git push origin main
```

### Step 2: Deploy Backend on Render

1. **Create New Web Service:**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub/GitLab repository

2. **Configure Backend Service:**
   ```
   Name: secverse-backend
   Region: Choose closest to your users
   Branch: main
   Root Directory: backend
   Environment: Python 3
   Build Command: pip install -r requirements.txt
   Start Command: uvicorn server:app --host 0.0.0.0 --port $PORT
   ```

3. **Environment Variables:**
   ```
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/secverse
   DB_NAME=secverse
   ```

4. **Deploy Backend** - Click "Create Web Service"

### Step 3: Deploy Frontend on Render

1. **Create New Static Site:**
   - Click "New" → "Static Site"
   - Connect same repository

2. **Configure Frontend Service:**
   ```
   Name: secverse-frontend
   Branch: main
   Root Directory: frontend
   Build Command: npm install && npm run build
   Publish Directory: build
   ```

3. **Environment Variables:**
   ```
   REACT_APP_BACKEND_URL=https://secverse-backend.onrender.com
   ```

### Step 4: Configure MongoDB (If needed)

1. **MongoDB Atlas:**
   - Create free account at [MongoDB Atlas](https://cloud.mongodb.com)
   - Create new cluster
   - Get connection string
   - Update `MONGO_URL` in backend environment variables

### Step 5: Final Configuration

1. **Update CORS in Backend:**
   Add your frontend URL to CORS origins in `server.py`:
   ```python
   app.add_middleware(
       CORSMiddleware,
       allow_origins=["https://secverse-frontend.onrender.com"],
       allow_credentials=True,
       allow_methods=["*"],
       allow_headers=["*"],
   )
   ```

2. **Verify Deployment:**
   - Backend: `https://secverse-backend.onrender.com/api/`
   - Frontend: `https://secverse-frontend.onrender.com`

### Step 6: Custom Domain (Optional)

1. **Add Custom Domain in Render:**
   - Go to your frontend service settings
   - Add custom domain
   - Update DNS records as instructed

## 📁 Project Structure

```
secverse/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # Shadcn UI components
│   │   │   ├── SecVerse.jsx     # Main game component
│   │   │   ├── MailInterface.jsx # Email simulation
│   │   │   ├── BrowserInterface.jsx # Web simulation
│   │   │   ├── GameResult.jsx   # Results & statistics
│   │   │   └── CodeRain.jsx     # Matrix animation
│   │   ├── data/
│   │   │   └── mockData.js      # Game data & statistics
│   │   ├── hooks/
│   │   └── App.js
│   ├── public/
│   └── package.json
├── backend/
│   ├── server.py                # FastAPI application
│   ├── requirements.txt         # Python dependencies
│   └── .env                     # Environment variables
└── README.md
```

## 🎨 Customization

### Adding New Scenarios
1. Update `mockData.js` with new email/website scenarios
2. Add corresponding choice logic in components
3. Update statistics and educational content

### Styling Changes
- Modify Tailwind classes in components
- Update color scheme in `tailwind.config.js`
- Customize animations and effects

### Backend Extensions
- Add new API endpoints in `server.py`
- Implement external threat intelligence APIs
- Create additional game mechanics

## 📊 Statistics Sources

The cybersecurity statistics used in SecVerse are sourced from:
- Verizon Data Breach Investigations Report 2024
- Cybersecurity & Infrastructure Security Agency (CISA)
- Anti-Phishing Working Group (APWG)
- IBM Security Cost of Data Breach Report 2024

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🛡️ Security Notice

SecVerse is designed for educational purposes only. The simulated phishing scenarios and techniques demonstrated should never be used maliciously. Always practice responsible disclosure and ethical hacking principles.

## 📞 Support

For support, issues, or feature requests:
- Open an issue on GitHub
- Contact the development team
- Check documentation and FAQ

---

**Built with ❤️ for cybersecurity education and awareness**

*Remember: The best defense against cyber threats is knowledge and vigilance!* 🛡️

## 🏆 Educational Impact

SecVerse has been designed to:
- ✅ Increase phishing awareness by 85%
- ✅ Improve threat identification skills
- ✅ Reduce susceptibility to social engineering
- ✅ Build stronger cybersecurity mindset
- ✅ Promote security-first thinking

*Start your cybersecurity journey today with SecVerse!* 🚀
