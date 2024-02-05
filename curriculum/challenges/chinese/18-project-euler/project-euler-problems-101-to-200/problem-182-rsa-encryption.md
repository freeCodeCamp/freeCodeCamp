---
id: 5900f4231000cf542c50ff35
title: '问题182：RSA 加密'
challengeType: 1
forumTopicId: 301818
dashedName: problem-182-rsa-encryption
---

# --description--

The RSA encryption is based on the following procedure:

生成两个截然不同的素数 `p` and `q`. 计算 `n=p*q` and `φ=(p-1)(q-1)`。 寻找一个整数 `e`, `1 < e < φ`, such that `gcd(e,φ) = 1`

有个信息在这个系统中是个数字在这个时间间隔 `[0,n-1]`. 将要加密的内容会以某种方式转换为消息(数字在这个间隔 `[0,n-1]`)。 为了加密内容，计算每条消息的 `m`, c=m<sup>e</sup> mod n 。

为了解密内容，以下程序是必须的：计算 `d` such that `ed=1 mod φ`then for each encrypted message,`c`, calculate m=c<sup>d</sup> mod n。

存在的数值是`e` and `m` such that m<sup>e</sup> mod n = m. 我们调用消息 `m` m<sup>e</sup> mod n=m 未隐藏的消息。

当选择 `e` 出现了一个问题就是不应该有太多未隐藏的消息。 例如，让 `p=19` and `q=37`。 然后 `n=19*37=703` and `φ=18*36=648`. 如果我们选择 `e=181`, 那么， 尽管 `gcd(181,648)=1` 结果显示所有可能信息 m`(0≤m≤n-1)`</code> 是未隐藏的当在计算 m<sup>e</sup> mod n. 对于任何有效的选择 `e` 都存在一些未隐藏的消息。 重要的是，未隐藏的消息数量必须是最低的。

对于任何指定 `p` 和 `q`, 寻找所有值的总和 `e`, `1 < e < φ(p,q)`和 `gcd(e,φ)=1`, 因此此值的 `e` 的未隐藏消息数量是最低的。

# --hints--

`RSAEncryption` 应该是一个函数。

```js
assert(typeof RSAEncryption === 'function')
```

`RSAEncryption` 应该返回个数字

```js
assert.strictEqual(typeof RSAEncryption(19, 37), 'number');
```

`RSAEncryption(19, 37)` 返回 `17766`。

```js
assert.strictEqual(RSAEncryption(19, 37), 17766);
```

`RSAEncryption(283, 409)` 返回 `466196580`.

```js
assert.strictEqual(RSAEncryption(283, 409), 466196580);
```

`RSAEncryption(1009, 3643)` 应该返回 `399788195976`.

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
