---
id: 5949b579404977fbaefcd736
title: 90 亿个神的整数名称
challengeType: 1
forumTopicId: 302219
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

This task is a variation of the short story by Arthur C. Clarke.

(解题者应意识到完成这项任务的后果)。

详细地，要指定“名称”的含义：

<ul>
  <li>The integer 1 has 1 name "1".</li>
  <li>The integer 2 has 2 names "1+1" and "2".</li>
  <li>The integer 3 has 3 names "1+1+1", "2+1",  and "3".</li>
  <li>The integer 4 has 5 names "1+1+1+1", "2+1+1", "2+2", "3+1", "4".</li>
  <li>整数 5 有 7 个名称 "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5"。</li>
</ul>

这可以被看作如下的表

<pre>          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
</pre>

第 $n$ 行对应着整数 $n$, 第 $m$ 行中从左到右每一列 $C$ 对应着从 $C$ 开始的整数的名称。

可选地注意第 $n$ 行的总和 $P(n)$ 是整数分段函数。

# --instructions--

实现一个返回第 $n$ 行总和的函数。

# --hints--

`numberOfNames` 应是函数。

```js
assert(typeof numberOfNames === 'function');
```

`numberOfNames(5)` 应该等于 7。

```js
assert.equal(numberOfNames(5), 7);
```

`numberOfNames(12)` 应该等于 77。

```js
assert.equal(numberOfNames(12), 77);
```

`numberOfNames(18)` 应该等于 385。

```js
assert.equal(numberOfNames(18), 385);
```

`numberOfNames(23)` 应该等于 1255。

```js
assert.equal(numberOfNames(23), 1255);
```

`numberOfNames(42)` 应该等于 53174。

```js
assert.equal(numberOfNames(42), 53174);
```

`numberOfNames(123)` 应等于 2552338241。

```js
assert.equal(numberOfNames(123), 2552338241);
```

# --seed--

## --seed-contents--

```js
function numberOfNames(num) {

  return true;
}
```

# --solutions--

```js
function numberOfNames(num) {
  const cache = [
    [1]
  ];
  for (let l = cache.length; l < num + 1; l++) {
    let Aa;
    let Mi;
    const r = [0];
    for (let x = 1; x < l + 1; x++) {
      r.push(r[r.length - 1] + (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[(Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi]);
    }
    cache.push(r);
  }
  return cache[num][cache[num].length - 1];
}
```
