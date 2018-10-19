---
title: Create a JavaScript Slot Machine
localeTitle: Crear una máquina tragamonedas JavaScript
---
Para esto tenemos que generar tres números aleatorios usando la fórmula que nos dan y no la general. `Math.floor(Math.random() * (3 - 1 + 1)) + 1;`
```
slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
 slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
 slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 

```