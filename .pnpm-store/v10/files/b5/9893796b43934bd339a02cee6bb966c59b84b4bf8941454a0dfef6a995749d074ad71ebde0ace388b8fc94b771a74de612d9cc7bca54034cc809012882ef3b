'use strict';

/* eslint-disable global-require */

require('./create-hash');
require('./create-hmac');
if (!process.browser) {
	require('./dh');
}

require('./pbkdf2');
try {
	require('randombytes')(8);
	require('./ecdh');
	require('./public-encrypt');
	require('./random-bytes');
	require('./sign');
	require('./random-fill');
} catch (e) {
	console.log('no secure rng avaiable');
}
require('./aes');
