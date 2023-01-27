---
id: 5eaf48389ee512d4d103684b
title: 自己記述数
challengeType: 1
forumTopicId: 385289
dashedName: self-describing-numbers
---

# --description--

There are several so-called "self-describing" or "self-descriptive" integers.

各桁が 0 から N-1 にラベル付けされているとき、各桁の数字がこの数字内でその桁が現れる回数と同じという性質を持つ場合、その整数は「自己記述数」と呼ばれます。

例えば、 **2020** は4桁の自己記述数です。

<ul>
    <li> 0 の位置の値は 2 で、この数字内には 2 つの 0 があります。 </li>
    <li> 1 の位置の値は 0 で、この数字内には 1 がありません。 </li>
    <li> 2 の位置の値は 2 で、この数字内には 2 つの 2 があります。 </li>
    <li> 3 の位置の値は 0 で、この数字内には 3 がありません。 </li>
</ul>

自己記述数 &lt; 100000000 は、1210, 2020, 21200, 3211000, 42100000 です。

# --instructions--

パラメータとして正の整数を取る関数を記述してください。 それが自己記述数の場合は true を返します。 それ以外の場合は、false を返します。

# --hints--

`isSelfDescribing` は関数とします。

```js
assert(typeof isSelfDescribing == 'function');
```

`isSelfDescribing()` はブール値を返す必要があります。

```js
assert(typeof isSelfDescribing(2020) == 'boolean');
```

`isSelfDescribing(2020)` は `true` を返す必要があります。

```js
assert.equal(isSelfDescribing(2020), true);
```

`isSelfDescribing(3021)` は `false` を返す必要があります。

```js
assert.equal(isSelfDescribing(3021), false);
```

`isSelfDescribing(3211000)` は `true` を返す必要があります。

```js
assert.equal(isSelfDescribing(3211000), true);
```

# --seed--

## --seed-contents--

```js
function isSelfDescribing(n) {

}
```

# --solutions--

```js
function isSelfDescribing(n) {
    let digits = String(n).split("");
    digits = digits.map(function(e) {return parseInt(e)});
    let count = digits.map((x) => {return 0})
    digits.forEach((d) =>{
        if (d >= count.length) {
            return false
        }
        count[d] += 1;
    });

     if (digits === count) {
        return true;
    }
    if (digits.length != count.length) {
        return false;
    }

    for (let i=0; i< digits.length; i++){
      if (digits[i] !== count[i]) {
        return false;
      }
    }
    return true;
}
```
