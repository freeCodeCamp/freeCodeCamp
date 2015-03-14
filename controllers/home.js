/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
if (reg.user && process.env.NODE_ENV !== 'production'){ //added !== dev because crash
	res.redirect('/learn-to-code')
} else {
    res.render('home', {
      title: 'Learn to Code and Become a Software Engineer'
    });
}
};
