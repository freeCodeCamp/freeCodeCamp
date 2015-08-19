require('dotenv').load();
var pm2 = require('pm2');
var instances = process.env.INSTANCES || 1;
var serverName = process.env.SERVER_NAME || 'server';
var maxMemory = process.env.MAX_MEMORY || '390M';

pm2.connect(function() {
  pm2.start({
    name: serverName,
    script: 'server/production-start.js',
    'exec_mode': 'cluster',
    instances: instances,
    'max_memory_restart': maxMemory,
    'NODE_ENV': 'production'
  }, function() {
    console.log(
      'pm2 started %s with %s instances at %s max memory',
      serverName,
      instances,
      maxMemory
    );
    pm2.disconnect();
  });
});
