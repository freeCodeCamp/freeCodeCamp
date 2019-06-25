---
id: 56533eb9ac21ba0edf2244cc
title: Accessing Nested Objects
challengeType: 1
videoUrl: ''
localeTitle: Accediendo a objetos anidados
---

## Description
<section id="description"> Se puede acceder a las sub-propiedades de los objetos encadenando la notación de punto o corchete. Aquí hay un objeto anidado: <blockquote> var ourStorage = { <br> &quot;escritorio&quot;: { <br> &quot;cajón&quot;: &quot;grapadora&quot; <br> } <br> &quot;gabinete&quot;: { <br> &quot;cajón de arriba&quot;: { <br> &quot;folder1&quot;: &quot;un archivo&quot;, <br> &quot;folder2&quot;: &quot;secretos&quot; <br> } <br> &quot;cajón inferior&quot;: &quot;soda&quot; <br> } <br> }; <br> ourStorage.cabinet [&quot;cajón superior&quot;]. folder2; // &quot;secretos&quot; <br> ourStorage.desk.drawer; // &quot;engrapadora&quot; </blockquote></section>

## Instructions
<section id="instructions"> Acceda al objeto <code>myStorage</code> y asigne el contenido de la propiedad <code>glove box</code> a la variable <code>gloveBoxContents</code> . Utilice la notación de corchete para las propiedades con un espacio en su nombre. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gloveBoxContents</code> debe ser igual a &quot;mapas&quot;
    testString: 'assert(gloveBoxContents === "maps", "<code>gloveBoxContents</code> should equal "maps"");'
  - text: Usa la notación de puntos y corchetes para acceder a <code>myStorage</code>
    testString: 'assert(/=\s*myStorage\.car\.inside\[\s*("|")glove box\1\s*\]/g.test(code), "Use dot and bracket notation to access <code>myStorage</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = undefined; // Change this line

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
