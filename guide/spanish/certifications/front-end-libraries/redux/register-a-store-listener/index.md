---
title: Register a Store Listener
localeTitle: Registrar un Oyente de Tienda
---
## Registrar un Oyente de Tienda

Vamos a desglosar las instrucciones para averiguar exactamente lo que está pidiendo.

> _Escriba una función de devolución de llamada que incremente el recuento global de variables cada vez que la tienda reciba una acción, y pase esta función al método store.subscribe ()._

Podemos resumir estos pasos en pequeños fragmentos:

1.  escribir una función de devolución de llamada
2.  incrementar la cuenta global de variables
3.  `store.subscribe()` función al método `store.subscribe()` .

¡Increíble! Ahora vamos a revisar algunos de los conceptos básicos de nuevo.

### ¿Qué es una "función de devolución de llamada" en inglés simple?

Una función de devolución de llamada es simplemente una función a la que se llama get después de que se ejecuta otra función. En el mundo real, podría ser algo como esto:

```javascript
// You drop your car off at the mechanic and you want the shop to 'call you back' when your car is fixed. 
 let carIsBroken = true; 
 const callCarOwner = () => console.log('Hello your car is done!'); 
 const fixCar = (carIsBroken, callCarOwner) => { 
  if (carIsBroken === true) { 
    carIsBroken = false; 
  } 
  console.log(carIsBroken); 
  // After the car is fixed, the last thing we do is call the car owner - that's our 'callback function'. 
  callCarOwner(); 
 } 
 fixCar(carIsBroken, callCarOwner); 
```

### ¿Cómo aumentas una variable numérica?

Podemos hacer esto usando el operador "+ =".

```javascript
let count = 1; 
 const addOne = () => count +=1; 
```

### ¿Cómo se pasa una función a un método?

Podemos pasar una función a un método de la misma manera que podríamos pasar una variable a un método. ¡Solo pásalo como un argumento!

```javascript
function sayHi() { 
  console.log('Hi!'); 
 } 
 store.subscribe(sayHi); 
```

¿Quieres actualizar esto? [Editar este talón en GitHub.](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/redux/register-a-store-listener/index.md)