---
id: 565bbe00e9cc8ac0725390f4
title: カードカウンティング
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
dashedName: counting-cards
---

# --description--

カジノゲームのブラックジャックでは、デッキに残っているカードのハイローの相対数を把握しておくことで、プレイヤーはディーラーに対して次の手が有利であるかどうかを見極めることができます。 これはカードカウンティングと呼ばれています。

デッキに残っているハイカードの数が多いほど、プレイヤーに有利となります。 次の表に従って各カードに値を割り当てます。 カウンティングの結果が正の場合、プレイヤーは高く賭けるべきです。 カウンティングの結果がゼロまたは負の場合、プレイヤーは少なめに賭けた方がいいでしょう。

<table class='table table-striped'><thead><tr><th>カウントの変更</th><th>カード</th></tr></thead><tbody><tr><td>+1</td><td>2、3、4、5、6</td></tr><tr><td>0</td><td>7、8、9</td></tr><tr><td>-1</td><td>10、'J'、'Q'、'K'、'A'</td></tr></tbody></table>

カードカウンティング関数を記述してください。 この関数は数値または文字列の `card` パラメーターを受け取り、カードの値に応じて (表を参照)、グローバルの `count` 変数をインクリメントまたはデクリメントします。 次に、この関数は現在のカウントを示す文字列と、文字列 `Bet` (カウントが正の場合) または文字列 `Hold` (カウントがゼロか負の場合) を返します。 現在のカウントとプレイヤーの判断 (`Bet` または `Hold`) の間にスペースを 1 つ入れてください。

**出力例:** `-3 Hold`、`5 Bet` など

**ヒント**  
値が 7、8、9 の場合に `count` を 0 にリセットしないでください。 配列を返さないでください。  
出力に引用符 (シングルクォートまたはダブルクォート) を含めないでください。

# --hints--

関数はカウントの値とテキスト (`Bet` または `Hold`) を返す必要があり、カウントとテキストの間にはスペースが 1 つ必要です。

```js
assert(//
  (function () {
    count = 0;
    let out = cc(10);
    const hasSpace = /-?\d+ (Bet|Hold)/.test('' + out);
    return hasSpace;
  })()
);
```

カードの並びが 2、3、4、5、6 の場合は文字列 `5 Bet` を返す必要があります。

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc(3);
    cc(4);
    cc(5);
    var out = cc(6);
    if (out === '5 Bet') {
      return true;
    }
    return false;
  })()
);
```

カードの並びが 7、8、9 の場合は文字列 `0 Hold` を返す必要があります。

```js
assert(
  (function () {
    count = 0;
    cc(7);
    cc(8);
    var out = cc(9);
    if (out === '0 Hold') {
      return true;
    }
    return false;
  })()
);
```

カードの並びが 10、J、Q、K、A の場合は文字列 `-5 Hold` を返す必要があります。

```js
assert(
  (function () {
    count = 0;
    cc(10);
    cc('J');
    cc('Q');
    cc('K');
    var out = cc('A');
    if (out === '-5 Hold') {
      return true;
    }
    return false;
  })()
);
```

カードの並びが 3、7、Q、8、A の場合は文字列 `-1 Hold` を返す必要があります。

```js
assert(
  (function () {
    count = 0;
    cc(3);
    cc(7);
    cc('Q');
    cc(8);
    var out = cc('A');
    if (out === '-1 Hold') {
      return true;
    }
    return false;
  })()
);
```

カードの並びが 2、J、9、2、7 の場合は文字列 `1 Bet` を返す必要があります。

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc('J');
    cc(9);
    cc(2);
    var out = cc(7);
    if (out === '1 Bet') {
      return true;
    }
    return false;
  })()
);
```

カードの並びが 2、2、10 の場合は文字列 `1 Bet` を返す必要があります。

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc(2);
    var out = cc(10);
    if (out === '1 Bet') {
      return true;
    }
    return false;
  })()
);
```

カードの並びが 3、2、A、10、K の場合は文字列 `-1 Hold` を返す必要があります。

```js
assert(
  (function () {
    count = 0;
    cc(3);
    cc(2);
    cc('A');
    cc(10);
    var out = cc('K');
    if (out === '-1 Hold') {
      return true;
    }
    return false;
  })()
);
```

# --seed--

## --seed-contents--

```js
let count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
```

# --solutions--

```js
let count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
```
