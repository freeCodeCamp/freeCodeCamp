#!/usr/bin/env bash

patch /usr/local/lib/node_modules/npm/node_modules/libcipm/index.js < libcimp_index_js.patch
su node -c "npm ci"
