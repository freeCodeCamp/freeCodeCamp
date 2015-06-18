var pm2 = require('pm2');
pm2.connect(function() {
  pm2.start({
    script: 'server/server.js',
    exec_mode: 'fork',
    max_memory_restart: '900M'
  }, function(err, apps) {
    pm2.disconnect();
  });
});
