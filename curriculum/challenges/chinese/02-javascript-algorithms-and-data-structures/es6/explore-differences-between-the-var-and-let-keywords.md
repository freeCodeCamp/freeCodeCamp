---
id: 587d7b87367417b2b2512b3f
title: 探索 var 和 let 关键字之间的差异
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

使用 `var` 关键字来声明变量，会出现重复声明导致变量被覆盖却不会报错的问题。

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
```

这里控制台将显示字符串 `David`。

在上面的代码中，`camper` 变量的初始值为 `James`，然后又被覆盖成了 `David`。 在小型的应用中，你可能不会遇到这样的问题。但是当你的代码规模变得更加庞大的时候，就可能会在不经意间覆盖了之前定义的变量。 因为这样的情况不会报错，所以搜索和修复 bug 会变得非常困难。  
在 ES6 中引入了新的关键字 `let` 来解决 `var` 关键字带来的潜在问题。 如果你在上面的代码中使用 `let` 关键字来代替 `var` 关键字，结果会是一个报错。

```js
let camper = 'James';
let camper = 'David';
```

你可以在浏览器的控制台里看见这个错误。 与 `var` 不同的是，当使用 `let` 的时候，同一名字的变量只能被声明一次。 请注意 `"use strict"`。 这代表着开启了严格模式，用于检测常见的代码错误以及“不安全”的行为， 例如：

```js
"use strict";
x = 3.14;
```

这将显示一个错误 `x is not defined`。

# --instructions--

请更新这段代码，只使用 `let` 关键字。

# --hints--

代码中不应有 `var`

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`catName` 变量的值应该为 `Oliver`

```js
assert(catName === 'Oliver');
```

`quote` 变量的值应该为 `Oliver says Meow!`

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
