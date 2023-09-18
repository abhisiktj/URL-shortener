const express=require('express');

const router=express.Router();

const{shortenUrl,decodeUrl}=require('../controllers/urlControllers');

router.route('/').post(shortenUrl);
router.route('/:id').get(decodeUrl);

module.exports=router;