---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
localeTitle: Caracteres de coincidencia que ocurren cero o más veces
challengeType: 1
---

## Description
<section id='description'>
El último desafío usó el signo más <code>+</code> para buscar caracteres que aparecen una o más veces. También hay una opción que coincide con los caracteres que aparecen cero o más veces.
El personaje para hacer esto es el <code>asterisk</code> o <code>star</code> : <code>*</code> .
<blockquote>let soccerWord = "gooooooooal!";<br>let gPhrase = "gut feeling";<br>let oPhrase = "over the moon";<br>let goRegex = /go*/;<br>soccerWord.match(goRegex); // Returns ["goooooooo"]<br>gPhrase.match(goRegex); // Returns ["g"]<br>oPhrase.match(goRegex); // Returns null</blockquote>
</section>

## Instructions
<section id='instructions'>
Cree un regex <code>chewieRegex</code> que use el carácter <code>*</code> para que coincida con todos los caracteres <code>&quot;a&quot;</code> superiores e inferiores en <code>chewieQuote</code> . Su expresión regular no necesita indicadores y no debe coincidir con ninguna de las otras comillas.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular <code>chewieRegex</code> debe utilizar el <code>*</code> carácter a cero o más <code>a</code> personajes.
    testString: 'assert(/\*/.test(chewieRegex.source), "Your regex <code>chewieRegex</code> should use the <code>*</code> character to match zero or more <code>a</code> characters.");'
  - text: Tu regex <code>chewieRegex</code> debe coincidir con 16 caracteres.
    testString: 'assert(result[0].length === 16, "Your regex <code>chewieRegex</code> should match 16 characters.");'
  - text: Tu expresión regular debe coincidir con <code>&quot;Aaaaaaaaaaaaaaaa&quot;</code> .
    testString: 'assert(result[0] === "Aaaaaaaaaaaaaaaa", "Your regex should match <code>"Aaaaaaaaaaaaaaaa"</code>.");'
  - text: 'Tu expresión regular no debe coincidir con ningún carácter en <code>&quot;He made a fair move. Screaming about it can&#39;t help you.&quot;</code> '
    testString: 'assert(!"He made a fair move. Screaming about it can\"t help you.".match(chewieRegex), "Your regex should not match any characters in <code>"He made a fair move. Screaming about it can&#39t help you."</code>");'
  - text: &quot;Tu expresión regular no debe coincidir con ningún carácter en <code>&quot;Let him have it. It&#39;s not wise to upset a Wookiee.&quot;</code> '
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
