const express = require('express');
//Creating an Express application 
const app = express ();

const APP_PORT = 3002;

//Configuring parsers of request content-type body parse
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Getting routes destinations 
app.use('/api', require('./routes'))

app.listen(APP_PORT, () => {
    console.log(`Express on port ${APP_PORT}`);
    })


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
