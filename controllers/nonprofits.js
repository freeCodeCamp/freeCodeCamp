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

exports.nonprofitsHome = function(req, res) {
    res.render('nonprofits/home', {
        title: 'A guide to our Nonprofit Projects'
    });
};

exports.areYouWithARegisteredNonprofit = function(req, res) {
    res.render('nonprofits/are-you-with-a-registered-nonprofit', {
        title: 'Are you with a with a registered nonprofit',
        step: 1
    });
};

exports.areTherePeopleThatAreAlreadyBenefitingFromYourServices = function(req, res) {
    res.render('nonprofits/are-there-people-that-are-already-benefiting-from-your-services', {
        title: 'Are there people already benefiting from your services',
        step: 2
    });
};

exports.okWithJavaScript = function(req, res) {
    res.render('nonprofits/ok-with-javascript', {
        title: 'Are you OK with us using JavaScript',
        step: 3
    });
};

exports.inExchangeWeAsk = function(req, res) {
    res.render('nonprofits/in-exchange-we-ask', {
        title: 'In exchange we ask that you ...',
        step: 4
    });
};

exports.howCanFreeCodeCampHelpYou = function(req, res) {
    res.render('nonprofits/how-can-free-code-camp-help-you', {
        title: 'Are you with a with a registered nonprofit',
        step: 5
    });
};

exports.whatDoesYourNonprofitDo = function(req, res) {
    res.render('nonprofits/what-does-your-nonprofit-do', {
        existingParams: req.params,
        title: 'What does your nonprofit do?',
        step: 6
    });
};

exports.linkUsToYourWebsite = function(req, res) {
    res.render('nonprofits/link-us-to-your-website', {
        title: 'Link us to your website',
        step: 7
    });
};

exports.tellUsYourEmail = function(req, res) {
    res.render('nonprofits/tell-us-your-email', {
        title: 'Tell us your name',
        step: 8
    });
};

exports.tellUsYourName = function(req, res) {
    res.render('nonprofits/tell-us-your-name', {
        title: 'Tell us your name',
        step: 9
    });
};

exports.finishApplication = function(req, res) {

};

exports.yourNonprofitProjectApplicationHasBeenSubmitted = function(req, res) {
    res.render('nonprofits/your-nonprofit-project-application-has-been-submitted', {
        title: 'Your Nonprofit Project application has been submitted!'
    });
};

exports.otherSolutions = function(req, res) {
    res.render('nonprofits/other-solutions', {
        title: 'Here are some other possible solutions for you'
    });
};
