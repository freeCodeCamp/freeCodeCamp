<h1 align=center>
  <a href="http://chaijs.com" title="Chai Documentation">
    <img alt="ChaiJS" src="http://chaijs.com/img/chai-logo.png">
  </a>
  <br>
  chai
</h1>

<p align=center>
  Chai is a BDD / TDD assertion library for <a href="http://nodejs.org">node</a> and the browser that can be delightfully paired with any javascript testing framework.
</p>

<p align=center>
  <a href="https://www.npmjs.com/package/chai">
    <img
      alt="downloads:?"
      src="https://img.shields.io/npm/dm/chai.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/package/chai">
    <img
      alt="node:?"
      src="https://img.shields.io/badge/node-%3E=18.0-blue.svg?style=flat-square"
    />
  </a>
  <br/>
  <a href="https://chai-slack.herokuapp.com/">
    <img
      alt="Join the Slack chat"
      src="https://img.shields.io/badge/slack-join%20chat-E2206F.svg?style=flat-square"
    />
  </a>
  <a href="https://gitter.im/chaijs/chai">
    <img
      alt="Join the Gitter chat"
      src="https://img.shields.io/badge/gitter-join%20chat-D0104D.svg?style=flat-square"
    />
  </a>
  <a href="https://opencollective.com/chaijs">
    <img
      alt="OpenCollective Backers"
      src="https://opencollective.com/chaijs/backers/badge.svg?style=flat-square"
    />
  </a>
</p>

For more information or to download plugins, view the [documentation](http://chaijs.com).

## What is Chai?

Chai is an _assertion library_, similar to Node's built-in `assert`. It makes testing much easier by giving you lots of assertions you can run against your code.

## Installation

### Node.js

`chai` is available on [npm](http://npmjs.org). To install it, type:

    $ npm install --save-dev chai

### Browsers

You can also use it within the browser; install via npm and use the `index.js` file found within the download. For example:

```html
<script src="./node_modules/chai/index.js" type="module"></script>
```

## Usage

Import the library in your code, and then pick one of the styles you'd like to use - either `assert`, `expect` or `should`:

```js
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
```

### Register the chai testing style globally

```js
import 'chai/register-assert';  // Using Assert style
import 'chai/register-expect';  // Using Expect style
import 'chai/register-should';  // Using Should style
```

### Import assertion styles as local variables

```js
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
should();  // Modifies `Object.prototype`

import { expect, use } from 'chai';  // Creates local variables `expect` and `use`; useful for plugin use
```

### Usage with Mocha

```bash
mocha spec.js --require chai/register-assert.js  # Using Assert style
mocha spec.js --require chai/register-expect.js  # Using Expect style
mocha spec.js --require chai/register-should.js  # Using Should style
```

[Read more about these styles in our docs](http://chaijs.com/guide/styles/).

## Plugins

Chai offers a robust Plugin architecture for extending Chai's assertions and interfaces.

- Need a plugin? View the [official plugin list](http://chaijs.com/plugins).
- Want to build a plugin? Read the [plugin api documentation](http://chaijs.com/guide/plugins/).
- Have a plugin and want it listed? Simply add the following keywords to your package.json:
  -  `chai-plugin`
  -  `browser` if your plugin works in the browser as well as Node.js
  -  `browser-only` if your plugin does not work with Node.js

### Related Projects

- [chaijs / chai-docs](https://github.com/chaijs/chai-docs): The chaijs.com website source code.
- [chaijs / assertion-error](https://github.com/chaijs/assertion-error): Custom `Error` constructor thrown upon an assertion failing.
- [chaijs / deep-eql](https://github.com/chaijs/deep-eql): Improved deep equality testing for Node.js and the browser.
- [chaijs / check-error](https://github.com/chaijs/check-error): Error comparison and information related utility for Node.js and the browser.
- [chaijs / loupe](https://github.com/chaijs/loupe): Inspect utility for Node.js and browsers.
- [chaijs / pathval](https://github.com/chaijs/pathval): Object value retrieval given a string path.

### Contributing

Thank you very much for considering to contribute!

Please make sure you follow our [Code Of Conduct](https://github.com/chaijs/chai/blob/master/CODE_OF_CONDUCT.md) and we also strongly recommend reading our [Contributing Guide](https://github.com/chaijs/chai/blob/master/CONTRIBUTING.md).

Here are a few issues other contributors frequently ran into when opening pull requests:

- Please do not commit changes to the `chai.js` build. We do it once per release.
- Before pushing your commits, please make sure you [rebase](https://github.com/chaijs/chai/blob/master/CONTRIBUTING.md#pull-requests) them.

### Contributors

Please see the full
[Contributors Graph](https://github.com/chaijs/chai/graphs/contributors) for our
list of contributors.

### Core Contributors

Feel free to reach out to any of the core contributors with your questions or
concerns. We will do our best to respond in a timely manner.

[![Keith Cirkel](https://avatars3.githubusercontent.com/u/118266?v=3&s=50)](https://github.com/keithamus)
[![James Garbutt](https://avatars3.githubusercontent.com/u/5677153?v=3&s=50)](https://github.com/43081j)
[![Kristján Oddsson](https://avatars3.githubusercontent.com/u/318208?v=3&s=50)](https://github.com/koddsson)

### Core Contributor Alumni

This project would not be what it is without the contributions from our prior
core contributors, for whom we are forever grateful:

[![Jake Luer](https://avatars3.githubusercontent.com/u/58988?v=3&s=50)](https://github.com/logicalparadox)
[![Veselin Todorov](https://avatars3.githubusercontent.com/u/330048?v=3&s=50)](https://github.com/vesln)
[![Lucas Fernandes da Costa](https://avatars3.githubusercontent.com/u/6868147?v=3&s=50)](https://github.com/lucasfcosta)
[![Grant Snodgrass](https://avatars3.githubusercontent.com/u/17260989?v=3&s=50)](https://github.com/meeber)
