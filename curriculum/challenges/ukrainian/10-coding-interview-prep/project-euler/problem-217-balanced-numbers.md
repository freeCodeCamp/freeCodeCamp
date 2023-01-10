---
id: 5900f4461000cf542c50ff58
title: 'Завдання 217: Збалансовані числа'
challengeType: 1
forumTopicId: 301859
dashedName: problem-217-balanced-numbers
---

# --description--

Додатне число з $k$ (десятковими) цифрами називається збалансованим, якщо сума його перших $⌈\frac{k}{2}⌉$ цифр дорівнює сумі останніх $⌈\frac{k}{2}⌉$, де $⌈x⌉$, округлення вгору $x$ — це найменше ціле число $≥ x$. Таким чином $⌈π⌉ = 4$ і $⌈5⌉ = 5$.

Так, наприклад, всі паліндроми є збалансованими так само, як і 13722.

Нехай $T(n)$ — це сума всіх збалансованих чисел, менших за $10^n$.

Таким чином $T(1) = 45$, $T(2) = 540$ і $T(5) = 334\\,795\\,890$.

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
