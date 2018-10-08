---
id: 587d8259367417b2b2512c84
title: Create a Trie Search Tree
localeTitle: Crear un árbol de búsqueda Trie
challengeType: 1
---

## Description
<section id='description'> 
Aquí pasaremos de los árboles de búsqueda binarios y echaremos un vistazo a otro tipo de estructura de árbol llamada trie. Un trie es un árbol de búsqueda ordenada que se usa comúnmente para contener cadenas, o matrices asociativas más genéricamente o conjuntos de datos dinámicos en los que las claves son cadenas. Son muy buenos para almacenar conjuntos de datos cuando muchas claves tienen prefijos que se superponen, por ejemplo, todas las palabras en un diccionario. 
A diferencia de un árbol binario, los nodos no están asociados con valores reales. En su lugar, la ruta a un nodo representa una clave específica. Por ejemplo, si quisiéramos almacenar el código de cadena en un trío, tendríamos cuatro nodos, uno para cada letra: c - o - d - e. Seguir esa ruta a través de todos estos nodos creará un código como una cadena, esa es la clave que almacenamos. Luego, si quisiéramos agregar la codificación de cadena, compartiría los primeros tres nodos de código antes de bifurcarse después de la d. De esta manera, los grandes conjuntos de datos se pueden almacenar de forma muy compacta. Además, la búsqueda puede ser muy rápida porque se limita efectivamente a la longitud de la cadena que está almacenando. Además, a diferencia de los árboles binarios, un nodo puede almacenar cualquier número de nodos secundarios. 
Como puede haber adivinado en el ejemplo anterior, algunos metadatos se almacenan comúnmente en los nodos que contienen el final de una clave, de modo que en los recorridos posteriores se puede recuperar esa clave. Por ejemplo, si agregamos códigos en nuestro ejemplo anterior, necesitaríamos alguna forma de saber que la e en el código representa el final de una clave que se ingresó anteriormente. De lo contrario, esta información se perdería efectivamente al agregar códigos. 
Instrucciones: Vamos a crear un trie para almacenar palabras. Aceptará palabras a través de un método de adición y las almacenará en una estructura de datos trie. También nos permitirá consultar si una cadena dada es una palabra con un método isWord, y recuperar todas las palabras ingresadas en el texto con un método de impresión. isWord debería devolver un valor booleano e imprimir debería devolver una matriz de todas estas palabras como valores de cadena. 
Para que podamos verificar que esta estructura de datos se implementa correctamente, proporcionamos una estructura de Nodo para cada nodo en el árbol. Cada nodo será un objeto con una propiedad de claves que es un objeto de mapa de JavaScript. Esto mantendrá las letras individuales que son claves válidas de cada nodo. También hemos creado una propiedad final en los nodos que se pueden establecer en verdadero si el nodo representa la terminación de una palabra. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El Trie tiene un método de añadir.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; return (typeof test.add == "function") }()), "The Trie has an add method.");'
  - text: El Trie tiene un método de impresión.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; return (typeof test.print == "function") }()), "The Trie has a print method.");'
  - text: El Trie tiene un método isWord.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; return (typeof test.isWord == "function") }()), "The Trie has an isWord method.");'
  - text: El método de impresión devuelve todos los elementos agregados al trie como cadenas en una matriz.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; test.add("jump"); test.add("jumps"); test.add("jumped"); test.add("house"); test.add("mouse"); var added = test.print(); return (added.indexOf("jump") != -1 && added.indexOf("jumps") != -1 && added.indexOf("jumped") != -1 && added.indexOf("house") != -1 && added.indexOf("mouse") != -1 && added.length == 5); }()), "The print method returns all items added to the trie as strings in an array.");'
  - text: El método isWord devuelve verdadero solo para las palabras agregadas al trío y falso para todas las demás palabras.
    testString: 'assert((function testTrie() { var test = false; if (typeof Trie !== "undefined") { test = new Trie() } else { return false; }; test.add("hop"); test.add("hops"); test.add("hopped"); test.add("hoppy"); test.add("hope"); return (test.isWord("hop") && !test.isWord("ho") && test.isWord("hopped") && !test.isWord("hopp") && test.isWord("hoppy") && !test.isWord("hoping")); }()), "The isWord method returns true only for words added to the trie and false for all other words.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // change code below this line
  // change code above this line
};
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
