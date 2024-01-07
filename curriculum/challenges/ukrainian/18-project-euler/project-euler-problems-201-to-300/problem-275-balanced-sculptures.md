---
id: 5900f4801000cf542c50ff92
title: 'Завдання 275: збалансовані скульптури'
challengeType: 1
forumTopicId: 301925
dashedName: problem-275-balanced-sculptures
---

# --description--

Визначимо збалансовану скульптуру $n$-го порядку як:

- Поліміно, що складається з $n + 1$ плиток, відомих як блоки ($n$ плиток), та основи (залишкової плитки);
- центр основи розташований на координатах ($x = 0$, $y = 0$);
- $y$-координати блоків більші за нуль (тому основа є унікальною найнижчою плиткою);
- центр мас усіх блоків має $x$-координату, рівну нулю.

Під час підрахунку скульптур будь-які композиції, які є просто відбиттям навколо осі $y$, <u>не</u> зараховуються як окремі. Наприклад, знизу наведено 18 збалансованих скульптур 6-го порядку. Зауважте, що кожна пара дзеркальних зображень (на осі $y$) зараховується як одна скульптура:

<img class="img-responsive center-block" alt="18 збалансованих скульптур шостого порядку" src="https://cdn.freecodecamp.org/curriculum/project-euler/balanced-sculptures.gif" style="background-color: white; padding: 10px;" />

Існує 964 збалансованих скульптур 10-го порядку та 360505 15-го порядку.

Скільки існує збалансованих скульптур 18-го порядку?

# --hints--

`balancedSculptures()` має повернути `15030564`.

```js
assert.strictEqual(balancedSculptures(), 15030564);
```

# --seed--

## --seed-contents--

```js
function balancedSculptures() {

  return true;
}

balancedSculptures();
```

# --solutions--

```js
// solution required
```
