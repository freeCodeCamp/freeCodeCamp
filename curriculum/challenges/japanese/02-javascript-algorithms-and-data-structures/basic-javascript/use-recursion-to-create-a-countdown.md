---
id: 5cd9a70215d3c4e65518328f
title: 再帰関数を利用してカウントダウンを作成する
challengeType: 1
forumTopicId: 305925
dashedName: use-recursion-to-create-a-countdown
---

# --description--

<a href="/japanese/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion" target="_blank" rel="noopener noreferrer nofollow">以前のチャレンジ</a>で、再帰関数を利用して `for` ループを置き換える方法について学びました。 今回はもっと複雑な例として、`1` から関数に渡された数値までの連続した整数の配列を返す関数を考えてみましょう。

以前のチャレンジで触れたように、<dfn>基準ケース</dfn>を記述します。 基準ケースは、再帰をいつ止めるかを再帰関数に指示します。 これは戻り値があらかじめわかっている単純なケースです。 別の引数を付けて元の関数を実行する<dfn>再帰呼び出し</dfn>もあります。 関数が適切に記述されていれば、最終的には基準ケースに到達します。

たとえば、`1` から `n` までの数値を含む配列を返す再帰関数を記述するとします。 この関数は、最後の数値を表す引数 `n` を受け取る必要があります。 次に、`n` が `1` に達するまで、n の値を徐々に小さくし、その値を引数として自分自身を呼び出す必要があります。 関数は次のように記述することができます。

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

コンソールには値 `[1, 2, 3, 4, 5]` が表示されます。

`n` の値が*減少していく*ため、最初はわかりにくいかもしれませんが、最終的な配列の値は*増加*していきます。 なぜなら、再帰呼び出しから制御が戻った後、最後に push が実行されるからです。 `n` が配列に push された時点で、`countup(n - 1)` の評価はすでに完了しており、`[1, 2, ..., n - 1]` を返します。

# --instructions--

1つのパラメータ (`n`) を持つ `countdown` という関数を定義しました。 この関数は再帰を利用して、`n` パラメーターに基づいて `n` から `1` までの整数を含む配列を返す必要があります。 関数が 1 未満の数値で呼び出された場合は、空の配列を返す必要があります。 たとえば、この関数を `n = 5` で呼び出すと、配列 `[5, 4, 3, 2, 1]` が返されます。 関数では自分自身を呼び出す再帰を利用する必要があり、またどのような種類のループも使用してはいけません。

# --hints--

`countdown(-1)` は空の配列を返す必要があります。

```js
assert.isEmpty(countdown(-1));
```

`countdown(10)` は `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]` を返す必要があります。

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

`countdown(5)` は `[5, 4, 3, 2, 1]` を返す必要があります。

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

このコードには、どのような種類のループ (`for`、`while`、または `forEach`、`map`、`filter`、`reduce` のような高階関数) も使用しないでください。

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

この課題の解決には、再帰を使用してください。

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

配列をキャッシュするためにグローバル変数を使用しないでください。

```js
countdown(1)
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line
```

# --solutions--

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```
