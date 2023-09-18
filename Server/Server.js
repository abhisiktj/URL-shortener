require('dotenv').config();
const express=require('express');

const db=require('./models/index');
const errorHandler=require('./middlewares/error')
const app=express();
app.use(express.json());

const urlRouter=require('./routes/urlRoutes');

app.use('/',urlRouter);

app.use(errorHandler);
const port=process.env.port || 3500;

const start=()=>{
    app.listen(port,()=>{
        console.log(`Running on port ${port}`);
    })}

(async()=>{
    try{
    await db.sequelize.sync();
    start();
    }
    catch(error){
        console.log(error);
    }
})();




