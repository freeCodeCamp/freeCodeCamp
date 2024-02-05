---
id: 59da22823d04c95919d46269
title: '船员、椰子和猴子问题'
challengeType: 1
forumTopicId: 302304
dashedName: sailors-coconuts-and-a-monkey-problem
---

# --description--

Five sailors are shipwrecked on an island and collect a large pile of coconuts during the day.

当天晚上入睡后，第一个船员醒来决定拿走属于他的那份，他把椰子分成了五堆，但是发现多了一个椰子，他把多出来的椰子扔给了猴子，把自己的那一堆藏了起来，然后把剩下的四堆椰子合在一起，回去继续睡觉。

接着，第二、第三、第四、第五个船员依次醒来做了同样的事情。分完椰子后，发现还剩下一个椰子，把它扔给了猴子，把剩下的四堆椰子合在一起。

在早上（在五个水手中的每个人在晚上分别偷走椰子之后），剩下的椰子被平均分成五堆给每个水手，然后发现椰子可以被平均分给每个水手，没有剩余。 （早上猴子啥都没分到。）

# --instructions--

创建一个函数，该函数返回收集在一天中的初始椰子堆的最小可能大小，假设有 `N` 名水手。 **注意**：当然，这个故事发生在一个假想的世界里，在这个世界里，每天可以收集任意数量的椰子，并进行多次分配，等等，以适应故事情节，因此不会影响数学计算。

# --hints--

`splitCoconuts` 应该是一个函数。

```js
assert(typeof splitCoconuts === 'function');
```

`splitCoconuts(5)` 应该返回 3121。

```js
assert(splitCoconuts(5) === 3121);
```

`splitCoconuts(6)` 应该返回 233275。

```js
assert(splitCoconuts(6) === 233275);
```

`splitCoconuts(7)` 应该返回 823537。

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
