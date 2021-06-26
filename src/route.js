const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController')
const route = express.Router()//route guarda as rotas

//SENHA
route.get('/', (req, res)=> res.render("index", {page: 'enter-room'})) //req=requisição e res=response, resposta
route.get('/create-pass', (req, res)=>res.render("index", {page: 'create-pass'}))

//ROOM
route.post('/create-room', RoomController.create);
route.get('/room/:room', RoomController.open);
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)


module.exports = route; //pre permitir o ficheiro ser exportado

//QUESTIONS