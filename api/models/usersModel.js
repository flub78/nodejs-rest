'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the user'
  },
  firstname: {
	    type: String,
	    Required: 'Kindly enter the firstname of the user'
  },
  email: {
		type: String
  },	  
  Created_date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Users', UserSchema);
