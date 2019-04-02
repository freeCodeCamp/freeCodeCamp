---
title: Override Inherited Methods
localeTitle: Переопределить наследуемые методы
---
## Переопределить наследуемые методы

# Решение

```javascript
Penguin.prototype.fly = function() { 
    return  "Alas, this is a flightless bird."; 
 }; 

```