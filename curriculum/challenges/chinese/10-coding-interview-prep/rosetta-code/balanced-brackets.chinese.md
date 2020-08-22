---
title: Balanced brackets
id: 594dc6c729e5700999302b45
challengeType: 5
videoUrl: ''
localeTitle: 平衡括号
---

## Description
<section id="description"><p>确定生成的括号字符串是否平衡;也就是说，它是否完全由成对的开/关括号（按此顺序）组成，其中没有一个错误嵌套。 </p>例子： <p class="rosetta__paragraph"> （空）是的</p><p class="rosetta__paragraph"> <code>[]</code>是的</p><p class="rosetta__paragraph"> <code>][</code>假</p><p class="rosetta__paragraph"> <code>[][]</code>是的</p><p class="rosetta__paragraph"> <code>][][</code>假</p><p class="rosetta__paragraph"> <code>[]][[]</code> false </p><p class="rosetta__paragraph"> <code>[[[[]]]]</code>是的</p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isBalanced</code>是一个函数。
    testString: assert(typeof isBalanced === 'function');
  - text: <code>isBalanced(&quot;[]&quot;)</code>应该返回true。
    testString: assert(isBalanced(testCases[0]));
  - text: <code>isBalanced(&quot;]][[[][][][]][&quot;)</code>应该返回false。
    testString: assert(!isBalanced(testCases[1]));
  - text: <code>isBalanced(&quot;[][[[[][][[[]]]]]]&quot;)</code>应该返回true。
    testString: assert(isBalanced(testCases[2]));
  - text: <code>isBalanced(&quot;][&quot;)</code>应该返回true。
    testString: assert(!isBalanced(testCases[3]));
  - text: <code>isBalanced(&quot;[[[]]]][[]&quot;)</code>应该返回true。
    testString: assert(!isBalanced(testCases[4]));
  - text: <code>isBalanced(&quot;][[]&quot;)</code>应该返回true。
    testString: assert(!isBalanced(testCases[5]));
  - text: <code>isBalanced(&quot;][[][]][[[]]&quot;)</code>应该返回true。
    testString: assert(!isBalanced(testCases[6]));
  - text: <code>isBalanced(&quot;[[][]]][&quot;)</code>应该返回true。
    testString: assert(!isBalanced(testCases[7]));
  - text: <code>isBalanced(&quot;[[[]]][[]]]][][[&quot;)</code>应该返回true。
    testString: assert(!isBalanced(testCases[8]));
  - text: <code>isBalanced(&quot;[]][[]]][[[[][]]&quot;)</code>应该返回true。
    testString: assert(!isBalanced(testCases[9]));
  - text: <code>isBalanced(&quot;][]][[][&quot;)</code>应该返回true。
    testString: assert(!isBalanced(testCases[10]));
  - text: <code>isBalanced(&quot;[[]][[][]]&quot;)</code>应该返回true。
    testString: assert(isBalanced(testCases[11]));
  - text: <code>isBalanced(&quot;[[]]&quot;)</code>应该返回true。
    testString: assert(isBalanced(testCases[12]));
  - text: <code>isBalanced(&quot;]][]][[]][[[&quot;)</code>应该返回true。
    testString: assert(!isBalanced(testCases[13]));
  - text: <code>isBalanced(&quot;][]][][[&quot;)</code>应该返回true。
    testString: assert(!isBalanced(testCases[14]));
  - text: <code>isBalanced(&quot;][][&quot;)</code>应该返回true。
    testString: assert(!isBalanced(testCases[15]));
  - text: <code>isBalanced(&quot;[[]]][][][[]][&quot;)</code>应该返回true。
    testString: assert(!isBalanced(testCases[16]));
  - text: <code>isBalanced(&quot;&quot;)</code>应该返回true。
    testString: assert(isBalanced(testCases[17]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isBalanced (str) {
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
