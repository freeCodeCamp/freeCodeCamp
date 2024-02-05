---
id: 59da22823d04c95919d46269
title: '船員、椰子和猴子問題'
challengeType: 1
forumTopicId: 302304
dashedName: sailors-coconuts-and-a-monkey-problem
---

# --description--

Five sailors are shipwrecked on an island and collect a large pile of coconuts during the day.

當天晚上入睡後，第一個船員醒來決定拿走屬於他的那份，他把椰子分成了五堆，但是發現多了一個椰子，他把多出來的椰子扔給了猴子，把自己的那一堆藏了起來，然後把剩下的四堆椰子合在一起，回去繼續睡覺。

接着，第二、第三、第四、第五個船員依次醒來做了同樣的事情。分完椰子後，發現還剩下一個椰子，把它扔給了猴子，把剩下的四堆椰子合在一起。

在早上（在五個水手中的每個人在晚上分別偷走椰子之後），剩下的椰子被平均分成五堆給每個水手，然後發現椰子可以被平均分給每個水手，沒有剩餘。 （早上猴子啥都沒分到。）

# --instructions--

創建一個函數，該函數返回收集在一天中的初始椰子堆的最小可能大小，假設有 `N` 名水手。 **注意**：當然，這個故事發生在一個假想的世界裏，在這個世界裏，每天可以收集任意數量的椰子，並進行多次分配，等等，以適應故事情節，因此不會影響數學計算。

# --hints--

`splitCoconuts` 應該是一個函數。

```js
assert(typeof splitCoconuts === 'function');
```

`splitCoconuts(5)` 應該返回 3121。

```js
assert(splitCoconuts(5) === 3121);
```

`splitCoconuts(6)` 應該返回 233275。

```js
assert(splitCoconuts(6) === 233275);
```

`splitCoconuts(7)` 應該返回 823537。

```js
assert(splitCoconuts(7) === 823537);
```

# --seed--

## --seed-contents--

```js
function splitCoconuts(intSailors) {

  return true;
}
```

# --solutions--

```js
function splitCoconuts(intSailors) {
  let intNuts = intSailors;
  let result = splitCoconutsHelper(intNuts, intSailors);
  while (!result) {
    intNuts += 1;
    result = splitCoconutsHelper(intNuts, intSailors);
  }

  return intNuts;
}

function splitCoconutsHelper(intNuts, intSailors, intDepth) {
  const nDepth = intDepth !== undefined ? intDepth : intSailors;
  const portion = Math.floor(intNuts / intSailors);
  const remain = intNuts % intSailors;

  if (portion <= 0 || remain !== (nDepth ? 1 : 0)) {
    return null;
  }

  if (nDepth) {
    return splitCoconutsHelper(
      intNuts - portion - remain, intSailors, nDepth - 1
    );
  }

  return intNuts;
}
```
