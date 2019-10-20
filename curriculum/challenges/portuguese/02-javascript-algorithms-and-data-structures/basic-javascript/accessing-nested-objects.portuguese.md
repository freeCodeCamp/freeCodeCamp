---
id: 56533eb9ac21ba0edf2244cc
title: Accessing Nested Objects
challengeType: 1
videoUrl: ''
localeTitle: Acessando Objetos Aninhados
---

## Description
<section id="description"> As subpropriedades dos objetos podem ser acessadas encadeando a notação de pontos ou colchetes. Aqui está um objeto aninhado: <blockquote> var ourStorage = { <br> &quot;escrivaninha&quot;: { <br> &quot;gaveta&quot;: &quot;grampeador&quot; <br> } <br> &quot;gabinete&quot;: { <br> &quot;gaveta superior&quot;: { <br> &quot;folder1&quot;: &quot;um arquivo&quot;, <br> &quot;folder2&quot;: &quot;segredos&quot; <br> } <br> &quot;gaveta de fundo&quot;: &quot;refrigerante&quot; <br> } <br> }; <br> ourStorage.cabinet [&quot;gaveta de cima&quot;]. folder2; // &quot;segredos&quot; <br> ourStorage.desk.drawer; // &quot;agrafador&quot; </blockquote></section>

## Instructions
<section id="instructions"> Acesse o objeto <code>myStorage</code> e atribua o conteúdo da propriedade <code>glove box</code> à variável <code>gloveBoxContents</code> . Use a notação de colchetes para propriedades com um espaço em seus nomes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gloveBoxContents</code> deve ser igual a &quot;mapas&quot;
    testString: 'assert(gloveBoxContents === "maps", "<code>gloveBoxContents</code> should equal "maps"");'
  - text: Use a notação de pontos e colchetes para acessar <code>myStorage</code>
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
