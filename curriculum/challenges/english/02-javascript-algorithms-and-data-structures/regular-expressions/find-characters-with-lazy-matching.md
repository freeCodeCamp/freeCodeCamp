---
id: 587d7db6367417b2b2512b9b
title: Find Characters with Lazy Matching
challengeType: 1
forumTopicId: 301341
---

## Description
<section id='description'>
In regular expressions, a <dfn>greedy</dfn> match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a <dfn>lazy</dfn> match, which finds the smallest possible part of the string that satisfies the regex pattern.
You can apply the regex <code>/t[a-z]*i/</code> to the string <code>"titanic"</code>. This regex is basically a pattern that starts with <code>t</code>, ends with <code>i</code>, and has some letters in between.
Regular expressions are by default greedy, so the match would return <code>["titani"]</code>. It finds the largest sub-string possible to fit the pattern.
However, you can use the <code>?</code> character to change it to lazy matching. <code>"titanic"</code> matched against the adjusted regex of <code>/t[a-z]*?i/</code> returns <code>["ti"]</code>.
<strong>Note</strong><br>Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.
</section>

## Instructions
<section id='instructions'>
Fix the regex <code>/&lt;.*&gt;/</code> to return the HTML tag <code>&lt;h1&gt;</code> and not the text <code>"&lt;h1&gt;Winter is coming&lt;/h1&gt;"</code>. Remember the wildcard <code>.</code> in a regular expression matches any character.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>result</code> variable should be an array with <code>&lt;h1&gt;</code> in it
    testString: assert(result[0] == '<h1>');
  - text: <code>myRegex</code> should use lazy matching
    testString: assert(/\?/g.test(myRegex));
  - text: <code>myRegex</code> should not include the string 'h1'
    testString: assert(!myRegex.source.match('h1'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```

</section>
