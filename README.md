# Mohammed Aaqil Rayyan - AI Engineer Portfolio

This repository contains the source code for my personal portfolio, a multi-page website designed to showcase my journey and work as an aspiring AI Engineer. It's built with a modern tech stack and features a clean, cinematic design.

The live version can be viewed at [mohammed-aaqil-rayyan.web.app](https://mohammed-aaqil-rayyan.web.app).

## ✨ Features

*   **Responsive Design:** Adapts seamlessly to any screen size, from mobile devices to desktops.
*   **AI Chatbot:** An integrated chatbot powered by Google's Gemini that can answer questions about my work and experience.
*   **Modern UI/UX:** A sleek, futuristic interface with smooth page transitions, a custom cursor, and light & dark modes.
*   **Dynamic Content:** The site is data-driven, making it easy to update my projects, skills, and experience.

## 🛠️ Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [ShadCN UI](https://ui.shadcn.com/) components
*   **AI:** [Genkit (Google's Generative AI Toolkit)](https://firebase.google.com/docs/genkit)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

If you'd like to run this project on your local machine, you can follow these steps.

1.  **Clone the Repository:**
    First, clone the repository to your local machine using Git.

    ```bash
    git clone https://github.com/Rayyan1704/Portfolio.git
    cd Portfolio
    ```

2.  **Install Dependencies:**
    This project uses `npm` for package management. Run the following command to install the necessary dependencies.

    ```bash
    npm install
    ```

3.  **Set Up Environment Variables:**
    The project uses an AI chatbot that requires a Google AI API key. Create a `.env.local` file in the root of your project and add your key.

    ```
    GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run the Development Server:**
    You can now start the local development server.

    ```bash
    npm run dev
    ```

    Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

## 🌐 Deployment

This project is set up for easy deployment on platforms like [Vercel](https://vercel.com/) or [Firebase Hosting](https://firebase.google.com/docs/hosting). For Vercel, you can connect your GitHub repository, and it will handle the build and deployment process automatically. Just remember to add the `GEMINI_API_KEY` as an environment variable in the Vercel project settings.
