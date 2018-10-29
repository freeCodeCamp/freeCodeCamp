---
title: Error Handling and Try Catch Throw
localeTitle: 错误处理和尝试抓住投掷
---
## 错误处理和尝试抓住投掷

`try...catch..finally`语句标记要尝试的语句块，并指定响应，如果抛出异常。 `try`语句包含一个或多个语句，以及至少一个`catch`子句或`finally`子句，或两者。

#### `try...catch` ：

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

#### `try...finally` ：

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

_注意：_当你没有`catch`到错误时，它实际上并没有被“ `catch` ”，即使执行了`finally`块。这意味着错误将继续到上面的`try`块（或主块）。

#### `try...catch...finally` ：

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

典型用法：

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

#### 嵌套`try...catch` ：

你也可以：

*   在`try`块中嵌入`try-catch`语句。
*   向上抛出错误。

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

#### 错误类型

##### 参考错误

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

##### 语法错误

```javascript
try { 
    eval("alert('Hello)");   // Missing ' will produce an error 
 } 
 catch(err) { 
    console.log(err.name,err.message); 
 } 
 // SyntaxError Invalid or unexpected token 
```

##### 输入错误

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

##### URI错误

```javascript
try { 
    decodeURI("%%%");   // You cannot URI decode these percent signs 
 } 
 catch(err) { 
    console.log(err.name, err.message); 
 } 
 // URIError URI malformed 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try…catch) [W3S](https://www.w3schools.com/js/js_errors.asp)