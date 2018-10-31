---
title: JSON Parse
localeTitle: JSON Parse
---
## JSON Parse

O método `JSON.parse()` analisa uma string e constrói um novo objeto descrito por uma string.

#### Sintaxe:

```javascript
    JSON.parse(text [, reviver]) 
```

##### Parâmetros:

`text` A string para analisar como JSON

`reviver` (opcional) A função receberá `key` e `value` como argumentos. Esta função pode ser usada para transformar o valor do resultado.

Aqui está um exemplo de como usar o `JSON.parse()` :

```javascript
var data = '{"foo": "bar"}'; 
 
 console.log(data.foo); // This will print `undefined` since `data` is of type string and has no property named as `foo` 
 
 // You can use JSON.parse to create a new JSON object from the given string 
 var convertedData = JSON.parse(data); 
 
 console.log(convertedData.foo); // This will print `bar 
```

[Repl.it Demo](https://repl.it/MwgK/0)

Aqui está um exemplo com o `reviver` :

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

No exemplo acima, todos os valores numéricos estão sendo multiplicados por `10` - [Repl.it Demo](https://repl.it/Mwfp/0)

#### Mais Informações:

[JSON.parse - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)