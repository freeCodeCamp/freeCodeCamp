---
id: 5900f4341000cf542c50ff46
title: 'Завдання 199: ітеративна укладка кіл'
challengeType: 1
forumTopicId: 301837
dashedName: problem-199-iterative-circle-packing
---

# --description--

Три кола з однаковим радіусом розміщені всередині більшого кола так, що кожна пара кіл дотична одна до одної, а внутрішні кола не перетинаються. Залишається чотири непокритих «прогалини», які потрібно інтерактивно заповнити дотичними колами.

<img class="img-responsive center-block" alt="зображення кіл, які не перетинаються" src="https://cdn-media-1.freecodecamp.org/project-euler/199-circles-in-circles.gif" style="background-color: white; padding: 10px;" />

При кожній ітерації у прогалині розміщують максимально велике коло, що створює ще більше прогалин для наступної ітерації. Після трьох ітерацій (на малюнку) залишилось 108 прогалин, а частка непокритої площі становить 0.06790342, заокруглено до восьмого знака після коми.

Яка частка площі залишається непокритою після `n` ітерацій? Дайте відповідь, заокруглену до восьми знаків після коми у форматі x.xxxxxxxx.

# --hints--

`iterativeCirclePacking(10)` має повернути число.

```js
assert(typeof iterativeCirclePacking(10) === 'number');
```

`iterativeCirclePacking(10)` має повернути `0.00396087`.

```js
assert.strictEqual(iterativeCirclePacking(10), 0.00396087);
```

`iterativeCirclePacking(3)` має повернути `0.06790342`.

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
