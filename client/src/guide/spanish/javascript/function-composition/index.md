---
title: Function Composition
localeTitle: Composición de funciones
---## Composición de funciones

La composición de funciones es la aplicación puntual de una función al resultado de otra. Los desarrolladores lo hacen de forma manual todos los días cuando el nido funciona:

```javascript
compose = (fn1, fn2) => value => fn2(fn1(value)) 
```

Pero esto es difícil de leer. Hay una mejor manera de utilizar la función de composición. En lugar de leerlos de adentro hacia afuera:

```javascript
add2AndSquare = (n) => square(add2(n)) 
```

Podemos usar una función de orden superior para encadenarlos de una manera ordenada.

```javascript
add2AndSquare = compose( add2, square) 
```

Una implementación simple de componer sería:

```javascript
compose = (f1, f2) => value => f2( f1(value) ); 
```

Para obtener aún más flexibilidad podemos usar la función reduceRight:

```javascript
compose = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal); 
```

La lectura de composición de izquierda a derecha permite un encadenamiento claro de las funciones de orden superior. Los ejemplos del mundo real están agregando autenticaciones, registro y propiedades de contexto. Es una técnica que permite la reutilización en el nivel más alto. Aquí hay algunos ejemplos de cómo usarlo:

```javascript
// example 
 const add2        = (n) => n + 2; 
 const times2      = (n) => n * 2; 
 const times2add2  = compose(add2, times2); 
 const add6        = compose(add2, add2, add2); 
 
 times2add2(2);  // 6 
 add2tiems2(2);  // 8 
 add6(2);        // 8 
```

Podría pensar que esta es una programación funcional avanzada y no es relevante para la programación de frontend. Pero también es útil en aplicaciones de una sola página. Por ejemplo, puede agregar comportamiento a un componente React utilizando componentes de orden superior:

```javascript
function logProps(InputComponent) { 
  InputComponent.prototype.componentWillReceiveProps = function(nextProps) { 
    console.log('Current props: ', this.props); 
    console.log('Next props: ', nextProps); 
  }; 
  return InputComponent; 
 } 
 
 // EnhancedComponent will log whenever props are received 
 const EnhancedComponent = logProps(InputComponent); 
```

En conclusión, la composición de funciones permite la reutilización de la funcionalidad a un nivel muy alto. Si las funciones están bien estructuradas, los desarrolladores pueden crear nuevos comportamientos basados ​​en el comportamiento existente.

También aumenta la legibilidad de las implementaciones. En lugar de funciones de anidamiento, puede borrar las funciones de la cadena y crear funciones de orden superior con nombres significativos.