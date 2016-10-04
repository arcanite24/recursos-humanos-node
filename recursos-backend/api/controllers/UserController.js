/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var SHA256 = require("crypto-js/sha256");
var jwt = require("jsonwebtoken");

module.exports = {
	
	auth: function (req, res) {
	  var authData = req.allParams();
	  User.findOne({username: authData.username}).then(function (user) {
	    var tempPass = SHA256(authData.password);
	    if (user) {
	      if (user.password == tempPass) {
	        var token = jwt.sign(user, sails.config.security.superSecretMasterJWT);
	        return res.json({user: user, token: token});
	      } else {
	        return res.json({error: "Contraseña invalida."})
	      }
	    } else {
	      return res.json({error: "Usuario no encontrado."})
	    }
	  }).catch(function (err) {
	    return res.json(500, {error: err});
	  });
	}
	
};

