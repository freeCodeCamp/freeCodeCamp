const fs = require('fs');
const execa = require('execa');
const argumentParser = require('./argument-parser');

const { timeout, scriptToRun, searchStr } = argumentParser(process.argv);

(async () => {
  try {
    // Execute the npm script
    const subprocess = execa('npm', ['run', scriptToRun]);

    // Log all output messages from script
    subprocess.stdout.pipe(process.stdout);

    const logFileName = `${scriptToRun}-script-log.txt`;

    const writableStream = fs.createWriteStream(logFileName);

    // Store all output messages in a file
    subprocess.stdout.pipe(writableStream);

    // When timeout occurs, we check the all the logged messages (stored in
    // the log file) for a regex match. If we find a match, then we exit
    // with code 0 (success) otherwise we exit with code 1
    setTimeout(() => {
      fs.readFile(logFileName, 'utf8', (err, data) => {
        if (err) throw new Error(`Failed to read ${logFileName}`);

        const regex = RegExp(searchStr);

        if (regex.test(data)) {
          // eslint-disable-next-line
          return process.exit(0);
        } else {
          // eslint-disable-next-line
          return process.exit(1);
        }
      });
    }, timeout);
  } catch (error) {
    // If the npm script errors out before timeout, exit with code 1
    process.exitCode(1);
  }
})();
