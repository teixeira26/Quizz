const {DataTypes} = require('sequelize');

const Question = (Sequelize)=>{
    Sequelize.define('Question',
    {
        
        preguntas:{
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull:false,
        },

        categoria:{
            type:DataTypes.STRING(255)
        },
       
        img:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    }
    )
}


module.exports = {
    Question
}