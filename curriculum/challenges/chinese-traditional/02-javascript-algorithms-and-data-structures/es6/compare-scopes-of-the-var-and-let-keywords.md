---
id: 587d7b87367417b2b2512b40
title: 比較 var 和 let 關鍵字的作用域
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

使用 `var` 關鍵字來聲明一個變量的時候，這個變量會被聲明成全局變量，或是函數內的局部變量。

`let` 關鍵字的作用與此類似，但會有一些額外的特性。 如果在代碼塊、語句或表達式中使用關鍵字 `let` 聲明變量，這個變量的作用域就被限制在當前的代碼塊、語句或表達式之中。

舉個例子：

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

這裏控制檯將顯示值 `[0, 1, 2]` 和 `3`。

因爲使用了 `var` 關鍵字，`i` 被聲明爲全局變量。 所以當 `i++` 執行時，它會更新全局變量。 這個代碼和下方的代碼類似：

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

這裏控制檯將顯示值 `[0, 1, 2]` 和 `3`。

如果你創建一個函數，將它存儲起來，稍後在使用 `i` 變量的 `for` 循環中使用。這麼做可能會出現問題。 這是因爲存儲的函數會總是指向更新後的全局 `i` 變量的值。

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```

這裏控制檯將顯示值 `3`。

可以看到，`printNumTwo()` 打印了 3，而不是 2。 這是因爲賦值給 `i` 的值已經更新，`printNumTwo()` 返回全局的 `i`，而不是在 for 循環中創建函數時 `i` 的值。 `let` 關鍵字就不會出現這種現象：

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

在這裏控制檯將顯示值 `2` 和一個錯誤提示 `i is not defined`。

`i` 未定義，因爲它沒有在全局範圍內聲明。 它只在 `for` 循環語句中被聲明。 `printNumTwo()` 返回了正確的值，因爲 `let` 關鍵字在循環語句中使 `i` 變量產生了三個不同的值（分別爲 0、1、2）。

# --instructions--

修改這段代碼，使 `if` 語句中聲明的 `i` 變量與在函數的第一行聲明的 `i` 變量是彼此獨立的。 請注意不要在你的代碼的任何地方使用 `var` 關鍵字。

這個練習旨在表明使用 `var` 與 `let` 關鍵字聲明變量時作用域之間的區別。 當編寫類似這個練習中的函數的時候，通常來說最好使用不同的變量名，以避免混淆。

# --hints--

代碼中不應該出現 `var`。

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`if` 語句中聲明的變量 `i` 應該等於字符串 `block scope`。

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g)
  );
```

`checkScope()` 應該返回字符串 `function scope`。

```js
assert(checkScope() === 'function scope');
```

# --seed--

## --seed-contents--

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

# --solutions--

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }

  console.log('Function scope i is: ', i);
  return i;
}
```
