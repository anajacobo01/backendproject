const sequelize = require("../database");

const {DataTypes } = requiere('sequelize');

const NoteModel = (Sequelize) => sequelize.define('Notes', {
id: {type: DataTypes.INTEGER, primaryKey: true, autoInrement: true},
heading: DataTypes.STRING,
content: DataTypes.TEXT

})


module.exports = NoteModel;



//Dummy Data 
//tabla
// model === propiedades y tipos de datos a nuestros Valores
//const notes = [
    // {
    //     id:1,//int
    //     title: 'Dummy Note',//string varchar
    //     content: 'This is a dummy note',//text
    // },
    // {
    //     id:2,//int
    //     title: 'Dummy Note',//string varchar
    //     content: 'This is a dummy note',//text
    // },
    // {
    //     id:3,//int
    //     title: 'Dummy Note',//string varchar
    //     content: 'This is a dummy note',//text
    // },
];