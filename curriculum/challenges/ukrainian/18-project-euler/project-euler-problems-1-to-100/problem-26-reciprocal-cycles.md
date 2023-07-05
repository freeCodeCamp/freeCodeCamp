---
id: 5900f3861000cf542c50fe99
title: 'Завдання 26: зворотні цикли'
challengeType: 1
forumTopicId: 301908
dashedName: problem-26-reciprocal-cycles
---

# --description--

Аліквотний дріб містить 1 у чисельнику. Десяткове представлення дробів зі знаменниками від 2 до 10:

<div style='padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;'><div><sup>1</sup>/<sub>2</sub> = 0.5</div><div><sup>1</sup>/<sub>3</sub> = 0.(3)</div><div><sup>1</sup>/<sub>4</sub> = 0.25</div><div><sup>1</sup>/<sub>5</sub> = 0.2</div><div><sup>1</sup>/<sub>6</sub> = 0.1(6)</div><div><sup>1</sup>/<sub>7</sub> = 0.(142857)</div><div><sup>1</sup>/<sub>8</sub> = 0.125</div><div><sup>1</sup>/<sub>9</sub> = 0.(1)</div><div><sup>1</sup>/<sub>10</sub> = 0.1</div></div>

Де 0.1(6) означає 0.166666... та має періодичну послідовність з одної цифри. Можна побачити, що <sup>1</sup>/<sub>7</sub> має періодичну послідовність із шести цифр.

Знайдіть значення `d` &lt; `n`, за якого <sup>1</sup>/<sub>d</sub> містить найдовшу періодичну послідовність в десятковій частині дробу.

# --hints--

`reciprocalCycles(700)` має повернути число.

```js
assert(typeof reciprocalCycles(700) === 'number');
```

`reciprocalCycles(700)` має повернути 659.

```js
assert(reciprocalCycles(700) == 659);
```

`reciprocalCycles(800)` має повернути 743.

```js
assert(reciprocalCycles(800) == 743);
```

`reciprocalCycles(900)` має повернути 887.

```js
assert(reciprocalCycles(900) == 887);
```

`reciprocalCycles(1000)` має повернути 983.

```js
assert(reciprocalCycles(1000) == 983);
```

# --seed--

## --seed-contents--

```js
function reciprocalCycles(n) {

  return n;
}

reciprocalCycles(1000);
```

# --solutions--

```js
// solution required
```
