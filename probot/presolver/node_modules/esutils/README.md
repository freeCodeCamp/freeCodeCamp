### esutils [![Build Status](https://secure.travis-ci.org/estools/esutils.svg)](http://travis-ci.org/estools/esutils)
esutils ([esutils](http://github.com/estools/esutils)) is
utility box for ECMAScript language tools.

### API

### ast

#### ast.isExpression(node)

Returns true if `node` is an Expression as defined in ECMA262 edition 5.1 section
[11](https://es5.github.io/#x11).

#### ast.isStatement(node)

Returns true if `node` is a Statement as defined in ECMA262 edition 5.1 section
[12](https://es5.github.io/#x12).

#### ast.isIterationStatement(node)

Returns true if `node` is an IterationStatement as defined in ECMA262 edition
5.1 section [12.6](https://es5.github.io/#x12.6).

#### ast.isSourceElement(node)

Returns true if `node` is a SourceElement as defined in ECMA262 edition 5.1
section [14](https://es5.github.io/#x14).

#### ast.trailingStatement(node)

Returns `Statement?` if `node` has trailing `Statement`.
```js
if (cond)
    consequent;
```
When taking this `IfStatement`, returns `consequent;` statement.

#### ast.isProblematicIfStatement(node)

Returns true if `node` is a problematic IfStatement. If `node` is a problematic `IfStatement`, `node` cannot be represented as an one on one JavaScript code.
```js
{
    type: 'IfStatement',
    consequent: {
        type: 'WithStatement',
        body: {
            type: 'IfStatement',
            consequent: {type: 'EmptyStatement'}
        }
    },
    alternate: {type: 'EmptyStatement'}
}
```
The above node cannot be represented as a JavaScript code, since the top level `else` alternate belongs to an inner `IfStatement`.


### code

#### code.isDecimalDigit(code)

Return true if provided code is decimal digit.

#### code.isHexDigit(code)

Return true if provided code is hexadecimal digit.

#### code.isOctalDigit(code)

Return true if provided code is octal digit.

#### code.isWhiteSpace(code)

Return true if provided code is white space. White space characters are formally defined in ECMA262.

#### code.isLineTerminator(code)

Return true if provided code is line terminator. Line terminator characters are formally defined in ECMA262.

#### code.isIdentifierStart(code)

Return true if provided code can be the first character of ECMA262 Identifier. They are formally defined in ECMA262.

#### code.isIdentifierPart(code)

Return true if provided code can be the trailing character of ECMA262 Identifier. They are formally defined in ECMA262.

### keyword

#### keyword.isKeywordES5(id, strict)

Returns `true` if provided identifier string is a Keyword or Future Reserved Word
in ECMA262 edition 5.1. They are formally defined in ECMA262 sections
[7.6.1.1](http://es5.github.io/#x7.6.1.1) and [7.6.1.2](http://es5.github.io/#x7.6.1.2),
respectively. If the `strict` flag is truthy, this function additionally checks whether
`id` is a Keyword or Future Reserved Word under strict mode.

#### keyword.isKeywordES6(id, strict)

Returns `true` if provided identifier string is a Keyword or Future Reserved Word
in ECMA262 edition 6. They are formally defined in ECMA262 sections
[11.6.2.1](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-keywords) and
[11.6.2.2](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-future-reserved-words),
respectively. If the `strict` flag is truthy, this function additionally checks whether
`id` is a Keyword or Future Reserved Word under strict mode.

#### keyword.isReservedWordES5(id, strict)

Returns `true` if provided identifier string is a Reserved Word in ECMA262 edition 5.1.
They are formally defined in ECMA262 section [7.6.1](http://es5.github.io/#x7.6.1).
If the `strict` flag is truthy, this function additionally checks whether `id`
is a Reserved Word under strict mode.

#### keyword.isReservedWordES6(id, strict)

Returns `true` if provided identifier string is a Reserved Word in ECMA262 edition 6.
They are formally defined in ECMA262 section [11.6.2](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-reserved-words).
If the `strict` flag is truthy, this function additionally checks whether `id`
is a Reserved Word under strict mode.

#### keyword.isRestrictedWord(id)

Returns `true` if provided identifier string is one of `eval` or `arguments`.
They are restricted in strict mode code throughout ECMA262 edition 5.1 and
in ECMA262 edition 6 section [12.1.1](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-identifiers-static-semantics-early-errors).

#### keyword.isIdentifierName(id)

Return true if provided identifier string is an IdentifierName as specified in
ECMA262 edition 5.1 section [7.6](https://es5.github.io/#x7.6).

#### keyword.isIdentifierES5(id, strict)

Return true if provided identifier string is an Identifier as specified in
ECMA262 edition 5.1 section [7.6](https://es5.github.io/#x7.6). If the `strict`
flag is truthy, this function additionally checks whether `id` is an Identifier
under strict mode.

#### keyword.isIdentifierES6(id, strict)

Return true if provided identifier string is an Identifier as specified in
ECMA262 edition 6 section [12.1](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-identifiers).
If the `strict` flag is truthy, this function additionally checks whether `id`
is an Identifier under strict mode.

### License

Copyright (C) 2013 [Yusuke Suzuki](http://github.com/Constellation)
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
