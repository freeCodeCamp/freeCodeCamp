---
title: Destructuring Assignment
localeTitle: Asignación de destrucción
---
## Asignación de destrucción

La sintaxis de asignación de destrucción es una expresión de JavaScript que permite desempaquetar valores o propiedades de matrices u objetos.

Digamos que tiene una matriz que contiene un nombre y un apellido, ya que son dos valores, pero desea reasignar esos valores a algo más descriptivo. Puedes usar Destructura para lograr esto.

**ES5 Destructurante**

```js
var fullName = ["John", "Smith"]; 
 var firstName = fullName[0]; 
 var lastName = fullName[1]; 
 
 console.log(firstName, lastName); // John Smith 
```

**ES6 Destructura**

```js
const fullName = ["John", "Smith"]; 
 const [firstName, lastName] = fullName; 
 
 console.log(firstName, lastName); // John Smith 
```

Los ejemplos anteriores muestran el beneficio de usar la asignación de destrucción ES6.

También puede usar la destrucción en objetos usando una sintaxis similar

```js
const fullName = { first: "John", last: "Smith"}; 
 const {first, last} = fullName; 
 
 console.log(first, last); // John Smith 
```

La asignación de destrucción de objetos es un poco diferente porque el objeto debe tener propiedades con los nombres que está asignando. Por lo tanto, el siguiente código no funcionaría como se esperaba.

```js
const fullName = { first: "John", last: "Smith"}; 
 const {firstName, lastName} = fullName; 
 
 console.log(firstName, lastName); // undefined undefined 
```

Aún puede lograr el resultado deseado usando la siguiente sintaxis.

```js
const obj = {propertyName: value} 
 {propertyName: desiredVariableName} = obj 
```

Nuestro ejemplo anterior sería reescrito de la siguiente manera:

```js
const fullName = { first: "John", last: "Smith"}; 
 const {first: firstName, last: lastName} = fullName; 
 
 console.log(firstName, lastName); // John Smith 

```