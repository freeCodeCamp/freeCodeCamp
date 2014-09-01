var fs = require('fs');
var os = require('os');
var blessed = require('blessed');
var multiline = require('multiline');

if (os.platform() === 'win32') {
  console.log('*************************************************************');
  console.log('Hackthon Starter Generator has been disabled on Windows until');
  console.log('https://github.com/chjj/blessed is fixed or until I find a');
  console.log('better CLI module.');
  console.log('*************************************************************');
  process.exit();
}
var screen = blessed.screen({
  autoPadding: true
});

screen.key('q', function() {
  process.exit(0);
});

var home = blessed.list({
  parent: screen,
  padding: { top: 2 },
  mouse: true,
  keys: true,
  fg: 'white',
  bg: 'blue',
  selectedFg: 'blue',
  selectedBg: 'white',
  items: [
    '» REMOVE AUTHENTICATION PROVIDER',
    '» CHANGE EMAIL SERVICE',
    '» ADD NODE.JS CLUSTER SUPPORT',
    '» EXIT'
  ]
});

var homeTitle = blessed.text({
  parent: screen,
  align: 'center',
  fg: 'blue',
  bg: 'white',
  content: 'Hackathon Starter (c) 2014'
});

var footer = blessed.text({
  parent: screen,
  bottom: 0,
  fg: 'white',
  bg: 'blue',
  tags: true,
  content: ' {cyan-fg}<Up/Down>{/cyan-fg} moves | {cyan-fg}<Enter>{/cyan-fg} selects | {cyan-fg}<q>{/cyan-fg} exits'
});

var inner = blessed.form({
  top: 'center',
  left: 'center',
  mouse: true,
  keys: true,
  width: 33,
  height: 10,
  border: {
    type: 'line',
    fg: 'white',
    bg: 'red'
  },
  fg: 'white',
  bg: 'red'
});

var success = blessed.box({
  top: 'center',
  left: 'center',
  mouse: true,
  keys: true,
  tags: true,
  width: '50%',
  height: '40%',
  border: {
    type: 'line',
    fg: 'white',
    bg: 'green'
  },
  fg: 'white',
  bg: 'green',
  padding: 1
});

success.on('keypress', function() {
  home.focus();
  home.remove(success);
});

var clusterText = blessed.text({
  top: 'top',
  bg: 'red',
  fg: 'white',
  tags: true,
  content: 'Take advantage of multi-core systems using built-in {underline}cluster{/underline} module.'
});


var enable = blessed.button({
  parent: inner,
  bottom: 0,
  mouse: true,
  shrink: true,
  name: 'enable',
  content: ' ENABLE ',
  border: {
    type: 'line',
    fg: 'white',
    bg: 'red'
  },
  style: {
    fg: 'white',
    bg: 'red',
    focus: {
      fg: 'red',
      bg: 'white'
    }
  }
});


var disable = blessed.button({
  parent: inner,
  bottom: 0,
  left: 10,
  mouse: true,
  shrink: true,
  name: 'disable',
  content: ' DISABLE ',
  border: {
    type: 'line',
    fg: 'white',
    bg: 'red'
  },
  style: {
    fg: 'white',
    bg: 'red',
    focus: {
      fg: 'red',
      bg: 'white'
    }
  }
});

var cancel = blessed.button({
  parent: inner,
  bottom: 0,
  left: 21,
  mouse: true,
  shrink: true,
  name: 'cancel',
  content: ' CANCEL ',
  border: {
    type: 'line',
    fg: 'white',
    bg: 'red'
  },
  style: {
    fg: 'white',
    bg: 'red',
    focus: {
      fg: 'red',
      bg: 'white'
    }
  }
});

cancel.on('press', function() {
  home.focus();
  home.remove(inner);
  screen.render();

});

var authForm = blessed.form({
  mouse: true,
  keys: true,
  fg: 'white',
  bg: 'blue',
  padding: { left: 1, right: 1 }
});

authForm.on('submit', function() {
  var passportConfig = fs.readFileSync('config/passport.js').toString().split(os.EOL);
  var loginTemplate = fs.readFileSync('views/account/login.jade').toString().split(os.EOL);
  var profileTemplate = fs.readFileSync('views/account/profile.jade').toString().split(os.EOL);
  var userModel = fs.readFileSync('models/User.js').toString().split(os.EOL);
  var app = fs.readFileSync('app.js').toString().split(os.EOL);
  var secrets = fs.readFileSync('config/secrets.js').toString().split(os.EOL);

  var index = passportConfig.indexOf("var FacebookStrategy = require('passport-facebook').Strategy;");
  if (facebookCheckbox.checked && index !== -1) {
    passportConfig.splice(index, 1);
    index = passportConfig.indexOf('// Sign in with Facebook.');
    passportConfig.splice(index, 47);
    fs.writeFileSync('config/passport.js', passportConfig.join(os.EOL));

    index = loginTemplate.indexOf("      a.btn.btn-block.btn-facebook.btn-social(href='/auth/facebook')");
    loginTemplate.splice(index, 3);
    fs.writeFileSync('views/account/login.jade', loginTemplate.join(os.EOL));

    index = profileTemplate.indexOf("  if user.facebook");
    profileTemplate.splice(index - 1, 5);
    fs.writeFileSync('views/account/profile.jade', profileTemplate.join(os.EOL));

    index = userModel.indexOf('  facebook: String,');
    userModel.splice(index, 1);
    fs.writeFileSync('models/User.js', userModel.join(os.EOL));

    index = app.indexOf("app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));");
    app.splice(index, 4);
    fs.writeFileSync('app.js', app.join(os.EOL));
  }

  index = passportConfig.indexOf("var GitHubStrategy = require('passport-github').Strategy;");
  if (githubCheckbox.checked && index !== -1) {
    console.log(index);
    passportConfig.splice(index, 1);
    index = passportConfig.indexOf('// Sign in with GitHub.');
    passportConfig.splice(index, 48);
    fs.writeFileSync('config/passport.js', passportConfig.join(os.EOL));

    index = loginTemplate.indexOf("      a.btn.btn-block.btn-github.btn-social(href='/auth/github')");
    loginTemplate.splice(index, 3);
    fs.writeFileSync('views/account/login.jade', loginTemplate.join(os.EOL));

    index = profileTemplate.indexOf('  if user.github');
    profileTemplate.splice(index - 1, 5);
    fs.writeFileSync('views/account/profile.jade', profileTemplate.join(os.EOL));

    index = userModel.indexOf('  github: String,');
    userModel.splice(index, 1);
    fs.writeFileSync('models/User.js', userModel.join(os.EOL));

    index = app.indexOf("app.get('/auth/github', passport.authenticate('github'));");
    app.splice(index, 4);
    fs.writeFileSync('app.js', app.join(os.EOL));
  }

  index = passportConfig.indexOf("var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;");
  if (googleCheckbox.checked && index !== -1) {
    passportConfig.splice(index, 1);
    index = passportConfig.indexOf('// Sign in with Google.');
    passportConfig.splice(index, 46);
    fs.writeFileSync('config/passport.js', passportConfig.join(os.EOL));

    index = loginTemplate.indexOf("      a.btn.btn-block.btn-google-plus.btn-social(href='/auth/google')");
    loginTemplate.splice(index, 3);
    fs.writeFileSync('views/account/login.jade', loginTemplate.join(os.EOL));

    index = profileTemplate.indexOf('  if user.google');
    profileTemplate.splice(index - 1, 5);
    fs.writeFileSync('views/account/profile.jade', profileTemplate.join(os.EOL));

    index = userModel.indexOf('  google: String,');
    userModel.splice(index, 1);
    fs.writeFileSync('models/User.js', userModel.join(os.EOL));

    index = app.indexOf("app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));");
    app.splice(index, 4);
    fs.writeFileSync('app.js', app.join(os.EOL));
  }

  index = passportConfig.indexOf("var TwitterStrategy = require('passport-twitter').Strategy;");
  if (twitterCheckbox.checked && index !== -1) {
    passportConfig.splice(index, 1);
    index = passportConfig.indexOf('// Sign in with Twitter.');
    passportConfig.splice(index, 43);
    fs.writeFileSync('config/passport.js', passportConfig.join(os.EOL));

    index = loginTemplate.indexOf("      a.btn.btn-block.btn-twitter.btn-social(href='/auth/twitter')");
    loginTemplate.splice(index, 3);
    fs.writeFileSync('views/account/login.jade', loginTemplate.join(os.EOL));

    index = profileTemplate.indexOf('  if user.twitter');
    profileTemplate.splice(index - 1, 5);
    fs.writeFileSync('views/account/profile.jade', profileTemplate.join(os.EOL));

    index = userModel.indexOf('  twitter: String,');
    userModel.splice(index, 1);
    fs.writeFileSync('models/User.js', userModel.join(os.EOL));

    index = app.indexOf("app.get('/auth/twitter', passport.authenticate('twitter'));");
    app.splice(index, 4);
    fs.writeFileSync('app.js', app.join(os.EOL));
  }

  index = passportConfig.indexOf("var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;");
  if (linkedinCheckbox.checked && index !== -1) {
    passportConfig.splice(index, 1);
    index = passportConfig.indexOf('// Sign in with LinkedIn.');
    passportConfig.splice(index, 47);
    fs.writeFileSync('config/passport.js', passportConfig.join(os.EOL));

    index = loginTemplate.indexOf("      a.btn.btn-block.btn-linkedin.btn-social(href='/auth/linkedin')");
    loginTemplate.splice(index, 3);
    fs.writeFileSync('views/account/login.jade', loginTemplate.join(os.EOL));

    index = profileTemplate.indexOf('  if user.linkedin');
    profileTemplate.splice(index - 1, 5);
    fs.writeFileSync('views/account/profile.jade', profileTemplate.join(os.EOL));

    index = userModel.indexOf('  linkedin: String,');
    userModel.splice(index, 1);
    fs.writeFileSync('models/User.js', userModel.join(os.EOL));

    index = app.indexOf("app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));");
    app.splice(index, 4);
    fs.writeFileSync('app.js', app.join(os.EOL));
  }

  index = passportConfig.indexOf("var InstagramStrategy = require('passport-instagram').Strategy;");
  if (instagramCheckbox.checked && index !== -1) {
    passportConfig.splice(index, 1);
    index = passportConfig.indexOf('// Sign in with Instagram.');
    passportConfig.splice(index, 43);
    fs.writeFileSync('config/passport.js', passportConfig.join(os.EOL));

    index = loginTemplate.indexOf("      a.btn.btn-block.btn-instagram.btn-social(href='/auth/instagram')");
    loginTemplate.splice(index, 3);
    fs.writeFileSync('views/account/login.jade', loginTemplate.join(os.EOL));

    index = profileTemplate.indexOf('  if user.instagram');
    profileTemplate.splice(index - 1, 5);
    fs.writeFileSync('views/account/profile.jade', profileTemplate.join(os.EOL));

    index = app.indexOf("app.get('/auth/instagram', passport.authenticate('instagram'));");
    app.splice(index, 4);
    fs.writeFileSync('app.js', app.join(os.EOL));

    userModel.splice(index, 1);
    fs.writeFileSync('models/User.js', userModel.join(os.EOL));
  }

  home.remove(authForm);
  home.append(success);
  success.setContent('Selected authentication providers have been removed from passportConfig.js, User.js, app.js, login.jade and profile.jade!');
  success.focus();
  screen.render();
});

var authText = blessed.text({
  parent: authForm,
  content: 'Selecting a checkbox removes an authentication provider. If authentication provider is already removed, no action will be taken.',
  padding: 1,
  bg: 'magenta',
  fg: 'white'
});

var facebookCheckbox = blessed.checkbox({
  parent: authForm,
  top: 6,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Facebook'
});

var githubCheckbox = blessed.checkbox({
  parent: authForm,
  top: 7,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'GitHub'
});

var googleCheckbox = blessed.checkbox({
  parent: authForm,
  top: 8,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Google'
});

var twitterCheckbox = blessed.checkbox({
  parent: authForm,
  top: 9,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Twitter'
});

var linkedinCheckbox = blessed.checkbox({
  parent: authForm,
  top: 10,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'LinkedIn'
});

var instagramCheckbox = blessed.checkbox({
  parent: authForm,
  top: 11,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Instagram'
});

var authSubmit = blessed.button({
  parent: authForm,
  top: 13,
  mouse: true,
  shrink: true,
  name: 'submit',
  content: ' SUBMIT ',
  style: {
    fg: 'blue',
    bg: 'white',
    focus: {
      fg: 'white',
      bg: 'red'
    }
  }
});

authSubmit.on('press', function() {
  authForm.submit();
});

var authCancel = blessed.button({
  parent: authForm,
  top: 13,
  left: 9,
  mouse: true,
  shrink: true,
  name: 'cancel',
  content: ' CANCEL ',
  style: {
    fg: 'blue',
    bg: 'white',
    focus: {
      fg: 'white',
      bg: 'red'
    }
  }
});

authCancel.on('press', function() {
  home.focus();
  home.remove(authForm);
  screen.render();
});

var emailForm = blessed.form({
  mouse: true,
  keys: true,
  fg: 'white',
  bg: 'blue',
  padding: { left: 1, right: 1 }
});

emailForm.on('submit', function() {
  var contactCtrl = fs.readFileSync('controllers/contact.js').toString().split(os.EOL);
  var userCtrl = fs.readFileSync('controllers/user.js').toString().split(os.EOL);
  var choice = null;

  if (sendgridRadio.checked) {
    choice = 'SendGrid';
  } else if (mailgunRadio.checked) {
    choice = 'Mailgun';
  } else if (mandrillRadio.checked) {
    choice = 'Mandrill';
  }

  var index = contactCtrl.indexOf('var transporter = nodemailer.createTransport({');
  contactCtrl.splice(index + 1, 1, "  service: '" + choice + "',");
  contactCtrl.splice(index + 3, 1, '    user: secrets.' + choice.toLowerCase() +'.user,');
  contactCtrl.splice(index + 4, 1, '    pass: secrets.' + choice.toLowerCase() + '.password');
  fs.writeFileSync('controllers/contact.js', contactCtrl.join(os.EOL));

  index = userCtrl.indexOf('      var transporter = nodemailer.createTransport({');
  userCtrl.splice(index + 1, 1, "        service: '" + choice + "',");
  userCtrl.splice(index + 3, 1, '          user: secrets.' + choice.toLowerCase() + '.user,');
  userCtrl.splice(index + 4, 1, '          pass: secrets.' + choice.toLowerCase() + '.password');
  index = userCtrl.indexOf('      var transporter = nodemailer.createTransport({', (index + 1));
  userCtrl.splice(index + 1, 1, "        service: '" + choice + "',");
  userCtrl.splice(index + 3, 1, '          user: secrets.' + choice.toLowerCase() + '.user,');
  userCtrl.splice(index + 4, 1, '          pass: secrets.' + choice.toLowerCase() + '.password');
  fs.writeFileSync('controllers/user.js', userCtrl.join(os.EOL));

  home.remove(emailForm);
  home.append(success);
  success.setContent('Email Service has been switched to ' + choice);
  success.focus();
  screen.render();
});

var emailText = blessed.text({
  parent: emailForm,
  content: 'Select one of the following email service providers for {underline}contact form{/underline} and {underline}password reset{/underline}.',
  padding: 1,
  bg: 'red',
  fg: 'white',
  tags: true
});

var sendgridRadio = blessed.radiobutton({
  parent: emailForm,
  top: 5,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'SendGrid'
});

var mailgunRadio = blessed.radiobutton({
  parent: emailForm,
  top: 6,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Mailgun'
});

var mandrillRadio = blessed.radiobutton({
  parent: emailForm,
  top: 7,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Mandrill'
});

var emailSubmit = blessed.button({
  parent: emailForm,
  top: 9,
  mouse: true,
  shrink: true,
  name: 'submit',
  content: ' SUBMIT ',
  style: {
    fg: 'blue',
    bg: 'white',
    focus: {
      fg: 'white',
      bg: 'red'
    }
  }
});

emailSubmit.on('press', function() {
  emailForm.submit();
});

var emailCancel = blessed.button({
  parent: emailForm,
  top: 9,
  left: 9,
  mouse: true,
  shrink: true,
  name: 'cancel',
  content: ' CANCEL ',
  style: {
    fg: 'blue',
    bg: 'white',
    focus: {
      fg: 'white',
      bg: 'red'
    }
  }
});

emailCancel.on('press', function() {
  home.focus();
  home.remove(emailForm);
  screen.render();

});

home.on('select', function(child, index) {
  switch (index) {
    case 0:
      home.append(authForm);
      authForm.focus();
      screen.render();
      break;
    case 1:
      home.append(emailForm);
      emailForm.focus();
      break;
    case 2:
      addClusterSupport();
      home.append(success);
      success.setContent('New file {underline}cluster_app.js{/underline} has been created. Your app is now able to use more than 1 CPU by running {underline}node cluster_app.js{/underline}, which in turn spawns multiple instances of {underline}app.js{/underline}');
      success.focus();
      screen.render();
      break;
    default:
      process.exit(0);
  }
});

screen.render();


function addClusterSupport() {

  var fileContents = multiline(function() {
/*
var os = require('os');
var cluster = require('cluster');

cluster.setupMaster({
  exec: 'app.js'
});

cluster.on('exit', function(worker) {
  console.log('worker ' + worker.id + ' died');
  cluster.fork();
});

for (var i = 0; i < os.cpus().length; i++) {
  cluster.fork();
}
*/
  });

  fs.writeFileSync('cluster_app.js', fileContents);
}
