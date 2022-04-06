---
id: 587d7b8f367417b2b2512b60
title: 関数の影響を受けないようにグローバル変数をリファクタリングする
challengeType: 1
forumTopicId: 301235
dashedName: refactor-global-variables-out-of-functions
---

# --description--

ここまで、関数型プログラミングの 2 つの異なる原則について説明しました。

1) 変数やオブジェクトを変更しないこと - 新しい変数やオブジェクトを作成し、必要に応じて関数からそれらを返します。 ヒント: `const newArr = arrVar` のようなものを使用した場合、`arrVar` が配列であれば、コピーを作成するのではなく、既存の変数への参照を作成するだけです。 そのため、`newArr` の値を変更すると、`arrVar` の値が変更されます。

2) 関数パラメーターを宣言すること - 関数内の計算はどれも、関数に渡された引数にのみ依存し、グローバルのオブジェクトや変数には依存しません。

ある数に 1 を加えることはあまり面白くありませんが、配列や複雑なオブジェクトを扱う場合には、上記の原則を適用できます。

# --instructions--

グローバル配列 `bookList` がどちらの関数内でも変更されないようにコードを書き換えてください。 `add` 関数は、与えられた `bookName` を、渡された配列の末尾に追加し、新しい配列 (リスト) を返す必要があります。 `remove` 関数は、与えられた `bookName` を、渡された配列から削除する必要があります。

**注:** どちらの関数も配列を返す必要があり、新しいパラメーターを `bookName` パラメーターの前に追加する必要があります。

# --hints--

`bookList` は、変更されず、`["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]` と等しくなる必要があります。

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

`add(bookList, "A Brief History of Time")` は `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]` を返す必要があります。

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

`remove(bookList, "On The Electrodynamics of Moving Bodies")` は `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]` を返す必要があります。

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

`remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");` の結果は `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]` と等しくなる必要があります。

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
