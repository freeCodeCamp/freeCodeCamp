name: CI

on:
  push:
    branches:
     - main
     - master
     - next
     - 'v*'
    paths-ignore:
      - 'docs/**'
      - '*.md'
  pull_request:
    paths-ignore:
      - 'docs/**'
      - '*.md'

jobs:
  test-regression-check-node10:
    name: Test compatibility with Node.js 10
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          persist-credentials: false

      - uses: actions/setup-node@v4
        with:
          node-version: '10'
          cache: 'npm'
          cache-dependency-path: package.json
          check-latest: true

      - name: Install
        run: |
          npm install --ignore-scripts

      - name: Copy project as fast-uri to node_node_modules
        run: |
          rm -rf ./node_modules/fast-uri/lib &&
          rm -rf ./node_modules/fast-uri/index.js &&
          cp -r ./lib ./node_modules/fast-uri/lib &&
          cp ./index.js ./node_modules/fast-uri/index.js

      - name: Run tests
        run: |
          npm run test:unit
        env:
          NODE_OPTIONS: no-network-family-autoselection

  test:
    needs:
      - test-regression-check-node10
    uses: fastify/workflows/.github/workflows/plugins-ci.yml@v5
    with:
      license-check: true
      lint: true
      node-versions: '["16", "18", "20", "22"]'
