var fs = require('fs');
var inquirer = require('inquirer');
var _ = require('underscore');

inquirer.prompt({
  type: 'list',
  name: 'category',
  message: '☂  Hackathon Starter',
  choices: ['Authentication', 'API Examples', 'Exit'],
  filter: function(val) {
    return val.toLowerCase();
  }
}, function(answer) {
  if (answer.category === 'authentication') {
    inquirer.prompt({
      type: 'checkbox',
      message: 'Select Authentication Providers:',
      name: 'auth',
      choices: [
        { name: 'Facebook', checked: true },
        { name: 'GitHub', checked: true },
        { name: 'Google', checked: true },
        { name: 'Twitter', checked: true },
        { name: 'Local', checked: true },
        { name: 'LinkedIn' },
        { name: 'Instagram' }
      ],
      validate: function(answer) {
        if (answer.length < 1) {
          return "You must choose at least one authentication method.";
        }
        return true;
      },
      filter: function(val) {
        return _.map(val, function(auth) {
          return auth.toLowerCase();
        });
      }
    }, function(answer) {
      if (_.contains(answer.auth, 'facebook')) {
        var search = "var FacebookStrategy = require('passport-facebook').Strategy;";
        var body = fs.readFileSync('config/passport.js').toString();
        if (body.indexOf(search) < 0) {
          body = body.split('\n');
          var idx = body.lastIndexOf("var passport = require('passport');");
          body.splice(idx + 1, 0, search);
          var output = body.join('\n');
          fs.writeFileSync('example.js', output);
        }
      }
    });
  } else if (answer.category === 'api examples') {
    console.log('selected api examples');
  }
})
;
