---
id: 587d7db6367417b2b2512b99
title: Match Characters that Occur One or More Times
challengeType: 1
isHidden: false
forumTopicId: 301350
---

## Description
<section id='description'>
Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.
You can use the <code>+</code> character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
For example, <code>/a+/g</code> would find one match in <code>"abc"</code> and return <code>["a"]</code>. Because of the <code>+</code>, it would also find a single match in <code>"aabc"</code> and return <code>["aa"]</code>.
If it were instead checking the string <code>"abab"</code>, it would find two matches and return <code>["a", "a"]</code> because the <code>a</code> characters are not in a row - there is a <code>b</code> between them. Finally, since there is no <code>"a"</code> in the string <code>"bcd"</code>, it wouldn't find a match.
</section>

## Instructions
<section id='instructions'>
You want to find matches when the letter <code>s</code> occurs one or more times in <code>"Mississippi"</code>. Write a regex that uses the <code>+</code> sign.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>myRegex</code> should use the <code>+</code> sign to match one or more <code>s</code> characters.
    testString: assert(/\+/.test(myRegex.source));
  - text: Your regex <code>myRegex</code> should match 2 items.
    testString: assert(result.length == 2);
  - text: The <code>result</code> variable should be an array with two matches of <code>"ss"</code>
    testString: assert(result[0] == 'ss' && result[1] == 'ss');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```

</section>
