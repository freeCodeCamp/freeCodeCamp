---
title: JSON Stringify
localeTitle: JSON Stringify
---
## JSON Stringify

`JSON.stringify()`方法将_JSON安全的_ JavaScript值转换为符合JSON的字符串。

有人可能会问JSON安全值是什么！让我们列出所有JSON不安全的值，列表中没有的任何内容都可以被认为是JSON安全的。

#### JSON不安全的值：

*   `undefined`
*   `function(){}`
*   （ES6 +） `Symbol`
*   带有圆形参考的对象

#### 句法

```javascript
  JSON.stringify( value [, replacer [, space]]) 
```

以其最简单和最常用的形式：

```javascript
  JSON.stringify( value ) 
```

#### 参数

`value` ：要进行“字符串化”的JavaScript值。

`replacer` :(可选）一个函数或数组，用作要包含在JSON字符串中的值对象的属性的过滤器。

`space` :(可选）用于为JSON字符串提供缩进的数字或字符串值。如果提供了一个数值，那么许多空格（最多10个）在每个级别都充当了数字。如果提供了字符串值，则该字符串（最多10个字符）在每个级别充当缩进。

#### 返回类型

该方法的返回类型是： `string` 。

## 描述

JSON安全值将转换为其对应的JSON字符串形式。另一方面，JSON不安全值返回：

*   如果它们作为值传递给方法，则为`undefined`
*   如果它们作为数组元素传递，则返回`null`
*   如果作为对象的属性传递则没有
*   如果它的对象上有一个循环引用，则抛出一个错误。

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

如果传递给它的对象在其上定义了`toJSON()`方法，则`JSON.stringify(...)`行为会有所不同。 `toJSON()`方法的返回值将被序列化而不是对象本身。

当对象包含任何非法JSON值时，这非常方便。

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

如前所述， `replacer`是一个过滤器，它指示哪些属性将包含在JSON字符串中。它可以是数组或函数。 在数组中，replacer包含仅包含在JSON字符串中的那些属性的字符串表示。

```javascript
  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7}; 
  JSON.stringify(foo, ['week', 'month']);    // '{"week":45,"month":7}', only keep "week" and "month" properties 
```

如果`replacer`是一个函数，它将为对象本身调用一次，然后为对象中的每个属性调用一次，并且每次传递两个参数， _key_和_value_ 。要跳过序列化中的_键_ ，应返回`undefined` 。否则，应返回提供的_值_ 。如果这些_值_中的任何一个本身是对象，则`replacer`函数也会递归地序列化它们。

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

如果将数组传递给`JSON.stringify()`并且`replacer`为其任何元素返回`undefined` ，则该元素的值将替换为`null` 。 `replacer`函数无法从数组中删除值。

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

用于缩进的`space`参数使得`JSON.stringify()`的结果更漂亮。

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

#### 更多信息：

请参阅[MDN文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 。