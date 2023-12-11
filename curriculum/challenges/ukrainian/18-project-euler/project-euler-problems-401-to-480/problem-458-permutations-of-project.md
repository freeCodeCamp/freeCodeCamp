---
id: 5900f5361000cf542c510049
title: 'Завдання 458: перестановка проєкту'
challengeType: 1
forumTopicId: 302132
dashedName: problem-458-permutations-of-project
---

# --description--

Розглянемо алфавіт $A$, утворений із літер слова `project`: $A = \\{c, e, j, o, p, r, t\\}$.

Нехай $T(n)$ буде кількістю рядків довжиною $n$, які складаються з літер алфавіту $A$, які не мають вкладеного рядка, що є однією з 5040 перестановок слова `project`.

$T(7) = 7^7 - 7! = 818\\,503$.

Знайдіть $T({10}^{12})$. У відповіді запишіть 9 останніх цифр.

# --hints--

`permutationsOfProject()` має повернути `423341841`.

```js
assert.strictEqual(permutationsOfProject(), 423341841);
```

# --seed--

## --seed-contents--

```js
function permutationsOfProject() {

  return true;
}

permutationsOfProject();
```

# --solutions--

```js
// solution required
```
