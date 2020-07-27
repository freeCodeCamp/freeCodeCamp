---
id: 587d7dbb367417b2b2512bab
title: Use Capture Groups to Search and Replace
challengeType: 1
isHidden: false
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
Write a regex <code>fixRegex</code> using three capture groups that will search for each word in the string "one two three". Then update the <code>replaceText</code> variable to replace "one two three" with the string "three two one" and assign the result to the <code>result</code> variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign (<code>$</code>) syntax.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use <code>.replace()</code> to search and replace.
    testString: assert(code.match(/\.replace\(.*\)/));
  - text: Your regex should change <code>"one two three"</code> to <code>"three two one"</code>
    testString: assert(result === "three two one");
  - text: You should not change the last line.
    testString: assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
  - text: <code>fixRegex</code> should use at least three capture groups.
    testString: assert((new RegExp(fixRegex.source + '|')).exec('').length - 1 >= 3);
  - text: <code>replaceText</code> should use parenthesized submatch string(s) (i.e. the nth parenthesized submatch string, $n, corresponds to the nth capture group).
    testString: '{
      const re = /(\$\d{1,2})+(?:[\D]|\b)/g;
      assert(replaceText.match(re).length >= 3);
    }'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```

</section>
