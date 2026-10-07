#!/bin/bash
set -eu

files=$(ls ./src/_*.js | xargs -I "{}" basename {} .js)
lines=$(echo $files | tr " " "\n")

content='';

for src in $lines; do
  name=$(echo $src | perl -pe 's/(^|_)./uc($&)/ge;s/_//g')
  if [ $name = "classNameTdzError" ]; then
    name='classNameTDZError';
  fi
  if [ $name = "typeof" ]; then
    name='_typeof';
  fi
  if [ $name = "instanceof" ]; then
    name='_instanceof';
  fi
  if [ $name = "throw" ]; then
    name='_throw';
  fi
  echo "export { default as $name } from './$src.mjs';"
done