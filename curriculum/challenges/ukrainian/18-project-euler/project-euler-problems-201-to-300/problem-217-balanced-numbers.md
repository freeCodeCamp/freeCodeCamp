---
id: 5900f4461000cf542c50ff58
title: 'Завдання 217: збалансовані числа'
challengeType: 1
forumTopicId: 301859
dashedName: problem-217-balanced-numbers
---

# --description--

Натуральне число з $k$ (десятковими) числами називається збалансованим, якщо сума його перших $⌈\frac{k}{2}⌉$ чисел дорівнює сумі його останніх $⌈\frac{k}{2}⌉$ чисел, де $⌈x⌉$, що називається округленням $x$ вгору, є найменшим цілим числом $≥ x$. Таким чином $⌈π⌉ = 4$ та $⌈5⌉ = 5$.

Так, наприклад, всі паліндроми є збалансованими так само, як і 13722.

Нехай $T(n)$ буде сумою всіх збалансованих чисел, менших за $10^n$.

Отже, $T(1) = 45$, $T(2) = 540$ та $T(5) = 334\\,795\\,890$.

Знайдіть $T(47)\\,mod\\,3^{15}$

# --hints--

`balancedNumbers()` має повернути `6273134`.

```js
assert.strictEqual(balancedNumbers(), 6273134);
```

# --seed--

## --seed-contents--

```js
function balancedNumbers() {

  return true;
}

balancedNumbers();
```

# --solutions--

```js
// solution required
```
