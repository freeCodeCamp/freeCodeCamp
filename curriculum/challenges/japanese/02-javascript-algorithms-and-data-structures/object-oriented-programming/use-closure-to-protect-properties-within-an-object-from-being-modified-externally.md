---
id: 587d7db2367417b2b2512b8a
title: >-
  クロージャーを使用してオブジェクト内のプロパティを外部から変更されないように保護する
challengeType: 1
forumTopicId: 18234
dashedName: >-
  use-closure-to-protect-properties-within-an-object-from-being-modified-externally
---

# --description--

前回のチャレンジで、`bird` には public プロパティの `name` がありました。 `bird` の定義の外側からアクセスして変更できるため、public とみなされます。

```js
bird.name = "Duffy";
```

したがって、コードのどこからでも、`bird` の名前を任意の値に簡単に変更できることになります。 たとえば、パスワードや銀行口座がコードベースのどこからでも簡単に変更できるような状況を考えてみてください。 これは多くの問題を引き起こす可能性があります。

この public (公開) プロパティを private (非公開) にするには、変数をコンストラクター関数の中で作成するのが最も簡単です。 コンストラクター関数内で作成すると、その変数のスコープが関数の内部に変更され、グローバルに利用できなくなります。 これにより、変数に対してアクセスや変更ができるのはコンストラクター関数内のメソッドのみになります。

```js
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
```

この例で、`getHatchedEggCount` は private 変数 `hatchedEgg` にアクセスできるので、特権のあるメソッドになります。 これが可能になる理由は、`hatchedEgg` が `getHatchedEggCount` と同じコンテキストで宣言されているためです。 JavaScript では、関数は常に、自身が作成されたコンテキストにアクセスすることができます。 このようなコンテキストのことを `closure` (クロージャー) と呼びます。

# --instructions--

`Bird` 関数での `weight` の宣言を変更して、private 変数にしてください。 次に、`weight` の値として 15 を返すメソッド `getWeight` を作成してください。

# --hints--

`weight` プロパティを private 変数にして、値 `15` を割り当てる必要があります。

```js
assert(code.match(/(var|let|const)\s+weight\s*\=\s*15\;?/g));
```

private 変数 `weight` の値を返す `getWeight` というメソッドを `Bird` に作成する必要があります。

```js
assert(new Bird().getWeight() === 15);
```

`getWeight` 関数は private 変数 `weight` を返す必要があります。

```js
assert(code.match(/((return\s+)|(\(\s*\)\s*\=\>\s*))weight\;?/g));
```

# --seed--

## --seed-contents--

```js
function Bird() {
  this.weight = 15;


}
```

# --solutions--

```js
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
```
