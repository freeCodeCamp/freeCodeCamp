---
id: 5900f4231000cf542c50ff35
title: 'Problem 182: RSA encryption'
challengeType: 1
forumTopicId: 301818
dashedName: problem-182-rsa-encryption
---

# --description--

The RSA encryption is based on the following procedure:

Generate two distinct primes `p` and `q`.
Compute `n=p*q` and `φ=(p-1)(q-1)`.
Find an integer `e`, `1 < e < φ`, such that `gcd(e,φ) = 1`

A message in this system is a number in the interval `[0,n-1]`.
A text to be encrypted is then somehow converted to messages (numbers in the interval `[0,n-1]`).
To encrypt the text, for each message, `m`, c=m<sup>e</sup> mod n is calculated.

To decrypt the text, the following procedure is needed: calculate `d` such that `ed=1 mod φ`, then for each encrypted message, `c`, calculate m=c<sup>d</sup> mod n.

There exist values of `e` and `m` such that m<sup>e</sup> mod n = m.
We call messages `m` for which m<sup>e</sup> mod n=m unconcealed messages.

An issue when choosing `e` is that there should not be too many unconcealed messages.
For instance, let `p=19` and `q=37`.
Then `n=19*37=703` and `φ=18*36=648`.
If we choose `e=181`, then, although `gcd(181,648)=1` it turns out that all possible messages
m `(0≤m≤n-1)` are unconcealed when calculating m<sup>e</sup> mod n.
For any valid choice of `e` there exist some unconcealed messages.
It's important that the number of unconcealed messages is at a minimum.

For any given `p` and `q`, find the sum of all values of `e`, `1 < e < φ(p,q)` and `gcd(e,φ)=1`, so that the number of unconcealed messages for this value of `e` is at a minimum.

# --hints--

`RSAEncryption` should be a function.

```js
assert(typeof RSAEncryption === 'function')
```

`RSAEncryption` should return a number.

```js
assert.strictEqual(typeof RSAEncryption(19, 37), 'number');
```

`RSAEncryption(19, 37)` should return `17766`.

```js
assert.strictEqual(RSAEncryption(19, 37), 17766);
```

`RSAEncryption(283, 409)` should return `466196580`.

```js
assert.strictEqual(RSAEncryption(283, 409), 466196580);
```

`RSAEncryption(1009, 3643)` should return `399788195976`.

```js
assert.strictEqual(RSAEncryption(19, 37), 17766);
```

# --seed--

## --seed-contents--

```js
function RSAEncryption(p, q) {

  return true;
}

RSAEncryption(19, 37);
```

# --solutions--

```js
function gcd(a, b) {
    if (b)
        return gcd(b, a % b);
    else
        return a;
}

function RSAEncryption(p, q) {
    let phi = (p - 1) * (q - 1);

    let best = Number.MAX_SAFE_INTEGER;
    let sum = 0;

    for (let e = 0; e < phi; ++e) {
        if (!(gcd(e, phi) == 1))
            continue;

        let msg = (gcd(p - 1, e - 1) + 1) * (gcd(q - 1, e - 1) + 1);

        if (best == msg) {
            sum += e;
        } else if (best > msg) {
            best = msg;
            sum = e;
        }
    }

    return sum;
}
```
