---
title: Chain Search Query Helpers to Narrow Search Results
localeTitle: Auxiliares de consulta de pesquisa em cadeia para restringir os resultados da pesquisa
---
## Auxiliares de consulta de pesquisa em cadeia para restringir os resultados da pesquisa

1.  Para criar, mas não executar uma consulta de localização

```javascript
Model.find( {name: 'Leah'} ) 
```

2.  Para armazenar a consulta de localização em uma variável para uso posterior:

```javascript
var findQuery = YourModel.find( {name: 'Leah'} ) 
```

3.  Para classificar uma matriz:

```javascript
yourArray.sort( {age: 1} )  // Here: 1 for ascending    order and -1 for descending order. 
```

4.  Para limitar o tamanho de uma matriz:

```javascript
yourArray.limit(5)  // return array which has 5 items in it. 
```

5.  Para ocultar determinada propriedade do resultado:

```javascript
yourArray.select( {name: 0, age: 1} ) // Here: 0 means false and thus hide name property; 1 means true so age property will show. 
```

6.  Para executar essa consulta, você pode:  
    1) retorno de chamada:

```javascript
YourQuery.exec(function(err, docs) { 
    //do something here 
 }) 
```

Ou 2) promessa

```javascript
YourQuery.exec.then(function(err, docs) { 
    //do something here 
 }) 
```

7.  Cadeia tudo junto:

```javascript
Person.find({age: 55}).sort({name: -1}).limit(5).select( {favoriteFoods: 0} ).exec(function(error, people) { 
  //do something here 
 }) 
```

  
  

Este é um esboço. [Ajude nossa comunidade a expandi-lo](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/mongodb-and-mongoose/chain-search-query-helpers-to-narrow-search-results/index.md) .

[Este guia de estilo rápido ajudará a garantir que sua solicitação de recebimento seja aceita](https://github.com/freecodecamp/guides/blob/master/README.md) .