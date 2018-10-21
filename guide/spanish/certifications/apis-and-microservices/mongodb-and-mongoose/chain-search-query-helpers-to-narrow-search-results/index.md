---
title: Chain Search Query Helpers to Narrow Search Results
localeTitle: Encadene a los ayudantes de consulta para reducir los resultados de búsqueda
---
## Encadene a los ayudantes de consulta para reducir los resultados de búsqueda

1.  Para crear pero no ejecutar una consulta de búsqueda.

```javascript
Model.find( {name: 'Leah'} ) 
```

2.  Para almacenar la consulta de búsqueda en una variable para su uso posterior:

```javascript
var findQuery = YourModel.find( {name: 'Leah'} ) 
```

3.  Para ordenar una matriz:

```javascript
yourArray.sort( {age: 1} )  // Here: 1 for ascending    order and -1 for descending order. 
```

4.  Para limitar el tamaño de una matriz:

```javascript
yourArray.limit(5)  // return array which has 5 items in it. 
```

5.  Para ocultar cierta propiedad del resultado:

```javascript
yourArray.select( {name: 0, age: 1} ) // Here: 0 means false and thus hide name property; 1 means true so age property will show. 
```

6.  Para ejecutar esta consulta, puede:  
    1) Devolución de llamada:

```javascript
YourQuery.exec(function(err, docs) { 
    //do something here 
 }) 
```

O 2) Promesa

```javascript
YourQuery.exec.then(function(err, docs) { 
    //do something here 
 }) 
```

7.  Encadenar todo junto:

```javascript
Person.find({age: 55}).sort({name: -1}).limit(5).select( {favoriteFoods: 0} ).exec(function(error, people) { 
  //do something here 
 }) 
```

  
  

Esto es un talón. [Ayuda a nuestra comunidad a expandirla](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/mongodb-and-mongoose/chain-search-query-helpers-to-narrow-search-results/index.md) .

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .