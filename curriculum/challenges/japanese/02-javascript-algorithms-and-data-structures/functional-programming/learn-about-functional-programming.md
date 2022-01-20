---
id: 587d7b8d367417b2b2512b5b
title: 関数型プログラミングについて学習する
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

関数型プログラミングはプログラミングのスタイルの一つで、ソリューションが単純で独立した関数であり、関数スコープ外の副作用がありません: `INPUT -> PROCESS -> OUTPUT`

関数型プログラミングでは次のような関数を目指します。

1) 独立した関数 - プログラムの状態 (変更される可能性があるグローバル変数を含む) にまったく依存しない

2) 純粋な関数 - 同じ入力は常に同じ出力を与える

3) 限られた副作用を持つ関数 - 関数外のプログラムの状態に対する任意の変更 (ミューテーション) は慎重に制御される

# --instructions--

freeCodeCamp のメンバーはたまたま紅茶が大好きです。

コードエディターでは、`prepareTea` および `getTea` 関数がすでに定義されています。 `getTea` 関数を呼び出して、チームの紅茶 40 杯分をもらい、`tea4TeamFCC` 変数に格納してください。

# --hints--

`tea4TeamFCC` 変数には、チームの 40 杯分の紅茶を保持する必要があります。

```js
assert(tea4TeamFCC.length === 40);
```

`tea4TeamFCC` 変数には、緑茶を数杯分保持する必要があります。

```js
assert(tea4TeamFCC[0] === 'greenTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line
```

# --solutions--

```js
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40); 
```
