---
id: 5900f4341000cf542c50ff46
title: 'Завдання 199: Ітеративне кільцеве потовщення'
challengeType: 1
forumTopicId: 301837
dashedName: problem-199-iterative-circle-packing
---

# --description--

Три кола з однаковим радіусом розміщені всередині більшого кола так, що кожна пара кіл дотична один до одного, а внутрішні кола не перетинаються. Існує чотири непокритих "прогалини", які багатократно заповнюються більш дотичними колами.

<img class="img-responsive center-block" alt="a diagram of non-overlapping circles" src="https://cdn-media-1.freecodecamp.org/project-euler/199-circles-in-circles.gif" style="background-color: white; padding: 10px;" />

При кожному повторному застосуванні в кожну прогалину розміщується коло максимального розміру, що створює ще більше прогалин для наступної етапу. Після 3-х повторних застосувань (на фото) виникає 108 прогалин, а частка площі, яка не покрита колами, становить 0,06790342, округлена до восьми знаків після коми.

Яка частка площі не покрита колами після `n` повторних застосувань? Дайте відповідь, округлену до восьми знаків після коми, у форматі x.xxxxxxxx .

# --hints--

`iterativeCirclePacking(10)` має видати число.

```js
assert(typeof iterativeCirclePacking(10) === 'number');
```

`iterativeCirclePacking(10)` має видати `0.00396087`.

```js
assert.strictEqual(iterativeCirclePacking(10), 0.00396087);
```

`iterativeCirclePacking(3)` має видати `0.06790342`.

```js
assert.strictEqual(iterativeCirclePacking(3), 0.06790342);
```

# --seed--

## --seed-contents--

```js
function iterativeCirclePacking(n) {

  return true;
}

iterativeCirclePacking(10);
```

# --solutions--

```js
function iterativeCirclePacking(n) {
  let k1 = 1;
  let k0 = k1 * (3 - 2 * Math.sqrt(3));
  let a0 = 1 / (k0 * k0);
  let a1 = 3 / (k1 * k1);
  a1 += 3 * getArea(k0, k1, k1, n);
  a1 += getArea(k1, k1, k1, n);
  let final = ((a0 - a1) / a0).toFixed(8);

  return parseFloat(final);
  function getArea(k1, k2, k3, depth) {
      if (depth == 0) return 0.0;
      let k4 = k1 + k2 + k3 + 2 * Math.sqrt(k1 * k2 + k2 * k3 + k3 * k1);
      let a = 1 / (k4 * k4);
      a += getArea(k1, k2, k4, depth - 1);
      a += getArea(k2, k3, k4, depth - 1);
      a += getArea(k3, k1, k4, depth - 1);
      return a;
  }
}
```
