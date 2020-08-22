---
id: af2170cad53daa0770fabdea
title: Mutations
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 突变
---

## Description
<section id="description">如果数组的第一个元素中的字符串包含数组第二个元素中字符串的所有字母，则返回true。例如， <code>[&quot;hello&quot;, &quot;Hello&quot;]</code>应该返回true，因为第二个字符串中的所有字母都出现在第一个字母中，忽略大小写。参数<code>[&quot;hello&quot;, &quot;hey&quot;]</code>应返回false，因为字符串“hello”不包含“y”。最后， <code>[&quot;Alien&quot;, &quot;line&quot;]</code>应该返回true，因为“line”中的所有字母都出现在“Alien”中。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>mutation([&quot;hello&quot;, &quot;hey&quot;])</code>应该返回false。'
    testString: assert(mutation(["hello", "hey"]) === false);
  - text: '<code>mutation([&quot;hello&quot;, &quot;Hello&quot;])</code>应该返回true。'
    testString: assert(mutation(["hello", "Hello"]) === true);
  - text: '<code>mutation([&quot;zyxwvutsrqponmlkjihgfedcba&quot;, &quot;qrstu&quot;])</code>应该返回true。'
    testString: assert(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) === true);
  - text: '<code>mutation([&quot;Mary&quot;, &quot;Army&quot;])</code>应该返回true。'
    testString: assert(mutation(["Mary", "Army"]) === true);
  - text: '<code>mutation([&quot;Mary&quot;, &quot;Aarmy&quot;])</code>应该返回true。'
    testString: assert(mutation(["Mary", "Aarmy"]) === true);
  - text: '<code>mutation([&quot;Alien&quot;, &quot;line&quot;])</code>应该返回true。'
    testString: assert(mutation(["Alien", "line"]) === true);
  - text: '<code>mutation([&quot;floor&quot;, &quot;for&quot;])</code>应该返回true。'
    testString: assert(mutation(["floor", "for"]) === true);
  - text: '<code>mutation([&quot;hello&quot;, &quot;neo&quot;])</code>应该返回false。'
    testString: assert(mutation(["hello", "neo"]) === false);
  - text: '<code>mutation([&quot;voodoo&quot;, &quot;no&quot;])</code>应该返回false。'
    testString: assert(mutation(["voodoo", "no"]) === false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
