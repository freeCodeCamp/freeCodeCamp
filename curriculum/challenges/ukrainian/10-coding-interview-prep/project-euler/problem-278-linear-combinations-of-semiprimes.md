---
id: 5900f4831000cf542c50ff95
title: 'Завдання 278: Лінійні комбінації напівпростих чисел'
challengeType: 1
forumTopicId: 301928
dashedName: problem-278-linear-combinations-of-semiprimes
---

# --description--

Зважаючи на значення цілих чисел $1 &lt; a_1 &lt; a_2 &lt; \ldots &lt; a_n$, розглянемо лінійну комбінацію $q_1a_1 + q_2a_2 + \ldots + q_na_n = b$, використовуючи лише цілі значення $q_k ≥ 0$.

Зверніть увагу, що, можливо, для певного набору $a_k$ не всі значення $b$ можливі. Наприклад, якщо $a_1 = 5$, а $a_2 = 7$, то немає таких $q_1 ≥ 0$ та $q_2 ≥ 0$, щоб $b$ було 1, 2, 3, 4, 6, 8, 9, 11, 13, 16, 18 чи 23.

Фактично, 23 є найбільшим неможливим значенням $b$ для $a_1 = 5$ та $a_2 = 7$. Тому вважаємо, що $f(5, 7) = 23$. Так само можна показати, що $f(6, 10, 15)=29$, а $f(14, 22, 77) = 195$.

Знайдіть $\sum f(pq,pr,qr)$, де $p$, $q$ та $r$ є простими числами, а $p &lt; q &lt; r &lt; 5000$.

# --hints--

`linearCombinationOfSemiprimes()` має повернути `1228215747273908500`.

```js
assert.strictEqual(linearCombinationOfSemiprimes(), 1228215747273908500);
```

# --seed--

## --seed-contents--

```js
function linearCombinationOfSemiprimes() {

  return true;
}

linearCombinationOfSemiprimes();
```

# --solutions--

```js
// solution required
```
