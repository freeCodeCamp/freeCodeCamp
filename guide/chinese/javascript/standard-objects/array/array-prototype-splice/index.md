---
title: Array.prototype.splice
localeTitle: Array.prototype.splice
---
## Array.prototype.splice

splice方法类似于[Array.prototype.slice](https://guide.freecodecamp.org/javascript/standard-objects/array/array-prototype-slice) ，但与`slice()`不同，它会改变调用它的数组。它的不同之处还在于它可以用于向数组添加值以及删除它们。

### 参数

`splice()`可以带一个或多个

#### 拼接（开始）

如果只包含一个参数，则`splice(start)`将从数组的`start`到结尾删除所有数组元素。

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(2); 
 // exampleArray is now ['first', 'second']; 
```

如果`start`为负数，它将从数组末尾向后计数。

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(-1); 
 // exampleArray is now ['first', 'second', 'third']; 
```

#### splice（start，deleteCount）

如果包括第二参数，然后`splice(start, deleteCount)`将删除`deleteCount`从数组元素，开头`start` 。

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 2); 
 // exampleArray is now ['first', 'fourth']; 
```

#### splice（start，deleteCount，newElement1，newElement2，...）

如果包含两个以上的参数，则附加参数将是添加到阵列的新元素。这些添加元素的位置将`start` 。

通过传递`0`作为第二个参数，可以添加元素而不删除任何元素。

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 0, 'new 1', 'new 2'); 
 // exampleArray is now ['first', 'new 1', 'new 2', 'second', 'third', 'fourth'] 
```

元素也可以替换。

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 2, 'new second', 'new third'); 
 // exampleArray is now ['first', 'new second', 'new third', 'fourth'] 
```

### 返回值

除了更改调用它的数组外， `splice()`还返回一个包含已删除值的数组。这是一种将阵列切割成两个不同阵列的方法。

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 let newArray = exampleArray.splice(1, 2); 
 // exampleArray is now ['first', 'fourth'] 
 // newArray is ['second', 'third'] 
```

#### 更多信息：

[MDN - Array.prototype.slice（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)