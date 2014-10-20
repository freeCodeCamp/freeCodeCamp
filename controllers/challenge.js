/**
* GET /
* Home page.
*/
var Challenge = require('./../models/Challenge')

exports.index = function(req, res) {
    Challenge.find(function(err, challenges){
        res.render('challenge/index', {
            title: 'Challenges',
            challenges: challenges
        });
    });
};
exports.view = function(req, res) {
    Challenge.findById(req.param.id, function(err, challenge){
        res.render('challenge/view', {
            title: 'Challenge',
            challenge: challenge
        });
    });
};
exports.createAndDeployAWebsite = function(req, res) {
    res.render('challenge/create-and-deploy-a-website', {
        name: 'Create and Deploy a Website',
        image: 'http://startbootstrap.com/assets/img/templates/landing-page.jpg',
        video: '',
        directions: "In the next 5 minutes, you'll create a website and deploy it to the internet!",
        links: ["http://startbootstrap.com/template-overviews/freelancer/", "www.bitballoon.com", "https://atom.io/"]
    });
};

exports.addDynamicContentToYourWebsite = function(req, res) {
    res.render('challenge/add-dynamic-content-to-your-website', {
        name: 'Add dynamic content to your website'
    });
};

exports.experimentWithHtmlAndCssInCodepen = function(req, res) {
    res.render('challenge/experiment-with-html-and-css-in-codepen', {
        name: 'Experiment with HTML and CSS in Codepen'
    });
};

exports.startAPairProgrammingSession = function(req, res) {
    res.render('challenge/start-a-pair-programming-session', {
        name: 'Start a pair programming session'
    });
};