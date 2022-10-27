---
id: 59713bd26bdeb8a594fb9413
title: Count the coins
challengeType: 1
forumTopicId: 302238
dashedName: count-the-coins
---

# --description--

There are four types of common coins in US currency:

<ul>
  <li>quarters 铜币(25 美分)</li>
  <li>小铜币（10 美分）</li>
  <li>镍币（5 美分），以及</li>
  <li>pennies 便士(1美分)</li>
</ul>

<p>There are six ways to make change for 15 cents:</p>

<ul>
  <li>1 个小铜币和 1 个镍币</li>
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
