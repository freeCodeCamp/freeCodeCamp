---
id: 59713bd26bdeb8a594fb9413
title: 计算硬币
challengeType: 5
videoUrl: ''
dashedName: count-the-coins
---

# --description--

<p> <a href='https://en.wikipedia.org/wiki/United_States' title='链接：https：//en.wikipedia.org/wiki/United_States'>美国</a>货币有四种常见硬币： </p>季度（25美分）硬币（10美分）镍（5美分）和便士（1美分） <p>有六种方法可以换15美分： </p>一角钱和一角钱一角钱和5便士3镍2镍和5便士一镍和10便士15便士任务： <p>实现一个功能，以确定使用这些普通硬币改变一美元的方式有多少？ （1美元= 100美分）。 </p>参考： <a href='http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_Temp_52' title='链接：http：//mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_Temp_52'>麻省理工学院出版社的算法</a> 。

# --hints--

`countCoins`是一个函数。

```js
assert(typeof countCoins === 'function');
```

`countCoints()`应该返回242。

```js
assert.equal(countCoins(), 242);
```

# --seed--

## --seed-contents--

```js
function countCoins() {

  return true;
}
```

# --solutions--

```js
function countCoins() {
  let t = 100;
  const operands = [1, 5, 10, 25];
  const targetsLength = t + 1;
  const operandsLength = operands.length;
  t = [1];

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
