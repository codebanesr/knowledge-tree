var User = require('../models/user').User;

exports.addUser = function(user, next){
    var newUser = new User({
        name: user.name,
        email:user.EMAIL,
        contact:user.phone_number,
        class:user.level,
    });

    newUser.save(function(err){
        if(err){
            return next(err);
        }
        next(null);
    });
};