---
id: 5900f4231000cf542c50ff35
title: '問題 182: RSA 暗号化'
challengeType: 1
forumTopicId: 301818
dashedName: problem-182-rsa-encryption
---

# --description--

RSA 暗号化は次の手順で行われます。

2 つの相異なる素数 `p` と `q` を生成します。 `n=p*q` と `φ=(p-1)(q-1)` を計算します。 `1 < e < φ` に対して、`gcd(e,φ) = 1` となる整数 `e` を見つけます。

この方式におけるメッセージは、区間 `[0,n-1]` の中の数です。 次に、暗号化される文は何らかの形でメッセージ (区間 `[0,n-1]` の中の数) に変換されます。 文を暗号化するために、メッセージごとに `m`, c=m<sup>e</sup> mod n が計算されます。

文を復号するには、`ed=1 mod φ` となるような `d` を計算し、暗号化されたメッセージ `c` ごとに、m=c<sup>d</sup> mod n を計算するという手順が必要です。

m<sup>e</sup> mod n = m となるような `e` と `m` の値が存在します。 m<sup>e</sup> mod n = m となるメッセージ `m` を非隠蔽メッセージと呼びます。

`e` を選択する際の問題は、非隠蔽メッセージが多すぎてはいけないという点です。 例えば、`p=19`, `q=37` とします。 このとき、`n=19*37=703`, `φ=18*36=648` となります。 `e=181` を選択した場合、`gcd(181,648)=1` ですが、m<sup>e</sup> mod n の計算時に、考えられるすべてのメッセージ m `(0≤m≤n-1)` が非隠蔽メッセージとなります。 `e` についてどのような有効な選択を行っても、非隠蔽メッセージがいくつか存在します。 非隠蔽メッセージの数が最小限であることが重要です。

`1 < e < φ(p,q)` かつ `gcd(e,φ)=1` のとき、与えられた任意の `p` と `q` について、`e` 値に対する非隠蔽メッセージの数が最小になるような `e` 値の総和を求めなさい。

# --hints--

`RSAEncryption` は関数でなければなりません。

```js
assert(typeof RSAEncryption === 'function')
```

`RSAEncryption` は数値を返す必要があります。

```js
assert.strictEqual(typeof RSAEncryption(19, 37), 'number');
```

`RSAEncryption(19, 37)` は `17766` を返す必要があります。

```js
assert.strictEqual(RSAEncryption(19, 37), 17766);
```

`RSAEncryption(283, 409)` は `466196580` を返す必要があります。

```js
assert.strictEqual(RSAEncryption(283, 409), 466196580);
```

`RSAEncryption(1009, 3643)` は `399788195976` を返す必要があります。

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
