---
id: bad87fee1348bd9aec908846
title: Create a Bootstrap Headline
localeTitle: Crear un título de Bootstrap
challengeType: 0
---

## Description
<section id='description'> 
Ahora vamos a construir algo desde cero para practicar nuestras habilidades HTML, CSS y Bootstrap. 
Construiremos un patio de juegos de jQuery, que pronto utilizaremos en nuestros desafíos de jQuery. 
Para empezar, cree un elemento <code>h3</code> , con el texto <code>jQuery Playground</code> . 
Colorea tu elemento <code>h3</code> con la clase Bootstrap <code>text-primary</code> del <code>text-primary</code> céntrala con la clase Bootstrap del centro de <code>text-center</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Agrega un elemento <code>h3</code> a tu página.
    testString: 'assert($("h3") && $("h3").length > 0, "Add a <code>h3</code> element to your page.");'
  - text: Asegúrese de que su elemento <code>h3</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/h3>/g) && code.match(/<h3/g) && code.match(/<\/h3>/g).length === code.match(/<h3/g).length, "Make sure your <code>h3</code> element has a closing tag.");'
  - text: Tu elemento <code>h3</code> debe colorearse aplicando la clase <code>text-primary</code>
    testString: 'assert($("h3").hasClass("text-primary"), "Your <code>h3</code> element should be colored by applying the class <code>text-primary</code>");'
  - text: Tu elemento <code>h3</code> se debe centrar aplicando el <code>text-center</code> la clase
    testString: 'assert($("h3").hasClass("text-center"), "Your <code>h3</code> element should be centered by applying the class <code>text-center</code>");'
  - text: Tu elemento <code>h3</code> debe tener el texto <code>jQuery Playground</code> .
    testString: 'assert.isTrue((/jquery(\s)+playground/gi).test($("h3").text()), "Your <code>h3</code> element should have the text <code>jQuery Playground</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
