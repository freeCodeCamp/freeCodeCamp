---
id: acda2fb1324d9b0fa741e6b5
challengeType: 5
videoUrl: ''
title: 确认结束
---

## Description
<section id="description">检查字符串（第一个参数<code>str</code> ）是否以给定的目标字符串（第二个参数， <code>target</code> ）结束。这个挑战<em>可以</em>通过<code>.endsWith()</code>中引入的<code>.endsWith()</code>方法来解决。但是出于这个挑战的目的，我们希望您使用其中一个JavaScript子字符串方法。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>confirmEnding(&quot;Bastian&quot;, &quot;n&quot;)</code>应该返回true。'
    testString: assert(confirmEnding("Bastian", "n") === true);
  - text: '<code>confirmEnding(&quot;Congratulation&quot;, &quot;on&quot;)</code>应该返回true。'
    testString: assert(confirmEnding("Congratulation", "on") === true);
  - text: '<code>confirmEnding(&quot;Connor&quot;, &quot;n&quot;)</code>应返回false。'
    testString: assert(confirmEnding("Connor", "n") === false);
  - text: '<code>confirmEnding(&quot;Walking on water and developing software from a specification are easy if both are frozen&quot;, &quot;specification&quot;)</code>应该返回false。'
    testString: assert(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") === false);
  - text: '<code>confirmEnding(&quot;He has to give me a new name&quot;, &quot;name&quot;)</code>应该返回true。'
    testString: assert(confirmEnding("He has to give me a new name", "name") === true);
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;same&quot;)</code>应该返回true。'
    testString: assert(confirmEnding("Open sesame", "same") === true);
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;pen&quot;)</code>应该返回false。'
    testString: assert(confirmEnding("Open sesame", "pen") === false);
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;game&quot;)</code>应该返回false。'
    testString: assert(confirmEnding("Open sesame", "game") === false);
  - text: '<code>confirmEnding(&quot;If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing&quot;, &quot;mountain&quot;)</code>应该返回虚假。'
    testString: assert(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") === false);
  - text: '<code>confirmEnding(&quot;Abstraction&quot;, &quot;action&quot;)</code>应该返回true。'
    testString: assert(confirmEnding("Abstraction", "action") === true);
  - text: 不要使用内置方法<code>.endsWith()</code>来解决挑战。
    testString: assert(!(/\.endsWith\(.*?\)\s*?;?/.test(code)) && !(/\['endsWith'\]/.test(code)));

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

/section>
