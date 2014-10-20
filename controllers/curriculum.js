/**
 * GET /
 * Home page.
 */

var Course = require('./../models/Course')

exports.index = function(req, res) {
    Course.find(function(err, courses){
        res.render('curriculum/curriculum', {
            title: 'Curriculum'
        });
    });
};