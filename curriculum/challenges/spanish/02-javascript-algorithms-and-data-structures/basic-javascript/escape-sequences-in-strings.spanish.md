---
id: 56533eb9ac21ba0edf2244b6
title: Escape Sequences in Strings
localeTitle: Secuencias de escape en cuerdas
challengeType: 1
---

## Description
<section id='description'>
comillas no son los únicos caracteres que pueden <dfn>escaparse</dfn> dentro de una cadena. Hay dos razones para usar caracteres que se escapan: primero es permitirle usar caracteres que de otra forma no podría escribir, como un retroceso. El segundo es permitirte representar múltiples citas en una cadena sin que JavaScript interprete mal lo que quieres decir. Aprendimos esto en el reto anterior.
<table class="table table-striped"><thead><tr><th> Código </th><th> Salida </th></tr></thead><tbody><tr><td> <code>\&#39;</code> </td> <td> una frase </td></tr><tr><td> <code>\&quot;</code> </td> <td> doble cita </td></tr><tr><td> <code>\\</code> </td> <td> barra invertida </td></tr><tr><td> <code>\n</code> </td> <td> nueva línea </td></tr><tr><td> <code>\r</code> </td> <td> retorno de carro </td></tr><tr><td> <code>\t</code> </td> <td> lengüeta </td></tr><tr><td> <code>\b</code> </td> <td> retroceso </td></tr><tr><td> <code>\f</code> </td> <td> form feed </td></tr></tbody></table>
<em>Tenga en cuenta que la barra invertida debe escaparse para que se muestre como una barra invertida.</em>
</section>

## Instructions
<section id='instructions'>
Asigne las siguientes tres líneas de texto a la única variable <code>myStr</code> usando secuencias de escape.
<blockquote>FirstLine<br/>&nbsp;&nbsp;&nbsp;&nbsp;\SecondLine<br/>ThirdLine</blockquote>
Necesitará usar secuencias de escape para insertar caracteres especiales correctamente. También deberá seguir el espaciado como se ve arriba, sin espacios entre las secuencias de escape o las palabras.
Aquí está el texto con las secuencias de escape escritas.
<q>FirstLine <code>newline</code> <code>tab</code> <code>backslash</code> SecondLine <code>newline</code> ThirdLine</q>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> no debe contener espacios
    testString: 'assert(!/ /.test(myStr), "<code>myStr</code> should not contain any spaces");'
  - text: ' <code>myStr</code> debe contener las cadenas <code>FirstLine</code> , <code>SecondLine</code> y <code>ThirdLine</code> (recuerda la sensibilidad a los casos)'
    testString: 'assert(/FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr), "<code>myStr</code> should contain the strings <code>FirstLine</code>, <code>SecondLine</code> and <code>ThirdLine</code> (remember case sensitivity)");'
  - text: <code>FirstLine</code> debe ir seguido del carácter de nueva línea <code>\n</code>
    testString: 'assert(/FirstLine\n/.test(myStr), "<code>FirstLine</code> should be followed by the newline character <code>\n</code>");'
  - text: <code>myStr</code> debe contener un carácter de tabulación <code>\t</code> que sigue a un carácter de nueva línea
    testString: 'assert(/\n\t/.test(myStr), "<code>myStr</code> should contain a tab character <code>\t</code> which follows a newline character");'
  - text: <code>SecondLine</code> debe ir precedida por el carácter de barra invertida <code>\\</code>
    testString: 'assert(/\SecondLine/.test(myStr), "<code>SecondLine</code> should be preceded by the backslash character <code>\\</code>");'
  - text: Debe haber un carácter de nueva línea entre <code>SecondLine</code> y <code>ThirdLine</code>
    testString: 'assert(/SecondLine\nThirdLine/.test(myStr), "There should be a newline character between <code>SecondLine</code> and <code>ThirdLine</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr; // Change this line


```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```

</section>
