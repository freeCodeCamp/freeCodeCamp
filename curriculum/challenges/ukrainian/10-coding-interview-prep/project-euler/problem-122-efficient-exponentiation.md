---
id: 5900f3e61000cf542c50fef9
title: 'Завдання 122: Ефективний метод піднесення до степеня'
challengeType: 1
forumTopicId: 301749
dashedName: problem-122-efficient-exponentiation
---

# --description--

Найпростіший спосіб обчислення $n^{15}$ вимагає виконання 14 множень:

$$n × n × \ldots × n = n^{15}$$

Якщо скористатися "двійковим" методом, можна обчислити, виконавши 6 множень:

$$\begin{align}   & n × n = n^2\\\\
  & n^2 × n^2 = n^4\\\\   & n^4 × n^4 = n^8\\\\
  & n^8 × n^4 = n^{12}\\\\   & n^{12} × n^2 = n^{14}\\\\
  & n^{14} × n = n^{15} \end{align}$$

Проте кількість множень ще можна зменшити до 5:

$$\begin{align}   & n × n = n^2\\\\
  & n^2 × n = n^3\\\\   & n^3 × n^3 = n^6\\\\
  & n^6 × n^6 = n^{12}\\\\ & n^{12} × n^3 = n^{15} \end{align}$$

Визначаємо $m(k)$ як мінімальну кількість множень для обчислення $n^k$. Наприклад, $m(15) = 5$.

Знайдіть $\sum{m(k)}$ для $1 ≤ k ≤ 200$.

# --hints--

`efficientExponentation()` має повернути `1582`.

```js
assert.strictEqual(efficientExponentation(), 1582);
```

# --seed--

## --seed-contents--

```js
function efficientExponentation() {

  return true;
}

efficientExponentation();
```

# --solutions--

```js
// solution required
```
