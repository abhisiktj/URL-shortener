
const expressAsyncwrapper=require('express-async-wrapper');
const validateUrl=require('../utils/validateUrl');
const CustomError=require('../utils/customError');
const {encode,decode}=require('../utils/base62');

const Url=require('../models/url');


const host="localhost:3500";
const shortenUrl=expressAsyncwrapper(async(req,res)=>{
    const longURL=req.body.url;
   
    if(!validateUrl(longURL)){
        throw new CustomError(400,"Invalid Url");
    }
     
    const url=await Url.findOne({where:{longURL}});
 
    
    if(!url){
           url=await Url.create({longURL});
    }
    const encoded=encode(url?.id);
 
    res.status(201).json({
        success:true,
        data:{
            shortURL: `${host}/${encoded}`
        }
    })
});


const decodeUrl=expressAsyncwrapper(async(req,res)=>{
    const base62Id=req.params.id;
    const id=decode(base62Id);
    
    const url=await Url.findOne({where:{id}});
    if(!url){
        throw new CustomError(404,"URL Not Found");
    }
     await url.increment({
        'numLogs':1
     })

    res.redirect(url.longURL);

});

module.exports={
    shortenUrl,
    decodeUrl
}
