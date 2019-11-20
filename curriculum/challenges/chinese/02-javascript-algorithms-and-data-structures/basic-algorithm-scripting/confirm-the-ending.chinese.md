---
id: acda2fb1324d9b0fa741e6b5
title: Confirm the Ending
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 确认结束
---

## Description
<section id="description">检查字符串（第一个参数<code>str</code> ）是否以给定的目标字符串（第二个参数， <code>target</code> ）结束。这个挑战<em>可以</em>通过<code>.endsWith()</code>中引入的<code>.endsWith()</code>方法来解决。但是出于这个挑战的目的，我们希望您使用其中一个JavaScript子字符串方法。如果卡住，请记得使用<a href="https://www.freecodecamp.org/forum/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>confirmEnding(&quot;Bastian&quot;, &quot;n&quot;)</code>应该返回true。'
    testString: 'assert(confirmEnding("Bastian", "n") === true, "<code>confirmEnding("Bastian", "n")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Congratulation&quot;, &quot;on&quot;)</code>应该返回true。'
    testString: 'assert(confirmEnding("Congratulation", "on") === true, "<code>confirmEnding("Congratulation", "on")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Connor&quot;, &quot;n&quot;)</code>应返回false。'
    testString: 'assert(confirmEnding("Connor", "n") === false, "<code>confirmEnding("Connor", "n")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;Walking on water and developing software from a specification are easy if both are frozen&quot;, &quot;specification&quot;)</code>应该返回false。'
    testString: 'assert(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") === false, "<code>confirmEnding("Walking on water and developing software from a specification are easy if both are frozen"&#44; "specification"&#41;</code> should return false.");'
  - text: '<code>confirmEnding(&quot;He has to give me a new name&quot;, &quot;name&quot;)</code>应该返回true。'
    testString: 'assert(confirmEnding("He has to give me a new name", "name") === true, "<code>confirmEnding("He has to give me a new name", "name")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;same&quot;)</code>应该返回true。'
    testString: 'assert(confirmEnding("Open sesame", "same") === true, "<code>confirmEnding("Open sesame", "same")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;pen&quot;)</code>应该返回false。'
    testString: 'assert(confirmEnding("Open sesame", "pen") === false, "<code>confirmEnding("Open sesame", "pen")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;game&quot;)</code>应该返回false。'
    testString: 'assert(confirmEnding("Open sesame", "game") === false, "<code>confirmEnding("Open sesame", "game")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing&quot;, &quot;mountain&quot;)</code>应该返回虚假。'
    testString: 'assert(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") === false, "<code>confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;Abstraction&quot;, &quot;action&quot;)</code>应该返回true。'
    testString: 'assert(confirmEnding("Abstraction", "action") === true, "<code>confirmEnding("Abstraction", "action")</code> should return true.");'
  - text: 不要使用内置方法<code>.endsWith()</code>来解决挑战。
    testString: 'assert(!(/\.endsWith\(.*?\)\s*?;?/.test(code)) && !(/\["endsWith"\]/.test(code)), "Do not use the built-in method <code>.endsWith()</code> to solve the challenge.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
