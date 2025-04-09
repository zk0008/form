## Form website (with MongoDB + Express + Next.js)

This project is a simple full-stack form submission app that allows users to input their **name** and **email**, which are then stored securely in a **MongoDB Atlas** database using an **Express.js backend**. The frontend is built with **Next.js**.

## Tech Stack

- **Frontend**: Next.js (React)
- **Backend Server**: Express.js (Node.js)
- **Database**: MongoDB Atlas
- **ORM**: Mongoose
- **Dev Tools**: Postman, Concurrently, dotenv

---

## Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

---

run frontend and backend concurrently: cd frontend

```bash
npm run dev
# or
npm install concurrently --save-dev
```

---

Open [http://localhost:3000](http://localhost:3000) with your browser to see the webpage.

---

## backend:

```bash
npm install express mongoose jsonwebtoken bcryptjs dotenv express-validator cors mongodb
```

Server running on (http://localhost:3001)
