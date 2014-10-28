socket = require('socket.io-client')('http://localhost:3000')
prompt = require('prompt')
nick = ""

setnick()

function setnick() {
  prompt.start()
  prompt.get(['nickname'], function(err, result) {
    nick = result.nickname
    socket.send(nick + " has joined the room")
    getmsg()
  })
}

function getmsg() {
  prompt.get(['message'], function(err, result) {
    if (err) {
      console.log('ERROR ERROR ERROR ERROR ERROR ERROR')
      return
    }
    socket.send(nick + ": " + result.message)
    getmsg()
  })
}
