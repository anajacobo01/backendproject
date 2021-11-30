const { Sequelize } = require ('sequelize');

//Exporting models 

const NoteModel = require('./models/Note');

//const UserModel = require ('./models/User'); == Tablas 
//const ProductsModel = require ('./models/Products'); == Tablas

//Database connection 
const sequelize = new Sequelize ('api_notes', 'root', 'root',  {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,


}) 

//Adding models 
const models = [NoteModel]
//const models = [NoteModel, UserModel, ProductsModel]

//Registering models to Sequelize 

for (let model of models){
    model(sequelize)
}

module.exports = sequelize;