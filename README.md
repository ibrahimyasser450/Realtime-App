<h1 style="text-decoration: none; text-align: center;">Realtime Application</h1>


## 📋 Table of Contents
1. 📌 [Introduction](#introduction)
2. 💻 [Tech Stack](#tech-stack)
3. 🔋  [Features](#features)
4. 🚀 [Quick Start](#quick-start)<br><br>

## 📌 Introduction
Built with Next.js to handle the user interface, Liveblocks for real-time features and styled with TailwindCSS, LiveDocs is a clone of Goole Docs.<br><br>

## 💻 Tech Stack
- Next.js
- TypeScript
- Liveblocks
- Lexical Editor
- ShadCN
- Tailwind CSS<br><br>

## 🔋 Features
⚙  **Authentication:** User authentication using GitHub through NextAuth, ensuring secure sign-in/out and session management. 

📝 **Collaborative Text Editor:** Multiple users can edit the same document simultaneously with real-time updates.  

📕 **Documents Management:**  
- **Create Documents:** Users can create new documents, which are automatically saved and listed.
- **Delete Documents:** Users can delete documents they own.
- **Share Documents:** Users can share documents via email or link with view/edit permissions.
- **List Documents:** Display all documents owned or shared with the user, with search and sorting functionalities.

📩 **Comments:** Users can add inline and general comments, with threading for discussions.  

📍  **Active Collaborators on Text Editor:** Show active collaborators with real-time presence indicators.  

🔔 **Notifications:** Notify users of document shares, new comments, and collaborator activities.  

📱 **Responsive:** The application is responsive across all devices.<br><br>

## Quick Start
Make sure you have the following installed on your machine:<br>
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)(Node Package Manager)<br>


**Installation**

Install the project dependencies using npm:<br>

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named .env in the root of your project and add the following content:<br>

```bash
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```
<br>
Replace the placeholder values with your actual Clerk & LiveBlocks credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/) and [LiveBlocks](https://liveblocks.io/) website.  

**Running the Project**  

```bash
npm run dev
```
<br>
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
