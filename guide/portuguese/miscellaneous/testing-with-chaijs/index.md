---
title: Testing with Chaijs
localeTitle: Testando com Chaijs
---
[Chai](http://chaijs.com) é uma biblioteca de testes para o Node.js.

### Instalação

Você pode instalar o Chai no seu projeto através do npm.
```
npm install chai 
```

##### Pró-dica

Adicione Chai em devDependencies de _package.json_ , usando \* como tag de versão. Desta forma, você sempre tem a versão mais recente.
```
"devDependencies": { 
  "chai": "*" 
 } 
```

### Como usar

#### Afirmar

Você pode usar _assert_ para verificar se seus testes estão com bom desempenho.
```
var assert = require('chai').assert, foo = 'bar', beverages = { tea: [ 'chai', 'matcha', 'oolong' ] }; 
 
 assert.typeOf(foo, 'string'); // without optional message 
 assert.typeOf(foo, 'string', 'foo is a string'); // with optional message 
 assert.equal(foo, 'bar', 'foo equal `bar`'); 
 assert.lengthOf(foo, 3, 'foo`s value has a length of 3'); 
 assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea'); 
```

### Mais informações:

*   `help chai assert`
*   `help chai expectations`