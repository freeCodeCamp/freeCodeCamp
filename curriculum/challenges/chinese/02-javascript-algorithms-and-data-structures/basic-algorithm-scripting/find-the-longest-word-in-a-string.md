---
id: a26cbbe9ad8655a977e1ceb5
title: 找到字符串中最长的单词
challengeType: 5
videoUrl: ''
---

# --description--

返回所提供句子中最长单词的长度。您的回答应该是一个数字。如果卡住，请记得使用[Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) 。编写自己的代码。

# --hints--

`findLongestWordLength("The quick brown fox jumped over the lazy dog")`应该返回一个数字。

```js
assert(
  typeof findLongestWordLength(
    'The quick brown fox jumped over the lazy dog'
  ) === 'number'
);
```

`findLongestWordLength("The quick brown fox jumped over the lazy dog")`应该返回6。

```js
assert(
  findLongestWordLength('The quick brown fox jumped over the lazy dog') === 6
);
```

`findLongestWordLength("May the force be with you")`应该返回5。

```js
assert(findLongestWordLength('May the force be with you') === 5);
```

`findLongestWordLength("Google do a barrel roll")`应返回6。

```js
assert(findLongestWordLength('Google do a barrel roll') === 6);
```

`findLongestWordLength("What is the average airspeed velocity of an unladen swallow")`应该返回8。

```js
assert(
  findLongestWordLength(
    'What is the average airspeed velocity of an unladen swallow'
  ) === 8
);
```

`findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")`应该返回19。

```js
assert(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  ) === 19
);
```

# --solutions--

