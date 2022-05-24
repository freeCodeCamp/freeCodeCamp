---
id: 587d7b7b367417b2b2512b16
title: 複雑な多次元配列の作成
challengeType: 1
forumTopicId: 301159
dashedName: create-complex-multi-dimensional-arrays
---

# --description--

お疲れ様！ 配列について多くのことを学びましたね！ かなりハイレベルな概要でしたが、配列の操作についてはまだ学ぶべきことがたくさんあります。その多くはこのあとのセクションで説明していきます。 では<dfn>オブジェクト</dfn>の話に移る前に、配列についてもう一度確認しておきましょう。これまでのチャレンジで取り上げたものより、配列をもう少し複雑にする方法について見ていきます。

配列をデータ構造として捉えるときに最も強力な機能の一つは、配列に他の配列を含めることができる、あるいは完全に他の配列で構成することができるという点です。 これまでのチャレンジでも、配列を含む配列を取り上げてきましたが、それらはかなり単純な例でした。 しかし、配列では他の配列を格納できる無限の深さの配列を扱うことができ、含まれる各配列にも任意のレベルの深さを持たせることができます。さらにそこに含まれる配列も同様です。 このように、配列はたちまち非常に複雑なデータ構造になる可能性があります。こうした配列のことを<dfn>多次元</dfn>配列、またはネストされた配列と呼びます。 以下の例を考えてみましょう。

```js
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
```

`deep` 配列はネストレベル 2 の深さです。 `deeper` 配列はレベル 3 の深さです。 `deepest` 配列はレベル 4、`deepest-est?` はレベル 5 です。

この例は複雑に見えるかもしれませんが、大量のデータを扱う場合はこのくらいのレベルの複雑さを扱うこともあり、さほど珍しいわけでもありません。 しかし、ブラケット記法を使用すれば、こうした複雑な例の最も深いレベルの配列にも簡単にアクセスすることができます。

```js
console.log(nestedArray[2][1][0][0][0]);
```

これは文字列 `deepest-est?` を出力します。 そして、このデータの位置を確認できたので、必要に応じて再設定することができます。

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```

今度は `deeper still` が出力されます。

# --instructions--

変数 `myNestedArray` を定義し、配列を設定しました。 `myNestedArray` を変更してください。データ要素として<dfn>文字列</dfn>、<dfn>数値</dfn>、<dfn>ブール値</dfn>を任意に組み合わせて使用し、ちょうどレベル 5 の深さを持つようにします (一番外側の配列がレベル 1 です)。 レベル 3 に文字列 `deep` を、レベル 4 に文字列 `deeper` を、レベル 5 に文字列 `deepest` を、それぞれ含めてください。

# --hints--

`myNestedArray` には、データ要素として数値、ブール値、文字列のみを含めます。

```js
assert.strictEqual(
  (function (arr) {
    let flattened = (function flatten(arr) {
      const flat = [].concat(...arr);
      return flat.some(Array.isArray) ? flatten(flat) : flat;
    })(arr);
    for (let i = 0; i < flattened.length; i++) {
      if (
        typeof flattened[i] !== 'number' &&
        typeof flattened[i] !== 'string' &&
        typeof flattened[i] !== 'boolean'
      ) {
        return false;
      }
    }
    return true;
  })(myNestedArray),
  true
);
```

`myNestedArray` は正確にレベル 5 の深さを持つ必要があります。

```js
assert.strictEqual(
  (function (arr) {
    let depth = 0;
    function arrayDepth(array, i, d) {
      if (Array.isArray(array[i])) {
        arrayDepth(array[i], 0, d + 1);
      } else {
        depth = d > depth ? d : depth;
      }
      if (i < array.length) {
        arrayDepth(array, i + 1, d);
      }
    }
    arrayDepth(arr, 0, 0);
    return depth;
  })(myNestedArray),
  4
);
```

`myNestedArray` で、レベル 3 の深さの配列に、文字列 `deep` が 1 回だけ出現する必要があります。

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deep').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deep')[0] === 2
);
```

`myNestedArray` レベル 4 の深さの配列に、文字列 `deeper` が 1 回だけ出現する必要があります。

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deeper').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deeper')[0] === 3
);
```

`myNestedArray` で、レベル 5 の深さの配列に、文字列 `deepest` が 1 回だけ出現する必要があります。

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deepest').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deepest')[0] === 4
);
```

# --seed--

## --seed-contents--

```js
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
```

# --solutions--

```js
let myNestedArray = [
  ['unshift', ['deep', ['deeper', ['deepest']]],false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];
```
