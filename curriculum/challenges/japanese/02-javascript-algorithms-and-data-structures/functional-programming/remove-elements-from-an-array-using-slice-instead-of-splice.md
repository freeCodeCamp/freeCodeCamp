---
id: 9d7123c8c441eeafaeb5bdef
title: splice の代わりに slice を使用して配列から要素を削除する
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

配列の操作では、アイテムを削除して残りの配列を保持したいというパターンが一般的です。 そのための手段として、JavaScript には `splice` メソッドがあります。このメソッドは、アイテムの削除を開始するインデックスと、削除するアイテムの数を引数に取ります。 第 2 引数が指定されていない場合、デフォルトではアイテムが最後まで削除されます。 ただし、`splice` メソッドは呼び出しの対象となった元の配列をミューテート (変化) させます。 例を示します。

```js
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

この例では、`splice` は文字列 `London` を返し、それを cities 配列から削除します。 `cities` の値は `["Chicago", "Delhi", "Islamabad", "Berlin"]` になります。

前回のチャレンジで説明したように、 `slice` メソッドは元の配列をミューテートさせず、変数に保存できる新しい配列を返します。 すでに説明したように、`slice` メソッドは、スライスを開始するインデックスと終了するインデックス (終了場所はスライス対象には含まれません) を表す 2 つの引数を取り、それらのアイテムを新しい配列に返します。 `splice` の代わりに `slice` メソッドを使用すると、配列のミューテーションの副作用を回避できます。

# --instructions--

関数 `nonMutatingSplice` を書き換えて、`splice` の代わりに `slice` を使用してください。 与えられた `cities` 配列の長さを 3 に制限し、最初の 3 つのアイテムのみを持つ新しい配列を返す必要があります。

関数に与えられた元の配列をミューテートさせないでください。

# --hints--

コードで `slice` メソッドを使用する必要があります。

```js
assert(code.match(/\.slice/g));
```

コードで `splice` メソッドを使用しないでください。

```js
assert(!code.match(/\.?[\s\S]*?splice/g));
```

`inputCities` 配列は変更しないでください。

```js
assert(
  JSON.stringify(inputCities) ===
    JSON.stringify(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
);
```

`nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` は `["Chicago", "Delhi", "Islamabad"]` を返す必要があります。

```js
assert(
  JSON.stringify(
    nonMutatingSplice(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
  ) === JSON.stringify(['Chicago', 'Delhi', 'Islamabad'])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

# --solutions--

```js
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
```
