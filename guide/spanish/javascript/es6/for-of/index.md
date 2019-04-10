---
title: for-of loop
localeTitle: bucle for-of
---## for-of Loop

for-of loop se puede utilizar para recorrer cosas que no son matrices, pero son iterables como una colección DOM, cadena, conjunto, argumentos o mapa.

```javascript
const fruits = ['Orange','Apple','Grapes','Banana']; 
 for (const fruit of fruits) 
 { 
    console.log(fruit); 
 } 
```

El fragmento de código anterior nos devolverá los elementos de la matriz anterior.

## bucle for-of en el índice de conocimiento

¿Qué pasa si también queremos saber el índice de cada elemento? En ese caso podemos iterar sobre fruits.entries (), lo que nos da el ArrayIterator.

```javascript
for (const fruit of fruits.entries()) 
 { 
    console.log(fruit); 
 } 
```

En el fragmento anterior, la fruta será una matriz con dos elementos. El artículo número 0 contendrá el índice y el artículo 1 contendrá el nombre real de la fruta. La salida sería como:
```
[0, "Orange"] 
 
 [1, "Apple"] 
 
 [2, "Grapes"] 
 
 [3, "Banana"] 
```

Podemos destruir más la fruta como a continuación:

```javascript
for (const [index,fruit] of fruits.entries()) 
 { 
    console.log(index,fruit); 
 } 
```

## bucle for-of en iteración sobre un número desconocido de argumentos

for-of loop es muy útil para iterar sobre un número desconocido de argumentos de una función.

Supongamos que deseamos agregar los números que se pasan a una función y el número de argumentos no es fijo.

'argumentos' es una palabra clave especial en javascript que nos da el tipo Array-ish (no array) y nos da todos los argumentos.

```javascript
function addNumbers() 
 { 
    let sum = 0; 
    for (const num of arguments) 
       sum+=num; 
    return sum; 
 } 
 addNumbers(1, 2, 3, 4, 5); // 15 
```

Aquí los argumentos no son una verdadera matriz, aún podemos iterar sobre ellos usando el bucle for-of.

## bucle for-of para iterar sobre una cadena

Podemos usar for-of loop para iterar sobre la cadena para darnos carácter por carácter de la cadena.

```javascript
const name = 'John Doe'; 
 for (const char of name) 
    console.log(char); 
```

lo que resulta en el siguiente resultado: caracteres 'J', 'o', 'h', 'n', '', 'D', 'o', 'e'

## bucle for-of para iterar sobre la colección DOM

Las colecciones DOM no son el verdadero tipo de matriz. Normalmente son NodeList para la mayoría de los navegadores. Si creamos una cantidad de párrafos y queremos iterar sobre ellos para asignar algún evento en cada uno de los párrafos, podemos hacer uso del bucle for-of.

```javascript
const paragraphs = document.querySelectorAll('p'); 
```

Aquí, los párrafos son una lista de nodos que se puede iterar sobre el uso del bucle for-of.

```javascript
for (const para of paragraphs) 
 { 
    console.log(para); 
    // We can add event listeners to each para here 
 } 

```