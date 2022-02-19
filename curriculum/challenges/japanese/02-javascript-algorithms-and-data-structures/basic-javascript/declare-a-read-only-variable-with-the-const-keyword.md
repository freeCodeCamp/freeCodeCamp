---
id: 587d7b87367417b2b2512b41
title: const キーワードを使用して読み取り専用の変数を宣言する
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

変数を宣言する新しい方法はキーワード `let` だけではありません。 ES6 では、`const` キーワードを使用して変数を宣言することもできます。

`const` は `let` の持つ素晴らしい機能をすべて備えていますが、それだけでなく、`const` を使用して宣言した変数は読み取り専用になります。 それらの変数は定数となり、いったん `const` で代入された変数には、再び代入することはできません。

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

`FAV_PET` に再び値を代入しようとしているので、コンソールにエラーが表示されます。

再代入を必要としない変数に名前を付けるときは、常に `const` キーワードを使用してください。 そうすれば、定数でなければならない変数に誤って再代入しようとするのを防ぐのに役立ちます。

**Note:** It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). You will learn more about objects, arrays, and immutable and mutable values in later challenges. Also in later challenges, you will see examples of uppercase, lowercase, or camelCase variable identifiers.

# --instructions--

Change the code so that all variables are declared using `let` or `const`. Use `let` when you want the variable to change, and `const` when you want the variable to remain constant. Also, rename variables declared with `const` to conform to common practices.

# --hints--

`var` should not exist in your code.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

You should change `fCC` to all uppercase.

```js
(getUserInput) => {
  assert(getUserInput('index').match(/(FCC)/));
  assert(!getUserInput('index').match(/fCC/));
}
```

`FCC` should be a constant variable declared with `const`.

```js
assert.equal(FCC, 'freeCodeCamp');
assert.match(code, /const\s+FCC/);
```

`fact` should be declared with `let`.

```js
(getUserInput) => assert(getUserInput('index').match(/(let fact)/g));
```

`console.log` should be changed to print the `FCC` and `fact` variables.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g));
```

# --seed--

## --seed-contents--

```js
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
```

# --solutions--

```js
const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);
```
