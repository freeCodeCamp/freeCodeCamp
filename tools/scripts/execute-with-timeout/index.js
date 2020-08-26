const execa = require('execa');

(async () => {
  // const subprocess = await execa('npm', ['run', 'develop']);

  const subprocess = execa('npm', ['run', 'develop']);

  setTimeout(() => {
    subprocess.kill('SIGTERM', {
      forceKillAfterTimeout: 2000
    });
  }, 1000);

  subprocess.stdout.pipe(process.stdout);
})();
