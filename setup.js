var blessed = require('blessed')
var screen = blessed.screen({
  autoPadding: true
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
    '» Authentication',
    '» Email Service',
    '» Socket.IO',
    '» Node.js Cluster',
    '» Exit'
  ]
});

var inner = blessed.box({
  top: 'center',
  left: 'center',
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
      fg: 'white',
      bg: 'red'
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
      fg: 'white',
      bg: 'red'
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
      fg: 'white',
      bg: 'red'
    }
  }
});

var authentication = blessed.form({
  mouse: true,
  keys: true,
  fg: 'white',
  bg: 'blue',
  padding: { left: 1, right: 1 }
});

var authText = blessed.text({
  parent: authentication,
  content: 'Selecting a checkbox adds an authentication provider. Unselecting a checkbox removes it. If authentication provider is already present, no action will be taken.',
  padding: 1,
  bg: 'magenta',
  fg: 'white'
});

var facebookCheckbox = blessed.checkbox({
  parent: authentication,
  top: 6,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Facebook'
});

var githubCheckbox = blessed.checkbox({
  parent: authentication,
  top: 7,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'GitHub'
});

var googleCheckbox = blessed.checkbox({
  parent: authentication,
  top: 8,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Google'
});

var twitterCheckbox = blessed.checkbox({
  parent: authentication,
  top: 9,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Twitter'
});

var linkedinCheckbox = blessed.checkbox({
  parent: authentication,
  top: 10,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'LinkedIn'
});

var instagramCheckbox = blessed.checkbox({
  parent: authentication,
  top: 11,
  checked: true,
  mouse: true,
  fg: 'white',
  bg: 'blue',
  content: 'Instagram'
});

var authOk = blessed.button({
  parent: authentication,
  top: 13,
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

var authCancel = blessed.button({
  parent: authentication,
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

var email = blessed.form({
  mouse: true,
  keys: true,
  fg: 'whiqte',
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
  content: ' <Up/Down> moves | <Enter> selects | <q> exits'
});

home.on('select', function(child, index) {
  switch (index) {
    case 0:
      home.append(authentication);
      authentication.focus();
      break;
    case 1:
      home.append(email);
      email.focus();
      break;
    case 2:
      home.append(inner);
      inner.append(socketText);
      inner.focus();
      screen.render();
      break;
    case 3:
      home.append(inner);
      inner.append(clusterText);
      inner.focus();
      screen.render();
      break;
    default:
      process.exit(0);
  }
});




screen.key('q', function() {
  process.exit(0);
});

screen.render();

