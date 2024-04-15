---
id: 5eaf48389ee512d4d103684b
title: 自描述数字
challengeType: 1
forumTopicId: 385289
dashedName: self-describing-numbers
---

# --description--

There are several so-called "self-describing" or "self-descriptive" integers.

如果一个整数具有以下特性，即当数字位置标记为 0 到 N-1 时，每个位置的数字等于该数字在数字中出现的次数，则称其为“自描述”整数。

例如，**2020** 是一个四位数的自描述数字：

<ul>
    <li> position 0 has value 2 and there are two 0s in the number; </li>
    <li> 位置 1 的值为 0，并且数字中没有 1； </li>
    <li> 位置 2 的值为 2，并且数字中有两个 2； </li>
    <li> 位置 3 的值为 0，并且数字中没有 s； </li>
</ul>

小于 100,000,000 的自述数字有：1210、2020、21200、3211000、42101000。

# --instructions--

编写一个以正整数作为参数的函数。 如果是自描述数字，则返回 true。 否则，返回 false。

# --hints--

`isSelfDescribing` 应该是一个函数。

```js
assert(typeof isSelfDescribing == 'function');
```

`isSelfDescribing()` 应该返回一个布尔值。

```js
assert(typeof isSelfDescribing(2020) == 'boolean');
```

`isSelfDescribing(2020)` 应该返回 `true`。

```js
assert.equal(isSelfDescribing(2020), true);
```

`isSelfDescribing(3021)` 应该返回 `false`。

```js
assert.equal(isSelfDescribing(3021), false);
```

`isSelfDescribing(3211000)` 应该返回 `true`。

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
