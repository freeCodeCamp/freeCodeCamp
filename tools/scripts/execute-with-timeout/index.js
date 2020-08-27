const fs = require('fs');
const execa = require('execa');

const cliArgs = process.argv;

const scriptToRun = cliArgs[2].replace(/-/g, '');

const timeoutArg = cliArgs[3].replace(/-/g, '');

const timeout = Number(timeoutArg) * 60 * 1000;

(async () => {
  try {
    const subprocess = execa('npm', ['run', scriptToRun]);
    subprocess.stdout.pipe(process.stdout);

    const writableStream = fs.createWriteStream(
      `${scriptToRun}-script-log.txt`
    );

    subprocess.stdout.pipe(writableStream);

    setTimeout(() => {
      fs.readFile(`${scriptToRun}-script-log.txt`, 'utf8', (err, data) => {
        if (err) throw new Error('failed to read data');

        const regexChecheckFirst = RegExp(
          'You can now view @freecodecamp/client in the browser.'
        );

        const regexChecheckSecond = RegExp('http://localhost:8000/___graphql');

        if (regexChecheckFirst.test(data) || regexChecheckSecond.test(data)) {
          // eslint-disable-next-line
          return process.exit(0);
        } else {
          // eslint-disable-next-line
          return process.exit(1);
        }
      });
    }, timeout);
  } catch (error) {
    process.exitCode(1);
  }
})();
