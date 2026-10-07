<h1 align="center">
  <b>pidtree</b>
</h1>
<p align="center">
  <!-- CI - TravisCI -->
  <a href="https://travis-ci.org/simonepri/pidtree">
    <img src="https://img.shields.io/travis/simonepri/pidtree/master.svg?label=MacOS%20%26%20Linux" alt="Mac/Linux Build Status" />
  </a>
  <!-- CI - AppVeyor -->
  <a href="https://ci.appveyor.com/project/simonepri/pidtree">
    <img src="https://img.shields.io/appveyor/ci/simonepri/pidtree/master.svg?label=Windows" alt="Windows Build status" />
  </a>
  <!-- Coverage - Codecov -->
  <a href="https://codecov.io/gh/simonepri/pidtree">
    <img src="https://img.shields.io/codecov/c/github/simonepri/pidtree/master.svg" alt="Codecov Coverage report" />
  </a>
  <!-- DM - Snyk -->
  <a href="https://snyk.io/test/github/simonepri/pidtree?targetFile=package.json">
    <img src="https://snyk.io/test/github/simonepri/pidtree/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" />
  </a>
  <!-- DM - David -->
  <a href="https://david-dm.org/simonepri/pidtree">
    <img src="https://david-dm.org/simonepri/pidtree/status.svg" alt="Dependency Status" />
  </a>

  <br/>

  <!-- Code Style - XO-Prettier -->
  <a href="https://github.com/xojs/xo">
    <img src="https://img.shields.io/badge/code_style-XO+Prettier-5ed9c7.svg" alt="XO Code Style used" />
  </a>
  <!-- Test Runner - AVA -->
  <a href="https://github.com/avajs/ava">
    <img src="https://img.shields.io/badge/test_runner-AVA-fb3170.svg" alt="AVA Test Runner used" />
  </a>
  <!-- Test Coverage - Istanbul -->
  <a href="https://github.com/istanbuljs/nyc">
    <img src="https://img.shields.io/badge/test_coverage-NYC-fec606.svg" alt="Istanbul Test Coverage used" />
  </a>
  <!-- Init - ni -->
  <a href="https://github.com/simonepri/ni">
    <img src="https://img.shields.io/badge/initialized_with-ni-e74c3c.svg" alt="NI Scaffolding System used" />
  </a>
  <!-- Release - np -->
  <a href="https://github.com/sindresorhus/np">
    <img src="https://img.shields.io/badge/released_with-np-6c8784.svg" alt="NP Release System used" />
  </a>

  <br/>

  <!-- Version - npm -->
  <a href="https://www.npmjs.com/package/pidtree">
    <img src="https://img.shields.io/npm/v/pidtree.svg" alt="Latest version on npm" />
  </a>
  <!-- License - MIT -->
  <a href="https://github.com/simonepri/pidtree/tree/master/license">
    <img src="https://img.shields.io/github/license/simonepri/pidtree.svg" alt="Project license" />
  </a>
</p>
<p align="center">
  🚸 Cross platform children list of a PID.

  <br/>

  <sub>
    Coded with ❤️ by <a href="#authors">Simone Primarosa</a>.
  </sub>
</p>

## Synopsis

This package is really similar to [ps-tree][gh:ps-tree] but is faster, safer and
provides sub-children results.  
Furthermore ps-tree is [unmaintained][gh:ps-tree-um].

Uuh, and a fancy [CLI](#cli) is also available!

## Usage

```js
var pidtree = require('pidtree')

// Get childs of current process
pidtree(process.pid, function (err, pids) {
  console.log(pids)
  // => []
})

// Include the given pid in the result array
pidtree(process.pid, {root: true}, function (err, pids) {
  console.log(pids)
  // => [727]
})

// Get all the processes of the System (-1 is a special value of this package)
pidtree(-1, function (err, pids) {
  console.log(pids)
  // => [530, 42, ..., 41241]
})

// Include PPID in the results
pidtree(1, {advanced: true}, function (err, pids) {
  console.log(pids)
  // => [{ppid: 1, pid: 530}, {ppid: 1, pid: 42}, ..., {ppid: 1, pid: 41241}]
})

// If no callback is given it returns a promise instead
const pids = await pidtree(1)
console.log(pids)
// => [141, 42, ..., 15242]
```

## Compatibility

| Linux | FreeBSD | NetBSD | SunOS | macOS | Win | AIX |
| --- | --- | --- | --- | --- | --- | --- |
| ✅ | ❓ | ❓ | ❓ | ✅ | ✅ | ❓ |

✅ = Working
❓ = Not tested but should work

Please if your platform is not supported [file an issue][new issue].

## CLI

<img src="https://github.com/simonepri/pidtree/raw/master/media/cli.gif" alt="pidtree cli" width="300" align="right"/>
Show a tree of the processes inside your system inside your terminal.

```bash
npx pidtree $PPID
```
Just replace `$PPID` with one of the pids inside your system.

Or don't pass anything if you want all the pids inside your system.

```bash
npx pidtree
```

To display the output as a list, similar to the one produced from `pgrep -P $PID`,
pass the `--list` flag.

```bash
npx pidtree --list
```

## API

<a name="pidtree"></a>

## pidtree(pid, [options], [callback]) ⇒ <code>[Promise.&lt;Array.&lt;Object&gt;&gt;]</code>
Get the list of children pids of the given pid.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - Only when the callback is not provided.  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| pid | <code>Number</code> \| <code>String</code> |  | A pid. If -1 will return all the pids. |
| [options] | <code>Object</code> |  | Optional options object. |
| [options.root] | <code>Boolean</code> | <code>false</code> | Include the provided pid in the list. Ignored if -1 is passed as pid. |
| [callback] | <code>function</code> |  | Called when the list is ready. If not provided a promise is returned instead. |

## Related

- [pidusage][gh:pidusage] -
Cross-platform process cpu % and memory usage of a PID

## Authors

- **Simone Primarosa** - [simonepri][github:simonepri]

See also the list of [contributors][contributors] who participated in this project.

## License

This project is licensed under the MIT License - see the [license][license] file for details.

<!-- Links -->
[new issue]: https://github.com/simonepri/pidtree/issues/new
[license]: https://github.com/simonepri/pidtree/tree/master/license
[contributors]: https://github.com/simonepri/pidtree/contributors

[github:simonepri]: https://github.com/simonepri

[gh:pidusage]: https://github.com/soyuka/pidusage
[gh:ps-tree]: https://github.com/indexzero/ps-tree
[gh:ps-tree-um]: https://github.com/indexzero/ps-tree/issues/30
