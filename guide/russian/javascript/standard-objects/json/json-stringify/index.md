---
title: JSON Stringify
localeTitle: JSON Stringify
---
## JSON Stringify

Метод `JSON.stringify()` преобразует _JSON-безопасное_ значение JavaScript в строку, совместимую с JSON.

Что такое JSON-безопасные значения? Давайте составим список всех JSON-небезопасных значений, а все, что отсутствует в списке, можно считать безопасным для JSON.

#### JSON-небезопасные значения:

*   `undefined`
*   `function(){}`
*   (ES6 +) `Symbol`
*   Объект с круговой ссылкой (-ами) в нем

#### Синтаксис

```javascript
  JSON.stringify( value [, replacer [, space]]) 
```

В своей простейшей и наиболее часто используемой форме:

```javascript
  JSON.stringify( value ) 
```

#### параметры

`value` : `value` JavaScript, которое должно быть «stringified».

`replacer` : (Необязательно) Функция или массив, который служит фильтром для свойств объекта значения, который должен быть включен в строку JSON.

`space` : (Необязательно) Числовое или строковое значение для предоставления отступов для строки JSON. Если числовое значение предоставлено, то многие пробелы (до 10) действуют как indentaion на каждом уровне. Если задано строковое значение, эта строка (до первых 10 символов) действует как отступ на каждом уровне.

#### Тип возврата

Тип возвращаемого метода: `string` .

## Описание

Значения JSON-safe преобразуются в соответствующую строковую строку JSON. С другой стороны, JSON-небезопасные значения возвращают:

*   `undefined` если они переданы как значения для метода
*   `null` если они переданы как элемент массива
*   ничего, если передать свойства объекта
*   выдает ошибку, если ее объект с круговыми ссылками (ссылками) на нем.

```javascript
  //JSON-safe values 
  JSON.stringify({});                  // '{}' 
  JSON.stringify(true);                // 'true' 
  JSON.stringify('foo');               // '"foo"' 
  JSON.stringify([1, 'false', false]); // '[1,"false",false]' 
  JSON.stringify({ x: 5 });            // '{"x":5}' 
  JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))  // '"2006-01-02T15:04:05.000Z"' 
 
  //JSON-unsafe values passed as values to the method 
  JSON.stringify( undefined );                    // undefined 
  JSON.stringify( function(){} );                    // undefined 
 
  //JSON-unsafe values passed as array elements 
  JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });  // '{"x":[10,null,null,null]}' 
 
 //JSON-unsafe values passed as properties on a object 
  JSON.stringify({ x: undefined, y: Object, z: Symbol('') });  // '{}' 
 
  //JSON-unsafe object with circular reference on it 
  var o = { }, 
    a = { 
      b: 42, 
      c: o, 
      d: function(){} 
    }; 
 
  // create a circular reference inside `a` 
  oe = a; 
 
  // would throw an error on the circular reference 
  // JSON.stringify( a ); 
```

`JSON.stringify(...)` ведет себя по-другому, если объект, переданный ему, имеет метод `toJSON()` определенный на нем. Возвращаемое значение из `toJSON()` будет сериализоваться вместо самого объекта.

Это очень удобно, когда объект содержит какое-либо незаконное значение JSON.

```javascript
   //JSON-unsafe values passed as properties on a object 
   var obj = { x: undefined, y: Object, z: Symbol('') }; 
 
   //JSON.stringify(obj);  logs '{}' 
   obj.toJSON = function(){ 
    return { 
      x:"undefined", 
      y: "Function", 
      z:"Symbol" 
    } 
   } 
   JSON.stringify(obj);  //"{"x":"undefined","y":"Function","z":"Symbol"}" 
 
  //JSON-unsafe object with circular reference on it 
  var o = { }, 
    a = { 
      b: 42, 
      c: o, 
      d: function(){} 
    }; 
 
  // create a circular reference inside `a` 
  oe = a; 
 
  // would throw an error on the circular reference 
  // JSON.stringify( a ); 
 
  // define a custom JSON value serialization 
  a.toJSON = function() { 
    // only include the `b` property for serialization 
    return { b: this.b }; 
  }; 
 
  JSON.stringify( a ); // "{"b":42}" 
```

#### `replacer`

`replacer` , как упоминалось ранее, является фильтром, который указывает, какие свойства должны быть включены в строку JSON. Это может быть либо массив, либо функция. Когда массив, replacer содержит строковые представления только тех свойств, которые должны быть включены в строку JSON.

```javascript
  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7}; 
  JSON.stringify(foo, ['week', 'month']);    // '{"week":45,"month":7}', only keep "week" and "month" properties 
```

Если `replacer` является функцией, он будет вызываться один раз для самого объекта, а затем один раз для каждого свойства в объекте и каждый раз передается два аргумента, _ключ_ и _значение_ . Чтобы пропустить _ключ_ в сериализации, `undefined` должен быть возвращен. В противном случае возвращаемое _значение_ должно быть возвращено. Если любое из этих _значений_ является самими объектами, функция `replacer` сериализует их рекурсивно.

```javascript
  function replacer(key, value) { 
    // Filtering out properties 
    if (typeof value === 'string') { 
      return undefined; 
    } 
    return value; 
  } 
 
  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7}; 
  JSON.stringify(foo, replacer);  // '{"week":45,"month":7}' 
```

Если массив передается в `JSON.stringify()` а `replacer` возвращает `undefined` для любого из его элементов, значение элемента заменяется на `null` . Функции- `replacer` не могут удалить значения из массива.

```javascript
  function replacer(key, value) { 
    // Filtering out properties 
    if (typeof value === 'string') { 
      return undefined; 
    } 
    return value; 
  } 
 
  var foo = ['Mozilla', 'box', 45, 'car', 7]; 
  JSON.stringify(foo, replacer);  // "[null,null,45,null,7]" 
```

#### `space`

Параметр `space` используемый для отступа, делает результат `JSON.stringify()` более `JSON.stringify()` .

```javascript
  var a = { 
    b: 42, 
    c: "42", 
    d: [1,2,3] 
  }; 
 
  JSON.stringify( a, null, 3 ); 
  // "{ 
  //    "b": 42, 
  //    "c": "42", 
  //    "d": [ 
  //       1, 
  //       2, 
  //       3 
  //    ] 
  // }" 
 
  JSON.stringify( a, null, "-----" ); 
  // "{ 
  // -----"b": 42, 
  // -----"c": "42", 
  // -----"d": [ 
  // ----------1, 
  // ----------2, 
  // ----------3 
  // -----] 
  // }" 
```

#### Дополнительная информация:

Обратитесь к [документам MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) .