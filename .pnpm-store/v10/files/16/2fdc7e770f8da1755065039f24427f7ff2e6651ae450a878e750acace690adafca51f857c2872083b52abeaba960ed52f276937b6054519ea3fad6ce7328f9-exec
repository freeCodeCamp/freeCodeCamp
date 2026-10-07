#/usr/bin/env bash
set -eux

npx swc src -d lib
ls -alR ./lib

# fsync

if [[ "$OSTYPE" == 'darwin'* ]]; then
  sed -i '' 's/.mjs/.js/g' ./lib/*.js
else
  sed -i 's/.mjs/.js/g' ./lib/*.js
fi