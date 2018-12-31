---
title: Fragments
localeTitle: Fragmentos
---
# Fragmentos

Fragmentos são formas de renderizar vários elementos sem usar um elemento wrapper. Ao tentar renderizar elementos sem uma tag delimitadora no JSX, você verá a mensagem de erro `Adjacent JSX elements must be wrapped in an enclosing tag` . Isso ocorre porque, quando o JSX transpela, está criando elementos com seus nomes de tag correspondentes e não sabe qual nome de tag deve ser usado se vários elementos forem encontrados. No passado, uma solução frequente para isso era usar um wrapper para resolver esse problema. No entanto, a versão 16 do React trouxe a adição do `Fragment` , o que torna isso desnecessário.

`Fragment` age como um wrapper sem adicionar divs desnecessários ao DOM. Você pode usá-lo diretamente da importação do React ou desconstruí-lo:

```jsx
import React from 'react'; 
 
 class MyComponent extends React.Component { 
  render(){ 
    return ( 
      <React.Fragment> 
        <div>I am an element!</div> 
        <button>I am another element</button> 
      </React.Fragment> 
    ); 
  } 
 } 
 
 export default MyComponent; 
```

```jsx
// Deconstructed 
 import React, { Component, Fragment } from 'react'; 
 
 class MyComponent extends Component { 
  render(){ 
    return ( 
      <Fragment> 
        <div>I am an element!</div> 
        <button>I am another element</button> 
      </Fragment> 
    ); 
  } 
 } 
 
 export default MyComponent; 
```

A versão 16.2 do React simplificou ainda mais esse processo, permitindo que tags JSX vazias sejam interpretadas como Fragmentos:

```jsx
return ( 
  <> 
    <div>I am an element!</div> 
    <button>I am another element</button> 
  </> 
 ); 
```

#### Mais Informações:

*   [React.Fragment (Documentação Oficial)](https://reactjs.org/docs/react-api.html#reactfragment)
*   [Reagir v16.2.0: Suporte aprimorado para fragmentos](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)