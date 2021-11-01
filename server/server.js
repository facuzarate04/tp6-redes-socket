const net = require('net');

const server = net.createServer();
const date = Date.now();
const date2 = new Date(date);
var date3 = date2.toDateString();
server.on('connection', (socket)=>{
    socket.on('data', (data)=>{
        socket.write(date3)
        console.log('Message:'+ data)        
    })
    socket.on('close', ()=>{
        console.log('Connection closed')
    })
    socket.on('error', (err)=>{
        console.log(err.message)
    })
})

server.listen(4000), ()=>{
    console.log('Server listening port', server.address().port)
};