---
id: 5900f3d01000cf542c50fee3
title: 'Завдання 100: Ймовірні комбінації'
challengeType: 1
forumTopicId: 301724
dashedName: problem-100-arranged-probability
---

# --description--

Припустимо, що в коробці є двадцять один кольоровий диск, з яких п’ятнадцять - синього кольору, а шість - червоного; два диски обрали навмання, тож, є ймовірність, що обрали одразу два синіх диски.

$${P(BB)} = \frac{15}{21}×\frac{14}{20} = \frac{1}{2}$$

Наступний варіант розміщення дисків, за якого вірогідність взяти навмання два синіх диски становить 50%, це коли у коробці є вісімдесят п’ять синіх і тридцять п’ять червоних дисків.

Визначте ймовірну кількість синіх дисків у коробці, якщо у першому варіанті загальна кількість становить більше `limit` дисків.

# --hints--

`arrangedProbability(20)` дорівнює числу.

```js
assert(typeof arrangedProbability(10) === 'number');
```

`arrangedProbability(20)` має повернути `15`.

```js
assert.strictEqual(arrangedProbability(20), 15);
```

`arrangedProbability(100)` має повернути `85`.

```js
assert.strictEqual(arrangedProbability(100), 85);
```

`arrangedProbability(100000)` має повернути `97513`.

```js
assert.strictEqual(arrangedProbability(100000), 97513);
```

`arrangedProbability(1000000000)` має повернути `3822685023`.

```js
assert.strictEqual(arrangedProbability(1000000000), 3822685023);
```

`arrangedProbability(1000000000000)` має повернути `756872327473`.

```js
assert.strictEqual(arrangedProbability(1000000000000), 756872327473);
```

# --seed--

## --seed-contents--

```js
function arrangedProbability(limit) {

  return true;
}

arrangedProbability(20);
```

# --solutions--

```js
function arrangedProbability(limit) {
  // Based on https://www.mathblog.dk/project-euler-100-blue-discs-two-blue/
  let blue = 15;
  let discs = 21;

  while (discs < limit) {
    const nextBlue = 3 * blue + 2 * discs - 2;
    const nextDiscs = 4 * blue + 3 * discs - 3;

    blue = nextBlue;
    discs = nextDiscs;
  }
  return blue;
}
```
