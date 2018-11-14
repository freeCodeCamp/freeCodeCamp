---
title: Write a React Component from Scratch
localeTitle: Escrever um componente Reagir do zero
---
## Escrever um componente Reagir do zero

Neste desafio, queremos criar um componente de reação de `class` (componentes React podem ser componentes de `class` ou componentes de `function` ). Todos os nossos componentes de classe serão uma extensão do `React.Component` . Por exemplo, podemos começar a fazer um componente chamado `FirstComponent` com:

```javascript
class FirstComponent extends React.Component { 
 
 }; 
```

Também precisamos ter certeza de definir o `constructor` para nossa nova classe. É uma boa prática chamar o `constructor` qualquer componente com `super` e passar `props` para ambos. `super` puxa o `constructor` da classe pai do nosso componente (nesse caso, `React.Component` ). Agora, o código para o nosso componente é assim:

```javascript
class FirstComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
 
 }; 
```

Agora tudo o que resta a fazer é definir o que nosso componente `render` ! Fazemos isso chamando o método de `render` do componente e retornando nosso código JSX:

```javascript
class FirstComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      // The JSX code you put here is what your component will render 
    ); 
  } 
 }; 
```

Uma vez que seu código JSX está lá, seu componente está completo! Se você quiser um tutorial mais granular dos componentes do React, Samer Buna [escreveu um ótimo artigo](https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc) .