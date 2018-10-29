---
title: Extend Constructors to Receive Arguments
localeTitle: Расширить конструкторы для получения аргументов
---
## Расширить конструкторы для получения аргументов

### Метод:

Как и в примере `Bird()` , функция `Dog()` должна записывать два параметра - `name` и `color` . Затем имя и цвет должны быть инициализированы внутри функции, используя `this` ключевое слово. Конечное свойство - `numLegs` устанавливается `numLegs` 4, так как функция не принимает параметр numLegs.

### Решение:

```javascript
function Dog(name, color) { 
  this.name = name; 
  this.color = color; 
  this.numLegs = 4; 
 } 
 let terrier = new Dog("George","White"); 

```