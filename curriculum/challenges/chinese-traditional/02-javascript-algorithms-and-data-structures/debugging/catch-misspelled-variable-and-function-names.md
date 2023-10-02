---
id: 587d7b84367417b2b2512b35
title: 捕獲拼錯的變量名和函數名
challengeType: 1
forumTopicId: 301186
dashedName: catch-misspelled-variable-and-function-names
---

# --description--

`console.log()` 和 `typeof` 方法是檢查中間值和程序輸出類型的兩種主要方法。 現在是時候瞭解一下 bug 出現的常見的情形。 一個語法級別的問題是打字太快帶來的低級拼寫錯誤。

變量或函數名的錯寫、漏寫或大小寫弄混都會讓瀏覽器嘗試查找並不存在的東西，並報出“引用錯誤”。 JavaScript 變量和函數名稱區分大小寫。

# --instructions--

修復代碼中的兩個拼寫錯誤，以便 `netWorkingCapital` 計算有效。

# --hints--

檢查計算 netWorkingCapital 值時使用的兩個變量的拼寫是否正確，控制檯應該輸出 "Net working capital is: 2"。

```js
assert(netWorkingCapital === 2);
```

代碼中不應該有拼寫錯誤的變量實例。

```js
assert(!code.match(/recievables/g));
```

應在代碼中聲明並正確使用 `receivables` 變量。

```js
assert(code.match(/receivables/g).length == 2);
```

代碼中不應該有拼寫錯誤的變量實例。

```js
assert(!code.match(/payable;/g));
```

應在代碼中聲明並正確使用 `payables` 變量。

```js
assert(code.match(/payables/g).length == 2);
```

# --seed--

## --seed-contents--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

# --solutions--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
```
