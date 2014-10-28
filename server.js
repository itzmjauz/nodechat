io = require('socket.io').listen(3000)

io.on('connection', function(socket) {
  console.log('connection established')
  socket.on('message', function(msg) {
    console.log(msg)
  })
})
