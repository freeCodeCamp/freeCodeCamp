---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
challengeType: 1
forumTopicId: 301351
localeTitle: Символы соответствия, которые имеют нулевой или более длительный период
---

## Description
<section id='description'>
Последний вызов использовал знак плюс <code>+</code> для поиска символов, которые происходят один или несколько раз. Также есть опция, которая соответствует символам, которые появляются ноль или более раз. Характер для этого - <code>asterisk</code> или <code>star</code> : <code>*</code> . <blockquote> let soccerWord = &quot;gooooooooal!&quot;; <br> пусть gPhrase = «чувство кишки»; <br> пусть oPhrase = &quot;над луной&quot;; <br> let goRegex = / go * /; <br> soccerWord.match (goRegex); // Возвращает [&quot;goooooooo&quot;] <br> gPhrase.match (goRegex); // Возвращает [&quot;g&quot;] <br> oPhrase.match (goRegex); // Возвращает значение null </blockquote>
</section>

## Instructions
<section id='instructions'>
Создайте regex <code>chewieRegex</code> который использует символ <code>*</code> чтобы соответствовать всем верхним и нижним символам <code>&quot;a&quot;</code> в <code>chewieQuote</code> . Вашему регулярному выражению не нужны флаги, и он не должен совпадать с какими-либо другими цитатами.
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
let chewieRegex = /change/; // Only change this line
let result = chewieQuote.match(chewieRegex);

```

</div>

### Before Tests
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
