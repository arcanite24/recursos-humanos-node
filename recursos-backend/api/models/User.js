/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var SHA256 = require("crypto-js/sha256");

module.exports = {

  attributes: {
  
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    
    name: {
      type: 'string',
      required: true
    },
    
    password: {
      type: 'string',
      required: true
    },
    
    empresa: {
      model: 'empresa'
    }
    
  },
  
  beforeCreate: function (user, cb) {
    user.password = SHA256(user.password).toString();
    cb(null, user);
  }
};

