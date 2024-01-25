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

爲 S-表達式編寫一個簡單的讀取器/解析器，處理帶引號和不帶引號的字符串，整數以及浮點數。

該函數應讀取一個字符串中的單個嵌套 S-表達式，並將其作爲（嵌套的）數組返回。

除非包含在引號字符串中，否則可以忽略換行符和其他空格。

引用字符串中的“`()`”不會被解釋，而是被視爲字符串的一部分。

處理字符串中的轉義引號是可選的；因此 "`(foo"bar)`" 可以被視爲字符串 "`foo"bar`"，或者作爲一個錯誤。

爲此，解析器無需識別 `\` 以進行轉義，但如果語言具有適當的數據類型，則還應識別數字。

請注意，除了`()"`（`\`，如果支持轉義）和空格，沒有特殊字符。 其他任何內容都是允許的，不帶引號。

讀者應該能夠閱讀以下輸入

<pre>((data "quoted data" 123 4.5)
(data (!@# (4.5) "(more" "data)")))
</pre>

並將其轉換爲原生的數據結構。

# --hints--

`parseSexpr` 是一個函數。

```js
assert(typeof parseSexpr === 'function');
```

`parseSexpr('(data1 data2 data3)')` 應該返回 `['data1', 'data2', 'data3']`

```js
assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution);
```

`parseSexpr('((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))')` 應當返回 `[['data', '"quoted data"', 123, 4.5], ['data', ['!@#', [4.5], '"(more"', '"data)"']]]`。

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
