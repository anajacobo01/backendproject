const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');


//const sequelize = require ('../db');
module.exports = (sequelize) => {
    const User = sequelize.define( 'users' , {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        type: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      
        },{
            hooks:{
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync();
                    //encriptar contraseña 
                    user.password = bcrypt.hashSync(user.password, salt);
                },
            },

        });
        //validacion si la contraseña es igual 
    User.prototype.validPassword = function(password){
        return bcrypt.compareSync (password, this.password);
    };
    return User; 
};
//Base de datos 


