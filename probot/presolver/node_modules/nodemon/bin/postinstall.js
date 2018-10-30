#!/usr/bin/env node

function main() {
  if (process.env.SUPPRESS_SUPPORT) {
    return;
  }

  try {
    const Configstore = require('configstore');
    const pkg = require(__dirname + '/../package.json');
    const now = Date.now();

    var week = 1000 * 60 * 60 * 24 * 7;

    // create a Configstore instance with an unique ID e.g.
    // Package name and optionally some default values
    const conf = new Configstore(pkg.name);
    const last = conf.get('lastCheck');

    if (!last || now - week > last) {
      console.log('\u001b[32mLove nodemon? You can now support the project via the open collective:\u001b[22m\u001b[39m\n > \u001b[96m\u001b[1mhttps://opencollective.com/nodemon/donate\u001b[0m\n');
      conf.set('lastCheck', now);
    }
  } catch (e) {
    console.log('\u001b[32mLove nodemon? You can now support the project via the open collective:\u001b[22m\u001b[39m\n > \u001b[96m\u001b[1mhttps://opencollective.com/nodemon/donate\u001b[0m\n');
  }
}

main();
