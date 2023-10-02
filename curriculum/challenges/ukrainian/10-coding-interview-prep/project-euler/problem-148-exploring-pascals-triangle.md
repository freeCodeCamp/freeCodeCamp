---
id: 5900f4021000cf542c50ff14
title: 'Завдання 148: Дослідження трикутника Паскаля'
challengeType: 1
forumTopicId: 301777
dashedName: problem-148-exploring-pascals-triangle
---

# --description--

Ми можемо легко перевірити, що жоден елемент у перших семи рядах трикутника Паскаля не ділиться на 7:

```markup
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
  1   5   10  10  5   1
1   6   15  20  15  6   1
```

Однак, якщо ми перевіряємо перші сто рядів, то виявимо, що лише 2361 з 5050 елементів не діляться на 7.

# --instructions--

Знайдіть кількість елементів, які не діляться на 7 у першому мільярді (${10}^9$) рядків трикутника Паскаля.

# --hints--

`entriesOfPascalsTriangle()` має повернути `2129970655314432`.

```js
assert.strictEqual(entriesOfPascalsTriangle(), 2129970655314432);
```

# --seed--

## --seed-contents--

```js
function entriesOfPascalsTriangle() {

  return true;
}

entriesOfPascalsTriangle();
```

# --solutions--

```js
// solution required
```
