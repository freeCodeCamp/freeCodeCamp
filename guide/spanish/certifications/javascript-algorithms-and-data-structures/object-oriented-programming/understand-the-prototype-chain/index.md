---
title: Understand the Prototype Chain
localeTitle: Entender la cadena de prototipos
---
## Entender la cadena de prototipos

### Solución

Su código debe mostrar que Object.prototype es el prototipo de Dog.prototype

\`\` \`javascript función perro (nombre) { this.name = nombre; }

let beagle = new Dog ("Snoopy");

Dog.prototype.isPrototypeOf (beagle); // => verdadero

// Arregla el siguiente código para que se evalúe como verdadero Object.prototype.isPrototypeOf (Dog.prototype); \`\` \`