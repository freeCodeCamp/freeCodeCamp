---
id: 59da22823d04c95919d46269
title: '水兵、ココナッツ、サルの問題'
challengeType: 1
forumTopicId: 302304
dashedName: sailors-coconuts-and-a-monkey-problem
---

# --description--

Five sailors are shipwrecked on an island and collect a large pile of coconuts during the day.

That night the first sailor wakes up and decides to take his first share early so tries to divide the pile of coconuts equally into five piles but finds that there is one coconut left over, so he tosses it to a monkey and then hides "his" one of the five equally sized piles of coconuts and pushes the other four piles together to form a single visible pile of coconuts again and goes to bed.

長い話なので端折って言うと、夜の間、それぞれの水兵が順番に 1 度起き、ココナッツの山を 5 つに分け、ココナッツが 1 つ余ることに気付いて、その 1 つをサルに投げ与えてから、他の 4 つの山を 1 つの山にまとめるという同じ行動をしました。

In the morning (after the surreptitious and separate action of each of the five sailors during the night), the remaining coconuts are divided into five equal piles for each of the sailors, whereupon it is found that the pile of coconuts divides equally amongst the sailors with no remainder. (Nothing for the monkey in the morning.)

# --instructions--

Create a function that returns the minimum possible size of the initial pile of coconuts collected during the day for `N` sailors. **注:** もちろん、この物語は日中にいくらでもココナッツを集められたり、ココナッツの山を何度も分けられたりと、話の筋に都合のいい時間に物事が起きる世界のお話です。この世界の条件が数学に影響を与えることはありません。

# --hints--

`splitCoconuts` should be a function.

```js
assert(typeof splitCoconuts === 'function');
```

`splitCoconuts(5)` should return 3121.

```js
assert(splitCoconuts(5) === 3121);
```

`splitCoconuts(6)` should return 233275.

```js
assert(splitCoconuts(6) === 233275);
```

`splitCoconuts(7)` should return 823537.

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
