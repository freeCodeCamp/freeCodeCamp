---
id: 59667989bf71cf555dd5d2ff
title: S-表達式
challengeType: 1
forumTopicId: 302303
dashedName: s-expressions
---

# --description--

<a href="https://rosettacode.org/wiki/S-expressions" target="_blank" rel="noopener noreferrer nofollow">S-Expressions</a> are one convenient way to parse and store data.

# --instructions--

Write a simple reader/parser for S-Expressions that handles quoted and unquoted strings, integers and floats.

The function should read a single but nested S-Expression from a string and return it as a (nested) array.

Newlines and other whitespace may be ignored unless contained within a quoted string.

"`()`" inside quoted strings are not interpreted, but treated as part of the string.

Handling escaped quotes inside a string is optional; thus "`(foo"bar)`" may be treated as a string "`foo"bar`", or as an error.

For this, the reader need not recognize `\` for escaping, but should, in addition, recognize numbers if the language has appropriate data types.

Note that with the exception of `()"` (`\` if escaping is supported) and whitespace, there are no special characters. 其他任何內容都是允許的，不帶引號。

讀者應該能夠閱讀以下輸入

<pre>((data "quoted data" 123 4.5)
(data (!@# (4.5) "(more" "data)")))
</pre>

and turn it into a native data structure.

# --hints--

`parseSexpr` 是一個函數。

```js
assert(typeof parseSexpr === 'function');
```

`parseSexpr('(data1 data2 data3)')` 應該返回 `['data1', 'data2', 'data3']`

```js
assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution);
```

`parseSexpr('((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))')` should return `[['data', '"quoted data"', 123, 4.5], ['data', ['!@#', [4.5], '"(more"', '"data)"']]]`.

```js
assert.deepEqual(parseSexpr(basicSExpr), basicSolution);
```

# --seed--

## --after-user-code--

```js
const simpleSExpr = '(data1 data2 data3)';
const simpleSolution = ['data1', 'data2', 'data3'];

const basicSExpr = '((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))';
const basicSolution = [["data","\"quoted data\"",123,4.5],["data",["!@#",[4.5],"\"(more\"","\"data)\""]]];
```

## --seed-contents--

```js
function parseSexpr(str) {

  return true;
}
```

# --solutions--

```js
function parseSexpr(str) {
  const t = str.match(/\s*("[^"]*"|\(|\)|"|[^\s()"]+)/g);
  for (var o, c = 0, i = t.length - 1; i >= 0; i--) {
    var n,
      ti = t[i].trim();
    if (ti == '"') return;
    else if (ti == '(') t[i] = '[', c += 1;
    else if (ti == ')') t[i] = ']', c -= 1;
    else if ((n = +ti) == ti) t[i] = n;
    else t[i] = `'${ti.replace('\'', '\\\'')}'`;
    if (i > 0 && ti != ']' && t[i - 1].trim() != '(') t.splice(i, 0, ',');
    if (!c) if (!o) o = true; else return;
  }
  return c ? undefined : eval(t.join(''));
}
```
