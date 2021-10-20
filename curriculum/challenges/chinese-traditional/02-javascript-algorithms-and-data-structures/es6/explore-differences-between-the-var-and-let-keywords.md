---
id: 587d7b87367417b2b2512b3f
title: 探索 var 和 let 關鍵字之間的差異
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

使用 `var` 關鍵字來聲明變量，會出現重複聲明導致變量被覆蓋卻不會報錯的問題。

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
```

這裏控制檯將顯示字符串 `David`。

在上面的代碼中，`camper` 變量的初始值爲 `James`，然後又被覆蓋成了 `David`。 在小型的應用中，你可能不會遇到這樣的問題。但是當你的代碼規模變得更加龐大的時候，就可能會在不經意間覆蓋了之前定義的變量。 因爲這樣的情況不會報錯，所以搜索和修復 bug 會變得非常困難。  
在 ES6 中引入了新的關鍵字 `let` 來解決 `var` 關鍵字帶來的潛在問題。 如果你在上面的代碼中使用 `let` 關鍵字來代替 `var` 關鍵字，結果會是一個報錯。

```js
let camper = 'James';
let camper = 'David';
```

你可以在瀏覽器的控制檯裏看見這個錯誤。 與 `var` 不同的是，當使用 `let` 的時候，同一名字的變量只能被聲明一次。 請注意 `"use strict"`。 這代表着開啓了嚴格模式，用於檢測常見的代碼錯誤以及“不安全”的行爲， 例如：

```js
"use strict";
x = 3.14;
```

這將顯示一個錯誤 `x is not defined`。

# --instructions--

請更新這段代碼，只使用 `let` 關鍵字。

# --hints--

代碼中不應有 `var`

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`catName` 變量的值應該爲 `Oliver`

```js
assert(catName === 'Oliver');
```

`quote` 變量的值應該爲 `Oliver says Meow!`

```js
assert(quote === 'Oliver says Meow!');
```

# --seed--

## --seed-contents--

```js
var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
```

# --solutions--

```js
let catName;
let quote;
function catTalk() {
  'use strict';

  catName = 'Oliver';
  quote = catName + ' says Meow!';
}
catTalk();
```
