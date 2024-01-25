---
id: 5900f46e1000cf542c50ff80
title: 'Завдання 257: бісектриси кутів'
challengeType: 1
forumTopicId: 301905
dashedName: problem-257-angular-bisectors
---

# --description--

Дано трикутник $ABC$ з цілими сторонами $a ≤ b ≤ c$ ($AB = c$, $BC = a$ та $AC = b$).

Бісектриси кутів трикутника перетинають сторони в точках $E$, $F$ та $G$ (див. рисунок нижче).

<img class="img-responsive center-block" alt="трикутник ABC з бісектрисами, що перетинають сторони в точках E, F та G" src="https://cdn.freecodecamp.org/curriculum/project-euler/angular-bisectors.gif" style="background-color: white; padding: 10px;" />

Відрізки $EF$, $EG$ та $FG$ ділять трикутник $ABC$ на чотири менші трикутники: $AEG$, $BFE$, $CGF$ та $EFG$. Можна довести, що для кожного з цих чотирьох трикутників співвідношення $\frac{\text{площа}(ABC)}{\text{площа}(\text{меншого трикутника})}$ є раціональним числом. Однак існують трикутники, за яких деякі або всі такі співвідношення є цілими числами.

Скільки існує трикутників $ABC$ з периметром $≤ 100\\,000\\,000$, для яких співвідношення $\frac{\text{площа}(ABC)}{\text{площа}(AEG)}$ є цілим числом?

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
