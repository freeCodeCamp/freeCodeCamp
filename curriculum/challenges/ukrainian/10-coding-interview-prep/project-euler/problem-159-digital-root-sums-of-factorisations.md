---
id: 5900f40c1000cf542c50ff1e
title: 'Завдання 159: цифровий корінь сум факторизації'
challengeType: 1
forumTopicId: 301790
dashedName: problem-159-digital-root-sums-of-factorisations
---

# --description--

Складене число можна факторизувати різними способами.

Наприклад, за виключенням множення на один, 24 можна факторизувати 7 різними способами:

$$\begin{align}   & 24 = 2 \times 2 \times 2 \times 3\\\\
  & 24 = 2 \times 3 \times 4  \\\\   & 24 = 2 \times 2 \times 6  \\\\
  & 24 = 4 \times 6    \\\\   & 24 = 3 \times 8    \\\\
  & 24 = 2 \times 12   \\\\ & 24 = 24 \end{align}$$

Нагадаємо, що цифровий корінь числа в основі 10 знаходять додаванням цифр цього числа, повторюючи процес, поки число не буде менше ніж 10. Цифровий корінь 467 буде 8.

Digital Root Sum (DRS) — сума цифрових коренів окремих цифр числа. Графік нижче демонструє всі значення DRS для 24.

| Факторизація | Digital Root Sum |
| ------------ | ---------------- |
| 2x2x2x3      | 9                |
| 2x3x4        | 9                |
| 2x2x6        | 10               |
| 4x6          | 10               |
| 3x8          | 11               |
| 2x12         | 5                |
| 24           | 6                |

Найбільший Digital Root Sum для 24 це 11. Функція $mdrs(n)$ дозволяє визначити найбільший Digital Root Sum для $n$. Отже, $mdrs(24) = 11$.

Знайдіть $\sum{mdrs(n)}$ для $1 &lt; n &lt; 1,000,000$.

# --hints--

`euler159()` має повертати `14489159`.

```js
assert.strictEqual(euler159(), 14489159);
```

# --seed--

## --seed-contents--

```js
function euler159() {

  return true;
}

euler159();
```

# --solutions--

```js
// solution required
```
