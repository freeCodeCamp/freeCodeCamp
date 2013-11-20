exports.getContact = function(req, res) {
  res.render('contact', {
    title: 'Contact',
    user: req.user,
    messages: req.flash('messages')
  });
};

exports.postContact = function(req, res) {

};