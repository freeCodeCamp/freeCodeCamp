---
id: 5a23c84252665b21eecc803f
title: 整数の数字和
challengeType: 1
forumTopicId: 302331
dashedName: sum-digits-of-an-integer
---

# --description--

パラメータとして文字列を取る関数を記述してください。 この文字列は任意の基数 (37未満) での数値を表し、その桁の合計を返します。

<ul>
  <li><b>1</b><sub>10</sub> の合計は <b>1</b></li>
  <li><b>1234</b><sub>10</sub> の合計は <b>10</b></li>
  <li><b>fe</b><sub>16</sub> の合計は <b>29</b></li>
  <li><b>f0e</b><sub>16</sub> の合計は <b>29</b></li>
</ul>

# --hints--

`sumDigits` は関数とします。

```js
assert(typeof sumDigits == 'function');
```

`sumDigits("1")` は数値を返す必要があります。

```js
assert(typeof sumDigits('1') == 'number');
```

`sumDigits("1")` は `1` を返す必要があります。

```js
assert.equal(sumDigits('1'), 1);
```

`sumDigits("12345")` は `15` を返す必要があります。

```js
assert.equal(sumDigits('12345'), 15);
```

`sumDigits("254")` は `11` を返す必要があります。

```js
assert.equal(sumDigits('254'), 11);
```

`sumDigits("fe")` は `29` を返す必要があります。

```js
assert.equal(sumDigits('fe'), 29);
```

`sumDigits("f0e")` は `29` を返す必要があります。

```js
assert.equal(sumDigits('f0e'), 29);
```

`sumDigits("999ABCXYZ")` は `162` を返す必要があります。

```js
assert.equal(sumDigits('999ABCXYZ'), 162);
```

# --seed--

## --seed-contents--

```js
function sumDigits(n) {

}
```

# --solutions--

```js
function sumDigits(n) {
  n += '';
  for (var s = 0, i = 0, e = n.length; i < e; i += 1)
    s += parseInt(n.charAt(i), 36);
  return s;
}
```
