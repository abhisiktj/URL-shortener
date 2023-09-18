const dbConfig=require('../config/dbConfig')
const Sequelize=require('sequelize')


const sequelize=new Sequelize(dbConfig.DATABASE,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.DIALECT,
    logging:false
});

sequelize.authenticate();

module.exports={sequelize,Sequelize};