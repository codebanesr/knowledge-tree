
var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next){
  userService.addUser(req.body, function(err){
    if(err){
      var vm= {
        title:'Create an account',
        input: req.body,
        error: 'Something went wrong'
      };
      //delete vm.input.password
      return res.redirect('/'); //redirect to error page here.
    }
      
    res.redirect('/');
  });
});
module.exports = router;
