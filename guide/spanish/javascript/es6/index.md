---
title: ES6
localeTitle: ES6
---
## ES6

La 6ª edición de ECMAScript se llama ES6.

También es conocido como ES2015.

Los cambios agregan una gran cantidad de azúcar sintáctica que permite a los desarrolladores crear aplicaciones en un estilo orientado a objetos.

> Ejemplo de ES5:

```javascript
var User = function () { 
  function User(name) { 
    this._name = name; 
  } 
 
  User.prototype.getName = function getName(x) { 
    return 'Mr./Mrs. ' + this._name; 
  }; 
 
  return User; 
 }(); 
```

> Ejemplo de ES6:

```javascript
class User { 
  constructor(name) { 
    this._name = name 
  } 
 
  getName() { 
    return `Mr./Mrs. ${this._name}` 
  } 
 } 
```

Se introdujeron muchas características nuevas de sintaxis, incluyendo:

*   clases
*   módulos,
*   templando
*   para / de bucles,
*   expresiones generadoras,
*   funciones de flecha,
*   colecciones
*   promesas

Hoy en día, la mayoría de las funciones están disponibles en todos los navegadores populares. La [tabla de compatibilidad](https://kangax.github.io/compat-table/es6/) contiene toda la información sobre la disponibilidad de características de todos los navegadores modernos.

Con frecuencia llegan nuevas funciones que forman parte del sucesor ES7. Una forma común es traducir JavaScript moderno (ES6, ES7 y otras propuestas experimentales) a ES5. Esto asegura que también los navegadores antiguos puedan ejecutar el código. Existen herramientas como [Babel](https://babeljs.io/) que transforma el nuevo JavaScript en ES5.

Además del azúcar sintáctico que proviene de los estándares de ECMAScript, hay características que requieren un [Polyfill](https://babeljs.io/docs/usage/polyfill) . Por lo general, son necesarios porque se agregaron implementaciones de toda clase / método a la norma.