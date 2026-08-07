# Deployment Guide: Deploying IEEE SMEC Website to Vercel

This guide provides detailed, step-by-step instructions on how to deploy the IEEE SMEC Student Branch website to **Vercel** for free.

---

## 🛠️ Prerequisites

Before you start, make sure you have:
1. A **GitHub**, **GitLab**, or **Bitbucket** account.
2. The project repository pushed to a remote repository (e.g., GitHub).
3. A **Vercel** account (you can sign up for free using your GitHub account at [vercel.com](https://vercel.com/)).

---

## 🚀 Option 1: Deployment via Vercel Web Dashboard (Recommended)

This is the easiest method and enables **automatic deployments** whenever you push changes to your Git repository.

### Step 1: Connect your Git Repository
1. Log in to the [Vercel Dashboard](https://vercel.com/dashboard).
2. Click the **"Add New..."** button in the top right corner and select **"Project"**.
3. Under the **"Import Git Repository"** section, select your Git provider and search for your `ieee-web` repository.
4. Click **"Import"** next to the repository.

### Step 2: Configure Project Settings
Vercel will automatically detect that the project is built with **Vite** and configure the settings for you.
Double-check that the settings match the following:
- **Framework Preset**: `Vite`
- **Root Directory**: `./` (or the folder containing `package.json` if it's in a subdirectory like `ieee-smec`)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Step 3: Add Environment Variables (Optional)
If you are using EmailJS or external API keys, add them under the **Environment Variables** section:
- `VITE_EMAILJS_SERVICE_ID`: *Your service ID*
- `VITE_EMAILJS_TEMPLATE_ID`: *Your template ID*
- `VITE_EMAILJS_PUBLIC_KEY`: *Your public key*

### Step 4: Deploy
1. Click the **"Deploy"** button.
2. Vercel will build the project. This process typically takes less than 60 seconds.
3. Once finished, you will receive a production URL (e.g., `ieee-smec-website.vercel.app`) and a celebratory screenshot!

---

## 💻 Option 2: Deployment via Vercel CLI

If you prefer to deploy directly from your local terminal using the command line.

### Step 1: Install Vercel CLI
Open your terminal and install the CLI globally:
```bash
npm install -g vercel
```

### Step 2: Log In to Vercel
Run the login command and follow the instructions in your browser:
```bash
vercel login
```

### Step 3: Deploy the Project
Navigate to your project root folder and execute the deployment command:
```bash
vercel
```
You will be asked a few setup questions:
- *Set up and deploy?* **Yes**
- *Which scope?* **Select your personal scope**
- *Link to existing project?* **No**
- *What's your project's name?* **ieee-smec-website**
- *In which directory is your code located?* **./**
- *Want to modify settings?* **No** (Vercel will auto-detect Vite settings)

This will create a **Preview Deployment**. Once you verify the preview looks correct, deploy to production:
```bash
vercel --prod
```

---

## 🧩 Crucial Step: Configuring Single-Page Routing (SPA 404 Fix)

Since this is a React Single Page Application (SPA) using client-side routing (`react-router-dom`), reload attempts on routes other than `/` (like `/about/team` or `/explore`) will return a **404 error** on Vercel by default.

To fix this, create a `vercel.json` configuration file in the project root directory.

### Create `vercel.json`
Create a file named `vercel.json` in the root of the project with the following content:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This tells Vercel's edge router to redirect all incoming URL requests to `index.html` so that React Router can handle them internally.

---

## 🔄 Post-Deployment
Whenever you push new commits to your connected GitHub branch (e.g., `main` or `master`), Vercel will automatically build and deploy the update. You don't need to repeat these steps!
