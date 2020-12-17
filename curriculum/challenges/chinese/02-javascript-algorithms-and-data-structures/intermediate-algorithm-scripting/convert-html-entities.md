---
id: a6b0bb188d873cb2c8729495
title: 转换HTML实体
challengeType: 5
---

# --description--

在这道题目中，我们需要写一个转换 HTML entity 的函数。需要转换的 HTML entity 有`&`、`<`、`>`、`"`（双引号）和`'`（单引号）。

# --hints--

`convertHTML('Dolce & Gabbana')`应该返回`Dolce &​amp; Gabbana`。

```js
assert.match(convertHTML('Dolce & Gabbana'), /Dolce &amp; Gabbana/);
```

`convertHTML('Hamburgers < Pizza < Tacos')`应该返回`Hamburgers &​lt; Pizza &​lt; Tacos`。

```js
assert.match(
  convertHTML('Hamburgers < Pizza < Tacos'),
  /Hamburgers &lt; Pizza &lt; Tacos/
);
```

`convertHTML('Sixty > twelve')`应该返回`Sixty &​gt; twelve`。

```js
assert.match(convertHTML('Sixty > twelve'), /Sixty &gt; twelve/);
```

`convertHTML('Stuff in "quotation marks"')`应该返回`Stuff in &​quot;quotation marks&​quot;`。

```js
assert.match(
  convertHTML('Stuff in "quotation marks"'),
  /Stuff in &quot;quotation marks&quot;/
);
```

`convertHTML('Schindler's List')`应该返回`Schindler&​apos;s List`。

```js
assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
```

`convertHTML('<>')`应该返回`&​lt;&​gt;`。

```js
assert.match(convertHTML('<>'), /&lt;&gt;/);
```

`convertHTML('abc')`应该返回`abc`。

```js
assert.strictEqual(convertHTML('abc'), 'abc');
```

# --solutions--

