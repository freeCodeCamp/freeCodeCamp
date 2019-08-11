---
id: 587d7dbb367417b2b2512bab
title: Use Capture Groups to Search and Replace
challengeType: 1
forumTopicId: 301368
---

## Description
<section id='description'>
Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.
You can search and replace text in a string using <code>.replace()</code> on a string. The inputs for <code>.replace()</code> is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
```

You can also access capture groups in the replacement string with dollar signs (<code>$</code>).

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
```

</section>

## Instructions
<section id='instructions'>
Write a regex so that it will search for the string <code>"good"</code>. Then update the <code>replaceText</code> variable to replace <code>"good"</code> with <code>"okey-dokey"</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use <code>.replace()</code> to search and replace.
    testString: assert(code.match(/\.replace\(.*\)/));
  - text: Your regex should change <code>"This sandwich is good."</code> to <code>"This sandwich is okey-dokey."</code>
    testString: assert(result == "This sandwich is okey-dokey." && replaceText === "okey-dokey");
  - text: You should not change the last line.
    testString: assert(code.match(/result\s*=\s*huhText\.replace\(.*?\)/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let huhText = "This sandwich is good.";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = huhText.replace(fixRegex, replaceText);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let huhText = "This sandwich is good.";
let fixRegex = /good/g; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);
```

</section>
