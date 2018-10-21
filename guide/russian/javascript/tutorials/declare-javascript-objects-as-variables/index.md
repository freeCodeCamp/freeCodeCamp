---
title: Declare JavaScript Objects as Variables
localeTitle: Объявление объектов JavaScript как переменных
---
Это простой формат. Вы объявляете свою переменную и имеете ее равным объекту в форме `{ key: value}`
```
var car = { 
  "wheels":4, 
  "engines":1, 
  "seats":5 
 }; 
```

Вы можете получить доступ к свойствам объекта с помощью точечной нотации или скобки.

Использование точечной нотации:

```javascript
console.log(car.wheels); // 4 
```

Использование обозначения в виде скобок:

```javascript
console.log(car["wheels"]); // 1 
```

Использование обозначения динамической скобки:

```javascript
var seatsProperty = "seats"; 
 console.log(car[seatsProperty]); // 5 

```