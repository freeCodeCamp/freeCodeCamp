---
id: bad87fee1348bd9aec908746
title: House our page within a Bootstrap container-fluid div
localeTitle: Aloja nuestra página dentro de un div de fluido de contenedores Bootstrap
challengeType: 0
---

## Description
<section id='description'> 
Ahora asegurémonos de que todo el contenido de su página responda a dispositivos móviles. 
<code>h3</code> su elemento <code>h3</code> dentro de un elemento <code>div</code> con la clase <code>container-fluid</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su elemento <code>div</code> debe tener la clase <code>container-fluid</code> .
    testString: 'assert($("div").hasClass("container-fluid"), "Your <code>div</code> element should have the class <code>container-fluid</code>.");'
  - text: Asegúrese de que cada uno de sus elementos <code>div</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure each of your <code>div</code> elements has a closing tag.");'
  - text: Anida tu elemento <code>h3</code> dentro de un elemento <code>div</code> .
    testString: 'assert($("div").children("h3").length >0, "Nest your <code>h3</code> element inside a <code>div</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h3 class="text-primary text-center">jQuery Playground</h3>


```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
