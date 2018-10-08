---
id: 587d7b84367417b2b2512b37
title: Catch Mixed Usage of Single and Double Quotes
localeTitle: Uso mixto de capturas de comillas simples y dobles
challengeType: 1
---

## Description
<section id='description'> 
JavaScript permite el uso de comillas simples (&quot;) y dobles (&quot; &quot;) para declarar una cadena. Decidir cuál usar generalmente se reduce a preferencias personales, con algunas excepciones. 
Tener dos opciones es excelente cuando una cadena tiene contracciones u otro fragmento de texto entre comillas. Solo tenga cuidado de no cerrar la cadena demasiado pronto, lo que provoca un error de sintaxis. 
Aquí hay algunos ejemplos de comillas de mezcla: 
<blockquote>// These are correct:<br>const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";<br>const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";<br>// This is incorrect:<br>const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';</blockquote> 
Por supuesto, está bien usar solo un estilo de citas. Puede escapar de las comillas dentro de la cadena usando el carácter de escape de barra invertida (\): 
<blockquote>// Correct use of same quotes:<br>const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Arregle la cadena para que use comillas diferentes para el valor <code>href</code> , o escape de las existentes. Mantenga las comillas dobles alrededor de toda la cadena. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;Tu código debe corregir las comillas alrededor del valor <code>href</code> &quot;#Home&quot;, ya sea cambiándolos o escapándolos.&#39;
    testString: 'assert(code.match(/<a href=\s*?("|\\")#Home\1\s*?>/g), "Your code should fix the quotes around the <code>href</code> value "#Home" by either changing or escaping them.");'
  - text: Su código debe mantener las comillas dobles alrededor de toda la cadena.
    testString: 'assert(code.match(/"<p>.*?<\/p>";/g), "Your code should keep the double quotes around the entire string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
