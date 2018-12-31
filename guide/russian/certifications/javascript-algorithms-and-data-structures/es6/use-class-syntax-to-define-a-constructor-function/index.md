---
title: Use class Syntax to Define a Constructor Function
localeTitle: Использовать синтаксис класса для определения функции конструктора
---
## Использовать синтаксис класса для определения функции конструктора

В этом уроке вы определяете объект Vegetable с использованием синтаксиса класса.

## Подсказка 1:

Создайте класс под названием `Vegetable` . Он будет содержать необходимые сведения об объекте `Vegetable` .

## Подсказка 2:

Поместите конструктор с параметром с именем `name` и установите его в `this.name` .

## Оповещение о спойлере - решение впереди!

## Решение:

```javascript
function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
  class Vegetable { 
    constructor(name){ 
      this.name = name; 
    } 
  } 
  /* Alter code above this line */ 
  return Vegetable; 
 } 
```

\=======

Предупреждение о спойлере: вот базовое решение этой проблемы, если вы застряли.

```javascript
function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
 
   class Vegetable { 
     constructor(Vegetable){ 
       this.Vegetable = Vegetable; 
 
     } 
   } 
 
  /* Alter code above this line */ 
  return Vegetable; 
 } 
 const Vegetable = makeClass(); 
 const carrot = new Vegetable('carrot'); 
 console.log(carrot.name); // => should be 'carrot' 

```