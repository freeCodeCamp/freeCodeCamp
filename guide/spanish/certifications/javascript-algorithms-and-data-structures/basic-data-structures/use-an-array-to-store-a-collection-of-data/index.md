---
title: Use an Array to Store a Collection of Data
localeTitle: Utilice una matriz para almacenar una colección de datos
---
## Utilice una matriz para almacenar una colección de datos

### Método:

*   En JS, las matrices son una de las estructuras de datos más utilizadas. A diferencia de otros idiomas, las matrices en JS pueden almacenar diferentes tipos de datos y también pueden cambiar su tamaño en tiempo de ejecución y, por lo tanto, también se denominan "matrices dinámicas". También están 0 indexados.
*   Las matrices se pueden inicializar de diferentes maneras:

1.  Literales array
2.  Constructores de matrices

*   En este desafío nos centraremos en los literales de Array. Para inicializar una matriz simplemente `let arr = [];`
*   Podemos agregar valores a esta matriz accediendo a su índice, ejemplo: `javascript let arr = []; arr[0] = "hello"; console.log(arr); // ["hello"]`
*   También podemos inicializar los valores en el arreglo cuando lo declaremos, ejemplo: `javascript let arr = [1, 2, 3, "John"];`
*   En este desafío, debe crear una matriz con al menos 5 elementos y al menos una cadena, un número y un booleano.

### Solución:

```js
 let yourArray = ["a", 2, true, "c", null, {name: "john"}]; 
```

### Recursos

Más información sobre matrices en [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) .