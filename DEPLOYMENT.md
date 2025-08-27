# 🚀 SecVerse Deployment Guide for Render

This guide provides detailed step-by-step instructions to deploy SecVerse on Render.

## 📋 Prerequisites

Before starting deployment, ensure you have:
- ✅ GitHub/GitLab account with your SecVerse code
- ✅ Render account (free tier available)
- ✅ MongoDB Atlas account (optional, for database)

## 🗂️ Pre-Deployment Checklist

### 1. Verify File Structure
Ensure your repository has this structure:
```
secverse/
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env (local only)
├── frontend/
│   ├── src/
│   ├── package.json
│   └── .env (local only)
├── render.yaml (optional)
└── README.md
```

### 2. Update CORS Settings
In `backend/server.py`, update CORS to allow your domain:
```python
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],  # Update this after deployment
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 🎯 Method 1: Manual Deployment (Recommended)

### Step 1: Setup MongoDB (Optional)

If you need a database:

1. **Go to MongoDB Atlas:**
   - Visit https://cloud.mongodb.com
   - Create free account
   - Create new cluster (free M0 tier)

2. **Get Connection String:**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<username>` and `<password>` with your credentials

### Step 2: Deploy Backend

1. **Login to Render:**
   - Go to https://dashboard.render.com
   - Connect your GitHub/GitLab account

2. **Create Backend Service:**
   - Click "New +" → "Web Service"
   - Connect your repository
   - Configure settings:

   ```
   Name: secverse-backend
   Region: Oregon (US West) or closest to users
   Branch: main
   Root Directory: backend
   Environment: Python 3
   Build Command: pip install -r requirements.txt
   Start Command: uvicorn server:app --host 0.0.0.0 --port $PORT
   ```

3. **Add Environment Variables:**
   ```
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/secverse
   DB_NAME=secverse
   ```
   *(Skip if not using database)*

4. **Deploy:**
   - Click "Create Web Service"
   - Wait 5-10 minutes for deployment
   - Note your backend URL: `https://secverse-backend.onrender.com`

### Step 3: Deploy Frontend

1. **Create Frontend Service:**
   - Click "New +" → "Static Site"
   - Connect same repository
   - Configure settings:

   ```
   Name: secverse-frontend
   Branch: main
   Root Directory: frontend
   Build Command: npm install && npm run build
   Publish Directory: build
   ```

2. **Add Environment Variables:**
   ```
   REACT_APP_BACKEND_URL=https://secverse-backend.onrender.com
   ```

3. **Deploy:**
   - Click "Create Static Site"
   - Wait 5-10 minutes for deployment
   - Your app URL: `https://secverse-frontend.onrender.com`

### Step 4: Final Configuration

1. **Update Backend CORS:**
   - Edit `backend/server.py`
   - Update CORS origins:
   ```python
   allow_origins=["https://secverse-frontend.onrender.com"]
   ```

2. **Redeploy Backend:**
   - Push changes to GitHub
   - Backend will auto-redeploy

## 🎯 Method 2: Using render.yaml (Advanced)

1. **Use Provided Configuration:**
   - The `render.yaml` file is already in your project
   - Update MongoDB URL in Render dashboard

2. **Deploy from Blueprint:**
   - In Render dashboard, click "New +" → "Blueprint"
   - Connect repository
   - Render will read `render.yaml` and create both services

## 🔧 Environment Variables Reference

### Backend Environment Variables:
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/secverse
DB_NAME=secverse
```

### Frontend Environment Variables:
```env
REACT_APP_BACKEND_URL=https://your-backend-url.onrender.com
```

## 🧪 Testing Your Deployment

### 1. Backend Health Check:
```bash
curl https://secverse-backend.onrender.com/api/
# Should return: {"message": "Hello World"}
```

### 2. Frontend Access:
- Visit: `https://secverse-frontend.onrender.com`
- Should load SecVerse landing page
- Test game functionality

### 3. Full Integration Test:
- Start the game
- Complete a scenario
- Verify statistics display correctly

## 🛠️ Troubleshooting

### Common Issues:

#### ❌ Backend Build Fails
**Solution:**
```bash
# Check requirements.txt has correct versions
# Ensure Python version compatibility
```

#### ❌ Frontend Build Fails
**Solution:**
```bash
# Verify package.json scripts
# Check node version compatibility
```

#### ❌ CORS Errors
**Solution:**
```python
# Update CORS in server.py
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://your-frontend-url.onrender.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

#### ❌ Environment Variable Issues
**Solution:**
1. Check spelling of variable names
2. Ensure no trailing spaces
3. Restart services after changes

### Service Logs:
- In Render dashboard, click on service
- Go to "Logs" tab to see deployment/runtime logs

## 🌟 Production Optimizations

### 1. Custom Domain (Optional):
```bash
# In frontend service settings:
# Add custom domain
# Update DNS records as shown
```

### 2. Performance:
- Enable Brotli compression (automatic on Render)
- Use CDN for static assets (automatic on Render)
- Optimize images and assets

### 3. Security:
```python
# Add security headers in backend
from fastapi.middleware.trustedhost import TrustedHostMiddleware

app.add_middleware(
    TrustedHostMiddleware, 
    allowed_hosts=["secverse-frontend.onrender.com"]
)
```

## 💡 Tips for Success

1. **Free Tier Limitations:**
   - Services sleep after 15 minutes of inactivity
   - First request after sleep may be slow (~30 seconds)
   - 750 hours/month limit (sufficient for most projects)

2. **Deployment Best Practices:**
   - Always test locally before deploying
   - Use environment variables for all configuration
   - Monitor logs during initial deployment

3. **Updates:**
   - Push to GitHub/GitLab to trigger auto-deployment
   - Monitor deployment status in Render dashboard

## 🎉 Success!

Your SecVerse cybersecurity training game is now live! 

**Share your deployment:**
- Frontend: `https://secverse-frontend.onrender.com`
- Backend API: `https://secverse-backend.onrender.com/api/`

**Next Steps:**
- Test all game functionality
- Share with users for feedback
- Monitor performance and logs
- Consider upgrading to paid tier for production use

---

🛡️ **Remember:** SecVerse is now protecting users from cyber threats through education!

*Questions? Check the main README.md or create an issue on GitHub.*