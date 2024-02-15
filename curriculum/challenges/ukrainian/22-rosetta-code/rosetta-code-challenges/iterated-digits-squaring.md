---
id: 5a23c84252665b21eecc7ec1
title: Ітерація цифрових квадратів
challengeType: 1
forumTopicId: 302291
dashedName: iterated-digits-squaring
---

# --description--

Якщо додати квадрат цифр натурального числа (ціле число більше за нуль), то в результаті ви завжди отримаєте або 1, або 89:

<pre>15 -> 26 -> 40 -> 16 -> 37 -> 58 -> 89
7 -> 49 -> 97 -> 130 -> 10 -> 1
</pre>

# --instructions--

Напишіть функцію, яка приймає число як параметр та повертає 1 або 89 після виконання описаного процесу.

# --hints--

`iteratedSquare` має бути функцією.

```js
assert(typeof iteratedSquare == 'function');
```

`iteratedSquare(4)` має повернути число.

```js
assert(typeof iteratedSquare(4) == 'number');
```

`iteratedSquare(4)` має повернути `89`.

```js
assert.equal(iteratedSquare(4), 89);
```

`iteratedSquare(7)` має повернути `1`.

```js
assert.equal(iteratedSquare(7), 1);
```

`iteratedSquare(15)` має повернути `89`.

```js
assert.equal(iteratedSquare(15), 89);
```

`iteratedSquare(20)` має повернути `89`.

```js
assert.equal(iteratedSquare(20), 89);
```

`iteratedSquare(70)` має повернути `1`.

```js
assert.equal(iteratedSquare(70), 1);
```

`iteratedSquare(100)` має повернути `1`.

```js
assert.equal(iteratedSquare(100), 1);
```

# --seed--

## --seed-contents--

```js
function iteratedSquare(n) {

}
```

# --solutions--

```js
function iteratedSquare(n) {
    var total;
    while (n != 89 && n != 1) {
        total = 0;
        while (n > 0) {
            total += Math.pow(n % 10, 2);
            n = Math.floor(n/10);
        }
        n = total;
    }
    return n;
}
```
