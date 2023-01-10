---
id: 565bbe00e9cc8ac0725390f4
title: 21 點遊戲
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
dashedName: counting-cards
---

# --description--

在 21 點遊戲中，玩家可以通過計算牌桌上已經發放的卡牌的高低值來讓自己在遊戲中保持優勢。 這被稱爲卡片計數。

牌桌上的大值的卡牌更多，對玩家有利。 根據下面的表格，每張卡牌都被分配了一個值。 如果卡牌的值大於 0，那麼玩家應該追加賭注。 如果卡牌的值爲 0 或負數，玩家應該追加少許賭注甚至不追加賭注。

<table class='table table-striped'><thead><tr><th>計數</th><th>卡牌</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'K', 'A'</td></tr></tbody></table>

請寫一個函數實現 21 點算法。 它根據參數 `card` 的值（見表格，可能是數字或者字符串）來遞增或遞減全局變量 `count`。 然後函數返回一個由當前 count（計數）和 `Bet`（當 count > 0 時）或 `Hold`（當 count <= 0 時) 拼接的字符串。 注意 count（計數）和玩家的決定（`Bet` 或 `Hold`）之間應該有空格。

**示例輸出：**`-3 Hold` 或者 `5 Bet`

**提示：**  
當卡牌爲 7、8、9 時，不要把 `count` 值重置爲 0。 不要返回一個數組。  
輸出結果中不要包含單引號或雙引號。

# --hints--

你的函數應返回計數值和文本（`Bet` 或 `Hold`），它們之間有一個空格字符。

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

卡片序列 2、3、4、5、6 應返回字符串 `5 Bet`

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

卡片序列 7、8、9 應返回字符串 `0 Hold`

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

卡片序列 10、J、Q、K、A 應返回字符串 `-5 Hold`

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

卡片序列 3、7、Q、8、A 應返回字符串 `-1 Hold`

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

卡片序列 2、J、9、2、7 應返回字符串 `1 Bet`

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

卡片序列 2、2、10 應返回字符串 `1 Bet`

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

卡片序列 3、2、A、10、K 應返回字符串 `-1 Hold`

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
