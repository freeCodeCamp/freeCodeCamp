---
id: 587d7db5367417b2b2512b95
title: Match Single Character with Multiple Possibilities
challengeType: 1
---

## Description
<section id='description'>
You learned how to match literal patterns (<code>/literal/</code>) and wildcard character (<code>/./</code>). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.
You can search for a literal pattern with some flexibility with <code>character classes</code>. Character classes allow you to define a group of characters you wish to match by placing them inside square (<code>[</code> and <code>]</code>) brackets.
For example, you want to match <code>"bag"</code>, <code>"big"</code>, and <code>"bug"</code> but not <code>"bog"</code>. You can create the regex <code>/b[aiu]g/</code> to do this. The <code>[aiu]</code> is the character class that will only match the characters <code>"a"</code>, <code>"i"</code>, or <code>"u"</code>.
<blockquote>let bigStr = "big";<br>let bagStr = "bag";<br>let bugStr = "bug";<br>let bogStr = "bog";<br>let bgRegex = /b[aiu]g/;<br>bigStr.match(bgRegex); // Returns ["big"]<br>bagStr.match(bgRegex); // Returns ["bag"]<br>bugStr.match(bgRegex); // Returns ["bug"]<br>bogStr.match(bgRegex); // Returns null</blockquote>
</section>

## Instructions
<section id='instructions'>
Use a character class with vowels (<code>a</code>, <code>e</code>, <code>i</code>, <code>o</code>, <code>u</code>) in your regex <code>vowelRegex</code> to find all the vowels in the string <code>quoteSample</code>.
<strong>Note</strong><br>Be sure to match both upper- and lowercase vowels.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should find all 25 vowels.
    testString: assert(result.length == 25, 'You should find all 25 vowels.');
  - text: Your regex <code>vowelRegex</code> should use a character class.
    testString: assert(/\[.*\]/.test(vowelRegex.source), 'Your regex <code>vowelRegex</code> should use a character class.');
  - text: Your regex <code>vowelRegex</code> should use the global flag.
    testString: assert(vowelRegex.flags.match(/g/).length == 1, 'Your regex <code>vowelRegex</code> should use the global flag.');
  - text: Your regex <code>vowelRegex</code> should use the case insensitive flag.
    testString: assert(vowelRegex.flags.match(/i/).length == 1, 'Your regex <code>vowelRegex</code> should use the case insensitive flag.');
  - text: Your regex should not match any consonants.
    testString: assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()), 'Your regex should not match any consonants.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
