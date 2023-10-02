---
id: 5949b579404977fbaefcd736
title: 9 billion names of God the integer
challengeType: 1
forumTopicId: 302219
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

This task is a variation of the short story by Arthur C. Clarke.

(Solvers should be aware of the consequences of completing this task.)

In detail, to specify what is meant by a "name":

<ul>
  <li>The integer 1 has 1 name "1".</li>
  <li>The integer 2 has 2 names "1+1" and "2".</li>
  <li>The integer 3 has 3 names "1+1+1", "2+1",  and "3".</li>
  <li>The integer 4 has 5 names "1+1+1+1", "2+1+1", "2+2", "3+1", "4".</li>
  <li>The integer 5 has 7 names "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".</li>
</ul>

This can be visualized in the following form:

<pre>          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
</pre>

Where row $n$ corresponds to integer $n$, and each column $C$ in row $m$ from left to right corresponds to the number of names beginning with $C$.

Optionally note that the sum of the $n$-th row $P(n)$ is the integer partition function.

# --instructions--

Implement a function that returns the sum of the $n$-th row.

# --hints--

`numberOfNames` should be function.

```js
assert(typeof numberOfNames === 'function');
```

`numberOfNames(5)` should equal 7.

```js
assert.equal(numberOfNames(5), 7);
```

`numberOfNames(12)` should equal 77.

```js
assert.equal(numberOfNames(12), 77);
```

`numberOfNames(18)` should equal 385.

```js
assert.equal(numberOfNames(18), 385);
```

`numberOfNames(23)` should equal 1255.

```js
assert.equal(numberOfNames(23), 1255);
```

`numberOfNames(42)` should equal 53174.

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
