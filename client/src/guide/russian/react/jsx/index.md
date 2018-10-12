---
title: JSX
localeTitle: JSX
---
# JSX

> JSX является коротким для JavaScript XML.

JSX - это выражение, которое использует допустимые HTML-инструкции в JavaScript. Вы можете назначить это выражение переменной и использовать ее в другом месте. Вы можете комбинировать другие действующие выражения JavaScript и JSX в этих выражениях HTML, помещая их в фигурные скобки ( `{}` ). Babel далее компилирует JSX в объект типа `React.createElement()` .

### Однострочные и многострочные выражения

Однострочное выражение просты в использовании.

```jsx
const one = <h1>Hello World!</h1>; 
```

Когда вам нужно использовать несколько строк в одном выражении JSX, напишите код в пределах одной круглой скобки.

```jsx
const two = ( 
  <ul> 
    <li>Once</li> 
    <li>Twice</li> 
  </ul> 
 ); 
```

### Использование только тегов HTML

```jsx
const greet = <h1>Hello World!</h1>; 
```

### Объединение выражения JavaScript с тегами HTML

Мы можем использовать переменные JavaScript в фигурных скобках.

```jsx
const who = "Quincy Larson"; 
 const greet = <h1>Hello {who}!</h1>; 
```

Мы также можем вызвать другие функции JavaScript в фигурных скобках.

```jsx
function who() { 
  return "World"; 
 } 
 const greet = <h1>Hello {who()}!</h1>; 
```

### Разрешен только один родительский тег

Выражение JSX должно иметь только один родительский тег. Мы можем добавить несколько тегов, вложенных только в родительский элемент.

```jsx
// This is valid. 
 const tags = ( 
  <ul> 
    <li>Once</li> 
    <li>Twice</li> 
  </ul> 
 ); 
 
 // This is not valid. 
 const tags = ( 
  <h1>Hello World!</h1> 
  <h3>This is my special list:</h3> 
  <ul> 
    <li>Once</li> 
    <li>Twice</li> 
  </ul> 
 ); 
```

### Больше информации

*   [Представляем JSX](https://reactjs.org/docs/introducing-jsx.html)