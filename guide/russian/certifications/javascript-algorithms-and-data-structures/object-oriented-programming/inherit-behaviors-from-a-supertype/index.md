---
title: Inherit Behaviors from a Supertype
localeTitle: Наследование поведения от супертипа
---
## Наследование поведения от супертипа

### метод

Для того, чтобы передать этот вызов просто создать новые `duck` и `beagle` объектов с помощью `Object.create()` метод показано на следующем примере.

\`\` \`Javascript

let animal = Object.create (Animal.prototype);
```
### Solution 
```

Javascript

функция Animal () {}

Animal.prototype = { конструктор: Animal, eat: function () { console.log («nom nom nom»); } };

// Добавьте код ниже этой строки

let duck = Object.create (Animal.prototype); // Изменить эту строку let beagle = Object.create (Animal.prototype) ;; // Изменить эту строку

duck.eat (); // Должен печатать "nom nom nom" beagle.eat (); // Должен печатать "nom nom nom"

\`\` \`