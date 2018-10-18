---
title: Closures
localeTitle: Cierres
---
# Cierres

Un cierre es la combinación de una función y el entorno léxico (alcance) dentro del cual se declaró esa función. Los cierres son una propiedad fundamental y poderosa de Javascript. Este artículo analiza el 'cómo' y el 'por qué' sobre los cierres:

### Ejemplo

```js
//we have an outer function named walk and an inner function named fly 
 
 function walk (){ 
 
  var dist = '1780 feet'; 
 
  function fly(){ 
    console.log('At '+dist); 
  } 
 
  return fly; 
 } 
 
 var flyFunc = walk(); //calling walk returns the fly function which is being assigned to flyFunc 
 //you would expect that once the walk function above is run 
 //you would think that JavaScript has gotten rid of the 'dist' var 
 
 flyFunc(); //Logs out 'At 1780 feet' 
 //but you still can use the function as above 
 //this is the power of closures 
```

### Otro ejemplo

```js
function by(propName) { 
    return function(a, b) { 
        return a[propName] - b[propName]; 
    } 
 } 
 
 const person1 = {name: 'joe', height: 72}; 
 const person2 = {name: 'rob', height: 70}; 
 const person3 = {name: 'nicholas', height: 66}; 
 
 const arr_ = [person1, person2, person3]; 
 
 const arr_sorted = arr_.sort(by('height')); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ] 
```

El cierre 'recuerda' el entorno en el que fue creado. Este entorno consta de cualquier variable local que estaba dentro del alcance en el momento en que se creó el cierre.

```js
function outside(num) { 
  var rememberedVar = num; // In this example, rememberedVar is the lexical environment that the closure 'remembers' 
  return function inside() { // This is the function which the closure 'remembers' 
    console.log(rememberedVar) 
  } 
 } 
 
 var remember1 = outside(7); // remember1 is now a closure which contains rememberedVar = 7 in its lexical environment, and //the function 'inside' 
 var remember2 = outside(9); // remember2 is now a closure which contains rememberedVar = 9 in its lexical environment, and //the function 'inside' 
 
 remember1(); // This now executes the function 'inside' which console.logs(rememberedVar) => 7 
 remember2(); // This now executes the function 'inside' which console.logs(rememberedVar) => 9 
```

Los cierres son útiles porque le permiten "recordar" datos y luego le permiten operar con esos datos a través de funciones devueltas. Esto permite que javascript emule métodos privados que se encuentran en otros lenguajes de programación. Los métodos privados son útiles para restringir el acceso al código, así como para administrar su espacio de nombres global.

### Variables y métodos privados.

Los cierres también se pueden utilizar para encapsular datos / métodos privados. Echale un vistazo a éste ejemplo:

```javascript
const bankAccount = (initialBalance) => { 
  const balance = initialBalance; 
 
  return { 
    getBalance: function() { 
      return balance; 
    }, 
    deposit: function(amount) { 
      balance += amount; 
      return balance; 
    }, 
  }; 
 }; 
 
 const account = bankAccount(100); 
 
 account.getBalance(); // 100 
 account.deposit(10); // 110 
```

En este ejemplo, no podremos acceder al `balance` desde cualquier lugar fuera de la función `bankAccount` , lo que significa que acabamos de crear una variable privada. ¿Dónde está el cierre? Bueno, piensa en lo que `bankAccount()` está devolviendo. En realidad, devuelve un Objeto con un montón de funciones dentro de él y, sin embargo, cuando llamamos `account.getBalance()` , la función es capaz de "recordar" su referencia inicial para `balance` . Ese es el poder del cierre, donde una función "recuerda" su alcance léxico (alcance de tiempo de compilación), incluso cuando la función se ejecuta fuera de ese alcance léxico.

**Emulando variables de ámbito de bloque.**

Javascript no tenía un concepto de variables de ámbito de bloque. Lo que significa que cuando se define una variable dentro de un forloop, por ejemplo, esta variable también es visible desde fuera del forloop. Entonces, ¿cómo pueden los cierres ayudarnos a resolver este problema? Vamos a ver.

```javascript
    var funcs = []; 
 
    for(var i = 0; i < 3; i++){ 
        funcs[i] = function(){ 
            console.log('My value is ' + i);  //creating three different functions with different param values. 
        } 
    } 
 
    for(var j = 0; j < 3; j++){ 
        funcs[j]();             // My value is 3 
                                // My value is 3 
                                // My value is 3 
    } 
```

Dado que la variable i no tiene un ámbito de bloque, su valor dentro de las tres funciones se actualizó con el contador de bucle y creó valores maliciosos. El cierre puede ayudarnos a resolver este problema creando una instantánea del entorno en el que se encontraba la función cuando se creó, preservando su estado.

```javascript
    var funcs = []; 
 
    var createFunction = function(val){ 
        return function() {console.log("My value: " + val);}; 
    } 
 
    for (var i = 0; i < 3; i++) { 
        funcs[i] = createFunction(i); 
    } 
    for (var j = 0; j < 3; j++) { 
        funcs[j]();                 // My value is 0 
                                    // My value is 1 
                                    // My value is 2 
    } 
```

Las últimas versiones de javascript es6 + tienen una nueva palabra clave llamada let que se puede usar para darle a la variable un blockscope. También hay muchas funciones (forEach) y bibliotecas completas (lodash.js) que están dedicadas a resolver problemas como los explicados anteriormente. Ciertamente pueden aumentar su productividad, sin embargo, sigue siendo extremadamente importante tener conocimiento de todos estos problemas al intentar crear algo grande.

Los cierres tienen muchas aplicaciones especiales que son útiles al crear grandes programas javascript.

1.  Emulando variables privadas o encapsulación.
2.  Realización de llamadas laterales al servidor asíncrono.
3.  Creando una variable de ámbito de bloque.

**Emulando variables privadas.**

A diferencia de muchos otros idiomas, Javascript no tiene un mecanismo que le permita crear variables de instancia encapsuladas dentro de un objeto. Tener variables de instancia pública puede causar muchos problemas al crear programas medianos y grandes. Sin embargo, con los cierres, este problema puede ser mitigado.

Al igual que en el ejemplo anterior, puede crear funciones que devuelvan literales de objetos con métodos que tengan acceso a las variables locales del objeto sin exponerlas. Así, haciéndolos efectivamente privados.

Los cierres también pueden ayudarlo a administrar su espacio de nombres global para evitar colisiones con datos compartidos globalmente. Generalmente, todas las variables globales se comparten entre todos los scripts en su proyecto, lo que definitivamente le dará muchos problemas al crear programas medianos o grandes. Es por eso que los autores de bibliotecas y módulos utilizan cierres para ocultar los métodos y datos de un módulo completo. Esto se denomina patrón del módulo, utiliza una expresión de función invocada de inmediato que exporta solo cierta funcionalidad al mundo exterior, reduciendo significativamente la cantidad de referencias globales.

Aquí hay una breve muestra de un módulo esqueleto.

```javascript
var myModule = (function() = { 
    let privateVariable = 'I am a private variable'; 
 
    let method1 = function(){ console.log('I am method 1'); }; 
    let method2 = function(){ console.log('I am method 2, ', privateVariable); }; 
 
    return { 
        method1: method1, 
        method2: method2 
    } 
 }()); 
 
 myModule.method1(); // I am method 1 
 myModule.method2(); // I am method 2, I am a private variable 
```


El patrón de módulo es muy común en JavaScript. Uno de usos más grande es en la biblioteca (Redux). Es una de las bibliotecas más populares para la administración de estado. En la cual cierres previenen leer o escribir fuera de la función dispatch(). 

Los cierres son útiles para capturar nuevas instancias de variables privadas contenidas en el entorno "recordado", y solo se puede acceder a esas variables a través de la función o los métodos devueltos.


### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)  
[Cierres de Javascript](https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44)
