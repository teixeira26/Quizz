const express = require('express');
const routes = require('./routes/index')
const server = express();
const {sequelize} = require('./db.js');


server.use(express.json())

server.use('/', routes)


server.listen(3001, ()=>{
    console.log('servidor funcionando en puerto 3001')
    sequelize.sync({force:false})
})

