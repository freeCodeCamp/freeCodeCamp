---
title: Destructuring Assignment
localeTitle: Назначение деструктуризации
---
## Назначение деструктуризации

Синтаксис присваивания Destructuring - это выражение Javascript, которое позволяет распаковывать значения или свойства из массивов или объектов.

Допустим, у вас есть массив, который содержит имя и фамилию, поскольку это два значения, но вы хотите переназначить эти значения на что-то более описательное. Для этого вы можете использовать Destructuring.

**ES5 Destructuring**

```js
var fullName = ["John", "Smith"]; 
 var firstName = fullName[0]; 
 var lastName = fullName[1]; 
 
 console.log(firstName, lastName); // John Smith 
```

**ES6 Destructuring**

```js
const fullName = ["John", "Smith"]; 
 const [firstName, lastName] = fullName; 
 
 console.log(firstName, lastName); // John Smith 
```

Приведенные выше примеры показывают преимущество использования назначения ES6 Destructuring Assignment.

Вы также можете использовать Destructuring для объектов с использованием аналогичного синтаксиса

```js
const fullName = { first: "John", last: "Smith"}; 
 const {first, last} = fullName; 
 
 console.log(first, last); // John Smith 
```

Object Destructuring Assignment немного отличается, потому что объект должен иметь свойства с именами, которые вы назначаете. Поэтому приведенный ниже код не будет работать так, как предполагалось.

```js
const fullName = { first: "John", last: "Smith"}; 
 const {firstName, lastName} = fullName; 
 
 console.log(firstName, lastName); // undefined undefined 
```

Вы все равно можете достичь желаемого результата, используя следующий синтаксис.

```js
const obj = {propertyName: value} 
 {propertyName: desiredVariableName} = obj 
```

Наш предыдущий пример был бы переписан следующим образом:

```js
const fullName = { first: "John", last: "Smith"}; 
 const {first: firstName, last: lastName} = fullName; 
 
 console.log(firstName, lastName); // John Smith 

```