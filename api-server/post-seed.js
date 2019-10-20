const { createPathMigrationMap } = require('../seed/createPathMigrationMap');

createPathMigrationMap().then(() => console.info('path migration map created'));
