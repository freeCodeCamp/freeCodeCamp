---
id: 59667989bf71cf555dd5d2ff
title: S-表达式
challengeType: 1
forumTopicId: 302303
dashedName: s-expressions
---

# --description--

<a href="https://rosettacode.org/wiki/S-expressions" target="_blank" rel="noopener noreferrer nofollow">S-Expressions</a> are one convenient way to parse and store data.

# --instructions--

为 S-表达式编写一个简单的读取器/解析器，处理带引号和不带引号的字符串，整数以及浮点数。

该函数应读取一个字符串中的单个嵌套 S-表达式，并将其作为（嵌套的）数组返回。

除非包含在引号字符串中，否则可以忽略换行符和其他空格。

引用字符串中的“`()`”不会被解释，而是被视为字符串的一部分。

处理字符串中的转义引号是可选的；因此 "`(foo"bar)`" 可以被视为字符串 "`foo"bar`"，或者作为一个错误。

为此，解析器无需识别 `\` 以进行转义，但如果语言具有适当的数据类型，则还应识别数字。

请注意，除了`()"`（`\`，如果支持转义）和空格，没有特殊字符。 其他任何内容都是允许的，不带引号。

读者应该能够阅读以下输入

<pre>((data "quoted data" 123 4.5)
(data (!@# (4.5) "(more" "data)")))
</pre>

并将其转换为原生的数据结构。

# --hints--

`parseSexpr` 是一个函数。

```js
assert(typeof parseSexpr === 'function');
```

`parseSexpr('(data1 data2 data3)')` 应该返回 `['data1', 'data2', 'data3']`

```js
assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution);
```

`parseSexpr('((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))')` 应当返回 `[['data', '"quoted data"', 123, 4.5], ['data', ['!@#', [4.5], '"(more"', '"data)"']]]`。

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
