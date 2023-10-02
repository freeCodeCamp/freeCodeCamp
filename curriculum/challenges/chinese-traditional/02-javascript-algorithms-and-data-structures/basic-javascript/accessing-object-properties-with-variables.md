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

請注意，我們在使用變量名訪問屬性時，*不要*使用引號引起來，因爲我們使用的是 *值*，而不是 *屬性名*。

# --instructions--

將 `playerNumber` 變量設置爲 `16`。 然後，使用該變量查找播放器的名稱並將其分配給 `player`。

# --hints--

`playerNumber` 應該是一個數字。

```js
assert(typeof playerNumber === 'number');
```

變量 `player` 應該是一個字符串。

```js
assert(typeof player === 'string');
```

`player` 的值應該是字符串 `Montana`。

```js
assert(player === 'Montana');
```

你應該使用括號表示法來訪問 `testObj`。

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

你不應將值 `Montana` 直接分配給變量 `player`。

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

你應該在括號符號中使用變量 `playerNumber`。

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
