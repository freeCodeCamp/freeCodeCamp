---
id: 56533eb9ac21ba0edf2244cb
title: Manipulating Complex Objects
challengeType: 1
videoUrl: ''
localeTitle: Manipulando Objetos Complexos
---

## Description
<section id="description"> Às vezes você pode querer armazenar dados em uma <dfn>estrutura de dados</dfn> flexível. Um objeto JavaScript é uma maneira de lidar com dados flexíveis. Eles permitem combinações arbitrárias de <dfn>strings</dfn> , <dfn>números</dfn> , <dfn>booleanos</dfn> , <dfn>matrizes</dfn> , <dfn>funções</dfn> e <dfn>objetos</dfn> . Aqui está um exemplo de uma estrutura de dados complexa: <blockquote> var ourMusic = [ <br> { <br> &quot;artista&quot;: &quot;Daft Punk&quot;, <br> &quot;title&quot;: &quot;Homework&quot;, <br> &quot;release_year&quot;: 1997, <br> &quot;formatos&quot;: [ <br> &quot;CD&quot;, <br> &quot;Cassete&quot;, <br> &quot;LP&quot; <br> ] <br> &quot;gold&quot;: true <br> } <br> ]; </blockquote> Esta é uma matriz que contém um objeto dentro. O objeto possui vários <dfn>metadados</dfn> sobre um álbum. Ele também possui uma matriz de <code>&quot;formats&quot;</code> aninhados. Se você quiser adicionar mais registros de álbuns, poderá fazer isso adicionando registros à matriz de nível superior. Objetos retêm dados em uma propriedade, que possui um formato de valor-chave. No exemplo acima, <code>&quot;artist&quot;: &quot;Daft Punk&quot;</code> é uma propriedade que tem uma chave de <code>&quot;artist&quot;</code> e um valor de <code>&quot;Daft Punk&quot;</code> . <a href="http://www.json.org/" target="_blank">JavaScript Object Notation</a> ou <code>JSON</code> é um formato de intercâmbio de dados relacionado usado para armazenar dados. <blockquote> { <br> &quot;artista&quot;: &quot;Daft Punk&quot;, <br> &quot;title&quot;: &quot;Homework&quot;, <br> &quot;release_year&quot;: 1997, <br> &quot;formatos&quot;: [ <br> &quot;CD&quot;, <br> &quot;Cassete&quot;, <br> &quot;LP&quot; <br> ] <br> &quot;gold&quot;: true <br> } </blockquote> <strong>Nota</strong> <br> Você precisará colocar uma vírgula após cada objeto na matriz, a menos que seja o último objeto na matriz. </section>

## Instructions
<section id="instructions"> Adicione um novo álbum ao array <code>myMusic</code> . Adicione strings de <code>artist</code> e <code>title</code> , <code>release_year</code> number e uma matriz de <code>formats</code> de strings. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myMusic</code> deve ser um array
    testString: 'assert(Array.isArray(myMusic), "<code>myMusic</code> should be an array");'
  - text: <code>myMusic</code> deve ter pelo menos dois elementos
    testString: 'assert(myMusic.length > 1, "<code>myMusic</code> should have at least two elements");'
  - text: '<code>myMusic[1]</code> deve ser um objeto'
    testString: 'assert(typeof myMusic[1] === "object", "<code>myMusic[1]</code> should be an object");'
  - text: '<code>myMusic[1]</code> deve ter pelo menos 4 propriedades'
    testString: 'assert(Object.keys(myMusic[1]).length > 3, "<code>myMusic[1]</code> should have at least 4 properties");'
  - text: '<code>myMusic[1]</code> deve conter uma propriedade de <code>artist</code> que seja uma string'
    testString: 'assert(myMusic[1].hasOwnProperty("artist") && typeof myMusic[1].artist === "string", "<code>myMusic[1]</code> should contain an <code>artist</code> property which is a string");'
  - text: '<code>myMusic[1]</code> deve conter uma propriedade de <code>title</code> que é uma string'
    testString: 'assert(myMusic[1].hasOwnProperty("title") && typeof myMusic[1].title === "string", "<code>myMusic[1]</code> should  contain a <code>title</code> property which is a string");'
  - text: '<code>myMusic[1]</code> deve conter uma propriedade <code>release_year</code> que é um número'
    testString: 'assert(myMusic[1].hasOwnProperty("release_year") && typeof myMusic[1].release_year === "number", "<code>myMusic[1]</code> should contain a <code>release_year</code> property which is a number");'
  - text: '<code>myMusic[1]</code> deve conter uma propriedade de <code>formats</code> que é uma matriz'
    testString: 'assert(myMusic[1].hasOwnProperty("formats") && Array.isArray(myMusic[1].formats), "<code>myMusic[1]</code> should contain a <code>formats</code> property which is an array");'
  - text: <code>formats</code> devem ser um array de strings com pelo menos dois elementos
    testString: 'assert(myMusic[1].formats.every(function(item) { return (typeof item === "string")}) && myMusic[1].formats.length > 1, "<code>formats</code> should be an array of strings with at least two elements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add record here
];

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
