const {Sequelize} = require('sequelize');
const {Question} = require('./models/questions')


const sequelize = new Sequelize('postgres://postgres:Alice234@localhost:5432/quizz', {
    logging:false,
});

Question(sequelize);

const {Question:Questions}= sequelize.models;

module.exports = {Questions, sequelize}