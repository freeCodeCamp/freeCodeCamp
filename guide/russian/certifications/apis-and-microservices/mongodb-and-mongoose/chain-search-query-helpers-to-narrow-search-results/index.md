---
title: Chain Search Query Helpers to Narrow Search Results
localeTitle: Цепочные поисковые подсказки для узких результатов поиска
---
## Цепочные поисковые подсказки для узких результатов поиска

1.  Чтобы создать, но не выполнить запрос поиска

```javascript
Model.find( {name: 'Leah'} ) 
```

2.  Чтобы сохранить запрос поиска в переменную для последующего использования:

```javascript
var findQuery = YourModel.find( {name: 'Leah'} ) 
```

3.  Чтобы отсортировать массив:

```javascript
yourArray.sort( {age: 1} )  // Here: 1 for ascending    order and -1 for descending order. 
```

4.  Чтобы ограничить размер массива:

```javascript
yourArray.limit(5)  // return array which has 5 items in it. 
```

5.  Чтобы скрыть определенное свойство из результата:

```javascript
yourArray.select( {name: 0, age: 1} ) // Here: 0 means false and thus hide name property; 1 means true so age property will show. 
```

6.  Чтобы выполнить этот запрос, вы можете:  
    1) Обратный вызов:

```javascript
YourQuery.exec(function(err, docs) { 
    //do something here 
 }) 
```

Или 2) Обещать

```javascript
YourQuery.exec.then(function(err, docs) { 
    //do something here 
 }) 
```

7.  Цепочка все вместе:

```javascript
Person.find({age: 55}).sort({name: -1}).limit(5).select( {favoriteFoods: 0} ).exec(function(error, people) { 
  //do something here 
 }) 
```

  
  

Это заглушка. [Помогите нашему сообществу расширить его](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/mongodb-and-mongoose/chain-search-query-helpers-to-narrow-search-results/index.md) .

[Это руководство по быстрому стилю поможет вам принять ваш запрос на тягу](https://github.com/freecodecamp/guides/blob/master/README.md) .