---
id: 56533eb9ac21ba0edf2244cc
title: Accessing Nested Objects
localeTitle: Accediendo a objetos anidados
challengeType: 1
guideUrl: 'https://spanish.freecodecamp.org/guide/certificates/accessing-nested-objects-in-json'
---

## Description
<section id='description'> 
Se puede acceder a las sub-propiedades de los objetos encadenando la notación de punto o corchete. 
Aquí hay un objeto anidado: 
<blockquote>var ourStorage = {<br>&nbsp;&nbsp;"desk": {<br>&nbsp;&nbsp;&nbsp;&nbsp;"drawer": "stapler"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;"cabinet": {<br>&nbsp;&nbsp;&nbsp;&nbsp;"top drawer": { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"folder1": "a file",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"folder2": "secrets"<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;"bottom drawer": "soda"<br>&nbsp;&nbsp;}<br>};<br>ourStorage.cabinet["top drawer"].folder2;  // "secrets"<br>ourStorage.desk.drawer; // "stapler"</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Acceda al objeto <code>myStorage</code> y asigne el contenido de la propiedad de la <code>glove box</code> a la variable <code>gloveBoxContents</code> . Utilice la notación de corchete para las propiedades con un espacio en su nombre. 
</section>

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
var myStorage = {
  "car":{
    "inside":{
      "glove box":"maps",
      "passenger seat":"crumbs"
    },
    "outside":{
      "trunk":"jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
```

</section>
