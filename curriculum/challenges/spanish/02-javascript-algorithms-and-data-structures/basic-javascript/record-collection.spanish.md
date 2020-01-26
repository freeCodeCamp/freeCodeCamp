---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1
videoUrl: ''
localeTitle: Colección de discos
---

## Description
<section id="description"> Te dan un objeto JSON que representa una parte de tu colección de álbumes musicales. Cada álbum tiene varias propiedades y un número de identificación único como clave. No todos los álbumes tienen información completa. Escriba una función que tome la <code>id</code> un álbum (como <code>2548</code> ), una propiedad <code>prop</code> (como <code>&quot;artist&quot;</code> o <code>&quot;tracks&quot;</code> ) y un <code>value</code> (como <code>&quot;Addicted to Love&quot;</code> ) para modificar los datos de esta colección. Si <code>prop</code> no es <code>&quot;tracks&quot;</code> y el <code>value</code> no está vacío ( <code>&quot;&quot;</code> ), actualice o establezca el <code>value</code> para la propiedad del álbum de grabación. Su función debe devolver siempre el objeto de colección completo. Existen varias reglas para manejar datos incompletos: si <code>prop</code> es <code>&quot;tracks&quot;</code> pero el álbum no tiene una propiedad de <code>&quot;tracks&quot;</code> , cree una matriz vacía antes de agregar el nuevo valor a la propiedad correspondiente del álbum. Si <code>prop</code> es <code>&quot;tracks&quot;</code> y el <code>value</code> no está vacío ( <code>&quot;&quot;</code> ), presione el <code>value</code> en el extremo de la matriz de <code>tracks</code> existente del <code>tracks</code> . Si el <code>value</code> está vacío ( <code>&quot;&quot;</code> ), elimine la propiedad de <code>prop</code> determinada del álbum. <strong>Consejos</strong> <br> Utilice la <code>bracket notation</code> cuando <a href="javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables" target="_blank">acceda a las propiedades de objetos con variables</a> . Push es un método de matriz que puede leer sobre <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Mozilla Developer Network</a> . Puede volver a consultar <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects" target="_blank">Manipular objetos complejos</a> presentando la notación de objetos de JavaScript (JSON) para obtener una actualización. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Después de <code>updateRecords(5439, &quot;artist&quot;, &quot;ABBA&quot;)</code> , el <code>artist</code> debe ser <code>&quot;ABBA&quot;</code>'
    testString: 'collection = collectionCopy; assert(updateRecords(5439, "artist", "ABBA")[5439]["artist"] === "ABBA", "After <code>updateRecords(5439, "artist", "ABBA")</code>, <code>artist</code> should be <code>"ABBA"</code>");'
  - text: 'Después de <code>updateRecords(5439, &quot;tracks&quot;, &quot;Take a Chance on Me&quot;)</code> , los <code>tracks</code> deberían tener <code>&quot;Take a Chance on Me&quot;</code> como el último elemento.'
    testString: 'assert(updateRecords(5439, "tracks", "Take a Chance on Me")[5439]["tracks"].pop() === "Take a Chance on Me", "After <code>updateRecords(5439, "tracks", "Take a Chance on Me")</code>, <code>tracks</code> should have <code>"Take a Chance on Me"</code> as the last element.");'
  - text: 'Después de <code>updateRecords(2548, &quot;artist&quot;, &quot;&quot;)</code> , el <code>artist</code> no debe configurarse'
    testString: 'updateRecords(2548, "artist", ""); assert(!collection[2548].hasOwnProperty("artist"), "After <code>updateRecords(2548, "artist", "")</code>, <code>artist</code> should not be set");'
  - text: 'Después de <code>updateRecords(1245, &quot;tracks&quot;, &quot;Addicted to Love&quot;)</code> , las <code>tracks</code> deberían tener <code>&quot;Addicted to Love&quot;</code> como último elemento.'
    testString: 'assert(updateRecords(1245, "tracks", "Addicted to Love")[1245]["tracks"].pop() === "Addicted to Love", "After <code>updateRecords(1245, "tracks", "Addicted to Love")</code>, <code>tracks</code> should have <code>"Addicted to Love"</code> as the last element.");'
  - text: 'Después de <code>updateRecords(2468, &quot;tracks&quot;, &quot;Free&quot;)</code> , los <code>tracks</code> deberían tener <code>&quot;1999&quot;</code> como primer elemento.'
    testString: 'assert(updateRecords(2468, "tracks", "Free")[2468]["tracks"][0] === "1999", "After <code>updateRecords(2468, "tracks", "Free")</code>, <code>tracks</code> should have <code>"1999"</code> as the first element.");'
  - text: 'Después de <code>updateRecords(2548, &quot;tracks&quot;, &quot;&quot;)</code> , no se deben establecer <code>tracks</code>'
    testString: 'updateRecords(2548, "tracks", ""); assert(!collection[2548].hasOwnProperty("tracks"), "After <code>updateRecords(2548, "tracks", "")</code>, <code>tracks</code> should not be set");'
  - text: 'Después de <code>updateRecords(1245, &quot;album&quot;, &quot;Riptide&quot;)</code> , el <code>album</code> debería ser <code>&quot;Riptide&quot;</code>'
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
