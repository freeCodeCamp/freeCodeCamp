{
  "name": "js-yaml",
  "version": "4.1.0",
  "description": "YAML 1.2 parser and serializer",
  "keywords": [
    "yaml",
    "parser",
    "serializer",
    "pyyaml"
  ],
  "author": "Vladimir Zapparov <dervus.grim@gmail.com>",
  "contributors": [
    "Aleksey V Zapparov <ixti@member.fsf.org> (http://www.ixti.net/)",
    "Vitaly Puzrin <vitaly@rcdesign.ru> (https://github.com/puzrin)",
    "Martin Grenfell <martin.grenfell@gmail.com> (http://got-ravings.blogspot.com)"
  ],
  "license": "MIT",
  "repository": "nodeca/js-yaml",
  "files": [
    "index.js",
    "lib/",
    "bin/",
    "dist/"
  ],
  "bin": {
    "js-yaml": "bin/js-yaml.js"
  },
  "module": "./dist/js-yaml.mjs",
  "exports": {
    ".": {
      "import": "./dist/js-yaml.mjs",
      "require": "./index.js"
    },
    "./package.json": "./package.json"
  },
  "scripts": {
    "lint": "eslint .",
    "test": "npm run lint && mocha",
    "coverage": "npm run lint && nyc mocha && nyc report --reporter html",
    "demo": "npm run lint && node support/build_demo.js",
    "gh-demo": "npm run demo && gh-pages -d demo -f",
    "browserify": "rollup -c support/rollup.config.js",
    "prepublishOnly": "npm run gh-demo"
  },
  "unpkg": "dist/js-yaml.min.js",
  "jsdelivr": "dist/js-yaml.min.js",
  "dependencies": {
    "argparse": "^2.0.1"
  },
  "devDependencies": {
    "@rollup/plugin-commonjs": "^17.0.0",
    "@rollup/plugin-node-resolve": "^11.0.0",
    "ansi": "^0.3.1",
    "benchmark": "^2.1.4",
    "codemirror": "^5.13.4",
    "eslint": "^7.0.0",
    "fast-check": "^2.8.0",
    "gh-pages": "^3.1.0",
    "mocha": "^8.2.1",
    "nyc": "^15.1.0",
    "rollup": "^2.34.1",
    "rollup-plugin-node-polyfills": "^0.2.1",
    "rollup-plugin-terser": "^7.0.2",
    "shelljs": "^0.8.4"
  }
}
