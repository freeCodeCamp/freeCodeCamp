---
title: Chain Search Query Helpers to Narrow Search Results
localeTitle: 链搜索查询帮助缩小搜索结果
---
## 链搜索查询帮助缩小搜索结果

1.  创建但不执行查找查询

```javascript
Model.find( {name: 'Leah'} ) 
```

2.  将查询查询存储到变量中以供以后使用：

```javascript
var findQuery = YourModel.find( {name: 'Leah'} ) 
```

3.  要对数组进行排序：

```javascript
yourArray.sort( {age: 1} )  // Here: 1 for ascending    order and -1 for descending order. 
```

4.  要限制数组的大小：

```javascript
yourArray.limit(5)  // return array which has 5 items in it. 
```

5.  要从结果中隐藏某些属性：

```javascript
yourArray.select( {name: 0, age: 1} ) // Here: 0 means false and thus hide name property; 1 means true so age property will show. 
```

6.  要执行此查询，您可以：  
    1）回调：

```javascript
YourQuery.exec(function(err, docs) { 
    //do something here 
 }) 
```

或者2）承诺

```javascript
YourQuery.exec.then(function(err, docs) { 
    //do something here 
 }) 
```

7.  将它们连在一起：

```javascript
Person.find({age: 55}).sort({name: -1}).limit(5).select( {favoriteFoods: 0} ).exec(function(error, people) { 
  //do something here 
 }) 
```

  
  

这是一个存根。 [帮助我们的社区扩展它](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/mongodb-and-mongoose/chain-search-query-helpers-to-narrow-search-results/index.md) 。

[这种快速风格指南有助于确保您的拉取请求被接受](https://github.com/freecodecamp/guides/blob/master/README.md) 。