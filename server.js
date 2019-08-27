var express = require('express'); var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

let connections = [];


app.get('/', (req, res) => {
    console.log('Serving file..', __dirname + '\\' + 'index.html')
    res.sendFile(__dirname + '\\index.html');
});

app.get('/literature', (req, res) => {
    console.log('Serving file..', __dirname + '\\' + 'Literature.html')
    res.sendFile(__dirname + '\\Literature.html');
});


const port = process.env.PORT || 3000;


io.sockets.on('connection', (socket) => {
    console.log('Hi new user!');

    socket.on('submit', (data) => {
        console.log('Got a new message', data);
        io.sockets.emit('newMessage', {message: data});
    })

});

server.listen(port, () => {
    console.log(`Listening at port ${port}`);
});



