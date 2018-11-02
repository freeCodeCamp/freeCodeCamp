---
title: Math Trunc
localeTitle: Trunc de Matemáticas
---
## Trunc de Matemáticas

`Math.trunc()` es un método del objeto estándar matemático que devuelve solo la parte entera de un número dado simplemente eliminando unidades fraccionarias. Esto resulta en un redondeo general hacia cero. Cualquier entrada que no sea un número dará como resultado una salida de NaN.

Atención: este método es una característica de ECMAScript 2015 (ES6) y, por lo tanto, no es compatible con navegadores más antiguos.

### Ejemplos

```javascript
Math.trunc(0.1)   //  0 
 Math.trunc(1.3)   //  1 
 Math.trunc(-0.9)  // -0 
 Math.trunc(-1.5)  // -1 
 Math.trunc('foo') // NaN 
```

### Más información:

*   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)