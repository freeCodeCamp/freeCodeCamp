var fs = require('fs');
var blessed = require('blessed');
var multiline = require('multiline');

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
    '» REMOVE AUTHENTICATION',
    '» CHANGE EMAIL SERVICE',
    '» ENABLE SOCKET.IO',
    '» ADD NODE.JS CLUSTER SUPPORT',
    '» EXIT'
  ]
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

var socketText = blessed.text({
  top: 'top',
  bg: 'red',
  fg: 'white',
  tags: true,
  content: 'Add real-time support to your application with Socket.IO.'
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

var auth = blessed.form({
  mouse: true,
  keys: true,
  fg: 'white',
  bg: 'blue',
  padding: { left: 1, right: 1 }
});

var authText = blessed.text({
  parent: auth,
  content: 'Selecting a checkbox adds an authentication provider. Unselecting a checkbox removes it. If authentication provider is already present, no action will be taken.',
  padding: 1,
  bg: 'magenta',
  fg: 'white'
});

var facebookCheckbox = blessed.checkbox({
  parent: auth,
  top: 6,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Facebook'
});

var githubCheckbox = blessed.checkbox({
  parent: auth,
  top: 7,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'GitHub'
});

var googleCheckbox = blessed.checkbox({
  parent: auth,
  top: 8,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Google'
});

var twitterCheckbox = blessed.checkbox({
  parent: auth,
  top: 9,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Twitter'
});

var linkedinCheckbox = blessed.checkbox({
  parent: auth,
  top: 10,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'LinkedIn'
});

var instagramCheckbox = blessed.checkbox({
  parent: auth,
  top: 11,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Instagram'
});

var authSubmit = blessed.button({
  parent: auth,
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

var authCancel = blessed.button({
  parent: auth,
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
  home.remove(auth);
  screen.render();
});

var email = blessed.form({
  mouse: true,
  keys: true,
  fg: 'white',
  bg: 'blue',
  padding: { left: 1, right: 1 }
});


var emailText = blessed.text({
  parent: email,
  content: 'Select one of the following email service providers for {underline}contact form{/underline} and {underline}password reset{/underline}.',
  padding: 1,
  bg: 'red',
  fg: 'white',
  tags: true
});

var sendgridRadio = blessed.radiobutton({
  parent: email,
  top: 5,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'SendGrid'
});

var mailgunRadio = blessed.radiobutton({
  parent: email,
  top: 6,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Mailgun'
});

var mandrillRadio = blessed.radiobutton({
  parent: email,
  top: 7,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Mandrill'
});

var emailOk = blessed.button({
  parent: email,
  top: 9,
  mouse: true,
  shrink: true,
  name: 'ok',
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

var emailCancel = blessed.button({
  parent: email,
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
  home.remove(email);
  screen.render();

});

var title = blessed.text({
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

home.on('select', function(child, index) {
  switch (index) {
    case 0:
      home.append(auth);
      auth.focus();
      screen.render();
      break;
    case 1:
      home.append(email);
      email.focus();
      break;
    case 2:
      enableSocketIo();
      home.append(success);
      success.setContent('Socket.IO events have been added at the bottom of {underline}app.js{/underline}. To see a working example take a look at /dashboard. Be sure to run npm install socket.io');
      success.focus();
      screen.render();
      break;
    case 3:
      // Cluster
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

function enableSocketIo() {
  var fileContents = multiline(function() {
    /*


     */
  });
}