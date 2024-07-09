---
id: 587d7b8f367417b2b2512b60
title: 함수 밖 전역 변수 리팩토링하기
challengeType: 1
forumTopicId: 301235
dashedName: refactor-global-variables-out-of-functions
---

# --description--

지금까지 함수형 프로그래밍에 대한 두가지 명확한 원칙에 대해 살펴봤습니다:

1) 변수나 객체를 변형시키지 않기 - 필요시 함수에서 새 변수와 객체를 생성하여 반환하기. 힌트: `arrVar`가 배열일 때 `const newArr = arrVar` 같이 변수를 생성하면 기존 변수의 복사값이 아니라 참조값을 생성하게 됩니다. 그래서 `newArr`에서 값을 변형시키는 것은 `arrVar`의 값을 변형시킵니다.

2) 함수 파라미터 선언하기 - 함수 안에서 일어나는 모든 계산은 함수에 전달되는 인자에 따라 다르며 전역 변수 혹은 객체에 따라 다르지 않습니다.

숫자에 1을 더하는 것은 그다지 흥미롭지 않지만, 배열이나 더 복잡한 객체와 함께 작업할 때 이러한 원칙을 적용할 수 있습니다.

# --instructions--

코드를 다시 작성하여 전역 배열 `bookList`가 어느 함수에서도 변형되지 않도록 하시오. `add` 함수는 `bookName`을 전달받은 배열의 끝에 추가하고 새로운 배열(list)를 반환해야 합니다. `remove` 함수는 `bookName`을 전달받은 배열로부터 제거해야 합니다.

**주의:** 두 함수 모두 배열을 반환해야 하며 어떤 매개변수든지 `bookName` 매개변수 전에 추가되어야 합니다.

# --hints--

`bookList`는 변형되지 않아야 하고 `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`와 같아야 합니다.

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

`add(bookList, "A Brief History of Time")`는 `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`를 반환해야 합니다.

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

`remove(bookList, "On The Electrodynamics of Moving Bodies")`는 `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`을 반환해야 합니다.

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

`remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");`는 `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`를 반환해야 합니다.

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
