---
id: 5eb3e4aa847216613aa81983
title: 半素数
challengeType: 1
forumTopicId: 385318
dashedName: semiprime
---

# --description--

Semiprime numbers are natural numbers that are products of exactly two (possibly equal) <a href="https://rosettacode.org/wiki/prime_number" target="_blank" rel="noopener noreferrer nofollow">prime numbers</a>.

<pre>1679  =  23 x 73</pre>

# --instructions--

数値が半素数の場合は true を返し、それ以外の場合は false を返す関数を記述してください。

# --hints--

`isSemiPrime` は関数とします。

```js
assert(typeof isSemiPrime === 'function');
```

`isSemiPrime(100)` はブール値を返す必要があります。

```js
assert(typeof isSemiPrime(100) === 'boolean');
```

`isSemiPrime(100)` は `false` を返す必要があります。

```js
assert.equal(isSemiPrime(100), false);
```

`isSemiPrime(504)` は `false` を返す必要があります。

```js
assert.equal(isSemiPrime(504), false);
```

`isSemiPrime(4)` は `true` を返す必要があります。

```js
assert.equal(isSemiPrime(4), true);
```

`isSemiPrime(46)` は `true` を返す必要があります。

```js
assert.equal(isSemiPrime(46), true);
```

`isSemiPrime(13)` は `false` を返す必要があります。

```js
assert.equal(isSemiPrime(13), false);
```

`isSemiPrime(74)` は `true` を返す必要があります。

```js
assert.equal(isSemiPrime(74), true);
```

`isSemiPrime(1679)` は `true` を返す必要があります。

```js
assert.equal(isSemiPrime(1679), true);
```

`isSemiPrime(2)` は `false` を返す必要があります。

```js
assert.equal(isSemiPrime(2), false);
```

`isSemiPrime(95)` は `true` を返す必要があります。

```js
assert.equal(isSemiPrime(95), true);
```

`isSemiPrime(124)` は `false` を返す必要があります。

```js
assert.equal(isSemiPrime(124), false);
```

# --seed--

## --seed-contents--

```js
function isSemiPrime(n) {

}
```

# --solutions--

```js
function isSemiPrime(n) {
  if (n <= 3) return false;

  var ans = [];
  var done = false;
  while (!done) {
    if (n % 2 === 0) {
      ans.push(2);
      n /= 2;
      continue;
    }
    if (n % 3 === 0) {
      ans.push(3);
      n /= 3;
      continue;
    }
    if (n === 1) return ans.length == 2;
    var sr = Math.sqrt(n);
    done = true;
    // try to divide the checked number by all numbers till its square root.
    for (var i = 6; i <= sr; i += 6) {
      if (n % (i - 1) === 0) {
        // is n divisible by i-1?
        ans.push(i - 1);
        n /= i - 1;
        done = false;
        break;
      }
      if (n % (i + 1) === 0) {
        // is n divisible by i+1?
        ans.push(i + 1);
        n /= i + 1;
        done = false;
        break;
      }
    }
  }
  ans.push(n);
  return ans.length == 2;
}
```
