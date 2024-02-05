---
id: 5900f4231000cf542c50ff35
title: '問題182：RSA 加密'
challengeType: 1
forumTopicId: 301818
dashedName: problem-182-rsa-encryption
---

# --description--

The RSA encryption is based on the following procedure:

生成兩個截然不同的素數 `p` and `q`. 計算 `n=p*q` and `φ=(p-1)(q-1)`。 尋找一個整數 `e`, `1 < e < φ`, such that `gcd(e,φ) = 1`

有個信息在這個系統中是個數字在這個時間間隔 `[0,n-1]`. 將要加密的內容會以某種方式轉換爲消息(數字在這個間隔 `[0,n-1]`)。 爲了加密內容，計算每條消息的 `m`, c=m<sup>e</sup> mod n 。

爲了解密內容，以下程序是必須的：計算 `d` such that `ed=1 mod φ`then for each encrypted message,`c`, calculate m=c<sup>d</sup> mod n。

存在的數值是`e` and `m` such that m<sup>e</sup> mod n = m. 我們調用消息 `m` m<sup>e</sup> mod n=m 未隱藏的消息。

當選擇 `e` 出現了一個問題就是不應該有太多未隱藏的消息。 例如，讓 `p=19` and `q=37`。 然後 `n=19*37=703` and `φ=18*36=648`. 如果我們選擇 `e=181`, 那麼， 儘管 `gcd(181,648)=1` 結果顯示所有可能信息 m`(0≤m≤n-1)`</code> 是未隱藏的當在計算 m<sup>e</sup> mod n. 對於任何有效的選擇 `e` 都存在一些未隱藏的消息。 重要的是，未隱藏的消息數量必須是最低的。

對於任何指定 `p` 和 `q`, 尋找所有值的總和 `e`, `1 < e < φ(p,q)`和 `gcd(e,φ)=1`, 因此此值的 `e` 的未隱藏消息數量是最低的。

# --hints--

`RSAEncryption` 應該是一個函數。

```js
assert(typeof RSAEncryption === 'function')
```

`RSAEncryption` 應該返回個數字

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

`RSAEncryption(1009, 3643)` 應該返回 `399788195976`.

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
