---
id: 587d7b8f367417b2b2512b60
title: Рефакторинг глобальних змінних поза функціями
challengeType: 1
forumTopicId: 301235
dashedName: refactor-global-variables-out-of-functions
---

# --description--

Наразі ми розглянули два окремих принципи функційного програмування:

1) Не змінюйте змінну чи об’єкт – створюйте нові змінні та об’єкти і, якщо потрібно, повертайте їх з функції. Підказка: якщо використати щось схоже до `const newArr = arrVar` (де `arrVar` є масивом), ви просто створите посилання на наявну змінну, а не копію. Тому, змінивши значення в `newArr`, зміниться значення в `arrVar`.

2) Оголошення параметрів функції – будь-яке обчислення всередині функції залежить лише від аргументів, переданих до функції, а не від глобального об’єкта чи змінної.

Додавання одиниці до числа не дуже цікаве, але ми можемо застосувати ці принципи при роботі з масивами або складнішими об’єктами.

# --instructions--

Перепишіть код так, щоб глобальний масив `bookList` не змінювався всередині жодної з функцій. Функція `add` повинна додати наданий `bookName` в кінець переданого масиву та повернути новий масив (список). Функція `remove` повинна видалити наданий `bookName` з переданого масиву.

**Примітка:** обидві функції повинні повертати масив, і будь-які нові параметри повинні бути додані перед параметром `bookName`.

# --hints--

`bookList` не повинен змінюватись та досі повинен дорівнювати `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

```js
add(bookList, "Test");
remove(bookList, "The Hound of the Baskervilles");
assert(
  JSON.stringify(bookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`add(bookList, "A Brief History of Time")` має повертати `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
assert(
  JSON.stringify(add(bookList, "A Brief History of Time")) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

`remove(bookList, "On The Electrodynamics of Moving Bodies")` має повертати `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

```js
assert(
  JSON.stringify(remove(bookList, 'On The Electrodynamics of Moving Bodies')) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");` має дорівнювати `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
assert(
  JSON.stringify(remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies')) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

# --seed--

## --seed-contents--

```js
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;

  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}
```

# --solutions--

```js
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {
  return [...bookList, bookName];
}

function remove(bookList, bookName) {
  const bookListCopy = [...bookList];
  const bookNameIndex = bookList.indexOf(bookName);
  if (bookNameIndex >= 0) {
    bookListCopy.splice(bookNameIndex, 1);
  }
  return bookListCopy;
}
```
