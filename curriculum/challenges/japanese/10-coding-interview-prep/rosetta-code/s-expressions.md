---
id: 59667989bf71cf555dd5d2ff
title: S式
challengeType: 1
forumTopicId: 302303
dashedName: s-expressions
---

# --description--

<a href="https://rosettacode.org/wiki/S-expressions" target="_blank" rel="noopener noreferrer nofollow">S-Expressions</a> are one convenient way to parse and store data.

# --instructions--

引用符付きおよび引用符無しの文字列、整数、浮動小数点数を扱う S 式の単純なリーダー/パーサーを記述してください。

この関数は、文字列から単一であるが入れ子になったS式を読み込み、(ネストされた) 配列として返さなければなりません。

引用符付き文字列に含まれない限り、改行やその他の空白は無視することができます。

引用符付き文字列内の "`()`" は解釈されず、文字列の一部として扱われます。

文字列内でエスケープ処理された引用符を扱うことは任意です。 従って、"`(foo"bar)`" は文字列 "`foo"bar`" として扱われるか、エラーとして扱われる可能性があります。

このため、リーダーはエスケープ処理のために `\` を認識する必要はありませんが、言語に適切なデータ型がある場合には、数値の認識も必要です。

`()"` (エスケープがサポートされている場合は `\`) と空白を除き、特殊文字は存在しないことに注意してください。 他のものはすべて引用符なしで許可されます。

リーダーは次の入力を読める必要があります

<pre>((data "quoted data" 123 4.5)
(data (!@# (4.5) "(more" "data)")))
</pre>

and turn it into a native data structure.

# --hints--

`parseSexpr` は関数とします。

```js
assert(typeof parseSexpr === 'function');
```

`parseSexpr('(data1 data2 data3)')` は `['data1', 'data2', 'data3']` を返す必要があります。

```js
assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution);
```

`parseSexpr('((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))')` は `[['data', '"quoted data"', 123, 4.5], ['data', ['!@#', [4.5], '"(more"', '"data)"']]]` を返す必要があります。

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
