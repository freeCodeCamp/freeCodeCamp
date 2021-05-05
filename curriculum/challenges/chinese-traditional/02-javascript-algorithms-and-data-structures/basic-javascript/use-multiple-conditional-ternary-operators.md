---
id: 587d7b7e367417b2b2512b21
title: 使用多個三元運算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

在之前的挑戰中，你使用了一個條件運算符。 你也可以將多個運算符串聯在一起以檢查多種條件。

下面的函數使用 `if`，`else if` 和 `else` 語句來檢查多個條件：

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

以上函數可以使用多個三元運算符重寫：

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

如上文所示，對多個三元運算符進行每個條件都是單獨一行的格式化被認爲是最佳做法。 使用多個三元運算符而沒有適當的縮進可能會使您的代碼難以理解。 例如：

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

# --instructions--

在 `checkSign` 函數中使用多個三元運算符來檢查數字是正數 ("positive")、負數 ("negative") 或零 ("zero")，使用 `findGreaterOrEqual` 裏面的建議縮進格式。 函數應返回 `positive`、`negative` 或 `zero`。

# --hints--

`checkSign` 應該使用多個三元運算符。

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

`checkSign(10)` 應該返回字符串 `positive`。 注意區分大寫字母和小寫字母。

```js
assert(checkSign(10) === 'positive');
```

`checkSign(-12)` 應該返回字符串 `negative`。 注意區分大寫字母和小寫字母。

```js
assert(checkSign(-12) === 'negative');
```

`checkSign(0)` 應該返回字符串 `zero`. 注意區分大寫字母和小寫字母。

```js
assert(checkSign(0) === 'zero');
```

# --seed--

## --seed-contents--

```js
function checkSign(num) {

}

checkSign(10);
```

# --solutions--

```js
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}
```
