import { Server } from "socket.io";

const io = new Server(8089, {
    cors: {
        origin: "*"
    }
});


io.on("connection", (socket) => {
    console.log(socket.id + ' connected');

    socket.on('hello', msg=> {
        console.log(socket.id, msg);
        socket.emit('hello', 'hello client');
    })
});

console.log('socket.io server is running!')