/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
    res.render('curriculum/curriculum', {
        title: 'Curriculum',
        course: Users.first.name
    });
};