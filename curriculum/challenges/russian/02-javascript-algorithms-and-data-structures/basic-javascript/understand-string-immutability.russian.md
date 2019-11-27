---
id: 56533eb9ac21ba0edf2244ba
title: Understand String Immutability
challengeType: 1
videoUrl: https://scrimba.com/c/cWPVaUR
forumTopicId: 18331
localeTitle: Понять неустойчивость струны
---

## Description
<section id='description'>
В JavaScript значения <code>String</code> <dfn>неизменяемы</dfn> , а это значит, что они не могут быть изменены после создания. Например, следующий код: <blockquote> var myStr = &quot;Bob&quot;; <br> myStr [0] = &quot;J&quot;; </blockquote> не может изменить значение <code>myStr</code> на «Job», потому что содержимое <code>myStr</code> не может быть изменено. Обратите внимание, что это <em>не</em> означает, что <code>myStr</code> нельзя изменить, просто чтобы отдельные символы <dfn>строкового литерала</dfn> не могли быть изменены. Единственный способ изменить <code>myStr</code> - назначить ему новую строку, например: <blockquote> var myStr = &quot;Bob&quot;; <br> myStr = &quot;Job&quot;; </blockquote>
</section>

## Instructions
<section id='instructions'>
Исправьте назначение <code>myStr</code> чтобы оно содержало строковое значение <code>Hello World</code> используя подход, показанный в приведенном выше примере.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> should have a value of <code>Hello World</code>
    testString: assert(myStr === "Hello World");
  - text: Do not change the code above the line
    testString: assert(/myStr = "Jello World"/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myStr = "Jello World";

// Only change code below this line

myStr[0] = "H"; // Fix Me

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(v){return "myStr = " + v;})(myStr);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myStr = "Jello World";
myStr = "Hello World";
```

</section>
