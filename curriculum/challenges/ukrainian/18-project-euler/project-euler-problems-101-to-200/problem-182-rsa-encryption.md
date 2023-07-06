---
id: 5900f4231000cf542c50ff35
title: 'Завдання 182: шифрування RSA'
challengeType: 1
forumTopicId: 301818
dashedName: problem-182-rsa-encryption
---

# --description--

Шифрування RSA базується на наступній процедурі:

Згенеруйте два різних простих числа `p` та `q`. Обчисліть `n=p*q` та `φ=(p-1)(q-1)`. Знайдіть ціле число `e`, `1 < e < φ`, за якого `нсд(e,φ) = 1`

Повідомлення в цій системі представлене у вигляді числа з інтервалу `[0,n-1]`. Зашифрований текст потім перетворюється у повідомлення (числа з інтервалу `[0,n-1]`). Щоб зашифрувати текст, для кожного повідомлення обчислюється `m`, c=m<sup>e</sup> mod n.

Щоб розшифрувати текст, виконайте наступне: обчисліть `d`, за якого `ed=1 mod φ`, а потім обчисліть m=c<sup>d</sup> mod n для кожного зашифрованого повідомлення `c`.

Існують значення `e` та `m`, за яких m<sup>e</sup> mod n = m. Повідомлення `m`, за яких m<sup>e</sup> mod n=m, називають відкритими.

Проблема при виборі `e` полягає в тому, що відкритих повідомлень має бути мало. Наприклад, нехай `p=19` та `q=37`. Тоді `n=19*37=703` та `φ=18*36=648`. Якщо ми оберемо `e=181`, тоді виявиться (хоча `нсд(181,648)=1`), що всі можливі повідомлення m `(0≤m≤n-1)` є відкритими після розрахунку m<sup>e</sup> mod n. Для будь-якого дійсного вибору `e` існує декілька відкритих повідомлень. Важливо, щоб кількість відкритих повідомлень була мінімальною.

Знайдіть суму всіх значень `e`, `1 < e < φ(p,q)` та `gcd(e,φ)=1` за будь-яких даних `p` й `q`, щоб кількість відкритих повідомлень за значення `e` була мінімальною.

# --hints--

`RSAEncryption` має бути функцією.

```js
assert(typeof RSAEncryption === 'function')
```

`RSAEncryption` має повернути число.

```js
assert.strictEqual(typeof RSAEncryption(19, 37), 'number');
```

`RSAEncryption(19, 37)` має повернути `17766`.

```js
assert.strictEqual(RSAEncryption(19, 37), 17766);
```

`RSAEncryption(283, 409)` має повернути `466196580`.

```js
assert.strictEqual(RSAEncryption(283, 409), 466196580);
```

`RSAEncryption(1009, 3643)` має повернути `399788195976`.

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
