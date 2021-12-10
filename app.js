const express = require('express');
//Creating an Express application 
const app = express ();
const helmet = require('helmet');
const cors = require('cors');

const APP_PORT = 3002;

//Configuring parsers of request content-type body parse
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Reto que hace cada una de ellas 
app.use(helmet());//Basic configuration 
app.use(cors());//Basic configuration for enable CORS

//Getting routes destinations 
app.use('/api', require('./routes'))

app.listen(APP_PORT, () => {
    console.log(`Express on port ${APP_PORT}`);
    })
// localhost:3002/api/auth/signup

//Dummy data 

// const notes = [
//     {
//     id: 1, 
//     title: 'Dummy Note',
//     content: 'This is a dummy note',
//     }
// ]

//APP CRUD

//Creating a first route

// app.get('/', (req, res) => {
//     return res.send('<h1> Welcome to Express Hola a todos saludos </h1>');
// })

// // Creating a second route 

// app.get('/api/notes', (req, res) => {
//     return res.json(notes)
// })

//Mounting express application on specific port 
//investigar lograr la conexion con base mariadb y lograr pruebas
//las pruebas con postman 
//entrega de su proyecto con la estructura
