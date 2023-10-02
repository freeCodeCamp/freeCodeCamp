---
id: 599a789b454f2bbd91a3ff4d
title: 比較不同值
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

在上兩個挑戰中，我們學習了相等運算符 (`==`) 和嚴格相等運算符 (`===`)。 現在讓我們快速回顧並實踐一下。

如果要比較的值不是同一類型，相等運算符會先執行數據類型轉換，然後比較值。 而嚴格相等運算符只比較值，不會進行數據類型轉換。

**示例**

`3 == '3'` 返回 `true` ，因爲 JavaScript 執行了從字符串到數字類型的轉換。 `3 === '3'` 返回 `false`，因爲類型不同，沒有進行類型轉換。

**提示** 在 JavaScript 中，你可以使用 `typeof` 運算符確定變量或值的類型，如下所示：

```js
typeof 3
typeof '3'
```

`typeof 3` 返回字符串 `number`，`typeof '3'` 返回字符串 `string`。

# --instructions--

編輯器中的 `compareEquality` 函數使用相等運算符比較兩個值。 修改函數，使其僅在值嚴格相等時返回 `Equal` 。

# --hints--

`compareEquality(10, "10")` 應該返回字符串 `Not Equal`

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

`compareEquality("20", 20)` 應該返回字符串 `Not Equal`

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

你應該使用 `===` 運算符

```js
assert(code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

# --solutions--

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```
