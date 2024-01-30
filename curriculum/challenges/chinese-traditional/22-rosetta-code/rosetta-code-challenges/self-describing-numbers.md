---
id: 5eaf48389ee512d4d103684b
title: 自描述數字
challengeType: 1
forumTopicId: 385289
dashedName: self-describing-numbers
---

# --description--

There are several so-called "self-describing" or "self-descriptive" integers.

如果一個整數具有以下特性，即當數字位置標記爲 0 到 N-1 時，每個位置的數字等於該數字在數字中出現的次數，則稱其爲“自描述”整數。

例如，**2020** 是一個四位數的自描述數字：

<ul>
    <li> position 0 has value 2 and there are two 0s in the number; </li>
    <li> 位置 1 的值爲 0，並且數字中沒有 1； </li>
    <li> 位置 2 的值爲 2，並且數字中有兩個 2； </li>
    <li> 位置 3 的值爲 0，並且數字中沒有 s； </li>
</ul>

小於 100,000,000 的自述數字有：1210、2020、21200、3211000、42101000。

# --instructions--

編寫一個以正整數作爲參數的函數。 如果是自描述數字，則返回 true。 否則，返回 false。

# --hints--

`isSelfDescribing` 應該是一個函數。

```js
assert(typeof isSelfDescribing == 'function');
```

`isSelfDescribing()` 應該返回一個布爾值。

```js
assert(typeof isSelfDescribing(2020) == 'boolean');
```

`isSelfDescribing(2020)` 應該返回 `true`。

```js
assert.equal(isSelfDescribing(2020), true);
```

`isSelfDescribing(3021)` 應該返回 `false`。

```js
assert.equal(isSelfDescribing(3021), false);
```

`isSelfDescribing(3211000)` 應該返回 `true`。

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
