#!/usr/bin/env sh

set -e

mkdir -p .browser

echo
echo Preparing browser tests:

find spec -type f -name '*.spec.js' | \
xargs -I {} sh -c \
'export f="{}"; echo $f; browserify $f -t require-globify -t brfs -x ajv -u buffer -o $(echo $f | sed -e "s/spec/.browser/");'
