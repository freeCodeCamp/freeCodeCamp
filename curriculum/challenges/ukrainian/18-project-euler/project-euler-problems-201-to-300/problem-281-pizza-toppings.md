---
id: 5900f4861000cf542c50ff98
title: 'Завдання 281: начинки для піци'
challengeType: 1
forumTopicId: 301932
dashedName: problem-281-pizza-toppings
---

# --description--

У вас є піца (ідеальне коло), нарізана на однакові шматочки $m·n$, і ви хочете, щоб на всіх шматочках була різна начинка.

Нехай $f(m,n)$ позначає можливу кількість начинок на піці з $m$ різними начинками ($m ≥ 2$), якщо кожну з них використано на $n$ шматочках ($n ≥ 1$). Відбиття вважаються різними, обертання — ні.

Таким чином, наприклад, $f(2,1) = 1$, $f(2,2) = f(3,1) = 2$ та $f(3,2) = 16$. $f(3,2)$ показано нижче:

<img class="img-responsive center-block" alt="анімація з 16-ма способами для 3 різних начинок, кожна на 2 шматочках" src="https://cdn.freecodecamp.org/curriculum/project-euler/pizza-toppings.gif" style="background-color: white; padding: 10px;" />

Знайдіть суму всіх $f(m,n)$, за яких $f(m,n) ≤ {10}^{15}$.

# --hints--

`pizzaToppings()` має повернути `1485776387445623`.

```js
assert.strictEqual(pizzaToppings(), 1485776387445623);
```

# --seed--

## --seed-contents--

```js
function pizzaToppings() {

  return true;
}

pizzaToppings();
```

# --solutions--

```js
// solution required
```
