---
id: 5900f4231000cf542c50ff35
title: 'Завдання 182: шифрування RSA'
challengeType: 1
forumTopicId: 301818
dashedName: problem-182-rsa-encryption
---

# --description--

Шифрування RSA базується на наступній процедурі:

Згенерувати два різні простих числа `p` і `q`. Обчислити `n=p*q` і `φ=(p-1)(q-1)`. Знайдіть ціле число `e`, `1 < e < φ`, якщо `gcd(e,φ) = 1`

Повідомлення в цій системі — це число в інтервалі `[0,n-1]`. Текст, що буде зашифровано, певним чином перетворюється на повідомлення (числа з інтервалом `[0,n-1]`). Щоб зашифрувати текст, для кожного повідомлення обчислюється `m`, c=m<sup>e</sup> mod n.

Щоб розшифрувати текст, необхідна наступна процедура: порахуйте `d`, якщо `ed=1 mod φ`, тоді для кожного зашифрованого повідомлення `c` обчисліть m=c<sup>d</sup> mod n.

Виявлено значення `e` і `m` такі, що m<sup>e</sup> мод n = m. Ми називаємо повідомлення `m`, для яких m<sup>e</sup> мод n=m, неприхованими.

Проблема при виборі `e` полягає в тому, що не має бути занадто багато неприхованих повідомлень. Наприклад, нехай `p=19` і `q=37`. Потім `n=19*37=703` і `φ=18*36=648`. Якщо ми вибираємо `e=181`, то хоча `gcd(181,648)=1`, виявляється, що всі можливі повідомлення m `(0≤m≤n-1)` неприховані при розрахунку m<sup>e</sup> мод n. Для будь-якого відповідного вибору `e` існує декілька неприхованих повідомлень. Важливо, що кількість неприхованих повідомлень має бути мінімальною.

Для будь-якого заданого `p` і `q`, знайдіть суму всіх значень `e`, `1< e < φ(p,q)` і `gcd(e,φ)=1`, так, щоб кількість неприхованих повідомлень для цього значення `e` була мінімальною.

# --hints--

`RSAEncryption` має бути функцією.

```js
assert(typeof RSAEncryption === 'function')
```

`RSAEncryption` має повертати число.

```js
assert.strictEqual(typeof RSAEncryption(19, 37), 'number');
```

`RSAEncryption(19, 37)` має повертати `17766`.

```js
assert.strictEqual(RSAEncryption(19, 37), 17766);
```

`RSAEncryption(283, 409)` має повертати `466196580`.

```js
assert.strictEqual(RSAEncryption(283, 409), 466196580);
```

`RSAEncryption(1009, 3643)` має повертати `399788195976`.

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
