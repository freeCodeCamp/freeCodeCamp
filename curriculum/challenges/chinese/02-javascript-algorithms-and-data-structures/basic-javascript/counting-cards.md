---
id: 565bbe00e9cc8ac0725390f4
title: 21 点游戏
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
dashedName: counting-cards
---

# --description--

在 21 点游戏中，玩家可以通过计算牌桌上已经发放的卡牌的高低值来让自己在游戏中保持优势。 这被称为卡片计数。

牌桌上的大值的卡牌更多，对玩家有利。 根据下面的表格，每张卡牌都被分配了一个值。 如果卡牌的值大于 0，那么玩家应该追加赌注。 如果卡牌的值为 0 或负数，玩家应该追加少许赌注甚至不追加赌注。

<table class='table table-striped'><thead><tr><th>计数</th><th>卡牌</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'K', 'A'</td></tr></tbody></table>

请写一个函数实现 21 点算法。 它根据参数 `card` 的值（见表格，可能是数字或者字符串）来递增或递减全局变量 `count`。 然后函数返回一个由当前 count（计数）和 `Bet`（当 count > 0 时）或 `Hold`（当 count <= 0 时) 拼接的字符串。 注意 count（计数）和玩家的决定（`Bet` 或 `Hold`）之间应该有空格。

**示例输出：**`-3 Hold` 或者 `5 Bet`

**提示：**  
当卡牌为 7、8、9 时，不要把 `count` 值重置为 0。 不要返回一个数组。  
输出结果中不要包含单引号或双引号。

# --hints--

你的函数应返回计数值和文本（`Bet` 或 `Hold`），它们之间有一个空格字符。

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

卡片序列 2、3、4、5、6 应返回字符串 `5 Bet`

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

卡片序列 7、8、9 应返回字符串 `0 Hold`

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

卡片序列 10、J、Q、K、A 应返回字符串 `-5 Hold`

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

卡片序列 3、7、Q、8、A 应返回字符串 `-1 Hold`

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

卡片序列 2、J、9、2、7 应返回字符串 `1 Bet`

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

卡片序列 2、2、10 应返回字符串 `1 Bet`

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

卡片序列 3、2、A、10、K 应返回字符串 `-1 Hold`

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
