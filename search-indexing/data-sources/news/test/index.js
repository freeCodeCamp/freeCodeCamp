'use strict';

require('tape-catch');
require('tape').test.onFinish(() => process.exit(0));
require('./sitemap');
require('./parse');
require('./process');
require('./types');
require('./defaults');
