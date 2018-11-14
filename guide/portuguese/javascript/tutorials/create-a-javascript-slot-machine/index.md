---
title: Create a JavaScript Slot Machine
localeTitle: Crie um caça-níqueis JavaScript
---
Para isso, temos que gerar três números aleatórios usando a fórmula que eles nos dão e não o geral. `Math.floor(Math.random() * (3 - 1 + 1)) + 1;`
```
slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
 slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
 slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 

```