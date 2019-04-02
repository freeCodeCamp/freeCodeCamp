---
title: JSON Parse
localeTitle: JSON Parse
---
## JSON Parse

El método `JSON.parse()` analiza una cadena y construye un nuevo objeto descrito por una cadena.

#### Sintaxis:

```javascript
    JSON.parse(text [, reviver]) 
```

##### Parámetros:

`text` La cadena para analizar como JSON

`reviver` (opcional) La función recibirá `key` y `value` como argumentos. Esta función se puede utilizar para transformar el valor del resultado.

Aquí hay un ejemplo sobre cómo usar `JSON.parse()` :

```javascript
var data = '{"foo": "bar"}'; 
 
 console.log(data.foo); // This will print `undefined` since `data` is of type string and has no property named as `foo` 
 
 // You can use JSON.parse to create a new JSON object from the given string 
 var convertedData = JSON.parse(data); 
 
 console.log(convertedData.foo); // This will print `bar 
```

[Repl.it Demo](https://repl.it/MwgK/0)

Aquí hay un ejemplo con `reviver` :

```javascript
var data = '{"value": 5}'; 
 
 var result = JSON.parse(data, function(key, value) { 
    if (typeof value === 'number') { 
        return value * 10; 
    } 
    return value; 
 }); 
 
 // Original Data 
 console.log("Original Data:", data); // This will print Original Data: {"value": 5} 
 // Result after parsing 
 console.log("Parsed Result: ", result); // This will print Parsed Result:  { value: 50 } 
```

En el ejemplo anterior, todos los valores numéricos se multiplican por `10` - [Repl.it Demo](https://repl.it/Mwfp/0)

#### Más información:

[JSON.parse - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)