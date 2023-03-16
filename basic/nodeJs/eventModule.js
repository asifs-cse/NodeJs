const EvenEmetter = require('events')

const emitter = new EvenEmetter();

emitter.on('time over!',()=>{
    console.log('Your time is over!')
})

emitter.emit('time over!')