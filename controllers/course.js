/**
* GET /
* Home page.
*/
var Course = require('./../models/Course')

exports.index = function(req, res) {
    Course.find(function(err, courses){
        res.render('course/index', {
            title: 'Courses',
            courses: courses
        });
    });
};
exports.view = function(req, res) {
    Course.findById(req.param.id, function(err, course){
        res.render('course/view', {
            title: 'Course',
            course: course
        });
    });
};

exports.codecademyHtmlAndCssTrack = function(req, res) {
    res.render('course/codecademy-html-and-css-track', {
        name: ''
    });
};

exports.codeSchoolDiscoverDevtoolsCourse = function(req, res) {
    res.render('course/code-school-discover-devtools-course', {
        name: ''
    });
};

exports.codeSchoolTryJqueryCourse = function(req, res) {
    res.render('course/code-school-try-jquery-course', {
        name: ''
    });
};

exports.codecademyJavascriptTrack = function(req, res) {
    res.render('course/codecademy-javascript-track', {
        name: ''
    });
};

exports.harvardIntroductionToComputerScienceCs50Course = function(req, res) {
    res.render('course/harvard-introduction-to-computer-science-cs50-course', {
        name: ''
    });
};

exports.linuxCommandLineTutorial = function(req, res) {
    res.render('course/linux-command-line-tutorial', {
        name: ''
    });
};

exports.codeSchoolTryGitCourse = function(req, res) {
    res.render('course/code-school-try-git-course', {
        name: ''
    });
};

exports.codeSchoolRealTimeWithNodeJsCourse = function(req, res) {
    res.render('course/code-school-real-time-with-node-js-course', {
        name: ''
    });
};

exports.codeSchoolShapingUpWithAngularJsCourse = function(req, res) {
    res.render('course/code-school-shaping-up-with-angular-js-course', {
        name: ''
    });
};

exports.m101jsMongoDBForNodeJsDevelopersCourse = function(req, res) {
    res.render('course/m101js-mongodb-for-node-js-developers-course', {
        name: ''
    });
};