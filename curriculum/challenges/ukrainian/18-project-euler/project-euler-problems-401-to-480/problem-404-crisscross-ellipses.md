---
id: 5900f5001000cf542c510012
title: 'Завдання 404: еліпси, що перетинаються'
challengeType: 1
forumTopicId: 302072
dashedName: problem-404-crisscross-ellipses
---

# --description--

$E_a$ є еліпсом, заданим рівнянням $x^2 + 4y^2 = 4a^2$.

$E_a'$ є зображенням еліпса $E_a$, перевернутим на $θ$ градусів проти годинникової стрілки навколо початку координат $O(0, 0)$ за умови $0° &lt; θ &lt; 90°$.

<img class="img-responsive center-block" alt="еліпс E_a та еліпс E_a' повернутий на θ градусів" src="https://cdn.freecodecamp.org/curriculum/project-euler/crisscross-ellipses.gif" style="background-color: white; padding: 10px;" />

$b$ є відстанню від початку координат до двох найближчих точок, які перетинаються, а $c$ є відстанню двох інших точок.

Впорядковану трійку ($a$, $b$, $c$) називають канонічною еліпсоїдною трійкою, якщо $a$, $b$ та $c$ є натуральними числами.

Наприклад, (209, 247, 286) є канонічною еліпсоїдною трійкою.

Нехай $C(N)$ буде кількістю різних канонічних еліпсоїдних трійок ($a$, $b$, $c$) за умови $a ≤ N$.

Можна довести, що $C({10}^3) = 7$, $C({10}^4) = 106$ та $C({10}^6) = 11\\,845$.

Знайдіть $C({10}^{17})$.

# --hints--

`crisscrossEllipses()` має повернути `1199215615081353`.

```js
assert.strictEqual(crisscrossEllipses(), 1199215615081353);
```

# --seed--

## --seed-contents--

```js
function crisscrossEllipses() {

  return true;
}

crisscrossEllipses();
```

# --solutions--

```js
// solution required
```
