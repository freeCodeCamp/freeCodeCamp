---
id: 5900f4231000cf542c50ff35
title: 'Problema 182: Crittografia RSA'
challengeType: 1
forumTopicId: 301818
dashedName: problem-182-rsa-encryption
---

# --description--

La crittografia RSA si basa sulla seguente procedura:

Genera due primi distinti `p` e `q`. Calcola `n=p*q` e `φ=(p-1)(q-1)`. Trova un numero intero `e`, `1 < e < φ`, in modo che `MCD(e,φ) = 1`

Un messaggio in questo sistema è un numero nell'intervallo `[0,n-1]`. Un testo da cifrare viene quindi convertito in qualche modo in messaggi (numeri nell'intervallo `[0,n-1]`). Per cifrare il testo, per ogni messaggio `m` si calcola c=m<sup>e</sup> mod n.

Per decifrare il testo, è necessaria la seguente procedura: calcola `d` in modo che `ed=1 mod φ`, quindi per ogni messaggio cifrato `c`, calcola m=c<sup>d</sup> mod n.

Esistono valori di `e` e `m` tali che m<sup>e</sup> mod n = m. Chiamiamo i messaggi `m` per i quali m<sup>e</sup> mod n=m messaggi non nascosti.

Un problema quando si sceglie `e` è che non ci dovrebbero essere troppi messaggi non nascosti. Per esempio, sia `p=19` e `q=37`. Quindi `n=19*37=703` e `φ=18*36=648`. Se scegliamo `e=181`, anche se `MCD(181, 48)=1` risulta che tutti i possibili messaggi m `(0≤m≤n-1)` sono nascosti quando si calcola m<sup>e</sup> mod n. Per qualsiasi scelta valida di `e` esistono alcuni messaggi non nascosti. È importante che il numero di messaggi non nascosti sia il minimo.

Per ogni dato `p` e `q`, trova la somma di tutti i valori di `e`, `1 < e < φ(p,q)` e `MCD(e,φ)=1`, in modo che il numero di messaggi non nascosti per questo valore di `e` sia minimo.

# --hints--

`RSAEncryption` dovrebbe essere una funzione.

```js
assert(typeof RSAEncryption === 'function')
```

`RSAEncryption` dovrebbe restituire un numero.

```js
assert.strictEqual(typeof RSAEncryption(19, 37), 'number');
```

`RSAEncryption(19, 37)` dovrebbe restituire `17766`.

```js
assert.strictEqual(RSAEncryption(19, 37), 17766);
```

`RSAEncryption(283, 409)` dovrebbe restituire `466196580`.

```js
assert.strictEqual(RSAEncryption(283, 409), 466196580);
```

`RSAEncryption(1009, 3643)` dovrebbe restituire `399788195976`.

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
