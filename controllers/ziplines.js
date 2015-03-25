var async = require('async'),
    User = require('../models/User'),
    Challenge = require('./../models/Challenge'),
    Bonfire = require('./../models/Bonfire'),
    Story = require('./../models/Story'),
    Comment = require('./../models/Comment'),
    resources = require('./resources.json'),
    steps = resources.steps,
    secrets = require('./../config/secrets'),
    moment = require('moment'),
    https = require('https'),
    debug = require('debug')('freecc:cntr:resources'),
    cheerio = require('cheerio'),
    request = require('request'),
    R = require('ramda');

nonprofitHome: function nonprofitHome(req, res) {
    res.render('nonprofits/home', {
        title: 'A guide to our Nonprofit Projects'
    });
}