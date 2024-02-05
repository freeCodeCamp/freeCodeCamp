---
id: 5949b579404977fbaefcd736
title: 90 億個神的整數名稱
challengeType: 1
forumTopicId: 302219
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

This task is a variation of the short story by Arthur C. Clarke.

(解題者應意識到完成這項任務的後果)。

詳細地，要指定“名稱”的含義：

<ul>
  <li>The integer 1 has 1 name "1".</li>
  <li>The integer 2 has 2 names "1+1" and "2".</li>
  <li>The integer 3 has 3 names "1+1+1", "2+1",  and "3".</li>
  <li>The integer 4 has 5 names "1+1+1+1", "2+1+1", "2+2", "3+1", "4".</li>
  <li>整數 5 有 7 個名稱 "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5"。</li>
</ul>

這可以被看作如下的表

<pre>          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
</pre>

第 $n$ 行對應着整數 $n$, 第 $m$ 行中從左到右每一列 $C$ 對應着從 $C$ 開始的整數的名稱。

可選地注意第 $n$ 行的總和 $P(n)$ 是整數分段函數。

# --instructions--

實現一個返回第 $n$ 行總和的函數。

# --hints--

`numberOfNames` 應是函數。

```js
assert(typeof numberOfNames === 'function');
```

`numberOfNames(5)` 應該等於 7。

```js
assert.equal(numberOfNames(5), 7);
```

`numberOfNames(12)` 應該等於 77。

```js
assert.equal(numberOfNames(12), 77);
```

`numberOfNames(18)` 應該等於 385。

```js
assert.equal(numberOfNames(18), 385);
```

`numberOfNames(23)` 應該等於 1255。

```js
assert.equal(numberOfNames(23), 1255);
```

`numberOfNames(42)` 應該等於 53174。

```js
assert.equal(numberOfNames(42), 53174);
```

`numberOfNames(123)` 應等於 2552338241。

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
