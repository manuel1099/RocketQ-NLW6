const express = require('express');
const route = require('./route');
const path = require('path');


const server = express(); //express iniciado e quardado no server

server.set('view engine', 'ejs') //reponsável pela view

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

server.use(route); //express começou a usar a rota

server.listen(3000, ()=> console.log("Rodando")); //listen funcionalidade do express//Arrow function é uma função simplificada


