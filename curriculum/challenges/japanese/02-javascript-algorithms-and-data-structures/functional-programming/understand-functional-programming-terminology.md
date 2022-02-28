---
id: 587d7b8e367417b2b2512b5c
title: 関数型プログラミングの用語を理解する
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

FCC のチームの気が変わって、今は緑茶と紅茶の 2 種類のお茶が欲しくなりました。 クライアントの気が変わるというのは一般的な事実としてよくあることです。

そんな情報を踏まえて、前回のチャレンジで取り上げた `getTea` 関数を見直して、さまざまなお茶のリクエストを処理する必要が出てきました。 パラメーターとして関数を受け取るように `getTea` を変更して、用意するお茶の種類を変えることができます。 これで `getTea` の柔軟性が増し、クライアントのリクエストが変更されたときにプログラマーはより詳細に制御できるようになります。

ですがその前に、関数型に関する用語をいくつか説明しておきましょう。

ある関数の呼び出しを決定するために挿入されたり渡されたりする関数のことを、<dfn>コールバック</dfn>と呼びます。 たとえば `filter` などの他のメソッドにコールバック関数を渡す例を紹介しました。この場合は、フィルターで配列を絞り込むための条件を JavaScript に指示します。

変数に割り当てることができる関数、別の関数に渡すことができる関数、または別の関数から他の通常の値とまったく同じように返すことができる関数のことを、<dfn>第一級</dfn>関数と呼びます。 JavaScript の関数はすべて第一級関数です。

引数として関数を受け取る関数、または戻り値として関数を返す関数のことを、<dfn>高階</dfn>関数と呼びます。

関数が他の関数に渡されたり、他の関数から返されたりする場合、それらの受け渡しされる関数のことを<dfn>ラムダ</dfn>と呼ぶことがあります。

# --instructions--

緑茶を 27 杯分、紅茶を 13 杯分用意し、それぞれ `tea4GreenTeamFCC` と `tea4BlackTeamFCC` という変数に保存してください。 `getTea` 関数を変更したので、最初の引数として関数を取ることに注意してください。

注: データ (お茶のカップ数) は最後の引数として渡します。 これについてはこのあとのレッスンで詳しく説明します。

# --hints--

`tea4GreenTeamFCC` 変数は、チーム用に 27 杯分の緑茶を保持する必要があります。

```js
assert(tea4GreenTeamFCC.length === 27);
```

`tea4GreenTeamFCC` 変数は、緑茶のカップを保持する必要があります。

```js
assert(tea4GreenTeamFCC[0] === 'greenTea');
```

`tea4BlackTeamFCC` 変数は、13 杯分の紅茶を保持する必要があります。

```js
assert(tea4BlackTeamFCC.length === 13);
```

`tea4BlackTeamFCC` 変数は、紅茶のカップを保持する必要があります。

```js
assert(tea4BlackTeamFCC[0] === 'blackTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

# --solutions--

```js
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
```
