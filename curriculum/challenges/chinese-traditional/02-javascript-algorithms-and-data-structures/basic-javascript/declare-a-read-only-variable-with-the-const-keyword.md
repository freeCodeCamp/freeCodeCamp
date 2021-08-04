---
id: 587d7b87367417b2b2512b41
title: 用 const 關鍵字聲明只讀變量
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

`let` 並不是唯一的新的聲明變量的方式。 在 ES6 裏面，你還可以使用 `const` 關鍵字來聲明變量。

`const` 擁有 `let` 的所有優點，不同的是，通過 `const` 聲明的變量是隻讀的。 這意味着通過 `const` 聲明的變量只能被賦值一次，而不能被再次賦值。

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

控制檯將由於給 `FAV_PET` 重新賦值而顯示錯誤。

可見，嘗試給用 `const` 聲明的變量重新賦值會報錯。 你應該使用 `const` 關鍵字來聲明所有不打算再次賦值的變量。 這有助於避免給一個常量進行額外的再次賦值。 一個最佳實踐是對所有常量的命名採用全大寫字母，並在單詞之間使用下劃線進行分隔。

**注意：**通常，開發者會用大寫字母作爲常量標識符，用小寫字母或者駝峯命名作爲變量（對象或數組）標識符。 後面的挑戰會涉及到在數組中使用小寫變量標識符。

# --instructions--

改變以下代碼，使得所有的變量都使用 `let` 或 `const` 關鍵詞來聲明。 當變量將會改變的時候使用 `let` 關鍵字，當變量要保持常量的時候使用 `const` 關鍵字。 同時，對使用 `const` 聲明的變量按照最佳實踐重命名，變量名中的字母應該都是大寫的。

# --hints--

代碼中不應有 `var`。

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`SENTENCE` 應該是使用 `const` 聲明的常量。

```js
(getUserInput) => assert(getUserInput('index').match(/(const SENTENCE)/g));
```

`i` 應該是使用 `let`聲明的。

```js
(getUserInput) => assert(getUserInput('index').match(/(let i)/g));
```

`console.log` 應該修改爲用於打印 `SENTENCE` 變量。

```js
(getUserInput) =>
  assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g));
```

# --seed--

## --seed-contents--

```js
function printManyTimes(str) {

  // Only change code below this line

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
```

# --solutions--

```js
function printManyTimes(str) {

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");
```
