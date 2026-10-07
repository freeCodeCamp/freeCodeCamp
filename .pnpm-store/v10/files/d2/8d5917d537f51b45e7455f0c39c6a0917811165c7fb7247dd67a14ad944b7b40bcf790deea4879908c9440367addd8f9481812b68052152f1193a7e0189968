## vscode-uri

[![Build Status](https://travis-ci.org/Microsoft/vscode-uri.svg?branch=master)](https://travis-ci.org/Microsoft/vscode-uri)

This module contains the URI implementation that is used by VS Code and its extensions. 
It has support for parsing a string into `scheme`, `authority`, `path`, `query`, and
`fragment` URI components as defined in: http://tools.ietf.org/html/rfc3986

```
  foo://example.com:8042/over/there?name=ferret#nose
  \_/   \______________/\_________/ \_________/ \__/
   |           |            |            |        |
scheme     authority       path        query   fragment
   |   _____________________|__
  / \ /                        \
  urn:example:animal:ferret:nose
```

## Usage

```js
import { URI } from 'vscode-uri'

// parse an URI from string

let uri = URI.parse('https://code.visualstudio.com/docs/extensions/overview#frag')

assert.ok(uri.scheme === 'https');
assert.ok(uri.authority === 'code.visualstudio.com');
assert.ok(uri.path === '/docs/extensions/overview');
assert.ok(uri.query === '');
assert.ok(uri.fragment === 'frag');
assert.ok(uri.toString() === 'https://code.visualstudio.com/docs/extensions/overview#frag')


// create an URI from a fs path

let uri = URI.file('/users/me/c#-projects/');

assert.ok(uri.scheme === 'file');
assert.ok(uri.authority === '');
assert.ok(uri.path === '/users/me/c#-projects/');
assert.ok(uri.query === '');
assert.ok(uri.fragment === '');
assert.ok(uri.toString() === 'file:///users/me/c%23-projects/')
```

## Usage: Util

This module also exports a `Utils` package which is an extension, not part of `vscode.Uri`, and useful for path-math. There is: 

* `Utils.joinPath(URI, paths): URI`
* `Utils.resolvePath(URI, paths): URI`
* `Utils.dirname(URI): string`
* `Utils.basename(URI): string`
* `Utils.extname(URI): string`

All util use posix path-math as defined by the node.js path module. 


## Contributing

The source of this module is taken straight from the [vscode](https://github.com/microsoft/vscode)-sources and because of that issues and pull request should be created in that repository. Thanks and Happy Coding!

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
