---
title: Inherit Behaviors from a Supertype
localeTitle: Herdar Comportamentos de um Supertipo
---
## Herdar Comportamentos de um Supertipo

### Método

Para passar esse desafio, simplesmente crie os novos objetos `duck` e `beagle` usando o método `Object.create()` visto no exemplo a seguir.

\`\` \`javascript

let animal = Object.create (Animal.prototype);
```
### Solution 
```

javascript

function Animal () {}

Animal.prototype = { construtor: Animal, eat: function () { console.log ("nom nom nom"); } };

// Adicione seu código abaixo desta linha

deixa pato = Object.create (Animal.prototype); // Alterar esta linha vamos beagle = Object.create (Animal.prototype) ;; // Alterar esta linha

duck.eat (); // Deve imprimir "nom nom nom" beagle.eat (); // Deve imprimir "nom nom nom"

\`\` \`