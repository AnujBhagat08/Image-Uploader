# Image Uploader

A simple Image Uploader built using Node.js, Express, and EJS. This project focuses on handling image uploads, server-side rendering, and basic client-side UI state management. It demonstrates how backend logic and frontend behavior work together in a small, practical application.

---

## Description

This Image Uploader project was created to improve my understanding of full-stack fundamentals. Instead of only focusing on uploading images, the project helped me learn how data flows between the server and the client using EJS templates. It also highlights how client-side JavaScript can be used to control UI behavior without affecting backend data.

Users can upload an image through a simple interface, and the uploaded image is displayed immediately on the screen. To maintain clean UI behavior, the image preview is cleared automatically when the page is refreshed, while the actual file remains safely stored on the server.

---

## Features

- Upload image using a simple form  
- Display uploaded image instantly on the UI  
- Clear image preview on page refresh  
- Keep uploaded files safely stored on the server  
- Minimal and clean user interface  

---

## Tech Stack

- Node.js  
- Express.js  
- EJS (Embedded JavaScript Templates)  
- HTML, CSS, JavaScript  

---

## How It Works

1. User selects an image file  
2. Clicks the upload button  
3. Server processes and stores the image  
4. Uploaded image is rendered on the UI  
5. On page refresh, only the UI preview is cleared  

---

## Run Locally

  ```bash
1. Install Dependencies
  npm install

2. Start the server:
  npm start

3. Open your browser and visit:
  http://localhost:3000


