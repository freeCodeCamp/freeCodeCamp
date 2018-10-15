---
title: Object Assign
localeTitle: 对象分配
---
## 对象分配

这是一个存根。 [帮助我们的社区扩展它](https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/object/object-assign/index.md) 。

[这种快速风格指南有助于确保您的拉取请求被接受](https://github.com/freecodecamp/guides/blob/master/README.md) 。

`Object.assign()`方法用于1）向现有对象添加属性和值，2）创建现有对象的新副本，或3）将多个现有对象组合到单个对象中。 `Object.assign()`方法需要一个targetObject作为参数，并且可以接受无限数量的sourceObject作为附加参数。

这里需要注意的是始终会修改targetObject参数。如果该参数指向现有对象，则将同时修改和复制该对象。但是，如果希望在不修改原始对象的情况下创建对象的副本，则可以将空对象`{}`作为第一个（或targetObject）参数传递，将要复制的对象作为第二个（或sourceObject）参数传递。

如果作为参数传递给`Object.assign()`共享相同的属性（或键），则稍后在参数列表中出现的属性值将覆盖之前出现的属性值。

**句法**

```javascript
Object.assign(targetObject, ...sourceObject) 
```

**回报价值**

`Object.assign()`返回targetObject。

**例子**

_修改和复制targetObject_

```javascript
let obj = {name: 'Dave', age: 30}; 
 
 let objCopy = Object.assign(obj, {coder: true}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30, coder: true } 
 console.log(objCopy); // returns { name: 'Dave', age: 30, coder: true } 
```

_无需修改即可复制targetObject_

```javascript
let obj = {name: 'Dave', age: 30}; 
 
 let objCopy = Object.assign({}, obj, {coder: true}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30 } 
 console.log(objCopy); // returns { name: 'Dave', age: 30, coder: true } 
```

_具有相同属性的对象_

```javascript
let obj = {name: 'Dave', age: 30, favoriteColor: 'blue'}; 
 
 let objCopy = Object.assign({}, obj, {coder: true, favoriteColor: 'red'}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30, favoriteColor: 'blue' } 
 console.log(objCopy); // { name: 'Dave', age: 30, favoriteColor: 'red', coder: true } 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  
[ES6中的Object.assign简介（视频）](https://youtu.be/vM7Tif98Dlo)