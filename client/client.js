
const net = require('net');
const readline = require('readline-sync');
const config = {
    port:4000,
    host:'127.0.0.1',
}

const client = net.createConnection(config);

client.on('connect', ()=>{
    console.log('Connection established')
    client.write('Hello server!')
});
client.on('error', (err)=>{
    console.log(err.message)
})
client.on('data', (data)=>{
    console.log('Message from Server:' +data)
    sendMessage()
})

function sendMessage(){
    var line = readline.question('Type any message')
    if(line == '0'){
        client.end()
    }else{
        client.write(line)
    }
}


