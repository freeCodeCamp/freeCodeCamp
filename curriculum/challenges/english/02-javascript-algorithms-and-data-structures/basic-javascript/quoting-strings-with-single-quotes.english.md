---
id: 56533eb9ac21ba0edf2244b4
title: Quoting Strings with Single Quotes
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
---

## Description
<section id='description'>
<dfn>String</dfn> values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

```js
doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
```

The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an <code>&#60;a&#62;</code> tag with various attributes in quotes, all within a string.

```js
conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

```js
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
badStr = 'Finn responds, "Let's go!"'; // Throws an error
```

In the <dfn>goodStr</dfn> above, you can use both quotes safely by using the backslash <code>\</code> as an escape character.
<strong>Note</strong><br/>The backslash <code>\</code> should not be confused with the forward slash <code>/</code>. They do not do the same thing.
</section>

## Instructions
<section id='instructions'>
Change the provided string to a string with single quotes at the beginning and end and no escape characters.
Right now, the <code>&#60;a&#62;</code> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should remove all the <code>backslashes</code> (<code>\</code>).
    testString: assert(!/\\/g.test(code) && myStr.match('\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'));
  - text: You should have two single quotes <code>&#39;</code> and four double quotes <code>&quot;</code>.
    testString: assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";


```

</div>


### After Test
<div id='js-teardown'>

```js
(function() { return "myStr = " + myStr; })();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```

</section>
