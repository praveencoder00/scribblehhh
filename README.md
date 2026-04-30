# 🎨 Scribblehhh — Multiplayer Drawing & Guessing Game

A real-time multiplayer drawing and guessing game inspired by **Skribbl.io**, built with a modern tech stack and a polished UI.

This project is being developed for **Flavourtown** by Hack Club.

---

## 🚀 Overview

Scribblehhh is a fun social game where:

* One player draws a word
* Other players try to guess it in real-time
* Points are awarded based on speed and accuracy

The project currently supports:

* Creating a game room
* Joining a game room
* Real-time socket connection
* Saving game data to MongoDB
* Redirecting to the game screen (currently under construction)

---

## ✨ Features (Implemented)

### 🧑‍🤝‍🧑 Multiplayer Room System

* Create a room with custom settings
* Join existing rooms
* Player list managed in real-time

### 🔌 Real-time Communication

* Built using Socket.IO
* Instant updates between players

### 🗄️ Database Integration

* MongoDB used for storing:

  * Rooms
  * Players
  * Game state

### 🎨 Rich UI

* Clean and modern Flutter UI
* Smooth navigation and transitions
* Designed for a game-like experience

### 🔁 Navigation Flow

* Home → Create/Join Room → Lobby/Game Screen (Under Construction)

---

## 🛠️ Tech Stack

### Frontend

* Flutter
* Dart
* Socket.IO Client

### Backend

* Node.js
* Express.js
* Socket.IO

### Database

* MongoDB (via Mongoose)

---

## 📦 Project Structure (Simplified)

```
client/
  ├── screens/
  ├── widgets/
  ├── models/

server/
  ├── models/
  ├── api/
  ├── index.js
```

---

## ⚙️ Current Status

🟡 **In Progress**

✔ Room creation & joining works
✔ Data stored in MongoDB
✔ Socket connection established
✔ UI navigation working

🚧 **Under Development**

* Drawing canvas sync
* Word guessing logic
* Score system
* Game rounds & turns
* Leaderboard

Currently, after joining/creating a room, users are redirected to a screen indicating that the game is under construction.

---

## 🧪 How to Run

### Backend

```bash
cd server
npm install
npm run dev
```

> If `nodemon` doesn't work, use:

```bash
npx nodemon index.js
```

---

### Frontend

```bash
cd client
flutter pub get
flutter run
```

---

## 📌 Future Plans

* Real-time drawing synchronization
* Turn-based gameplay
* Timer system
* Chat & guessing validation
* Leaderboard & scoring
* Mobile optimization

---

## 🤝 Contribution

This project is part of a hackathon-style build. Contributions, ideas, and feedback are welcome!

---

## 📄 License

This project is for educational and event purposes under Hack Club.

---

## 👨‍💻 Author

Developed by **Praveen Sankar**

---

## 💡 Inspiration

Inspired by the simplicity and fun of **Skribbl.io**, reimagined with a custom UI and modern mobile-first approach.

---

## ⚡ Note

This project is actively being developed — expect bugs, incomplete features, and rapid updates.
