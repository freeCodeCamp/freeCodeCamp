---
title: Functional Programming
localeTitle: Programación Funcional
---
## Programación Funcional

La programación funcional es el proceso de compilación de software mediante la composición de **funciones puras** , evitando el **estado compartido** , **los datos mutables** y **los efectos secundarios** . La programación funcional es **declarativa** (le dice a la computadora lo que quiere hacer) en lugar de **imperativa** (le dice a la computadora exactamente cómo hacerlo), y el estado de la aplicación fluye a través de funciones puras. Compárelo con la programación orientada a objetos, donde el estado de la aplicación suele compartirse y compartirse con los métodos de los objetos.

### ¿Por qué la programación funcional?

*   Generalmente es mas conciso
*   Es generalmente más predecible
*   Es más fácil de probar que el código orientado a objetos

### Adopción por lenguajes de programación.

Muchos lenguajes de programación admiten la programación funcional como Haskell, F #, Common Lisp, Clojure, Erlang, OCaml. JavaScript también tiene las propiedades de un lenguaje funcional sin tipo.

### Usos

La programación funcional ha sido durante mucho tiempo popular en la academia, pero con pocas aplicaciones industriales. Sin embargo, recientemente se han usado varios lenguajes de programación funcionales prominentes en sistemas comerciales o industriales. Por ejemplo, el lenguaje de programación Erlang, que fue desarrollado por la compañía sueca Ericsson a fines de la década de 1980, se usa para crear una gama de aplicaciones en compañías como T-Mobile, Nortel, Facebook, Électricité de France y WhatsApp.

### Funciones de orden superior

Las funciones de orden superior son una parte importante de la programación funcional. Una función de orden superior es una función que toma una función (es) como parámetro o devuelve una función.

### Mapa

`map` es una función de orden superior que llama a una función a cada elemento de una lista y devuelve los resultados como una _nueva_ lista.

Aquí hay un ejemplo de `map` :

```javascript
const myList = [6, 3, 5, 29]; 
 
 let squares = myList.map(num => num * num); // [36, 9, 25, 841] 
```

### Más información:

*   [Wikipedia - Programación Funcional](https://en.wikipedia.org/wiki/Functional_programming#Use_in_industry)
    
*   [KeyCDN - Programación funcional - ¿Qué es y por qué importa?](https://www.keycdn.com/blog/functional-programming/)
    
*   [Medio - ¿Qué es la programación funcional?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)