//services
const responses = require('../middleware/reponses');
const jwt = require('jsonwebtoken');
const config = require('../config');
const express = require('express');
var mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
var bcrypt = require('bcryptjs'),
SALT_WORK_FACTOR = 10;

//Modal
const User = require('../models/users.js');


//-------------------------------  SIGNUP ---
exports.signup = async (req, res) => {
    console.log('startjs');
}

