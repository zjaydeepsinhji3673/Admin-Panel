const conn = require('../../../config/database');
const common = require('../../../config/common');
const md5 = require('md5');
const auth_model = {

    login: function (req, callback) {
        let token = common.generateToken(10);
        var data = req.body
        conn.query(`select * from tbl_user where  email = ?;`, [data.email], function (error, result) {
            if (error) {
                callback('0', 'Error', error);
            }
            else {
                if (result.length > 0) {
                    if (result[0].password == md5(data.password)) {
                        if (result[0].is_active == 1) {

                            conn.query(`update tbl_user set token = ? where id = ?`, [token, result[0].id], function (error1, result1) {
                                if (error1) {
                                    callback('0', 'Error', error1);
                                }
                                else {
                                    conn.query(`select * from tbl_user where id = ?`,[result[0].id],function(error2,result2){
                                        if(error2){
                                            callback('0', 'Error', error1);
                                        }
                                        else{
                                            callback('1','Success',result2);
                                        }
                                    })
                                }
                            })
                        }
                        else {
                            callback('3', 'Error', 'In Active User')
                        }
                    }
                    else {
                        callback('0', 'Error', 'Your Entered Passwrod is Wrong, Please Enter Currect Password')
                    }
                }
                else {
                    callback('0', 'Error', 'Your Entered Email is Wrong, Please Enter Currect Email')
                }
            }
        })
    },

    register: function (req, callback) {
        var data = req.body
        common.CheckUnique(data, function (unique_values) {
            if (unique_values != null && unique_values.length > 0) {
                callback('0','error',unique_values);
            }
            else {
                let userdata = {
                    first_name:data.first_name,
                    last_name:data.last_name,
                    email: data.email,
                    password: md5(data.password),
                    gender:data.gender,
                    role:data.role,
                    token:common.generateToken(15),                   
                }
                conn.query(`insert into tbl_user set ?;`, [userdata], function (error, result) {
                    if (error) {
                        callback('0', 'Error', error);
                        
                    }
                    else {
                        conn.query(`select * from tbl_user where id = ?`,[result.insertId],function(error1, UserModel){
                            if(error1){
                                callback('0', 'Error', error1);
                               
                            }
                            else{
                                callback('1','Success',UserModel);
                            }
                        })
                    }
                })
            }
        })
    },

    logout:function(req, callback){
        conn.query(`update tbl_user set token = null where id = ?`,[req.user_id],function(error,result){
            if(error){
                callback('0','Error',error)
            }
            else{
                callback('1','Success','Logout Successyfully..');
            }
        })
    },

    delete_user:function(req, callback){
        conn.query(`update tbl_user set is_active = 0 where id = ?`,[req.body.user_id], function(error,result){
            if(error){
                callback('0','Error',error);
            }
            else{
                callback('1','Success','Deleted Successfully..');
            }
        })
    },

    get_employee_data:function(req, callback){
        conn.query(`select count(1) as total from tbl_user`,function(error,result){
            if(!error){
                if (!req.body.search) {
                    req.body.search = '';
                }
                let append_filter_query = '';
                if (req.body.filter) {
                    append_filter_query = `u.role = '${req.body.filter}' AND`;
                }
                let count = `select count(1) as total`;
                let all = `select u.*`;
                let limit_offset = ` limit ${req.body.page_size} offset ${req.body.page_size * req.body.page_no} `;
                let custom_query = ` from tbl_user u where ` + append_filter_query +
                `(u.first_name like '%${req.body.search}%' or u.last_name like '%${req.body.search}%' or u.email like '%${req.body.search}%') and u.is_active = 1 ORDER BY u.id DESC`;
                conn.query(all+custom_query+limit_offset,function(error2,result2){
                    if(!error2){
                        conn.query(count+custom_query,function(error3,result3){
                            if(!error3){
                                callback('1','success',{content:result2,total: result[0]?.total,
                                    filtered_total: result3[0]?.total,...req.body})
                            }
                            else{
                                callback('0','Error',error3)
                            }
                        })
                    }
                    else{
                        callback('0','Error',error2)
                    }
                })
            }
            else[
                callback('0','Error',error)
            ]
        })
    },

    update_user:function(req,callback){
        var userData = {
            first_name:req.body.fname,
            last_name:req.body.lname,
            email:req.body.email,
            gender:req.body.gender
        }
        conn.query(`update tbl_user set ? where id = ?`,[userData, req.body.user_id],function(error,result){
            if(error){
                callback('0','Error',error)
            }
            else{
                callback('1','Sucess','Data Updated Successfully..');
            }
        })
    }
}
module.exports = auth_model;