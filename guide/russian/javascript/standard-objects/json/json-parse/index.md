---
title: JSON Parse
localeTitle: JSON Parse
---
## JSON Parse

Метод `JSON.parse()` анализирует строку и создает новый объект, описываемый строкой.

#### Синтаксис:

```javascript
    JSON.parse(text [, reviver]) 
```

##### Параметры:

`text` Строка для синтаксического анализа как JSON

`reviver` (необязательно) Функция получит `key` и `value` качестве аргументов. Эта функция может использоваться для преобразования значения результата.

Ниже приведен пример использования `JSON.parse()` :

```javascript
var data = '{"foo": "bar"}'; 
 
 console.log(data.foo); // This will print `undefined` since `data` is of type string and has no property named as `foo` 
 
 // You can use JSON.parse to create a new JSON object from the given string 
 var convertedData = JSON.parse(data); 
 
 console.log(convertedData.foo); // This will print `bar 
```

[Демо-версия Repl.it](https://repl.it/MwgK/0)

Вот пример с `reviver` :

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

В приведенном выше примере все числовые значения [умножаются](https://repl.it/Mwfp/0) на `10` - [Repl.it Demo](https://repl.it/Mwfp/0)

#### Дополнительная информация:

[JSON.parse - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)