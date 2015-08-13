var pm2 = require('pm2');
pm2.connect(function() {
  pm2.start({
    name: process.env.SERVER_NAME || 'server',
    script: 'server/production-start.js',
    'exec_mode': 'cluster',
    instances: process.env.INSTANCES || 1,
    'max_memory_restart':
      (process.env.MAX_MEMORY / process.env.INSTANCES || 1) || '300M',
    'NODE_ENV': 'production'
  }, function() {
    pm2.disconnect();
  });
});
