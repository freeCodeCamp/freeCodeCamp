---
id: 56533eb9ac21ba0edf2244c9
title: 通過變量訪問對象屬性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

對對象上使用方括號表示法，還可以訪問對象上作爲變量值存儲的屬性。 當你需要遍歷對象的所有屬性，或者根據一個變量的值查找對應的屬性值時，這種寫法尤其適用。

以下是一個使用變量來訪問屬性的例子：

```js
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
```

字符串 `Doberman` 將會出現在控制檯中。

使用這一概念的另一種情況是：屬性的名字是在程序運行期間動態收集得到的。如下所示：

```js
const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
```

`someProp` 的值將爲字符串 `propName`，並且字符串 `John` 將會出現在控制檯中。

注意，當使用變量名訪問屬性時，我們*沒有*使用引號包裹它，因爲我們正在使用的是變量的*值*，而不是變量的*名字*。

# --instructions--

將變量 `playerNumber` 設置爲 `16`。 然後，使用該變量查找玩家的名字，並將其賦值給`player`。

# --hints--

`playerNumber` 應該是一個數字

```js
assert(typeof playerNumber === 'number');
```

變量 `player` 應該是一個字符串

```js
assert(typeof player === 'string');
```

`player` 的值應該爲字符串 `Montana`

```js
assert(player === 'Montana');
```

你應該使用方括號訪問 `testObj`

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

你不應該直接將值 `Montana` 賦給變量 `player`。

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

你應該在你的方括號內使用變量 `playerNumber`。

```js
assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

## --seed-contents--

```js
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 42;  // Change this line
const player = testObj;   // Change this line
```

# --solutions--

```js
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];
```
