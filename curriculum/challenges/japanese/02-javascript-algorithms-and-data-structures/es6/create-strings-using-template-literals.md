---
id: 587d7b8a367417b2b2512b4e
title: テンプレートリテラルを使用して文字列を作成する
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

ES6 の新機能に<dfn>テンプレートリテラル</dfn>があります。 これは複雑な文字列を簡単に作成できる特殊な型の文字列です。

テンプレートリテラルを使用すると、複数行の文字列を作成したり、文字列の補完機能を使用して文字列を作成したりできます。

次のコードを考えてみましょう。

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

コンソールには、`Hello, my name is Zodiac Hasbro!` と `I am 56 years old.` の文字列が表示されます。

ここではいろいろな処理を行っています。 まず、文字列を囲むのに引用符 (`'` または `"`) ではなくバッククォート (`` ` ``) を使用しています。 次に、コードと出力の両方で文字列が複数行になっています。 このため文字列内に `\n` を挿入せずに済みます。 上記で使用している `${variable}` の構文はプレイスホルダーです。 基本的には `+` 演算子で連結する必要がなくなります。 文字列に変数を追加するには、変数をテンプレート文字列に入れて `${` と `}` で囲むだけです。 同様にして、文字列リテラルに `${a + b}` などの他の式を含めることもできます。 この新しい方法で文字列を作成することで、より柔軟に堅牢な文字列を作成できます。

# --instructions--

テンプレートリテラル構文でバッククォートを使用して、リスト要素 (`li`) 文字列の配列を作成してください。 各リスト要素のテキストは、`result` オブジェクトの `failure` プロパティの配列要素の 1 つであり、`text-warning` の値を持つ `class` 属性を持たせます。 `makeList` 関数からは、リスト項目の文字列の配列を返してください。

イテレーターメソッド (任意の種類のループ) を使用して、次のような目的の出力を実現してください。

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

`failuresList` は、`result.failure` のメッセージを含む配列にする必要があります。

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

`failuresList` は、指定された出力と等しい必要があります。

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

テンプレート文字列と式の補間機能を使用する必要があります。

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

イテレーターを使用する必要があります。

```js
(getUserInput) =>
  assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
```

# --seed--

## --seed-contents--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

# --solutions--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  return arr.map(val => `<li class="text-warning">${val}</li>`);
}

const failuresList = makeList(result.failure);
```
