---
id: 5900f4231000cf542c50ff35
title: 'Problem 182: RSA encryption'
challengeType: 1
forumTopicId: 301818
dashedName: problem-182-rsa-encryption
---

# --description--

Die RSA-Verschlüsselung basiert auf dem folgenden Verfahren:

Erzeuge zwei unterschiedlichen Primzahlen `p` und `q`. Berechne `n=p*q` und `φ=(p-1)(q-1)`. Finde eine ganze Zahl `e`, `1 < e < φ`, so wie `gcd(e,φ) = 1`

Eine Nachricht in diesem System ist eine Zahl im Intervall `[0,n-1]`. Ein zu verschlüsselnder Text wird dann irgendwie in Nachrichten (Zahlen im Intervall `[0,n-1]`) umgewandelt. Um den Text zu verschlüsseln, wird für jede Nachricht `m`, c=m<sup>e</sup> mod n berechnet.

Um den Text zu entschlüsseln, wird folgende Prozedur benötigt: berechne `d` so dass `ed=1 mod φ` und berechne dann für jede verschlüsselte Nachricht, `c`, m=c<sup>d</sup> mod n.

Es gibt Werte von `e` und `m`, so dass m<sup>e</sup> mod n = m. We call messages `m` for which m<sup>e</sup> mod n=m unconcealed messages.

Ein Problem bei der Wahl von `e` ist, dass es nicht zu viele unverschlüsselte Nachrichten geben sollte. Lasse zum Beispiel `p=19` und `q=37`. Danach `n=19*37=703` und `φ=18*36=648`. If we choose `e=181`, then, although `gcd(181,648)=1` it turns out that all possible messages m `(0≤m≤n-1)` are unconcealed when calculating m<sup>e</sup> mod n. Für jede gültige Wahl von `e` gibt es einige unverschlüsselte Nachrichten. Es ist wichtig, dass die Anzahl an unverschlüsselten Nachrichten auf ein Minimum beschränkt ist.

For any given `p` and `q`, find the sum of all values of `e`, `1 < e < φ(p,q)` and `gcd(e,φ)=1`, so that the number of unconcealed messages for this value of `e` is at a minimum.

# --hints--

`RSAEncryption` sollte eine Funktion sein.

```js
assert(typeof RSAEncryption === 'function')
```

`RSAEncryption` sollte eine Zahl zurückgeben.

```js
assert.strictEqual(typeof RSAEncryption(19, 37), 'number');
```

`RSAEncryption(19, 37)` sollte `17766` zurückgeben.

```js
assert.strictEqual(RSAEncryption(19, 37), 17766);
```

`RSAEncryption(283, 409)` sollte `466196580` zurückgeben.

```js
assert.strictEqual(RSAEncryption(283, 409), 466196580);
```

`RSAEncryption(1009, 3643)` sollte `399788195976` zurückgeben.

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
