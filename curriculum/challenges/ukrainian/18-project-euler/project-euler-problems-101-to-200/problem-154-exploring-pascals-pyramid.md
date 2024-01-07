---
id: 5900f4071000cf542c50ff19
title: 'Завдання 154: вивчення піраміди Паскаля'
challengeType: 1
forumTopicId: 301785
dashedName: problem-154-exploring-pascals-pyramid
---

# --description--

Трикутна піраміда побудована з використанням сферичних куль таким чином, що кожна куля розташована на трьох кулях нижнього рівня.

<img class="img-responsive center-block" alt="трикутна піраміда побудована зі сферичних куль з чотирма рівнями" src="https://cdn.freecodecamp.org/curriculum/project-euler/exploring-pascals-pyramid.png" style="background-color: white; padding: 10px;" />

Потім ми обчислюємо кількість шляхів, що ведуть від вершини до кожної позиції: шлях починається з вершини і проходить вниз до кожної з трьох сфер одразу під поточним розташуванням. Відповідно, кількість шляхів для досягнення певної позиції — це сума чисел одразу над нею (залежно від положення, над нею може бути до трьох чисел).

У результаті ми отримаємо піраміду Паскаля, де числа у кожному ряді n є коефіцієнтами розкладання тричлена ${(x + y + z)}^n$.

Скільки коефіцієнтів розкладання ${(x + y + z)}^{200000}$ діляться на ${10}^{12}$?

# --hints--

`pascalsPyramid()` має повернути `479742450`.

```js
assert.strictEqual(pascalsPyramid(), 479742450);
```

# --seed--

## --seed-contents--

```js
function pascalsPyramid() {

  return true;
}

pascalsPyramid();
```

# --solutions--

```js
// solution required
```
