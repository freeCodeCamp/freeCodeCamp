---
id: 596fda99c69f779975a1b67d
title: 计算子字符串的出现次数
challengeType: 1
forumTopicId: 302237
dashedName: count-occurrences-of-a-substring
---

# --description--

Create a function, or show a built-in function, to count the number of non-overlapping occurrences of a substring inside a string.

该函数应采用两个参数：

<ul>
  <li>the first argument being the string to search, and</li>
  <li>第二个参数是要搜索的子字符串。</li>
</ul>

它应该返回一个整数计数。

匹配应产生最大数量的非重叠匹配。

一般来说，这实质上意味着从左到右或从右到左匹配。

# --hints--

`countSubstring` 应该是一个函数。

```js
assert(typeof countSubstring === 'function');
```

`countSubstring("the three truths", "th")` 应该返回 `3`。

```js
assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
```

`countSubstring("ababababab", "abab")` 应该返回 `2`。

```js
assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
```

`countSubstring("abaabba*bbaba*bbab", "a*b")` 应该返回 `2`。

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
