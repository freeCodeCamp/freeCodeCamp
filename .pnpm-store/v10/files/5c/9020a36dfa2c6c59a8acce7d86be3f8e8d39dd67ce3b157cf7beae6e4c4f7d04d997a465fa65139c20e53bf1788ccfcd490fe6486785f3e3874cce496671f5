environment:
  matrix:
    - nodejs_version: '4'
    - nodejs_version: '6'
    - nodejs_version: '7'

install:
  - ps: Install-Product node $env:nodejs_version
  - npm i npminstall && node_modules\.bin\npminstall

test_script:
  - node --version
  - npm --version
  - npm run ci

build: off
