const Server = use('Server')
const io = use('socket.io')(Server.getInstance())

io.on('connection', function (socket) {
  console.log(socket.id);

  socket.on("join", (room) =>{ socket.join(room)});

  socket.on("message", (room,message) =>{ socket.on(room).broadcast(message)});

})