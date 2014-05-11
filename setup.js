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
      console.log('doh');
      break;
    case 2:
      console.log('doh');
      break;
    case 3:

      console.log('doh');
      break;
    default:
      process.exit(0);
  }
});




screen.key('q', function() {
  process.exit(0);
});

screen.render();

