---
title: Change the Prototype to a New Object
localeTitle: Cambia el prototipo a un nuevo objeto
---
## Cambia el prototipo a un nuevo objeto

En lugar de agregar cada propiedad prototipo una a una con `object.prototype.property` . Podemos hacer esto mucho más fácil configurando el prototipo a un nuevo objeto. De esa manera, todas las propiedades del prototipo se agregan a la vez.

  

## Insinuación:

```javascript
Dog.prototype = { 
  property: value, 
  functionName: function(){ 
 
  }, 
 } 
```

¡Ahora trata de resolver el desafío!

  

## ¡Solución Spoiler-Alert por delante!

  

## Solución 1:

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 Dog.prototype = { 
  // Add your code below this line 
  numLegs: 2, 
  eat: function(){ 
    console.log('nom nom nom'); 
  }, 
  describe: function(){ 
    console.log("My name is " + this.name); 
  } 
 } 
```

## Explicación del código:

Asignamos la variable prototipo a un nuevo objeto. Luego declaramos la propiedad numLegs y le damos un valor de 2.

A continuación creamos las dos funciones "comer" y "describir". Ahora recuerde que las funciones en los objetos son métodos con la misma sintaxis que las propiedades. Tienes el nombre seguido de un valor. Ese valor es la función y el nombre es el nombre de su función.  

## Solución 2:

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype = { 
  // Add your code below this line 
  numLegs: 2, 
  eat(){ 
    console.log('nom nom nom'); 
  }, 
  describe(){ 
    console.log("My name is " + this.name); 
  } 
 }; 
```

## Explicación del código:

La única diferencia entre esta solución y la última es que acortamos la sintaxis de las funciones "comer" y "describir". Lo hicimos eliminando la función ":" y la palabra "función".

Con ES6 podemos hacer esto.

Puedes leer sobre esto aquí: [Referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)