---
id: 5900f4861000cf542c50ff98
title: 'Завдання 281: Начинки для піци'
challengeType: 1
forumTopicId: 301932
dashedName: problem-281-pizza-toppings
---

# --description--

У вас є піца (ідеальне коло), нарізана на однакові шматки $m·n$, і ви хочете мати рівно одну начинку на кожному шматочку.

Нехай $f(m,n)$ позначає кількість способів приготування начинок для піци з $m$ різними інгредієнтами ($m ≥2$), використовуючи кожну $n$ начинку на скибках ($n ≥ 1$). Відображення вважаються різним, обертання - ні.

Таким чином, наприклад, $f(2,1) = 1$, $f(2,2) = f(3,1) = 2$ і $f(3,2) = 16$. $f(3,2)$ показано нижче:

<img class="img-responsive center-block" alt="анімація з 16-ма способами для отримання 3 різних начинок на 2 шматки кожна" src="https://cdn.freecodecamp.org/curriculum/project-euler/pizza-toppings.gif" style="background-color: white; padding: 10px;" />

Знайдіть суму усіх $f(m,n)$ таких, що $f(m,n) ≤ {10}^{15}$.

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
