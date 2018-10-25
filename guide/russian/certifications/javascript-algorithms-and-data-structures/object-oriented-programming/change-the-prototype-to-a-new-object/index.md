---
title: Change the Prototype to a New Object
localeTitle: Изменение прототипа на новый объект
---
## Изменение прототипа на новый объект

Вместо добавления каждого свойства prototype один за другим с `object.prototype.property` . Мы можем сделать это намного проще, установив прототип для нового объекта. Таким образом, все свойства прототипа добавляются сразу.

  

## Подсказка:

```javascript
Dog.prototype = { 
  property: value, 
  functionName: function(){ 
 
  }, 
 } 
```

Теперь попробуйте решить проблему!

  

## Spoiler-Alert Solution Ahead!

  

## Решение 1:

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 Dog.prototype = { 
  // Add your code below this line 
  numLegs: 2, 
  eat: function(){ 
    console.log('nom nom nom'); 
  }, 
  describe: function(){ 
    console.log("My name is " + this.name); 
  } 
 } 
```

## Код Объяснение:

Мы назначаем переменную прототипа новому объекту. Затем мы объявляем свойство numLegs и даем ему значение 2.

Затем мы создаем две функции: «есть» и «описывать». Теперь помните, что функции в объектах - это методы с тем же синтаксисом, что и свойства. У вас есть имя, за которым следует значение. Это значение является функцией, а имя - именем вашей функции.  

## Решение 2:

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype = { 
  // Add your code below this line 
  numLegs: 2, 
  eat(){ 
    console.log('nom nom nom'); 
  }, 
  describe(){ 
    console.log("My name is " + this.name); 
  } 
 }; 
```

## Код Объяснение:

Единственное, что отличается от этого решения и последнего решения, - это укоротить синтаксис функций «есть» и «описать». Мы сделали это, удалив «:» и слово «function».

С ES6 нам разрешено это делать.

Вы можете прочитать об этом здесь: [Ссылка](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)