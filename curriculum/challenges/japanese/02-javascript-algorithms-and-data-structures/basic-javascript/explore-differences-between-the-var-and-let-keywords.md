---
id: 587d7b87367417b2b2512b3f
title: var キーワードと let キーワードの違いについて
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

`var` キーワードによる変数宣言の最も大きな問題の一つは、簡単に変数宣言を上書きできてしまうことです。

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

上記のコードで、変数 `camper` は最初は `James` として宣言されていますが、その後 `David` に上書きされています。 そのためコンソールには文字列 `David` が表示されます。

小規模なアプリケーションであれば、こうした問題は起きにくいかもしれまん。 しかし、コードの規模が大きくなると、変数を意図せずに誤って上書きしてしまう可能性が高くなります。 このような動作はエラーを返さないため、バグを見つけて修正することが難しくなります。

JavaScript の大きなアップデートとなった ES6 では、`var`キーワードに伴うこうした潜在的な問題を解決するために `let` というキーワードが導入されました。 以降のチャレンジでは ES6 の他の機能についても学習します。

上記のコードの `var` を `let` に置き換えた場合、結果はエラーになります。

```js
let camper = "James";
let camper = "David";
```

エラーはブラウザーコンソールで確認できます。

`var` とは違って、`let` を使用する場合は、同じ名前を持つ変数は一度だけしか宣言できません。

# --instructions--

`let` キーワードだけを使用するようにコードを更新してください。

# --hints--

`var` がコード内に存在しない必要があります。

```js
assert.notMatch(code, /var/g);
```

`catName` は文字列 `Oliver` である必要があります。

```js
assert.equal(catName, 'Oliver');
```

`catSound` は文字列 `Meow!` である必要があります。

```js
assert.equal(catSound, 'Meow!');
```

# --seed--

## --seed-contents--

```js
var catName = "Oliver";
var catSound = "Meow!";
```

# --solutions--

```js
let catName = "Oliver";
let catSound = "Meow!";
```
