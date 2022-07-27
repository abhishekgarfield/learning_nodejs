var events=require('events');
var eventemitter= new events.EventEmitter();

var eventhandler = function()
{
    console.log('i hear a scream');
}

eventemitter.on('scream', eventhandler);
eventemitter.emit('scream');

