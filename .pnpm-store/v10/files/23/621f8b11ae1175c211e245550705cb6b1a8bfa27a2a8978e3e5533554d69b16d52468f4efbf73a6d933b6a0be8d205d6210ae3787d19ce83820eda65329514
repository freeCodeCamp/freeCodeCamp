name: lint

on:
  pull_request:
  push:
    branches: [ master ]

env:
  NODE_VERSION: 16.x

jobs:
  lint-js:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ env.NODE_VERSION }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ env.NODE_VERSION }}
      - name: Install ESLint + ESLint configs/plugins
        run: npm install --only=dev
      - name: Lint files
        run: npm run lint
