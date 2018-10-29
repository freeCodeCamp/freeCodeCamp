---
title: Functional
localeTitle: Funcional
---
```javascript
var fun = function(a, b) { 
  var funInstance = {}; 
  funInstance.a = a; 
  funInstance.b = b; 
  funInstance.method1 = function() { 
    // method code here 
  } 
  funInstance.method2 = function() { 
    // method code here 
  } 
  funInstance.method3 = function() { 
    // method code here 
  } 
  return funInstance; 
 } 
 var myFun = fun(1, 2); 
 myFun.method1(); 
```

## ¿Cómo lo reconozco?

La creación de instancias de objetos funcionales crea una instancia de clase con una función, al igual que las otras opciones. La diferencia es que todos los métodos asociados también se definen en la función constructora.

## ¿Por qué lo usaría?

Dado que se crea un nuevo conjunto de métodos para cada instancia del objeto y podría ocupar una cantidad considerable de memoria, la creación de instancias funcional es buena cuando se sabe que no va a trabajar con muchas instancias. También es bueno que su código sea fácilmente comprendido por los codificadores de JavaScript nuevos y experimentados por igual, ya que la creación de instancias es completamente autónoma y es fácil ver las relaciones entre los métodos y las instancias de los objetos.

## ¿Cuáles son los inconvenientes?

La desventaja de Functional Instantiation es que si tuviera que realizar cambios en su código (como agregar más métodos), las instancias del objeto que se crearon antes de que se realizaran estos cambios no se actualizarían. Podría terminar con dos instancias que contengan información de método diferente.

* * *

## Título: Funcional-Compartido

```javascript
var fun = function(a, b) { 
  var funInstance = {}; 
  funInstance.a = a; 
  funInstance.b = b; 
  extend(funInstance, funMethods); 
  return funInstance; 
 } 
 var extend = function(to, from) { 
  for (var key in from) { 
    to[key] = from[key]; 
  } 
 } 
 var funMethods = {}; 
 funMethods.method1 = function() { 
    // method code here 
 } 
 funMethods.method2 = function() { 
    // method code here 
 } 
 funMethods.method3 = function() { 
    // method code here 
 } 
 var myFun = fun(1, 2); 
 myFun.method1(); 
```

## ¿Cómo lo reconozco?

La principal diferencia entre Functional y Functional-Shared, es que en Functional-Shared compartimos nuestros métodos. En lugar de declarar métodos en nuestra función de instanciación, tenemos un objeto separado que contiene todos nuestros métodos. Para utilizar los métodos, los extendemos a cada instancia del objeto que se está creando.

## ¿Por qué lo usaría?

Functional-Shared nos permite usar referencias a métodos, en lugar de declarar y almacenar nuestros métodos para cada instancia de nuestro objeto, ahorrando espacio.

## ¿Cuáles son los inconvenientes?

El inconveniente es que, dado que los métodos se referencian mediante los punteros al objeto de métodos, si tuviéramos que actualizar el método de métodos de alguna manera, las instancias del objeto que se crearon antes de los cambios no se actualizarían. Podría terminar con dos instancias del objeto haciendo referencia a dos versiones diferentes de los métodos.

* * *

## título: prototípico

```javascript
var fun = function(a, b) { 
  var funInstance = Object.create(funMethods); 
  funInstance.a = a; 
  funInstance.b = b; 
  return funInstance; 
 } 
 var funMethods = {}; 
 funMethods.method1 = function() { 
    // method code here 
 } 
 funMethods.method2 = function() { 
    // method code here 
 } 
 funMethods.method3 = function() { 
    // method code here 
 } 
 var myFun = fun(1, 2); 
 myFun.method1(); 
```

## ¿Cómo lo reconozco?

Prototypal es similar a Functional-Shared en el sentido de que ambos usan un objeto de métodos separado para contener todos los métodos que se compartirán entre las instancias del objeto que estamos creando. La diferencia es que podemos usar la cadena prototipo. Podemos crear el objeto utilizando Object.create (prototipo) para adjuntar los métodos a nuestra instancia de objeto. El objeto que contiene nuestros métodos compartidos se considera el prototipo.

## ¿Por qué lo usaría?

Si realiza cambios en su prototipo después de crear una instancia de objeto, esa instancia se actualizará. No terminarás con dos instancias con el mismo prototipo que tienen métodos diferentes.

## ¿Cuáles son los inconvenientes?

Las desventajas de usar este método es que requiere pasos adicionales y código adicional. No solo tenemos que crear y devolver nuestro objeto como antes, sino que también debemos decorarlo.

* * *

## título: pseudoclásico

```javascript
var Fun = function(a, b) { 
  // this = Object.create(Fun.prototype); 
  this.a = a; 
  this.b = b; 
  // return this; 
 } 
 Fun.prototype.method1 = function() { 
    // method code here 
 } 
 Fun.prototype.method2 = function() { 
    // method code here 
 } 
 Fun.prototype.method3 = function() { 
    // method code here 
 } 
 var myFun = new Fun(1, 2); 
 myFun.method1(); 
```

## ¿Cómo lo reconozco?

La instanciación seudoclásica es, con mucho, la menor cantidad de código. En lugar de crear un nuevo objeto y devolverlo, la nueva palabra clave lo hace por nosotros. Bajo el capó, cuando usa la nueva palabra clave para crear una instancia de un objeto, crea un nuevo objeto utilizando this = Object.create (Object.prototype), donde se refiere al prototipo que lleva el nombre de la nueva palabra clave. Cuando estamos definiendo nuestros métodos, usamos la palabra clave prototipo.

## ¿Por qué lo usaría?

Se dice que Pseudoclassical es el patrón de creación de instancias más rápido, lo cual es útil si está creando decenas de miles de instancias. También es el más optimizado ya que utiliza la funcionalidad de Javascript.

## ¿Cuáles son los inconvenientes?

La desventaja de la instanciación pseudoclásica es que requiere un poco más de conocimiento sobre lo que hace JavaScript bajo el capó, particularmente con esta palabra clave. Esto hace que este tipo de creación de objetos sea un poco más complejo de entender, especialmente si alguien más está leyendo su código