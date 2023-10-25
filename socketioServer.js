import { Server } from "socket.io";

const io = new Server(8089, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    socket.send('hello vue-x-socketio');
});

console.log('socket.io server is running!')