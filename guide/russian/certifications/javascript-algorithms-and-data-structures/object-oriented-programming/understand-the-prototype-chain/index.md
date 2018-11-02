---
title: Understand the Prototype Chain
localeTitle: Поймите прототипную цепочку
---
## Поймите прототипную цепочку

### Решение

Ваш код должен показать, что Object.prototype является прототипом Dog.prototype

\`\` \`javascript function Dog (name) { this.name = name; }

let beagle = new Dog («Snoopy»);

Dog.prototype.isPrototypeOf (бигль); // => true

// Зафиксируем код ниже, чтобы он оценил значение true Object.prototype.isPrototypeOf (Dog.prototype); \`\` \`