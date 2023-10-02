---
id: 587d7b90367417b2b2512b65
title: slice メソッドを使用して配列の一部分を返す
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

`slice` メソッドは、配列の特定の要素のコピーを返します。 このメソッドは 2 つの引数を取ることができます。1 つ目はスライスの開始位置のインデックスで、2 つ目はスライスの終了位置のインデックスです (終了位置自体は slice の対象に含まれません)。 引数が指定されていない場合は、デフォルトで配列の先頭から末尾まで処理します。この方法で配列全体のコピーを簡単に作成できます。 `slice` メソッドは元の配列をミューテート (変化) させず、新しい配列を返します。

例を示します。

```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
```

`newArray` の値は `["Dog", "Tiger"]` になります。

# --instructions--

`sliceArray` 関数で `slice` メソッドを使用し、`beginSlice` インデックスと `endSlice` インデックスを指定して `anim` 配列の一部を返してください。 この関数は配列を返す必要があります。

# --hints--

コードで `slice` メソッドを使用する必要があります。

```js
assert(code.match(/\.slice/g));
```

`inputAnim` 変数は変更しないでください。

```js
assert(
  JSON.stringify(inputAnim) ===
    JSON.stringify(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` は `["Dog", "Tiger"]` を返す必要があります。

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` は `["Cat"]` を返す必要があります。

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` は `["Dog", "Tiger", "Zebra"]` を返す必要があります。

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)) ===
    JSON.stringify(['Dog', 'Tiger', 'Zebra'])
);
```

# --seed--

## --seed-contents--

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line


  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

# --solutions--

```js
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
```
