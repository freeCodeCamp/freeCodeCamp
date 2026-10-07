#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const mimeScore = require('mime-score');

let db = require('mime-db');
let chalk = require('chalk');

const STANDARD_FACET_SCORE = 900;

const byExtension = {};

// Clear out any conflict extensions in mime-db
for (let type in db) {
  let entry = db[type];
  entry.type = type;

  if (!entry.extensions) continue;

  entry.extensions.forEach(ext => {
    if (ext in byExtension) {
      const e0 = entry;
      const e1 = byExtension[ext];
      e0.pri = mimeScore(e0.type, e0.source);
      e1.pri = mimeScore(e1.type, e1.source);

      let drop = e0.pri < e1.pri ? e0 : e1;
      let keep = e0.pri >= e1.pri ? e0 : e1;
      drop.extensions = drop.extensions.filter(e => e !== ext);

      console.log(`${ext}: Keeping ${chalk.green(keep.type)} (${keep.pri}), dropping ${chalk.red(drop.type)} (${drop.pri})`);
    }
    byExtension[ext] = entry;
  });
}

function writeTypesFile(types, path) {
  fs.writeFileSync(path, JSON.stringify(types));
}

// Segregate into standard and non-standard types based on facet per
// https://tools.ietf.org/html/rfc6838#section-3.1
const types = {};

Object.keys(db).sort().forEach(k => {
  const entry = db[k];
  types[entry.type] = entry.extensions;
});

writeTypesFile(types, path.join(__dirname, '..', 'types.json'));
