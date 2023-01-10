---
id: 5900f3a01000cf542c50feb3
title: 'Завдання 52: Кратні числа з перестановленими цифрами'
challengeType: 1
forumTopicId: 302163
dashedName: problem-52-permuted-multiples
---

# --description--

Можна побачити, що число 125874 та його подвоєння, 251748, містять однакові цифри, але в іншому порядку.

Знайдіть таке найменше додатне ціле число, щоб після множення на цілі числа $\\{2, 3, \ldots, n\\}$, містило б в собі ті самі цифри.

# --hints--

`permutedMultiples(2)` має повернути число.

```js
assert(typeof permutedMultiples(2) === 'number');
```

`permutedMultiples(2)` має повернути `125874`.

```js
assert.strictEqual(permutedMultiples(2), 125874);
```

`permutedMultiples(6)` має повернути `142857`.

```js
assert.strictEqual(permutedMultiples(6), 142857);
```

# --seed--

## --seed-contents--

```js
function permutedMultiples(n) {

  return true;
}

permutedMultiples(2);
```

# --solutions--

```js
function permutedMultiples(n) {
    const isPermutation = (a, b) =>
        a.length !== b.length
            ? false
            : a.split('').sort().join() === b.split('').sort().join();


    let start = 1;
    let found = false;
    let result = 0;

    while (!found) {
        start *= 10;
        for (let i = start; i < start * 10 / n; i++) {
            found = true;
            for (let j = 2; j <= n; j++) {
                if (!isPermutation(i + '', j * i + '')) {
                    found = false;
                    break;
                }
            }
            if (found) {
                result = i;
                break;
            }
        }
    }

    return result;
}
```
