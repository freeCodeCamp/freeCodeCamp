{
  "name": "react-dom",
  "version": "18.3.1",
  "description": "React package for working with the DOM.",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react.git",
    "directory": "packages/react-dom"
  },
  "keywords": [
    "react"
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/facebook/react/issues"
  },
  "homepage": "https://reactjs.org/",
  "dependencies": {
    "loose-envify": "^1.1.0",
    "scheduler": "^0.23.2"
  },
  "peerDependencies": {
    "react": "^18.3.1"
  },
  "files": [
    "LICENSE",
    "README.md",
    "index.js",
    "client.js",
    "profiling.js",
    "server.js",
    "server.browser.js",
    "server.node.js",
    "test-utils.js",
    "cjs/",
    "umd/"
  ],
  "exports": {
    ".": "./index.js",
    "./client": "./client.js",
    "./server": {
      "deno": "./server.browser.js",
      "worker": "./server.browser.js",
      "browser": "./server.browser.js",
      "default": "./server.node.js"
    },
    "./server.browser": "./server.browser.js",
    "./server.node": "./server.node.js",
    "./profiling": "./profiling.js",
    "./test-utils": "./test-utils.js",
    "./package.json": "./package.json"
  },
  "browser": {
    "./server.js": "./server.browser.js"
  },
  "browserify": {
    "transform": [
      "loose-envify"
    ]
  }
}