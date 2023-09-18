const {sequelize,Sequelize}=require('./index');

    const Url=sequelize.define('Url',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        longURL:{
            type:Sequelize.STRING,
            allowNull:false
        },
        numLogs:{
           type:Sequelize.INTEGER,
           allowNull:false,
           defaultValue:0
        }
    },{
        freezeTableName:true
    });

module.exports=Url

