var blessed = require('blessed')
var screen = blessed.screen({
});

var list = blessed.list({
  parent: screen,
  padding: { top: 2 },
  mouse: true,
  keys: true,
  vi: true,
  fg: 'white',
  bg: 'blue',
  selectedFg: 'blue',
  selectedBg: 'white',
  items: [
    '» Add/Remove Authentication',
    '» Change Email Service',
    '» Enable Socket.IO',
    '» Enable Node.js Cluster',
    '» Exit'
  ]
});

list.append(blessed.Text({
  align: 'center',
  fg: 'blue',
  bg: 'white',
  content: 'Hackathon Starter (c) 2014'
}));


list.append(blessed.Text({
  bottom: 0,
  fg: 'white',
  bg: 'blue',
  content: '<Up/Down> moves; <Enter> selects'
}));



screen.key('q', function() {
  process.exit(0);
});

//var check = blessed.checkbox({
//  parent: form,
//  keys: true,
//  left: 0,
//  top: 0,
//  width: 30,
//  height: 4,
//  bg: 'blue',
//  content: ' » Hello or cancel?'
//});

screen.render();

