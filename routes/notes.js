const express = require('express');
const router = express.Router();
const sequelize = require ('../database');

//Dummy Data 
//tabla
// model === propiedades y tipos de datos a nuestros Valores
const notes = [
    {
        id:1,//int
        title: 'Dummy Note',//string varchar
        content: 'This is a dummy note',//text
    },
    {
        id:2,//int
        title: 'Dummy Note',//string varchar
        content: 'This is a dummy note',//text
    },
    {
        id:3,//int
        title: 'Dummy Note',//string varchar
        content: 'This is a dummy note',//text
    },
];

//Handler o callback for list all notes 
router.get('/', async (req, res) => {

const notes = await sequelize.models.Notes.findAll() //Getting all notes in database 

return res.json(notes);
})

// Handler for create a new note 

router.post('/', async (req, res) => {
    const {body} = req;
    const Note = await sequelize.models.Notes.create({
        heading: body.heading,
        content: body.content
    }); //Creating an instance of Notes
Note.save() //Saving Note in database
return res.json({message: 'Create successfully', data: Note})
})

// Handler o callback for update a specific note 

router.put('/:id', async (req, res) => {
const {body, params: {id}} = req; //Getting id from parameters 
const Note = await sequelize.models.Notes.findOne({id})
if (!Note){
    return res.status(404).json({message: 'Note not found'})
}
// The new note with request changes
  const UpdateNote = await Note.update({
      heading: body.heading,
      content: body.content
  })
return res.json({message: 'Update successfully', data: UpdateNote }) 
})

// Handler for delete a specific note 

router.delete('/:id', async (req, res) => {
    const {params: {id}} = req; //Getting id from parameters 
    const Note = await sequelize.models.Notes.findOne({id}) //Finding specific noted based on id 
    if (!Note){
        return res.status(404).json({message: 'Note not found'})
    }
    await Note.destroy(); // Destroying resource 
    return res.json({message: 'Delete successfully'})
})

//Como podrás darte cuenta, en las rutas put y delete tenemos una definición utilizando el caracter :, 
//de esta manera, es como le indicamos a Express que vamos a recibir un parámetro y así 
//poder identificar un elemento/recurso, en este caso, basado en su identificador (:id).

module.exports = router;
