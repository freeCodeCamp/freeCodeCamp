/* eslint semi: "off", indent: "off" */
// https://github.com/marcuswestin/store.js/issues/235

var engine = require('../../src/store-engine');

const store = engine.createStore(
	[ require('../../storages/localStorage'), require('../../storages/memoryStorage') ],
	[ require('../../plugins/expire'), require('../../plugins/events') ]
);

store.set('foo', 'bar', new Date().getTime() - 1);
store.set('foo', 'bar');

store.set('foo', 'bar');
