// Importar o express
var express = require('express');

// App
var app = express();

// Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

app.listen(8080);
