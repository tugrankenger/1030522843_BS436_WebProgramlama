const express = require('express');
const passport = require('passport');

const Users = require('../db/users');

const router= express.Router();

router.post('/login',passport.authenticate('local'),(req,res)=>{
    res.status(204).send();
});

//signup'tan gelen bilgiler users'a gonderilecek
router.post('/signup',(req,res)=>{

    const created = Users.createUser(req.body.userId,req.body.password);

    //olusturulamadi ise 400 durum kodunu dondur
    if(!created){
        res.status(400).send();
        return;
    }

    passport.authenticate('local')(req,res, ()=>{
        //signup basarili olursa session baslatacagiz, login olmus olacak
        req.session.save((err)=>{
            if(err){
                res.status(500).send();
            }else{
                res.status(201).send();
            }
        });
    });
});

//logout islemleri: loguot olursa session'u kaldir

router.post('/logout',(req,res)=>{
    req.logOut();
    req.session.destory();
    res.status(204).send();
});

// /user icin kullanici bilgileri: /user 'a GET isteginde bulunuldugunda gosterilecek:
router.get('/user',(req,res)=>{
    if(!req.user){
        res.status(401).send();
        return;
    }
    res.status(201).json({
        id:req.user.id,
        victories: req.user.victories,
        defeats: req.user.defeats
    });
});

module.exports = router;