---
title: Inherit Behaviors from a Supertype
localeTitle: Heredar los comportamientos de un supertipo
---
## Heredar los comportamientos de un supertipo

### Método

Para superar este desafío, simplemente cree los nuevos objetos `duck` y `beagle` usando el método `Object.create()` que se ve en el siguiente ejemplo.

\`\` \`javascript

dejar animal = Object.create (Animal.prototype);
```
### Solution 
```

javascript

función animal () {}

Animal.prototype = { constructor: animal, comer: función () { console.log ("nom nom nom"); } };

// Añade tu código debajo de esta línea

let duck = Object.create (Animal.prototype); // cambiar esta linea let beagle = Object.create (Animal.prototype) ;; // cambiar esta linea

duck.eat (); // Debería imprimir "nom nom nom" beagle.eat (); // Debería imprimir "nom nom nom"

\`\` \`