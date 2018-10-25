---
title: Error Handling and Try Catch Throw
---
## Error Handling and Try Catch Throw

The `try...catch..finally` statement marks a block of statements to try, and specifies a response, should an exception be thrown. The `try` statement contains one or more statements, and at least one `catch` clause or a `finally` clause, or both.


#### `try...catch`:
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


#### `try...finally`:
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
*Note:* when you don't `catch` the error, it is in fact not 'catched', even though the `finally` block is executed. That means that the error will continue to the upper `try` block (or main block).

#### `try...catch...finally`:
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

Typical usage:
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

#### Nested `try...catch`:
You can also:
- Nest a `try-catch` statement inside a `try` block.
- Throw the error upwards.
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
#### Types of Error

##### Reference Error

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

##### Syntax Error

```javascript
try {
    eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
    console.log(err.name,err.message);
}
// SyntaxError Invalid or unexpected token
```

##### Type Error

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

##### URI Error

```javascript
try {
    decodeURI("%%%");   // You cannot URI decode these percent signs
}
catch(err) {
    console.log(err.name, err.message);
}
// URIError URI malformed
```


#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch' target='_blank' rel='nofollow'>MDN</a>
<a href='https://www.w3schools.com/js/js_errors.asp' target='_blank' rel='nofollow'>W3S</a>
