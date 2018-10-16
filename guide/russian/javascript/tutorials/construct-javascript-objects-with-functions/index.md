---
title: Construct JavaScript Objects with Functions
localeTitle: Построить объекты JavaScript с функциями
---
С помощью конструкторов легко создавать новые объекты с использованием чертежа или конструктора. Синтаксис объявления немного отличается, но все еще легко запомнить.
```
// Let's add the properties engines and seats to the car in the same way that the property wheels has been added below. They should both be numbers. 
 var Car = function() { 
  this.wheels = 4; 
  this.engines = 1; 
  this.seats = 1; 
 }; 
 
 var myCar = new Car(); 
```

Имя функции-конструктора обычно начинается с заглавной буквы (в отличие от других функций, которые обычно начинаются с символов нижнего регистра). Заглавная буква должна помочь напоминать разработчикам использовать новое ключевое слово, когда они создают объект, используя эту функцию.