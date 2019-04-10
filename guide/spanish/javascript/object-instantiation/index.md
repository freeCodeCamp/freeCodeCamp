---
title: Object Instantiation
localeTitle: Instanciación de objetos
---
## Instanciación de objetos

En Javascript y en la mayoría de los otros idiomas, un objeto contiene una serie de propiedades, que son una clave, un par de valores. Hay varias opciones disponibles para usted cuando necesita construir un objeto.

### Inicializar una variable de objeto

Puede crear un objeto con propiedades predefinidas de la siguiente manera:

```javascript
let myObject = { 
  name: "Dave", 
  age: 33 
 } 
```

### Creando un objeto vacío

Esto crea un objeto vacío dentro de nuestra variable myObject:

```javascript
let myObject = new Object(); 
```

Cuando desee agregar propiedades a su objeto, simplemente use la notación de puntos o la notación de corchetes con el nombre de propiedad que elija:

```javascript
myObject.name = "Johnny Mnemonic" 
 myObject["age"] = 55 
```

### Usando una función constructora

Puede definir una función constructora que puede usar para crear sus objetos:

```javascript
function Kitten(name, cute, color) { 
  this.name = name, 
  this.cute = cute, 
  this.color = color 
 } 
```

Puede definir una variable que contenga una instanciación de este objeto llamando a la función constructora:

```javascript
let myKitten = new Kitten("Nibbles", true, "white") 
```

### Object.create ()

El método Object.create () (definido por primera vez en ECMAScript 5.1) le permite crear objetos. le permite elegir el objeto prototipo para su nuevo objeto sin necesidad de definir una función constructora de antemano.

```javascript
// Our pre-defined object 
 let kitten = { 
  name: "Fluff", 
  cute: true, 
  color: "gray" 
 } 
 // Create a new object using Object.create(). kitten is used as the prototype 
 let newKitten = Object.create(kitten) 
 
 console.log(newKitten.name) // Will output "Fluff" 
```

#### Más información

[Artículo de MDN sobre el trabajo con objetos.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)