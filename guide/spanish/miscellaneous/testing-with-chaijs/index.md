---
title: Testing with Chaijs
localeTitle: Probando con Chaijs
---
[Chai](http://chaijs.com) es una biblioteca de pruebas para Node.js.

### Instalación

Puedes instalar Chai en tu proyecto a través de npm.
```
npm install chai 
```

##### Propina

Agregue Chai en devDependencies de _package.json_ , usando \* como etiqueta de versión. De esta forma, siempre tendrás la versión más reciente.
```
"devDependencies": { 
  "chai": "*" 
 } 
```

### Cómo utilizar

#### Afirmar

Puede usar _aseverar_ para verificar si sus pruebas están funcionando bien.
```
var assert = require('chai').assert, foo = 'bar', beverages = { tea: [ 'chai', 'matcha', 'oolong' ] }; 
 
 assert.typeOf(foo, 'string'); // without optional message 
 assert.typeOf(foo, 'string', 'foo is a string'); // with optional message 
 assert.equal(foo, 'bar', 'foo equal `bar`'); 
 assert.lengthOf(foo, 3, 'foo`s value has a length of 3'); 
 assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea'); 
```

### Más información:

*   `help chai assert`
*   `help chai expectations`