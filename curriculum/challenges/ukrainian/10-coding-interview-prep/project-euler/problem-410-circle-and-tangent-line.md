---
id: 5900f5071000cf542c510018
title: 'Завдання 410: Коло та дотична лінія'
challengeType: 1
forumTopicId: 302079
dashedName: problem-410-circle-and-tangent-line
---

# --description--

Нехай $C$ — коло з радіусом $r$, $x^2 + y^2 = r^2$. Обираємо дві точки $P(a, b) $ та $Q(-a, c)$, щоб лінія, яка проходить через $P$ і $Q$, була дотичною до $C$.

Наприклад, четвірка $(r, a, b, c) = (2, 6, 2, -7)$ задовольняє цю властивість.

Нехай $F(R, X)$ — кількість четвірок цілих чисел $(r, a, b, c)$ з цією властивістю при $0 &lt; r ≤ R$ і $0 &lt; ≤ X$.

Можемо переконатися, що $F(1, 5) = 10$, $F(2, 10) = 52$ і $F(10, 100) = 3384$.

Знайдіть $F({10}^8, {10}^9) + F({10}^9, {10}^8)$.

# --hints--

`circleAndTangentLine()` має повернути `799999783589946600`.

```js
assert.strictEqual(circleAndTangentLine(), 799999783589946600);
```

# --seed--

## --seed-contents--

```js
function circleAndTangentLine() {

  return true;
}

circleAndTangentLine();
```

# --solutions--

```js
// solution required
```
