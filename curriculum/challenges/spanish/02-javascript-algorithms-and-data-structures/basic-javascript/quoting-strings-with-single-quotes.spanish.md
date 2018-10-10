---
id: 56533eb9ac21ba0edf2244b4
title: Quoting Strings with Single Quotes
challengeType: 1
videoUrl: ''
localeTitle: Cotizando cuerdas con comillas simples
---

## Description
<section id="description"> <dfn>Los</dfn> valores de <dfn>cadena</dfn> en JavaScript se pueden escribir con comillas simples o dobles, siempre y cuando comience y termine con el mismo tipo de comillas. A diferencia de otros lenguajes de programación, las comillas simples y dobles funcionan de la misma manera en JavaScript. <blockquote> doubleQuoteStr = &quot;Esto es una cadena&quot;; <br> singleQuoteStr = &#39;Esto también es una cadena&#39;; </blockquote> La razón por la que podría querer usar un tipo de cita sobre la otra es si quiere usar ambos en una cadena. Esto puede suceder si desea guardar una conversación en una cadena y tener la conversación entre comillas. Otro uso sería guardar una etiqueta <code>&lt;a&gt;</code> con varios atributos entre comillas, todo dentro de una cadena. <blockquote> conversation = &#39;Finn exclama a Jake, &quot;¡Algebraico!&quot;&#39;; </blockquote> Sin embargo, esto se convierte en un problema si necesita usar las citas más externas dentro de él. Recuerde, una cadena tiene el mismo tipo de cita al principio y al final. Pero si tiene la misma cita en algún punto intermedio, la cadena se detendrá antes y arrojará un error. <blockquote> goodStr = &#39;Jake le pregunta a Finn, &quot;Oye, ¿vamos a la aventura?&quot;&#39;; <br> badStr = &#39;Finn responde: &quot;¡Vamos!&quot;&#39;; // arroja un error </blockquote> En el <dfn>goodStr</dfn> anterior, puede usar ambas comillas de forma segura usando la barra invertida <code>\</code> como un carácter de escape. <strong>Nota</strong> <br> La barra invertida <code>\</code> no debe confundirse con la barra inclinada <code>/</code> . No hacen lo mismo. </section>

## Instructions
<section id="instructions"> Cambie la cadena proporcionada a una cadena con comillas simples al principio y al final y sin caracteres de escape. En este momento, la etiqueta <code>&lt;a&gt;</code> en la cadena usa comillas dobles en todas partes. Deberá cambiar las comillas externas a comillas simples para poder eliminar los caracteres de escape. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Eliminar todas las <code>backslashes</code> ( <code>\</code> )
    testString: 'assert(!/\\/g.test(code) && myStr.match("\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*"), "Remove all the <code>backslashes</code> (<code>\</code>)");'
  - text: 'Usted debe tener dos comillas simples <code>&#39;</code> y cuatro dobles comillas <code>&quot;</code>'
    testString: 'assert(code.match(/"/g).length === 4 && code.match(/"/g).length === 2, "You should have two single quotes <code>&#39;</code> and four double quotes <code>&quot;</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

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
// solution required
```
</section>
