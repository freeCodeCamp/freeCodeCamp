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

**注:** 開発者は一般に、イミュータブル (変更不可) の値には大文字の変数識別子を使用し、ミュータブル (変更可能) の値 (オブジェクトや配列) には小文字またはキャメルケースを使用します。 オブジェクトや配列、ミュータブルの値とイミュータブルの値については、このあとのチャレンジで詳しく説明します。 また以降のチャレンジでは、大文字、小文字、またはキャメルケースのさまざまな変数識別子を使用します。

# --instructions--

コードを変更して、すべての変数を `let` または `const` を使用して宣言してください。 変更を必要とする変数には `let` を使用し、定数にする必要がある変数には `const` を使用してください。 また、`const` で宣言した変数の名前について、一般的な慣習に従うように変更してください。 変数に代入する文字列は変更しないようにしてください。

# --hints--

`var` がコード内に存在しないようにしてください。

```js
assert.notMatch(code, /var/g);
```

`fCC` をすべて大文字に変更する必要があります。

```js
assert.match(code, /(FCC)/);
assert.notMatch(code, /(fCC)/);
```

`FCC` は `const` で宣言された定数変数である必要があります。

```js
assert.match(code, /const\s+FCC/);
```

`FCC` に代入する文字列を変更しないようにしてください。

```js
assert.equal(FCC, 'freeCodeCamp');
```

`fact` は `let` を使用して宣言する必要があります。

```js
assert.match(code, /(let\s+fact)/g);
```

`console.log` を、`FCC` と `fact` という変数を出力するように変更する必要があります。

```js
assert.match(code, /console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g);
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
