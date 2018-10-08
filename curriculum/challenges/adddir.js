var fs = require('fs');

var directory = '';
// Get list of .md files in current directory
fs.readdirSync('./english').forEach(file1 => {
  if (file1 != '.DS_Store') {
    directory = './spanish/' + file1;
    !fs.existsSync(directory) && fs.mkdirSync(directory);
    fs.readdirSync('./english/' + file1).forEach(file2 => {
      if (file2 != '.DS_Store') {
        directory = './spanish/' + file1 + '/' + file2;
        !fs.existsSync(directory) && fs.mkdirSync(directory);
        console.log(file2);
      }
    });
  }
});
