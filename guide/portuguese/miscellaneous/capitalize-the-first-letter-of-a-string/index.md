---
title: Capitalize the First Letter of a String
localeTitle: Capitalize a primeira letra de uma string
---
Para capitalizar a primeira letra de uma string aleatória, você deve seguir estas etapas:

1.  Pegue a primeira letra da string;
2.  Converta a primeira letra em maiúscula;
3.  Obtenha o restante da string;
4.  Concatene a primeira letra maiúscula com o restante da string e retorne o resultado;

## 1\. Obtenha a primeira letra da string

Você deve usar o método [charAt ()](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932) , no _índice 0_ , para selecionar o primeiro caractere da string.

```javascript
var string = "freeCodecamp"; 
 
 string.charAt(0); // Returns "f" 
```

> NOTA: é preferível usar o método `charAt` que usar o `[ ]` ( [notação de colchetes](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950) ) como `str.charAt(0)` retorna uma string vazia ( _`''`_ ) para `str = ''` invés de `undefined` no caso de `''[0]` .

## 2\. Converta a primeira letra em maiúscula

Você pode usar o método [toUpperCase ()](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950) e converta a string de chamada para maiúscula.

```javascript
var string = "freeCodecamp"; 
 
 string.charAt(0).toUpperCase(); // Returns "F" 
```

## 3\. Obtenha o restante da string

Você pode usar o método [slice ()](https://github.com/freecodecamp/freecodecamp/wiki/js-array-prototype-slice) e obter o restante da cadeia (do segundo caractere, _índice 1_ , até o final da cadeia).

```javascript
var string = "freeCodecamp"; 
 
 string.slice(1); // Returns "reeCodecamp" 
```

## 4\. Retorne o resultado adicionando a primeira letra e o restante da string

Você deve criar uma função que aceite uma string como único argumento e retorne a concatenação da primeira letra capitalized `string.charAt(0).toUpperCase()` e o restante da string `string.slice(1)` .

```javascript
var string = "freeCodecamp"; 
 
 function capitalizeFirstLetter(str) { 
  return str.charAt(0).toUpperCase() + str.slice(1); 
 } 
 
 capitalizeFirstLetter(string); // Returns "FreeCodecamp" 
```

Ou você pode adicionar essa função ao `String.prototype` para usá-lo diretamente em uma string usando o seguinte código ( _para que o método não seja enumerável, mas possa ser sobrescrito ou excluído posteriormente_ ):

```javascript
var string = "freeCodecamp"; 
 
 /* this is how methods are defined in prototype of any built-in Object */ 
 Object.defineProperty(String.prototype, 'capitalizeFirstLetter', { 
    value: function () { 
        return this.charAt(0).toUpperCase() + this.slice(1); 
    }, 
    writable: true, // so that one can overwrite it later 
    configurable: true // so that it can be deleted later 
 }); 
 
 string.capitalizeFirstLetter(); // Returns "FreeCodecamp" 
```

### Fonte

[stackoverflow - Capitalize a primeira letra da string em JavaScript](http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript/1026087#1026087)