---
title: Destructuring Assignment
localeTitle: 解构分配
---
## 解构分配

Destructuring Assignment语法是一个Javascript表达式，可以从数组或对象中解压缩值或属性。

假设您有一个包含名字和姓氏的数组，因为它是两个值，但您希望将这些值重新分配给更具描述性的值。您可以使用Destructuring来完成此任务。

**ES5解构**

```js
var fullName = ["John", "Smith"]; 
 var firstName = fullName[0]; 
 var lastName = fullName[1]; 
 
 console.log(firstName, lastName); // John Smith 
```

**ES6解构**

```js
const fullName = ["John", "Smith"]; 
 const [firstName, lastName] = fullName; 
 
 console.log(firstName, lastName); // John Smith 
```

上面的示例显示了使用ES6 Destructuring Assignment的好处。

您还可以使用类似语法在对象上使用Destructuring

```js
const fullName = { first: "John", last: "Smith"}; 
 const {first, last} = fullName; 
 
 console.log(first, last); // John Smith 
```

对象解析分配略有不同，因为对象必须具有您要分配的名称的属性。因此，下面的代码不会按预期工作。

```js
const fullName = { first: "John", last: "Smith"}; 
 const {firstName, lastName} = fullName; 
 
 console.log(firstName, lastName); // undefined undefined 
```

您仍然可以使用以下语法获得所需的结果。

```js
const obj = {propertyName: value} 
 {propertyName: desiredVariableName} = obj 
```

我们之前的例子将被重写如下：

```js
const fullName = { first: "John", last: "Smith"}; 
 const {first: firstName, last: lastName} = fullName; 
 
 console.log(firstName, lastName); // John Smith 

```