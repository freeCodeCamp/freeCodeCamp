---
id: 5900f46e1000cf542c50ff80
title: 'Завдання 257: Кутові бісектриси'
challengeType: 1
forumTopicId: 301905
dashedName: problem-257-angular-bisectors
---

# --description--

Given is an integer sided triangle $ABC$ with sides $a ≤ b ≤ c$ ($AB = c$, $BC = a$ and $AC = b$).

Бісектриси кутів трикутника перетинають в точках $E$, $F$ і $G$ (див. малюнок нижче).

<img class="img-responsive center-block" alt="трикутник ABC з бісектрисами, що перетинають сторони в точках E, F і G" src="https://cdn.freecodecamp.org/curriculum/project-euler/angular-bisectors.gif" style="background-color: white; padding: 10px;" />

Відрізки $EF$, $EG$ і $FG$ ділять трикутник $ABC$ на чотири менші трикутники: $AEG$, $BFE$, $CGF$ і $EFG$. Можна довести, що для кожного з цих чотирьох трикутників відношення площ $\frac{\text{area} (ABC)} {\text{area}\text{subtriangle})}$ є раціональним числом. Однак існують трикутники, у яких деякі або всі ці відношення є цілісними числами.

Скільки існує трикутників $ABC$ з периметром $≤ 100\\,000\\,000$, у яких відношення площ $\frac{\text{area}(ABC)} {\text{area}(AEG)}$ дорівнює цілому числу?

# --hints--

`angularBisectors()` має повернути `139012411`.

```js
assert.strictEqual(angularBisectors(), 139012411);
```

# --seed--

## --seed-contents--

```js
function angularBisectors() {

  return true;
}

angularBisectors();
```

# --solutions--

```js
// solution required
```
