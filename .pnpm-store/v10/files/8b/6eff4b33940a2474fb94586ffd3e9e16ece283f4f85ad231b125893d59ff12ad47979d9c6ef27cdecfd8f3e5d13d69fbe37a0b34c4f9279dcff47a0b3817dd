name: CI

on:
  pull_request:
  push:
    branches: [ master ]

jobs:
  tests-linux:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        node-version: [10.x, 12.x, 14.x, 16.x]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install module
        run: npm install
      - name: Run tests
        run: npm test
