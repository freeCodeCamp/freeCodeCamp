---
id: 596fda99c69f779975a1b67d
title: 计算子字符串的出现次数
challengeType: 5
videoUrl: ''
---

# --description--

任务：

创建函数或显示内置函数，以计算字符串中子字符串的非重叠出现次数。

该函数应该有两个参数：

第一个参数是要搜索的字符串，第二个参数是要搜索的子字符串。

它应该返回一个整数计数。

匹配应产生最多数量的非重叠匹配。

通常，这实质上意味着从左到右或从右到左匹配。

# --hints--

`countSubstring`是一个函数。

```js
assert(typeof countSubstring === 'function');
```

`countSubstring("the three truths", "th")`应该返回`3` 。

```js
assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
```

`countSubstring("ababababab", "abab")`应返回`2` 。

```js
assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
```

`countSubstring("abaabba*bbaba*bbab", "a*b")`应返回`2` 。

```js
assert.equal(countSubstring(testCases[2], searchString[2]), results[2]);
```

# --solutions--

