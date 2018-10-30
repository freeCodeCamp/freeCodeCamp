Escope ([escope](http://github.com/estools/escope)) is
[ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
scope analyzer extracted from [esmangle project](http://github.com/estools/esmangle).

[![Build Status](https://travis-ci.org/estools/escope.png?branch=master)](https://travis-ci.org/estools/escope)

### Example

```js
var escope = require('escope');
var esprima = require('esprima');
var estraverse = require('estraverse');

var ast = esprima.parse(code);
var scopeManager = escope.analyze(ast);

var currentScope = scopeManager.acquire(ast);   // global scope

estraverse.traverse(ast, {
    enter: function(node, parent) {
        // do stuff
        
        if (/Function/.test(node.type)) {
            currentScope = scopeManager.acquire(node);  // get current function scope
        }
    },
    leave: function(node, parent) {
        if (/Function/.test(node.type)) {
            currentScope = currentScope.upper;  // set to parent scope
        }
        
        // do stuff
    }
});
```

### Document

Generated JSDoc is [here](http://estools.github.io/escope/).

### Demos and Tools

Demonstration is [here](http://mazurov.github.io/escope-demo/) by [Sasha Mazurov](https://github.com/mazurov) (twitter: [@mazurov](http://twitter.com/mazurov)). [issue](https://github.com/estools/escope/issues/14)

![Demo](https://f.cloud.github.com/assets/75759/462920/7aa6dd40-b4f5-11e2-9f07-9f4e8d0415f9.gif)


And there are tools constructed on Escope.

- [Esmangle](https://github.com/estools/esmangle) is a minifier / mangler / optimizer.
- [Eslevels](https://github.com/mazurov/eslevels) is a scope levels analyzer and [SublimeText plugin for scope context coloring](https://github.com/mazurov/sublime-levels) is constructed on it.
- [Esgoggles](https://github.com/keeyipchan/esgoggles) is JavaScript code browser.


### License

Copyright (C) 2012-2013 [Yusuke Suzuki](http://github.com/Constellation)
 (twitter: [@Constellation](http://twitter.com/Constellation)) and other contributors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.

  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
