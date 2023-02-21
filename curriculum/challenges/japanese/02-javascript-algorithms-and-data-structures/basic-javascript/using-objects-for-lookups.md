---
id: 56533eb9ac21ba0edf2244ca
title: オブジェクトを使用して検索を行う
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

オブジェクトは、辞書のようなキー/値の保管場所と捉えることができます。 表形式のデータがある場合、`switch` ステートメントや `if/else` のチェーンを使用せずに、オブジェクトを利用して目的の値を探すことができます。 この方法は、入力データが特定の範囲に制限されていることがわかっている場合に特に便利です。

下記は記事 (article) を表すオブジェクトを使った例です。

```js
const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
```

`articleAuthor` は `Kaashan Hussain` という文字列、`articleLink` は `https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/` という文字列、`valueLookup` は `How to create objects in JavaScript` という文字列になります。

# --instructions--

switch ステートメントを `lookup` という名前のオブジェクトに変換してください。 オブジェクトを利用して `val` をルックアップ検索し、関連する文字列を `result` 変数に代入してください。

# --hints--

`phoneticLookup("alpha")` は文字列 `Adams` と等しくなる必要があります。

```js
assert(phoneticLookup('alpha') === 'Adams');
```

`phoneticLookup("bravo")` は文字列 `Boston` と等しくなる必要があります。

```js
assert(phoneticLookup('bravo') === 'Boston');
```

`phoneticLookup("charlie")` は文字列 `Chicago` と等しくなる必要があります。

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

`phoneticLookup("delta")` は文字列 `Denver` と等しくなる必要があります。

```js
assert(phoneticLookup('delta') === 'Denver');
```

`phoneticLookup("echo")` は文字列 `Easy` と等しくなる必要があります。

```js
assert(phoneticLookup('echo') === 'Easy');
```

`phoneticLookup("foxtrot")` は文字列 `Frank` と等しくなる必要があります。

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

`phoneticLookup("")` は `undefined` になる必要があります。

```js
assert(typeof phoneticLookup('') === 'undefined');
```

`return` ステートメントを変更しないでください。

```js
assert(code.match(/return\sresult;/));
```

`case` ステートメント、`switch` ステートメント、`if` ステートメントを使用しないでください。

```js
assert(
  !/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g, ''))
);
```

# --seed--

## --seed-contents--

```js
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
```

# --solutions--

```js
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```
