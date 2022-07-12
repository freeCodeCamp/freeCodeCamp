---
id: 5900f4071000cf542c50ff19
title: 'Завдання 154. Знайомство з пірамідою Паскаля'
challengeType: 1
forumTopicId: 301785
dashedName: problem-154-exploring-pascals-pyramid
---

# --description--

Трикутна піраміда побудована з використанням сферичних куль таким чином, що кожна кулька спирається рівно на три кульки наступного нижнього рівня.

<img class="img-responsive center-block" alt="трикутна піраміда складається з сферичних куль і налічує чотири рівні" src="https://cdn.freecodecamp.org/curriculum/project-euler/exploring-pascals-pyramid.png" style="background-color: white; padding: 10px;" />

Потім ми обчислюємо кількість шляхів, що ведуть від вершини до кожної позиції: шлях починається з вершини і проходить вниз до кожної з трьох сфер безпосередньо під поточним розташуванням. Відповідно, кількість шляхів для досягнення певної позиції — це сума чисел безпосередньо над нею (залежно від положення, над нею може бути до трьох чисел).

У результаті чого ми отримуємо трикутник Паскаля, у якому цифри у кожному ряді n є біномінальними коефіцієнтами ${(x + y + z)}^n$.

Скільки коефіцієнтів у ряді ${(x + y + z)}^{200000} $ кратні ${10}^{12}$?

# --hints--

`pascalsPyramid()` має повертати `479742450`.

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
