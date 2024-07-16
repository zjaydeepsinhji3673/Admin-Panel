const express = require('express');
var router = express.Router();
const common  = require('../../../config/common');
const auth_model  = require('./auth_model');

router.post('/login', function(req,res){
    auth_model.login(req,function(code,message,data){
        common.send_response(req,res,code,message,data);
    })
})

router.post('/register', function(req,res){
    auth_model.register(req,function(code,message,data){
        common.send_response(req,res,code,message,data);
    })
})

router.get('/logout',function(req,res){
    auth_model.logout(req,function(code,message,data){
        common.send_response(req,res,code,message,data);
    })
})

router.put('/delete_user',function(req,res){
    auth_model.delete_user(req,function(code,message,data){
        common.send_response(req,res,code,message,data);
    })
})


router.post('/get_employee_data',function(req,res){
    auth_model.get_employee_data(req,function(code,message,data){
        common.send_response(req,res,code,message,data);
    })
})

router.patch('/update_user',function(req,res){
    auth_model.update_user(req,function(code,message,data){
        common.send_response(req,res,code,message,data);
    })
})
module.exports = router;