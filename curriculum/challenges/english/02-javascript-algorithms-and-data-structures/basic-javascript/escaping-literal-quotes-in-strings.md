---
id: 56533eb9ac21ba0edf2244b5
title: Escaping Literal Quotes in Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
---

## Description

<section id='description'>

When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: `"` or `'` inside of your string?

In JavaScript, you can <dfn>escape</dfn> a quote from considering it as an end of string quote by placing a <dfn>backslash</dfn> (`\`) in front of the quote.

`var sampleStr = "Alan said, \"Peter is learning JavaScript\".";`

This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

`Alan said, "Peter is learning JavaScript".`

</section>

## Instructions

<section id='instructions'>

Use <dfn>backslashes</dfn> to assign a string to the `myStr` variable so that if you were to print it to the console, you would see:

`I am a "double quoted" string inside "double quotes".`

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: You should use two double quotes (<code>&quot;</code>) and four escaped double quotes (<code>&#92;&quot;</code>).
    testString: assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
  - text: 'Variable myStr should contain the string: <code>I am a "double quoted" string inside "double quotes".</code>'
    testString: 'assert(myStr === "I am a \"double quoted\" string inside \"double quotes\".");'

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr = ""; // Change this line


```

</div>

### After Test

<div id='js-teardown'>

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

</div>

</section>

## Solution

<section id='solution'>

```js
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```

</section>
