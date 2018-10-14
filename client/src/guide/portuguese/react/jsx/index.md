---
title: JSX
localeTitle: JSX
---
# JSX

> JSX é a abreviação de JavaScript XML.

JSX é uma expressão que usa instruções HTML válidas no JavaScript. Você pode atribuir essa expressão a uma variável e usá-la em outro lugar. Você pode combinar outras expressões JavaScript válidas e JSX nessas instruções HTML, colocando-as entre chaves ( `{}` ). O Babel compila ainda mais o JSX em um objeto do tipo `React.createElement()` .

### Expressões de linha única e multilinha

Expressão de linha única é simples de usar.

```jsx
const one = <h1>Hello World!</h1>; 
```

Quando você precisar usar várias linhas em uma única expressão JSX, escreva o código em um único parênteses.

```jsx
const two = ( 
  <ul> 
    <li>Once</li> 
    <li>Twice</li> 
  </ul> 
 ); 
```

### Usando apenas tags HTML

```jsx
const greet = <h1>Hello World!</h1>; 
```

### Combinando a expressão JavaScript com tags HTML

Podemos usar variáveis ​​JavaScript entre chaves.

```jsx
const who = "Quincy Larson"; 
 const greet = <h1>Hello {who}!</h1>; 
```

Também podemos chamar outras funções JavaScript entre chaves.

```jsx
function who() { 
  return "World"; 
 } 
 const greet = <h1>Hello {who()}!</h1>; 
```

### Apenas uma tag pai / mãe é permitida

Uma expressão JSX deve ter apenas uma tag pai. Podemos adicionar várias tags aninhadas apenas no elemento pai.

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

### Mais Informações

*   [Apresentando o JSX](https://reactjs.org/docs/introducing-jsx.html)