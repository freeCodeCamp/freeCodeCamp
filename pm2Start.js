var pm2 = require('pm2');
pm2.connect(function() {
  pm2.start({
    name: 'server',
    script: 'server/server.js',
    'exec_mode': 'cluster',
    instances: '2',
    'max_memory_restart': '900M'
  }, function() {
    pm2.disconnect();
  });
});
