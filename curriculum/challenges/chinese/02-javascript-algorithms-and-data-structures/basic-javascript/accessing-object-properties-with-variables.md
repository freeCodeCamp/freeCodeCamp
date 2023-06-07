---
id: 56533eb9ac21ba0edf2244c9
title: 通过变量访问对象属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

对对象上使用方括号表示法，还可以访问对象上作为变量值存储的属性。 当你需要遍历对象的所有属性，或者根据一个变量的值查找对应的属性值时，这种写法尤其适用。

以下是一个使用变量来访问属性的例子：

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

字符串 `Doberman` 将会出现在控制台中。

请注意，我们在使用变量名访问属性时，*不要*使用引号引起来，因为我们使用的是 *值*，而不是 *属性名*。

# --instructions--

将 `playerNumber` 变量设置为 `16`。 然后，使用该变量查找播放器的名称并将其分配给 `player`。

# --hints--

`playerNumber` 应该是一个数字。

```js
assert(typeof playerNumber === 'number');
```

变量 `player` 应该是一个字符串。

```js
assert(typeof player === 'string');
```

`player` 的值应该是字符串 `Montana`。

```js
assert(player === 'Montana');
```

你应该使用括号表示法来访问 `testObj`。

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

你不应将值 `Montana` 直接分配给变量 `player`。

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

你应该在括号符号中使用变量 `playerNumber`。

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
