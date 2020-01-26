---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1
videoUrl: ''
localeTitle: Colecção de registos
---

## Description
<section id="description"> Você recebe um objeto JSON representando uma parte de sua coleção de álbuns musicais. Cada álbum tem várias propriedades e um número de identificação exclusivo como sua chave. Nem todos os álbuns possuem informações completas. Escreva uma função que tenha um <code>id</code> de álbum (como <code>2548</code> ), um <code>prop</code> propriedade (como <code>&quot;artist&quot;</code> ou <code>&quot;tracks&quot;</code> ) e um <code>value</code> (como <code>&quot;Addicted to Love&quot;</code> ) para modificar os dados nessa coleção. Se <code>prop</code> não for <code>&quot;tracks&quot;</code> e o <code>value</code> não estiver vazio ( <code>&quot;&quot;</code> ), atualize ou defina o <code>value</code> para a propriedade desse álbum de registros. Sua função deve sempre retornar todo o objeto da coleção. Existem várias regras para lidar com dados incompletos: se <code>prop</code> é <code>&quot;tracks&quot;</code> mas o álbum não tem uma propriedade <code>&quot;tracks&quot;</code> , crie um array vazio antes de adicionar o novo valor à propriedade correspondente do álbum. Se <code>prop</code> for <code>&quot;tracks&quot;</code> e o <code>value</code> não estiver vazio ( <code>&quot;&quot;</code> ), insira o <code>value</code> no final da matriz de <code>tracks</code> existente no álbum. Se o <code>value</code> estiver vazio ( <code>&quot;&quot;</code> ), exclua a propriedade <code>prop</code> fornecida do álbum. <strong>Dicas</strong> <br> Use a <code>bracket notation</code> ao <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables" target="_blank">acessar as propriedades do objeto com variáveis</a> . Push é um método de matriz que você pode ler sobre o <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Mozilla Developer Network</a> . Você pode consultar a <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects" target="_blank">seção Manipulando Objetos Complexos</a> Introduzindo o JavaScript Object Notation (JSON) para uma atualização. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Após <code>updateRecords(5439, &quot;artist&quot;, &quot;ABBA&quot;)</code> , o <code>artist</code> deve ser <code>&quot;ABBA&quot;</code>'
    testString: 'collection = collectionCopy; assert(updateRecords(5439, "artist", "ABBA")[5439]["artist"] === "ABBA", "After <code>updateRecords(5439, "artist", "ABBA")</code>, <code>artist</code> should be <code>"ABBA"</code>");'
  - text: 'Depois de <code>updateRecords(5439, &quot;tracks&quot;, &quot;Take a Chance on Me&quot;)</code> , as <code>tracks</code> devem ter <code>&quot;Take a Chance on Me&quot;</code> como o último elemento.'
    testString: 'assert(updateRecords(5439, "tracks", "Take a Chance on Me")[5439]["tracks"].pop() === "Take a Chance on Me", "After <code>updateRecords(5439, "tracks", "Take a Chance on Me")</code>, <code>tracks</code> should have <code>"Take a Chance on Me"</code> as the last element.");'
  - text: 'Após <code>updateRecords(2548, &quot;artist&quot;, &quot;&quot;)</code> , o <code>artist</code> não deve ser definido'
    testString: 'updateRecords(2548, "artist", ""); assert(!collection[2548].hasOwnProperty("artist"), "After <code>updateRecords(2548, "artist", "")</code>, <code>artist</code> should not be set");'
  - text: 'Depois de <code>updateRecords(1245, &quot;tracks&quot;, &quot;Addicted to Love&quot;)</code> , as <code>tracks</code> devem ter <code>&quot;Addicted to Love&quot;</code> como o último elemento.'
    testString: 'assert(updateRecords(1245, "tracks", "Addicted to Love")[1245]["tracks"].pop() === "Addicted to Love", "After <code>updateRecords(1245, "tracks", "Addicted to Love")</code>, <code>tracks</code> should have <code>"Addicted to Love"</code> as the last element.");'
  - text: 'Depois de <code>updateRecords(2468, &quot;tracks&quot;, &quot;Free&quot;)</code> , as <code>tracks</code> devem ter <code>&quot;1999&quot;</code> como o primeiro elemento.'
    testString: 'assert(updateRecords(2468, "tracks", "Free")[2468]["tracks"][0] === "1999", "After <code>updateRecords(2468, "tracks", "Free")</code>, <code>tracks</code> should have <code>"1999"</code> as the first element.");'
  - text: 'Após <code>updateRecords(2548, &quot;tracks&quot;, &quot;&quot;)</code> , as <code>tracks</code> não devem ser definidas'
    testString: 'updateRecords(2548, "tracks", ""); assert(!collection[2548].hasOwnProperty("tracks"), "After <code>updateRecords(2548, "tracks", "")</code>, <code>tracks</code> should not be set");'
  - text: 'Após <code>updateRecords(1245, &quot;album&quot;, &quot;Riptide&quot;)</code> , o <code>album</code> deve ser <code>&quot;Riptide&quot;</code>'
    testString: 'assert(updateRecords(1245, "album", "Riptide")[1245]["album"] === "Riptide", "After <code>updateRecords(1245, "album", "Riptide")</code>, <code>album</code> should be <code>"Riptide"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {


  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

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
