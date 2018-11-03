---
title: Error Handling and Try Catch Throw
localeTitle: Tratamento de erros e tentativa de arremesso
---
## Tratamento de erros e tentativa de arremesso

A instrução `try...catch..finally` marca um bloco de instruções para tentar e especifica uma resposta, caso uma exceção seja lançada. A instrução `try` contém uma ou mais instruções e pelo menos uma cláusula `catch` ou uma cláusula `finally` , ou ambas.

#### `try...catch` :

```javascript
try { 
   throw new Error('my error'); 
 } 
 catch (e) { 
  console.error(e.message); 
 } 
 
 // Output: 
 // my error 
```

#### `try...finally` :

```javascript
try { 
   throw new Error('my error'); 
 } 
 finally { 
  console.error('finally'); 
 } 
 
 // Output: 
 // finally 
```

_Nota:_ quando você não `catch` o erro, na verdade ele não é 'travado', mesmo que o bloco `finally` seja executado. Isso significa que o erro continuará no bloco `try` superior (ou bloco principal).

#### `try...catch...finally` :

```javascript
try { 
   throw new Error('my error'); 
 } 
 catch (e) { 
  console.error(e.message); 
 } 
 finally { 
  console.error('finally'); 
 } 
 
 // Output: 
 // my error 
 // finally 
```

Uso típico:

```javascript
try { 
   openFile(file); 
   readFile(file) 
 } 
 catch (e) { 
  console.error(e.message); 
 } 
 finally { 
  closeFile(file); 
 } 
```

#### Nested `try...catch` :

Você também pode:

*   Aninhe uma instrução `try-catch` dentro de um bloco `try` .
*   Jogue o erro para cima.

```javascript
try { 
  try { 
    throw new Error('my error'); 
  } 
  catch (e) { 
    console.error('inner', e.message); 
    throw e; 
  } 
  finally { 
    console.log('finally'); 
  } 
 } 
 catch (e) { 
  console.error('outer', e.message); 
 } 
 
 // Output: 
 // inner my error 
 // finally 
 // outer my error 
```

#### Tipos de erro

##### Erro de referência

```javascript
var x; 
 try { 
  x = y + 1;   // y cannot be referenced (used) 
 } 
 catch(err) { 
  console.log(err.name, err.message); 
 } 
 // ReferenceError y is not defined 
```

##### Erro de sintaxe

```javascript
try { 
    eval("alert('Hello)");   // Missing ' will produce an error 
 } 
 catch(err) { 
    console.log(err.name,err.message); 
 } 
 // SyntaxError Invalid or unexpected token 
```

##### Erro de tipo

```javascript
var num = 1; 
 try { 
    num.toUpperCase();   // You cannot convert a number to upper case 
 } 
 catch(err) { 
    console.log(err.name, err.message); 
 } 
 // TypeError num.toUpperCase is not a function 
```

##### Erro de URI

```javascript
try { 
    decodeURI("%%%");   // You cannot URI decode these percent signs 
 } 
 catch(err) { 
    console.log(err.name, err.message); 
 } 
 // URIError URI malformed 
```

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try…catch) [W3S](https://www.w3schools.com/js/js_errors.asp)