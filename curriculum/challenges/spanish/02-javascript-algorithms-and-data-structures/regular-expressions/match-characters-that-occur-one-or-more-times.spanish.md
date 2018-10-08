---
id: 587d7db6367417b2b2512b99
title: Match Characters that Occur One or More Times
localeTitle: Relacionar los caracteres que ocurren una o más veces
challengeType: 1
---

## Description
<section id='description'> 
A veces, debe hacer coincidir un carácter (o grupo de caracteres) que aparece una o más veces seguidas. Esto significa que ocurre al menos una vez, y puede repetirse. 
Puede utilizar el carácter <code>+</code> para comprobar si ese es el caso. Recuerda, el personaje o patrón tiene que estar presente consecutivamente. Es decir, el personaje tiene que repetir uno tras otro. 
Por ejemplo, <code>/a+/g</code> encontraría una coincidencia en <code>&quot;abc&quot;</code> y devolvería <code>[&quot;a&quot;]</code> . Debido al <code>+</code> , también encontraría una única coincidencia en <code>&quot;aabc&quot;</code> y devolvería <code>[&quot;aa&quot;]</code> . 
Si se comprueba en lugar de la cadena <code>&quot;abab&quot;</code> , sería encontrar dos partidos y volver <code>[&quot;a&quot;, &quot;a&quot;]</code> , porque los <code>a</code> caracteres que no están en una fila - no es un <code>b</code> entre ellos. Finalmente, dado que no hay <code>&quot;a&quot;</code> a <code>&quot;a&quot;</code> en la cadena <code>&quot;bcd&quot;</code> , no encontrará una coincidencia. 
</section>

## Instructions
<section id='instructions'> 
Desea encontrar coincidencias cuando la letra <code>s</code> aparece una o más veces en <code>&quot;Mississippi&quot;</code> . Escribe una expresión regular que use el signo <code>+</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular <code>myRegex</code> debe utilizar el <code>+</code> signo para que coincida con uno o más <code>s</code> caracteres.
    testString: 'assert(/\+/.test(myRegex.source), "Your regex <code>myRegex</code> should use the <code>+</code> sign to match one or more <code>s</code> characters.");'
  - text: Tu regex <code>myRegex</code> debe coincidir con 2 elementos.
    testString: 'assert(result.length == 2, "Your regex <code>myRegex</code> should match 2 items.");'
  - text: La variable de <code>result</code> debe ser una matriz con dos coincidencias de <code>&quot;ss&quot;</code>
    testString: 'assert(result[0] == "ss" && result[1] == "ss", "The <code>result</code> variable should be an array with two matches of <code>"ss"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
