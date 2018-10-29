---
title: New String Functions
localeTitle: Nuevas funciones de cadena
---## Nuevas funciones de cadena

Las siguientes cuatro funciones se agregan nuevas a las cadenas en ES6.

*   comienza con
*   termina con
*   incluye
*   repetir

## comienza con:

Esta es una función que distingue entre mayúsculas y minúsculas que nos ayuda a encontrar si una cadena en particular comienza con alguna subcadena.

startsWith toma el segundo argumento opcional llamado posición que podemos usar en caso de que queramos omitir un número particular de caracteres desde el principio de la cadena antes de buscar.

```javascript
const str ='Rachna'; 
 str.startsWith('Rad') //false 
 str.startsWith('ra') //false as it is case sensitive 
 str.startsWith('Ra') //true 
 str.startsWith('ch',2) //true as we are searching from the second position 
 str.startsWith('ch',3) //false 
```

## termina con

Esta es una función que distingue entre mayúsculas y minúsculas que nos ayuda a encontrar si una cadena en particular termina con alguna subcadena.

endsWith toma un segundo argumento opcional llamado endPosition que podemos usar para incluir el número de caracteres antes de buscar.

```javascript
const city= 'Delhi'; 
 city.endsWith('Hi'); //false as it is case sensitive 
 city.endsWith('hi');//true 
 city.endsWith('l',3);//true - include only first three characters before searching 
 city.endsWith('l',4);//false 
```

## incluye

Incluye función es también una función que distingue entre mayúsculas y minúsculas que comprueba si el searchString está presente en cualquier parte de la cadena.

```javascript
const name='John Doe'; 
 name.includes('do'); //false 
 name.includes('D'); //true 
 name.includes('Do'); //true 
```

## repetir

Repetir nos permite tomar una cuerda y repetirla varias veces.

```javascript
const str = 'This is repeated'; 
 str.repeat(3); //"This is repeatedThis is repeatedThis is repeated" 
```

La función de repetición se puede usar para rellenar una cadena desde la izquierda con varios espacios.