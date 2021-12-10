const { DataTypes } = require('sequelize');

//const sequelize = require ('../db');
module.exports = (sequelize) => sequelize.define( 'reviews' , {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    content: DataTypes.TEXT,
    productId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
     createdAt: DataTypes.DATE, 
     updatedAt: DataTypes.DATE,
    });