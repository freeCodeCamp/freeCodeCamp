var ExternalEditor = require('./main').ExternalEditor;
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: null
});

var message = '\n\n# Please Write a message\n# Any line starting with # is ignored';

process.stdout.write('Please write a message. (press enter to launch your preferred editor)');

editor = new ExternalEditor(message);

rl.on('line', function () {
  try {
    rl.pause();
    editor.runAsync(function (error, response)
    {
      if (error) {
        process.stdout.write(error.message);
        process.exit(1);
      }
      if (response.length === 0) {
        readline.moveCursor(process.stdout, 0, -1);
        process.stdout.write('Your message was empty, please try again. (press enter to launch your preferred editor)');
        rl.resume();
      } else {
        process.stdout.write('Your Message:\n');
        process.stdout.write(response);
        process.stdout.write('\n');
        rl.close();
      }
    });
  } catch (err) {
    process.stderr.write(err.message);
    process.stdout.write('\n');
    rl.close();
  }
});
