---
id: 587d7b8d367417b2b2512b5b
title: 學習函數式編程
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

函數式編程是一種方案簡單、功能獨立、對作用域外沒有任何副作用的編程範式：`INPUT -> PROCESS -> OUTPUT`。

函數式編程：

1）功能獨立——不依賴於程序的狀態（比如可能發生變化的全局變量）；

2）純函數——同一個輸入永遠能得到同一個輸出；

3）有限的副作用——可以嚴格地限制函數外部對狀態的更改。

# --instructions--

freeCodeCamp 的成員們愛喝茶。

在代碼編輯器中，已經爲你定義好了`prepareTea`和`getTea`函數。 調用 `getTea` 函數爲團隊準備 40 杯茶，並將它們存儲在 `tea4TeamFCC` 變量裏。

# --hints--

`tea4TeamFCC` 變量裏應有 40 杯爲團隊準備的茶。

```js
assert(tea4TeamFCC.length === 40);
```

`tea4TeamFCC` 變量裏應有幾杯 greenTea（綠茶）。

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
