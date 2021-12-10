---
id: 587d8254367417b2b2512c70
title: Створення та додавання до набору в ES6
challengeType: 1
forumTopicId: 301636
dashedName: create-and-add-to-sets-in-es6
---

# --description--

Ви вже попрацювати з ES5, а тепер виконаєте щось подібне в ES6. Це буде значно простіше. ES6 містить вбудовану структуру даних `Set`, тому тепер тут буде включено багато операцій, які ви зазвичай писали вручну. Погляньмо:

Щоб створити новий порожній набір Set:

```js
var set = new Set();
```

Можна створити обʼєкт Set зі значенням:

```js
var set = new Set(1);
```

Можна створити обʼєкт Set з масивом:

```js
var set = new Set([1, 2, 3]);
```

До створеного набору Set ви можете додавати значення, використовуючи метод `add`:

```js
var set = new Set([1, 2, 3]);
set.add([4, 5, 6]);
```

Нагадуємо, що набір Set - це структура даних, яка не може містити повторювані значення:

```js
var set = new Set([1, 2, 3, 1, 2, 3]);
// set contains [1, 2, 3] only
```

# --instructions--

Щоб потренуватись, повертайте набір Set з такими значеннями: `1, 2, 3, 'Taco', 'Cat', 'Awesome'`

# --hints--

Ваш набір `Set` повинен містити лише значення `1, 2, 3, Taco, Cat, Awesome`.

```js
assert(
  (function () {
    var test = checkSet();
    return (
      test.size == 6 &&
      test.has(1) &&
      test.has(2) &&
      test.has(3) &&
      test.has('Taco') &&
      test.has('Cat') &&
      test.has('Awesome')
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // Only change code below this line

  // Only change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet();
```

# --solutions--

```js
function checkSet(){var set = new Set([1,2,3,'Taco','Cat','Awesome']);
return set;}
```
