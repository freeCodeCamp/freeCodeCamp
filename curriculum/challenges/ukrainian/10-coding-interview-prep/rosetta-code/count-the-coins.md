---
id: 59713bd26bdeb8a594fb9413
title: Підрахунок монет
challengeType: 1
forumTopicId: 302238
dashedName: count-the-coins
---

# --description--

There are four types of common coins in US currency:

<ul>
  <li>четвертаки (25 центів)</li>
  <li>дайми (10 центів)</li>
  <li>нікелі (5 центів) та</li>
  <li>пенні (1 цент)</li>
</ul>

<p>Існує шість способів розміняти 15 центів:</p>

<ul>
  <li>1 дайм та 1 нікель</li>
  <li>1 дайм та 5 пенні</li>
  <li>3 нікелі</li>
  <li>2 нікелі та 5 пенні</li>
  <li>1 нікель та 10 пенні</li>
  <li>15 пенні</li>
</ul>

# --instructions--

Створіть функцію, яка буде визначати, скількома способами можна розміняти введену кількість `cents`, що представляє суму американських пенні, використовуючи ці поширені монети.

# --hints--

`countCoins` має бути функцією.

```js
assert(typeof countCoins === 'function');
```

`countCoins(15)` має повертати `6`.

```js
assert.equal(countCoins(15), 6);
```

`countCoins(85)` should return `163`.

```js
assert.equal(countCoins(85), 163);
```

`countCoins(100)` має повертати `242`.

```js
assert.equal(countCoins(100), 242);
```

# --seed--

## --seed-contents--

```js
function countCoins(cents) {

  return true;
}
```

# --solutions--

```js
function countCoins(cents) {
  const operands = [1, 5, 10, 25];
  const targetsLength = cents + 1;
  const operandsLength = operands.length;
  const t = [1];

  for (let a = 0; a < operandsLength; a++) {
    for (let b = 1; b < targetsLength; b++) {
      // initialise undefined target
      t[b] = t[b] ? t[b] : 0;

      // accumulate target + operand ways
      t[b] += (b < operands[a]) ? 0 : t[b - operands[a]];
    }
  }

  return t[targetsLength - 1];
}
```
