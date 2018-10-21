---
title: Understand the Prototype Chain
localeTitle: Entenda a cadeia de protótipos
---
## Entenda a cadeia de protótipos

### Solução

Seu código deve mostrar que Object.prototype é o protótipo do Dog.prototype

\`\` \`javascript função Dog (name) { this.name = nome; }

deixe o beagle = novo cachorro ("Snoopy");

Dog.prototype.isPrototypeOf (beagle); // => true

// Corrigir o código abaixo para que ele seja avaliado como verdadeiro Object.prototype.isPrototypeOf (Dog.prototype); \`\` \`