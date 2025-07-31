---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

The last challenge used the plus `+` sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: `*`.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

In order, the three `match` calls would return the values `["goooooooo"]`, `["g"]`, and `null`.

# --instructions--

For this challenge, `chewieQuote` has been initialized as the string `Aaaaaaaaaaaaaaaarrrgh!` behind the scenes. Create a regex `chewieRegex` that uses the `*` character to match an uppercase `A` character immediately followed by zero or more lowercase `a` characters in `chewieQuote`. Your regex does not need flags or character classes, and it should not match any of the other quotes.

# --hints--

Your regex `chewieRegex` should use the `*` character to match zero or more `a` characters.

```js
assert(/\*/.test(chewieRegex.source));
```

Your regex should match the string `A` in `chewieQuote`.

```js
assert(result[0][0] === 'A');
```

Your regex should match the string `Aaaaaaaaaaaaaaaa` in `chewieQuote`.

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

Your regex `chewieRegex` should match 16 characters in `chewieQuote`.

```js
assert(result[0].length === 16);
```

Your regex should not match any characters in the string `He made a fair move. Screaming about it can't help you.`

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

Your regex should not match any characters in the string `Let him have it. It's not wise to upset a Wookiee.`

```js
assert(
  !"Let him have it. It's not wise to upset a Wookiee.".match(chewieRegex)
);
```

# --seed--

## --before-user-code--

```js
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
```

## --seed-contents--

```js
// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
```

# --solutions--

```js
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
```
