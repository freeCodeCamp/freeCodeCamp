---
id: 59da22823d04c95919d46269
title: '水兵、ココナッツ、サルの問題'
challengeType: 5
forumTopicId: 302304
dashedName: sailors-coconuts-and-a-monkey-problem
---

# --description--

5人の水兵がある島に漂着し、日中の間にココナッツをたくさん集めました。 その夜、最初の水兵が目を覚まし、早めに自分の分を取ろうと考え、ココナッツの山を 5 つに均等に分けようとしたところ、ココナッツが 1 つ余ることに気づきました。そこで、1 つをサルに投げ与え、均等に分けられた 5 つの山から「自分の分け前」の1 つを隠し、他の 4 つの山を再び 1 つにまとめて、ベッドに戻りました。 長い話なので端折って言うと、夜の間、それぞれの水兵が順番に 1 度起き、ココナッツの山を 5 つに分け、ココナッツが 1 つ余ることに気付いて、その 1 つをサルに投げ与えるという同じ行動をしました。 (夜、5 人の水兵がそれぞれ秘密の行動を取った後) 朝になり、残りのココナッツをそれぞれの水兵の分として 5 つに均等に分けたところ、ココナッツの山はきっちり等分になり、1 つも余りませんでした。 (朝には、サルの分け前はなかったのです)。

# --instructions--

`N` 人の水兵が日中に集めたココナッツの元々の数について、最も少ない場合の値を返す関数を記述してください。 **注意:** もちろん、この物語は日中にいくらでもココナッツを集められたり、ココナッツの山を何度も分けられたりと、話の筋に都合のいい時間に物事が起きる世界のお話です。この世界の条件が数学に影響を与えることはありません。 **参照:**

<ul>
  <li><a href="https://www.youtube.com/watch?v=U9qU20VmvaU" target="_blank"> Monkeys and Coconuts - Numberphile</a> (動画) 解析的解法。</li>
  <li><a href="https://oeis.org/A002021" target="_blank">A002021 Pile of coconuts problem</a> オンライン整数列大辞典 (The On-Line Encyclopedia of Integer Sequences) (ただし、参照先により物語が多少異なる場合があります)。</li>
</ul>

# --hints--

`splitCoconuts` は関数とします。

```js
assert(typeof splitCoconuts === 'function');
```

`splitCoconuts(5)` は 3121 を返す必要があります。

```js
assert(splitCoconuts(5) === 3121);
```

`splitCoconuts(6)` は 233275 を返す必要があります。

```js
assert(splitCoconuts(6) === 233275);
```

`splitCoconuts(7)` は 823537 を返す必要があります。

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
