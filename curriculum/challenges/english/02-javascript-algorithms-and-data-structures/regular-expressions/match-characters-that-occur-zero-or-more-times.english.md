---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
challengeType: 1
isHidden: false
forumTopicId: 301351
---

## Description
<section id='description'>
The last challenge used the plus <code>+</code> sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.
The character to do this is the asterisk or star: <code>*</code>.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
```

</section>

## Instructions
<section id='instructions'>
For this challenge, <code>chewieQuote</code> has been initialized as "Aaaaaaaaaaaaaaaarrrgh!" behind the scenes. Create a regex <code>chewieRegex</code> that uses the <code>*</code> character to match an uppercase <code>"A"</code> character immediately followed by zero or more lowercase <code>"a"</code> characters in <code>chewieQuote</code>. Your regex does not need flags or character classes, and it should not match any of the other quotes.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>chewieRegex</code> should use the <code>*</code> character to match zero or more <code>a</code> characters.
    testString: assert(/\*/.test(chewieRegex.source));
  - text: Your regex should match <code>"A"</code> in <code>chewieQuote</code>.
    testString: assert(result[0][0] === 'A');
  - text: Your regex should match <code>"Aaaaaaaaaaaaaaaa"</code> in <code>chewieQuote</code>.
    testString: assert(result[0] === 'Aaaaaaaaaaaaaaaa');
  - text: Your regex <code>chewieRegex</code> should match 16 characters in <code>chewieQuote</code>.
    testString: assert(result[0].length === 16);
  - text: Your regex should not match any characters in "He made a fair move. Screaming about it can't help you."
    testString: assert(!"He made a fair move. Screaming about it can't help you.".match(chewieRegex));
  - text: Your regex should not match any characters in "Let him have it. It's not wise to upset a Wookiee."
    testString: assert(!"Let him have it. It's not wise to upset a Wookiee.".match(chewieRegex));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
```

</div>

## Before Test
<div id='js-setup'>

```js
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
```

</div>

</section>

## Solution
<section id='solution'>

```js
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
```

</section>
