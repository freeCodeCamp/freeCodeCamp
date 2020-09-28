---
id: bd7123c9c443eddfaeb5bdef
title: Declare JavaScript Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
---

## Description
<section id='description'>
In computer science, <dfn>data</dfn> is anything that is meaningful to the computer. JavaScript provides eight different <dfn>data types</dfn> which are <code>undefined</code>, <code>null</code>, <code>boolean</code>, <code>string</code>, <code>symbol</code>, <code>bigint</code>, <code>number</code>, and <code>object</code>.
For example, computers distinguish between numbers, such as the number <code>12</code>, and <code>strings</code>, such as <code>"12"</code>, <code>"dog"</code>, or <code>"123 cats"</code>, which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.
<dfn>Variables</dfn> allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the eight data types may be stored in a variable.
<code>Variables</code> are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer <code>variables</code> differ from mathematical variables in that they can store different values at different times.
We tell JavaScript to create or <dfn>declare</dfn> a variable by putting the keyword <code>var</code> in front of it, like so:

```js
var ourName;
```

creates a <code>variable</code> called <code>ourName</code>. In JavaScript we end statements with semicolons.
<code>Variable</code> names can be made up of numbers, letters, and <code>$</code> or <code>_</code>, but may not contain spaces or start with a number.
</section>

## Instructions
<section id='instructions'>
Use the <code>var</code> keyword to create a variable called <code>myName</code>.
<strong>Hint</strong><br>Look at the <code>ourName</code> example above if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should declare <code>myName</code> with the <code>var</code> keyword, ending with a semicolon
    testString: assert(/var\s+myName\s*;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js


```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myName;
```

</section>
