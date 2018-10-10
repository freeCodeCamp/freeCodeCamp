---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
challengeType: 1
videoUrl: ''
localeTitle: 'Символы соответствия, которые имеют нулевой или более длительный период'
---

## Description
<section id="description"> Последний вызов использовал знак плюс <code>+</code> для поиска символов, которые происходят один или несколько раз. Также есть опция, которая соответствует символам, которые появляются ноль или более раз. Характер для этого - <code>asterisk</code> или <code>star</code> : <code>*</code> . <blockquote> let soccerWord = &quot;gooooooooal!&quot;; <br> пусть gPhrase = «чувство кишки»; <br> пусть oPhrase = &quot;над луной&quot;; <br> let goRegex = / go * /; <br> soccerWord.match (goRegex); // Возвращает [&quot;goooooooo&quot;] <br> gPhrase.match (goRegex); // Возвращает [&quot;g&quot;] <br> oPhrase.match (goRegex); // Возвращает значение null </blockquote></section>

## Instructions
<section id="instructions"> Создайте regex <code>chewieRegex</code> который использует символ <code>*</code> чтобы соответствовать всем верхним и нижним символам <code>&quot;a&quot;</code> в <code>chewieQuote</code> . Вашему регулярному выражению не нужны флаги, и он не должен совпадать с какими-либо другими цитатами. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваша регулярное выражение <code>chewieRegex</code> следует использовать <code>*</code> символ соответствует нулю или более символов. <code>a</code>
    testString: 'assert(/\*/.test(chewieRegex.source), "Your regex <code>chewieRegex</code> should use the <code>*</code> character to match zero or more <code>a</code> characters.");'
  - text: Ваше регулярное выражение <code>chewieRegex</code> должно совпадать с 16 символами.
    testString: 'assert(result[0].length === 16, "Your regex <code>chewieRegex</code> should match 16 characters.");'
  - text: Ваше регулярное выражение должно соответствовать <code>&quot;Aaaaaaaaaaaaaaaa&quot;</code> .
    testString: 'assert(result[0] === "Aaaaaaaaaaaaaaaa", "Your regex should match <code>"Aaaaaaaaaaaaaaaa"</code>.");'
  - text: 'Ваше регулярное выражение не должно совпадать с символами в <code>&quot;He made a fair move. Screaming about it can&#39;t help you.&quot;</code>'
    testString: 'assert(!"He made a fair move. Screaming about it can\"t help you.".match(chewieRegex), "Your regex should not match any characters in <code>"He made a fair move. Screaming about it can&#39t help you."</code>");'
  - text: 'Ваше регулярное выражение не должно совпадать с символами в <code>&quot;Let him have it. It&#39;s not wise to upset a Wookiee.&quot;</code>'
    testString: 'assert(!"Let him have it. It\"s not wise to upset a Wookiee.".match(chewieRegex), "Your regex should not match any characters in <code>"Let him have it. It&#39s not wise to upset a Wookiee."</code>");'

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
