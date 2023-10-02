---
id: 5900f5461000cf542c510058
title: 'Завдання 473: База чисел ϕ'
challengeType: 1
forumTopicId: 302150
dashedName: problem-473-phigital-number-base
---

# --description--

Нехай $\varphi$ це золотий перетин: $\varphi = \frac{1+\sqrt{5}}{2}.$

Цікаво, що можна записати кожне додатне ціле число як суму степенів \varphi$, навіть якщо будь-який степінь \varphi$ буде використовується не більше одного разу.

Навіть тоді представлення не є унікальним.

Ми можемо зробити його унікальним, вимагаючи, щоб не використовувалися степені з послідовними показниками, і щоб представлення було остаточним.

Наприклад:

$2 = \varphi + \varphi^{-2}$ і $3 = \varphi^{2} + \varphi^{-2}$

Щоб представити цю суму степенів в $\varphi$, ми використовуємо рядок з нулем і одиницею, щоб вказати, де починаються від'ємні значення. Ми називаємо це представленням у базі чисел ϕ.

Таким чином, $1 = 1_{\varphi}$, $2 = 10.01_{\varphi}$, $3 = 100.01_{\varphi}$ та $14 = 100.100.00{\varphi}$. The strings representing 1, 2 and 14 in the phigital number base are palindromic, while the string representing 3 is not (the phigital point is not the middle character).

Сума додатних цілих чисел не перевищує 1000, чиї ϕ-представлення є паліндромними та дорівнюють 4345.

Знайдіть суму додатних цілих чисел, не більших за $10^{10}$, чиї ϕ-представлення є паліндромними.

# --hints--

`phigitalNumberBase()` повинен повертатися як `35856681704365`.

```js
assert.strictEqual(phigitalNumberBase(), 35856681704365);
```

# --seed--

## --seed-contents--

```js
function phigitalNumberBase() {

  return true;
}

phigitalNumberBase();
```

# --solutions--

```js
// solution required
```
