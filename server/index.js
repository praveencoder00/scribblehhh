const express = require("express");
var http = require("http");
const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
const mongoose = require("mongoose");
var io = require("socket.io")(server);
const Room = require("./room");
const getWord = require("./getWord");




const DB = "mongodb://praveencoder:CaUbBsAxmjfvEuqp@ac-titcmlo-shard-00-00.xmwmsgv.mongodb.net:27017,ac-titcmlo-shard-00-01.xmwmsgv.mongodb.net:27017,ac-titcmlo-shard-00-02.xmwmsgv.mongodb.net:27017/scribblehhh?ssl=true&replicaSet=atlas-owcynw-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(DB, {
    serverSelectionTimeoutMS: 5000
}).then(() => {
    console.log('Connection Successful!! ✅');
}).catch((e) => {
    console.log(e);
})

io.on("connection", (socket) => {
    console.log("New User Connected!! ✅");
    socket.on("create_room", async(data) => {
       try {
        const { name, roomName, maxRounds, noOfPlayers } = data;
        console.log(name,roomName,noOfPlayers,maxRounds);
        const existingRoom = await Room.findOne({ roomName: roomName });
        if (existingRoom) {
            socket.emit("room_creation_failed", "Room name already exists. Please choose a different name.");
            return;
        }
        let newRoom = new Room();
        const word = getWord();
        newRoom.name = name;
        newRoom.roomName = roomName;
        newRoom.max_occupancy = noOfPlayers;
        newRoom.max_rounds = maxRounds;
        newRoom.word = word;
        let player = {
            name: name,
            socketID: socket.id,
            isPartyleader: true
        }
        newRoom.players.push(player);
        newRoom = await newRoom.save();
        socket.join(roomName);
        socket.emit("room_created", newRoom);

       } catch (e) {
        console.log(e);
       }
    });

    socket.on("join_room", async(data) => {
        try {
            const { name, roomName } = data;
            const room = await Room.findOne({ roomName: roomName });
            if (!room) {
                socket.emit("room_join_failed", "Room not found. Please check the room name and try again.");
                return;
            }
            if (room.game_state != "waiting") {
                socket.emit("room_join_failed", "Room is full. Please try joining a different room.");
                return;
            }
            if (room.players.length == room.max_occupancy) {
               room.game_state = "full";
            }
            let player = {
                name: name,
                socketID: socket.id,    
                isPartyleader: false
            }
            room.turn = room.players[room.turnIndex];
            room.players.push(player);
            await room.save();
            socket.join(roomName);
            socket.emit("room_joined", room);
            io.to(roomName).emit("update_players", room.players);
        } catch (e) {
            console.log(e);
        }   
});});

server.listen(port,'0.0.0.0',()=>{
    console.log('Server Started at port'+port);
})
