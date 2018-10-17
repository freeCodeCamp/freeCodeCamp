---
title: JSON Stringify
localeTitle: JSON Stringify
---
## JSON Stringify

O método `JSON.stringify()` converte um valor JavaScript _JSON-safe_ em uma string compatível com JSON.

Quais são os valores seguros para JSON que alguém pode perguntar! Vamos fazer uma lista de todos os valores não seguros de JSON e qualquer coisa que não esteja na lista pode ser considerada segura para JSON.

#### Valores não seguros de JSON:

*   `undefined`
*   `function(){}`
*   (ES6 +) `Symbol`
*   Um objeto com referência (s) circular (ais) nele

#### Sintaxe

```javascript
  JSON.stringify( value [, replacer [, space]]) 
```

Na sua forma mais simples e mais utilizada:

```javascript
  JSON.stringify( value ) 
```

#### Parâmetros

`value` : o valor do JavaScript a ser 'stringificado'.

`replacer` : (Opcional) Uma função ou uma matriz que serve como um filtro para propriedades do objeto de valor a ser incluído na sequência JSON.

`space` : (Opcional) Um valor numérico ou de cadeia para fornecer recuo à cadeia JSON. Se um valor numérico é fornecido, muitos espaços (até 10) atuam como indentação em cada nível. Se um valor de string for fornecido, essa string (até os 10 primeiros caracteres) atua como recuo em cada nível.

#### Tipo de retorno

O tipo de retorno do método é: `string` .

## Descrição

Os valores seguros para JSON são convertidos em seus respectivos formatos de string JSON. Os valores não seguros do JSON, por outro lado, retornam:

*   `undefined` se forem passados ​​como valores para o método
*   `null` se eles forem passados ​​como um elemento de matriz
*   nada se passado como propriedades em um objeto
*   lança um erro se for um objeto com referências circulares nele.

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

`JSON.stringify(...)` se comporta de maneira diferente se um objeto passado a ele tiver um método `toJSON()` definido nele. O valor de retorno do método `toJSON()` será serializado em vez do próprio objeto.

Isso é excepcionalmente útil quando um objeto contém qualquer valor JSON ilegal.

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

#### O `replacer`

O `replacer` , como mencionado anteriormente, é um filtro que indica quais propriedades devem ser incluídas na sequência JSON. Pode ser uma matriz ou uma função. Quando um array, o replacer contém as representações de string apenas daquelas propriedades que devem ser incluídas na string JSON.

```javascript
  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7}; 
  JSON.stringify(foo, ['week', 'month']);    // '{"week":45,"month":7}', only keep "week" and "month" properties 
```

Se `replacer` for uma função, ela será chamada uma vez para o próprio objeto e, em seguida, uma vez para cada propriedade no objeto, e cada vez que receber dois argumentos, _chave_ e _valor_ . Para pular uma _chave_ na serialização, `undefined` deve ser retornado. Caso contrário, o _valor_ fornecido deve ser retornado. Se algum desses _valores_ forem objetos propriamente ditos, a função de `replacer` serializará recursivamente.

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

Se uma matriz for passada para `JSON.stringify()` e o `replacer` retornar `undefined` para qualquer um dos seus elementos, o valor do elemento será substituído por `null` . funções de `replacer` não podem remover valores de uma matriz.

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

#### O `space`

O parâmetro de `space` usado para recuo torna o resultado de `JSON.stringify()` mais bonito.

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

#### Mais Informações:

Consulte os [documentos do MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) .