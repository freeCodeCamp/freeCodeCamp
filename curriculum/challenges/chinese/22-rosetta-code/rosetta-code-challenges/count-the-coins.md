---
id: 59713bd26bdeb8a594fb9413
title: 数硬币
challengeType: 1
forumTopicId: 302238
dashedName: count-the-coins
---

# --description--

There are four types of common coins in US currency:

<ul>
  <li>quarters (25 cents)</li>
  <li>dimes (10 cents)</li>
  <li>nickels (5 cents), and</li>
  <li>pennies (1 cent)</li>
</ul>

<p>有六种方法可以用 15 美分的找零：</p>

<ul>
  <li>A dime and a nickel</li>
  <li>一个小铜币和 5 便士</li>
  <li>3 个镍币</li>
  <li>2 个镍币和 5 便士</li>
  <li>1 个镍币和 10 便士</li>
  <li>15 便士</li>
</ul>

# --instructions--

实现一个函数来确定有多少种对给定输入 `cents` 的找零方式， 找零可以使用一定数量的美国硬币。

# --hints--

`countCoins` 应该是一个函数。

```js
assert(typeof countCoins === 'function');
```

`countCoins(15)` 应该返回 `6`。

```js
assert.equal(countCoins(15), 6);
```

`countCoins(85)` should return `163`.

```js
assert.equal(countCoins(85), 163);
```

`countCoins(100)` 应该返回 `242`。

```js
assert.equal(countCoins(100), 242);
```

# --seed--

## --seed-contents--

```js
function countCoins(cents) {

  return true;
}
```

# --solutions--

```js
function countCoins(cents) {
  const operands = [1, 5, 10, 25];
  const targetsLength = cents + 1;
  const operandsLength = operands.length;
  const t = [1];

  for (let a = 0; a < operandsLength; a++) {
    for (let b = 1; b < targetsLength; b++) {
      // initialise undefined target
      t[b] = t[b] ? t[b] : 0;

      // accumulate target + operand ways
      t[b] += (b < operands[a]) ? 0 : t[b - operands[a]];
    }
  }

  return t[targetsLength - 1];
}
```
