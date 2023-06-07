---
id: 5900f4231000cf542c50ff35
title: 'Problema 182: Criptografia RSA'
challengeType: 1
forumTopicId: 301818
dashedName: problem-182-rsa-encryption
---

# --description--

A criptografia RSA baseia-se no seguinte procedimento:

Gere dois números primos distintos `p` e `q`. Calcule `n=p*q` e `φ=(p-1)(q-1)`. Encontre um número inteiro `e`, sendo que `1 < e < φ`, de tal forma que `gcd(e,φ) = 1` (gcd é a sigla para máximo divisor comum, em inglês)

Uma mensagem neste sistema é um número no intervalo `[0,n-1]`. Um texto a ser criptografado é então convertido em mensagens (números no intervalo `[0,n-1]`). Para criptografar o texto, para cada mensagem, `m`, c=m<sup>e</sup> mod n é calculado.

Para descriptografar o texto, é necessário o seguinte procedimento: calcular `d` tal que `ed=1 mod φ`. Depois, para cada mensagem criptografada, `c`, calcular m=c<sup>d</sup> mod n.

Existem valores de `e` e `m` tal que m<sup>e</sup> mod n = m. Chamamos de mensagens `m` aquelas para as quais m<sup>e</sup> mod n=m mensagens não ocultas.

Um problema ao escolher `e` é o fato de que não deve haver muitas mensagens não ocultas. Por exemplo, considere `p=19` e `q=37`. Então `n=19*37=703` e `φ=18*36=648`. Se escolhermos `e=181`, então, embora `gcd(181,648)=1` todas as mensagens possíveis m `(0≤m≤n-1)` são não ocultas ao calcular m<sup>e</sup> mod n. Para qualquer escolha válida de `e`, existem algumas mensagens não ocultas. É importante que o número de mensagens não ocultas seja o mínimo.

Para quaisquer `p` e `q` fornecidos, encontre a soma de todos os valores de `e`, `1 < e < φ(p,q)` e `gcd(e,φ)=1`, para que o número de mensagens não ocultas para esse valor de `e` seja o menor possível.

# --hints--

`RSAEncryption` deve ser uma função.

```js
assert(typeof RSAEncryption === 'function')
```

`RSAEncryption` deve retornar um número.

```js
assert.strictEqual(typeof RSAEncryption(19, 37), 'number');
```

`RSAEncryption(19, 37)` deve retornar `17766`.

```js
assert.strictEqual(RSAEncryption(19, 37), 17766);
```

`RSAEncryption(283, 409)` deve retornar `466196580`.

```js
assert.strictEqual(RSAEncryption(283, 409), 466196580);
```

`RSAEncryption(1009, 3643)` deve retornar `399788195976`.

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
