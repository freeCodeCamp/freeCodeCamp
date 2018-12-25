---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
challengeType: 1
---

## Description
<section id='description'>
The last challenge used the plus <code>+</code> sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.
The character to do this is the <code>asterisk</code> or <code>star</code>: <code>*</code>.
<blockquote>let soccerWord = "gooooooooal!";<br>let gPhrase = "gut feeling";<br>let oPhrase = "over the moon";<br>let goRegex = /go*/;<br>soccerWord.match(goRegex); // Returns ["goooooooo"]<br>gPhrase.match(goRegex); // Returns ["g"]<br>oPhrase.match(goRegex); // Returns null</blockquote>
</section>

## Instructions
<section id='instructions'>
Create a regex <code>chewieRegex</code> that uses the <code>*</code> character to match all the upper and lowercase <code>"a"</code> characters in <code>chewieQuote</code>. Your regex does not need flags, and it should not match any of the other quotes.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>chewieRegex</code> should use the <code>*</code> character to match zero or more <code>a</code> characters.
    testString: assert(/\*/.test(chewieRegex.source), 'Your regex <code>chewieRegex</code> should use the <code>*</code> character to match zero or more <code>a</code> characters.');
  - text: Your regex <code>chewieRegex</code> should match 16 characters.
    testString: assert(result[0].length === 16, 'Your regex <code>chewieRegex</code> should match 16 characters.');
  - text: Your regex should match <code>"Aaaaaaaaaaaaaaaa"</code>.
    testString: assert(result[0] === 'Aaaaaaaaaaaaaaaa', 'Your regex should match <code>"Aaaaaaaaaaaaaaaa"</code>.');
  - text: Your regex should not match any characters in <code>"He made a fair move. Screaming about it can&#39t help you."</code>
    testString: assert(!"He made a fair move. Screaming about it can\'t help you.".match(chewieRegex), 'Your regex should not match any characters in <code>"He made a fair move. Screaming about it can&#39t help you."</code>');
  - text: Your regex should not match any characters in <code>"Let him have it. It&#39s not wise to upset a Wookiee."</code>
    testString: assert(!"Let him have it. It\'s not wise to upset a Wookiee.".match(chewieRegex), 'Your regex should not match any characters in <code>"Let him have it. It&#39s not wise to upset a Wookiee."</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /change/; // Change this line
let result = chewieQuote.match(chewieRegex);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
