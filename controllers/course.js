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