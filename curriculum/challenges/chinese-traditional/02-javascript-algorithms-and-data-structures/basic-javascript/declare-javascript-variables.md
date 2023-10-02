---
id: bd7123c9c443eddfaeb5bdef
title: 聲明變量
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

在計算機科學中，<dfn>數據</dfn>就是一切，它對於計算機意義重大。 JavaScript 提供八種不同的<dfn>數據類型</dfn>，它們是 `undefined`（未定義）、`null`（空）、`boolean`（布爾型）、`string`（字符串）、`symbol`、`number`（數字）、`bigint`（可以表示任意大的整數）和 `object`（對象）。

例如，計算機區分數字，例如 `12`，和由字符組成的字符串 `strings`，例如 `"12"`、`"dog"` 或 `"123 cats"`。 計算機可以對數字執行數學運算，但不能對字符串執行數學運算。

<dfn>變量</dfn>允許計算機以一種動態的形式來存儲和操作數據， 即通過操作指向數據的指針而不是數據本身來實現。 以上八種數據類型中的任何一種都可以存儲到一個變量中。

變量非常類似於你在數學中使用的 x、y 變量，都是以一個簡單命名的名稱來代替我們賦值給它的數據。 計算機中的變量與數學中的變量不同的是，計算機可以在不同的時間存儲不同類型的變量。

通過在變量前面使用關鍵字 `var`，<dfn>聲明</dfn>一個變量，例如：

```js
var ourName;
```

上面代碼的意思是創建一個名爲 `ourName` 的變量。 在 JavaScript 中我們以分號結束語句。 變量名稱可以由數字、字母、美元符號 `$` 或者下劃線 `_` 組成，但是不能包含空格或者以數字爲開頭。

# --instructions--

使用 `var` 關鍵字來創建一個名爲 `myName` 的變量。

**提示：**  
如果遇到困難了，請看下 `ourName` 的例子是怎麼寫的。

# --hints--

使用 `var` 關鍵字定義一個變量 `myName`，並使用分號結尾。

```js
assert(/var\s+myName\s*;/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myName;
```
