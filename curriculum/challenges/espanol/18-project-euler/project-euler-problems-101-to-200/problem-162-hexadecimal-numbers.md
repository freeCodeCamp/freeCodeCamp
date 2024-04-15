---
id: 5900f40e1000cf542c50ff21
title: 'Problema 162: Números hexadecimales'
challengeType: 1
forumTopicId: 301796
dashedName: problem-162-hexadecimal-numbers
---

# --description--

In the hexadecimal number system numbers are represented using 16 different digits:

$$0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F$$

El número hexadecimal AF cuando se escribe en el sistema de números decimales iguales a $10 \times 16 + 15 = 175$.

En los números hexadecimales de 3-dígitos 10A, 1A0, A10, y A01 los dígitos 0,1 y A están todos presentes.

Al igual que números escritos en base diez escribimos números hexadecimales sin declarar ceros iniciales.

¿Cuántos números hexadecimales contienen a lo mucho dieciseis dígitos hexadecimales con todos los dígitos 0,1, y A presentes al menos una vez?

De su respuesta con un número hexadecimal como una cadena.

**Note:** (A,B,C,D,E y F en mayúsculas, sin un código de guía o cola que marque el número como hexadecimal y sin guías principales, p.ej.1A3F y no: 1a3f y no 0x1a3f y no $1A3F y no #1A3F y no 0000001A3F)

# --hints--

`hexadecimalNumbers()` debería devolver una cadena.

```js
assert(typeof hexadecimalNumbers() === 'string');
```

`hexadecimalNumbers()` debería devolver la cadena `3D58725572C62302`.

```js
assert.strictEqual(hexadecimalNumbers(), '3D58725572C62302');
```

# --seed--

## --seed-contents--

```js
function hexadecimalNumbers() {

  return true;
}

hexadecimalNumbers();
```

# --solutions--

```js
// solution required
```
