const EventEmitter = require('events');
const emitter = new EventEmitter();
const callback1 = (args) => {
  console.log('first callback - ', args);
};

emitter.on('yshush', callback1);

emitter.on('yshush', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('yshush', { message: 1 });
emitter.emit('yshush', { message: 2 });
emitter.removeAllListeners();
emitter.emit('yshush', { message: 3 });
