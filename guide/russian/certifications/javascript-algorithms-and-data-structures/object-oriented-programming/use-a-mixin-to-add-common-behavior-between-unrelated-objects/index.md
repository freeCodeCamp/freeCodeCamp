---
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
localeTitle: Использование Mixin для добавления общего поведения между несвязанными объектами
---
## Использование Mixin для добавления общего поведения между несвязанными объектами

### метод

Так же , как `flyMixin` функция, новая `glideMixin` функция должна быть сделана , чтобы принять оба `bird` и `boat` объектов в качестве параметра. Создайте эту новую функцию, используя тот же синтаксис, что и функция `flyMixin` а затем вызовите функцию для обоих объектов.

### Решение

```javascript
let bird = { 
  name: "Donald", 
  numLegs: 2 
 }; 
 
 let boat = { 
  name: "Warrior", 
  type: "race-boat" 
 }; 
 
 // Add your code below this line 
 let glideMixin = function(obj) { 
    obj.glide = function() { 
        console.log("Gliding!"); 
    } 
 }; 
 glideMixin(bird); 
 glideMixin(boat); 

```