---
title: Use a Constructor to Create Objects
localeTitle: Usa un constructor para crear objetos
---
## Usa un constructor para crear objetos

### Método:

Vimos en el último desafío cómo crear una función constructora. Ahora podemos simplemente llamar a esta función para crear un nuevo objeto con las propiedades ya definidas en el constructor. Simplemente inicialice una nueva variable `hound` llamando al constructor `Dog()` .

### Solución:

```javascript
function Dog() { 
  this.name = "Rupert"; 
  this.color = "brown"; 
  this.numLegs = 4; 
 } 
 // Add your code below this line 
 let hound = new Dog(); 

```