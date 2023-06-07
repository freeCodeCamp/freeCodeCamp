---
id: 5900f3851000cf542c50fe98
title: 'Завдання 25: 1000-цифрове число Фібоначчі'
challengeType: 1
forumTopicId: 301897
dashedName: problem-25-1000-digit-fibonacci-number
---

# --description--

Послідовність Фібоначчі визначається за допомогою рекурентного співвідношення:

<div style='padding-left: 4em;'>F<sub>n</sub> = F<sub>n−1</sub> + F<sub>n−2</sub>, де F<sub>1</sub> = 1 і F<sub>2</sub> = 1.</div>

Отже, перші 12 членів послідовності дорівнюють:

<div style='padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;'><div>F<sub>1</sub> = 1</div><div>F<sub>2</sub> = 1</div><div>F<sub>3</sub> = 2</div><div>F<sub>4</sub> = 3</div><div>F<sub>5</sub> = 5</div><div>F<sub>6</sub> = 8</div><div>F<sub>7</sub> = 13</div><div>F<sub>8</sub> = 21</div><div>F<sub>9</sub> = 34</div><div>F<sub>10</sub> = 55</div><div>F<sub>11</sub> = 89</div><div>F<sub>12</sub> = 144</div></div>

12-ий член, F<sub>12</sub>, є першим членом послідовності, що містить три цифри.

Яким є порядковий номер першого члена послідовності Фібоначчі, що містить `n` цифр?

# --hints--

`digitFibonacci(5)` має повернути число.

```js
assert(typeof digitFibonacci(5) === 'number');
```

`digitFibonacci(5)` має повернути число 21.

```js
assert.strictEqual(digitFibonacci(5), 21);
```

`digitFibonacci(10)` має повернути число 45.

```js
assert.strictEqual(digitFibonacci(10), 45);
```

`digitFibonacci(15)` має повернути число 69.

```js
assert.strictEqual(digitFibonacci(15), 69);
```

`digitFibonacci(20)` має повернути число 93.

```js
assert.strictEqual(digitFibonacci(20), 93);
```

# --seed--

## --seed-contents--

```js
function digitFibonacci(n) {

  return n;
}

digitFibonacci(20);
```

# --solutions--

```js
const digitFibonacci = (n) => {
  const digits = (num) => {
    return num.toString().length;
  };
  let f1 = 1;
  let f2 = 1;
  let index = 3;
  while (true) {
    let fn = f1 + f2;
    if (digits(fn) === n) return index;
    [f1, f2] = [f2, fn];
    index++;
  }
};
```
