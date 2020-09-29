---
title: Count occurrences of a substring
id: 596fda99c69f779975a1b67d
challengeType: 5
videoUrl: ''
localeTitle: 计算子字符串的出现次数
---

## Description
<section id="description">任务： <p>创建函数或显示内置函数，以计算字符串中子字符串的非重叠出现次数。 </p><p>该函数应该有两个参数： </p>第一个参数是要搜索的字符串，第二个参数是要搜索的子字符串。 <p>它应该返回一个整数计数。 </p><p>匹配应产生最多数量的非重叠匹配。 </p><p>通常，这实质上意味着从左到右或从右到左匹配。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countSubstring</code>是一个函数。
    testString: assert(typeof countSubstring === 'function');
  - text: <code>countSubstring("the three truths", "th")</code>应该返回<code>3</code> 。
    testString: assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
  - text: <code>countSubstring("ababababab", "abab")</code>应返回<code>2</code> 。
    testString: assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
  - text: <code>countSubstring("abaabba*bbaba*bbab", "a*b")</code>应返回<code>2</code> 。
    testString: assert.equal(countSubstring(testCases[2], searchString[2]), results[2]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countSubstring (str, subStr) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
