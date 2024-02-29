---
id: 596fda99c69f779975a1b67d
title: 計算子字符串的出現次數
challengeType: 1
forumTopicId: 302237
dashedName: count-occurrences-of-a-substring
---

# --description--

Create a function, or show a built-in function, to count the number of non-overlapping occurrences of a substring inside a string.

該函數應採用兩個參數：

<ul>
  <li>the first argument being the string to search, and</li>
  <li>第二個參數是要搜索的子字符串。</li>
</ul>

它應該返回一個整數計數。

匹配應產生最大數量的非重疊匹配。

一般來說，這實質上意味着從左到右或從右到左匹配。

# --hints--

`countSubstring` 應該是一個函數。

```js
assert(typeof countSubstring === 'function');
```

`countSubstring("the three truths", "th")` 應該返回 `3`。

```js
assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
```

`countSubstring("ababababab", "abab")` 應該返回 `2`。

```js
assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
```

`countSubstring("abaabba*bbaba*bbab", "a*b")` 應該返回 `2`。

```js
assert.equal(countSubstring(testCases[2], searchString[2]), results[2]);
```

# --seed--

## --after-user-code--

```js
const testCases = ['the three truths', 'ababababab', 'abaabba*bbaba*bbab'];
const searchString = ['th', 'abab', 'a*b'];
const results = [3, 2, 2];
```

## --seed-contents--

```js
function countSubstring(str, subStr) {

  return true;
}
```

# --solutions--

```js
function countSubstring(str, subStr) {
  const escapedSubStr = subStr.replace(/[.+*?^$[\]{}()|/]/g, '\\$&');
  const matches = str.match(new RegExp(escapedSubStr, 'g'));
  return matches ? matches.length : 0;
}
```
