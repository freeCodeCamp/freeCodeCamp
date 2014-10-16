/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
    res.render('course/course', {
        title: 'Curriculum',
    });
};