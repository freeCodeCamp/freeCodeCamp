---
id: aaa48de84e1ecc7c742e1124
title: Palindrome Checker
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 回文检查
---

## Description
<section id="description">如果给定的字符串是回文，则返回<code>true</code> 。否则，返回<code>false</code> 。 <dfn>回文</dfn>是一个单词或句子，其拼写方式与前后相同，忽略标点符号，大小写和间距。 <strong>注意</strong> <br>您需要删除<strong>所有非字母数字字符</strong> （标点符号，空格和符号）并将所有内容转换为相同的大小写（小写或大写）以检查回文。我们会通过字符串具有不同的格式，如<code>&quot;racecar&quot;</code> ， <code>&quot;RaceCar&quot;</code>和<code>&quot;race CAR&quot;</code>等等。我们还将传递带有特殊符号的字符串，例如<code>&quot;2A3*3a2&quot;</code> ， <code>&quot;2A3 3a2&quot;</code>和<code>&quot;2_A3*3#A2&quot;</code> 。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>palindrome(&quot;eye&quot;)</code>应该返回一个布尔值。
    testString: assert(typeof palindrome("eye") === "boolean");
  - text: <code>palindrome(&quot;eye&quot;)</code>应该返回true。
    testString: assert(palindrome("eye") === true);
  - text: <code>palindrome(&quot;_eye&quot;)</code>应该返回true。
    testString: assert(palindrome("_eye") === true);
  - text: <code>palindrome(&quot;race car&quot;)</code>应该返回true。
    testString: assert(palindrome("race car") === true);
  - text: <code>palindrome(&quot;not a palindrome&quot;)</code>应该返回false。
    testString: assert(palindrome("not a palindrome") === false);
  - text: '<code>palindrome(&quot;A man, a plan, a canal. Panama&quot;)</code>应该回归真实。'
    testString: assert(palindrome("A man, a plan, a canal. Panama") === true);
  - text: <code>palindrome(&quot;never odd or even&quot;)</code>应该返回true。
    testString: assert(palindrome("never odd or even") === true);
  - text: <code>palindrome(&quot;nope&quot;)</code>应该返回false。
    testString: assert(palindrome("nope") === false);
  - text: <code>palindrome(&quot;almostomla&quot;)</code>应该返回false。
    testString: assert(palindrome("almostomla") === false);
  - text: '<code>palindrome(&quot;My age is 0, 0 si ega ym.&quot;)</code>应该返回true。'
    testString: assert(palindrome("My age is 0, 0 si ega ym.") === true);
  - text: <code>palindrome(&quot;1 eye for of 1 eye.&quot;)</code>应该返回假。
    testString: assert(palindrome("1 eye for of 1 eye.") === false);
  - text: '<code>palindrome(&quot;0_0 (: /-\ :) 0-0&quot;)</code>应该返回true。'
    testString: 'assert(palindrome("0_0 (: /-\ :) 0-0") === true);'
  - text: <code>palindrome(&quot;five|\_/|four&quot;)</code>应该返回false。
    testString: assert(palindrome("five|\_/|four") === false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function palindrome(str) {
  // Good luck!
  return true;
}



palindrome("eye");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
