---
id: 587d7b8e367417b2b2512b5c
title: 瞭解函數式編程術語
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

FCC 團隊需求有變更，現在想要兩種茶：綠茶（green tea）和紅茶（black tea）。 事實證明，用戶需求變更是很常見的。

基於以上信息，我們需要重構上一節挑戰中的 `getTea` 函數來處理多種茶的請求。 我們可以修改 `getTea` 接受一個函數作爲參數，使它能夠修改茶的類型。 這讓 `getTea` 更靈活，也使需求變更時爲程序員提供更多控制權。

首先，我們將介紹一些術語：

<dfn>Callbacks</dfn> 是被傳遞到另一個函數中調用的函數。 你應該已經在其他函數中看過這個寫法，例如在 `filter` 中，回調函數告訴 JavaScript 以什麼規則過濾數組。

函數就像其他正常值一樣，可以賦值給變量、傳遞給另一個函數，或從其它函數返回，這種函數叫做頭等 <dfn>first class</dfn> 函數。 在 JavaScript 中，所有函數都是頭等函數。

將函數作爲參數或將函數作爲返回值返回的函數叫作<dfn>高階</dfn>函數。

當函數被傳遞給另一個函數或從另一個函數返回時，那些傳入或返回的函數可以叫做 <dfn>lambda</dfn>。

# --instructions--

準備 27 杯綠茶和 13 杯紅茶，分別存入 `tea4GreenTeamFCC` 和 `tea4BlackTeamFCC` 變量。 請注意，`getTea` 函數已經變了，現在它接收一個函數作爲第一個參數。

注意：數據（茶的數量）作爲最後一個參數。 我們將在後面的課程中對此進行更多討論。

# --hints--

`tea4GreenTeamFCC` 變量應存有爲團隊準備的 27 杯茶。

```js
assert(tea4GreenTeamFCC.length === 27);
```

`tea4GreenTeamFCC` 變量應存有綠茶。

```js
assert(tea4GreenTeamFCC[0] === 'greenTea');
```

`tea4BlackTeamFCC` 變量應存有 13 杯紅茶。

```js
assert(tea4BlackTeamFCC.length === 13);
```

`tea4BlackTeamFCC` 變量應存有紅茶。

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
