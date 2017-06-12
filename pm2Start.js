require('dotenv').load();
var pm2 = require('pm2');
var instances = process.env.INSTANCES || 1;
var serverName = process.env.SERVER_NAME || 'server';
var maxMemory = process.env.MAX_MEMORY || '390M';

    console.log(
      'pm2 started %s with %s instances at %s max memory',
      serverName,
      instances,
      minMemory
    );
    pm2.disconnect();
  });
});
