---
id: 587d7b87367417b2b2512b42
title: const で宣言された配列をミューテートする
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

`const` に不慣れな場合は、<a href="/japanese/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword" target="_blank" rel="noopener noreferrer nofollow"><code>const</code> キーワードに関するこちらのチャレンジ</a>をご覧ください。

`const` 宣言は、現在の JavaScript では多くの用法があります。

デフォルトですべての変数を `const` を使用して割り当てることを好む開発者もいますが、値の再割り当てを必要としないことがわかっている場合に限られます。 そうした開発者は、変数を再割り当てする場合にのみ `let` を使用しています。

しかし、`const` を使用して変数に割り当てたオブジェクト (列や関数を含む) であってもミュータブル (変更可能) であることを理解しておくことが重要です。 `const` 宣言を使用しても、変数識別子の再割り当てを防げるだけです。

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` はエラーになります。 この行をコメントアウトすると、`console.log` に値 `[5, 6, 45]` が表示されます。

ご覧のように、オブジェクト `[5, 6, 7]` それ自体をミューテートさせることができ、その場合も変数 `s` は変更された配列 `[5, 6, 45]` を指し示します。 あらゆる配列と同様に、`s` 内の配列要素はミュータブルですが、`const` を使用したため、代入演算子を使用して異なる配列を指し示すように変数識別子 `s` を使用することはできません。

# --instructions--

配列が `const s = [5, 7, 2]` として宣言されています。 さまざまな要素割り当てを使用して、配列を `[2, 5, 7]` に変更してください。

# --hints--

`const` キーワードを置き換えないでください。

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` は (`const` を使用して宣言した) 定数変数である必要があります。

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+s/g));
```

元の配列宣言を変更しないでください。

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g
    )
  );
```

`s` が `[2, 5, 7]` と等しくなるようにする必要があります。

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --seed--

## --seed-contents--

```js
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
```

# --solutions--

```js
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```
