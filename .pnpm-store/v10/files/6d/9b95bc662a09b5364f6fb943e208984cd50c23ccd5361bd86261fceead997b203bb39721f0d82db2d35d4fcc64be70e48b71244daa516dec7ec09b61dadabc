{
  "name": "setprototypeof",
  "version": "1.2.0",
  "description": "A small polyfill for Object.setprototypeof",
  "main": "index.js",
  "typings": "index.d.ts",
  "scripts": {
    "test": "standard && mocha",
    "testallversions": "npm run node010 && npm run node4 && npm run node6 && npm run node9 && npm run node11",
    "testversion": "docker run -it --rm -v $(PWD):/usr/src/app -w /usr/src/app node:${NODE_VER} npm install mocha@${MOCHA_VER:-latest} && npm t",
    "node010": "NODE_VER=0.10 MOCHA_VER=3 npm run testversion",
    "node4": "NODE_VER=4 npm run testversion",
    "node6": "NODE_VER=6 npm run testversion",
    "node9": "NODE_VER=9 npm run testversion",
    "node11": "NODE_VER=11 npm run testversion",
    "prepublishOnly": "npm t",
    "postpublish": "git push origin && git push origin --tags"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/wesleytodd/setprototypeof.git"
  },
  "keywords": [
    "polyfill",
    "object",
    "setprototypeof"
  ],
  "author": "Wes Todd",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/wesleytodd/setprototypeof/issues"
  },
  "homepage": "https://github.com/wesleytodd/setprototypeof",
  "devDependencies": {
    "mocha": "^6.1.4",
    "standard": "^13.0.2"
  }
}
