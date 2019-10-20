---
id: 587d7b84367417b2b2512b37
title: Catch Mixed Usage of Single and Double Quotes
challengeType: 1
videoUrl: ''
localeTitle: Uso mixto de capturas de comillas simples y dobles
---

## Description
<section id="description"> JavaScript permite el uso de comillas simples (&quot;) y dobles (&quot; &quot;) para declarar una cadena. Decidir cuál usar generalmente se reduce a preferencias personales, con algunas excepciones. Tener dos opciones es excelente cuando una cadena tiene contracciones u otras Parte del texto que está entre comillas. Solo tenga cuidado de no cerrar la cadena demasiado pronto, lo que provoca un error de sintaxis. Aquí hay algunos ejemplos de comillas de mezcla: <blockquote> // Estos son correctos: <br> const grouchoContraction = &quot;He tenido una noche perfectamente maravillosa, pero no fue así&quot;; <br> const quoteInString = &quot;Groucho Marx dijo una vez &#39;Citarme diciendo que me había citado mal&#39;&quot;; <br> // Esto es incorrecto: <br> const uhOhGroucho = &#39;He tenido una noche perfectamente maravillosa, pero no fue así&#39;; </blockquote> Por supuesto, está bien usar solo un estilo de citas. Puede evitar las comillas dentro de la cadena usando el carácter de escape de barra invertida (\): <blockquote> // Uso correcto de las mismas citas: <br> const allSameQuotes = &#39;He tenido una noche perfectamente maravillosa, pero no fue así&#39;; </blockquote></section>

## Instructions
<section id="instructions"> Arregle la cadena para que use comillas diferentes para el valor <code>href</code> , o escape de las existentes. Mantenga las comillas dobles alrededor de toda la cadena. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Su código debe corregir las comillas alrededor del valor <code>href</code> &quot;#Home&quot;, ya sea cambiándolos o escapándolos.'
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
