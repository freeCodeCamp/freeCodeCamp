---
title: Functional Components vs Class Components
localeTitle: Componentes Funcionais vs Componentes de Classe
---
## Componentes Funcionais vs Componentes de Classe

Existem basicamente dois componentes no React:

*   Componentes Funcionais
*   Componentes de Classe

## Componentes Funcionais

*   Componentes funcionais são funções básicas do JavaScript. Estas são tipicamente funções de seta, mas também podem ser criadas com a palavra-chave de `function` regular.
*   Às vezes, são chamados de componentes "burros" ou "sem estado", pois simplesmente aceitam dados e os exibem de alguma forma; ou seja, eles são os principais responsáveis ​​pela renderização da interface do usuário.
*   Os métodos de ciclo de vida de reação (por exemplo, `componentDidMount` ) não podem ser usados ​​em componentes funcionais.
*   Não há nenhum método de renderização usado em componentes funcionais.
*   Esses são os principais responsáveis ​​pela interface do usuário e são normalmente apenas de apresentação (por exemplo, um componente Button).
*   Componentes funcionais podem aceitar e usar adereços.
*   Componentes funcionais devem ser favorecidos se você não precisar usar o estado Reagir.

```js
import React from "react"; 
 
 const Person = props => ( 
  <div> 
    <h1>Hello, {props.name}</h1> 
  </div> 
 ); 
 
 export default Person; 
```

## Componentes de Classe

*   Componentes de classe fazem uso da classe ES6 e estendem a classe `Component` no React.
*   Às vezes chamados de componentes "inteligentes" ou "com estado", pois tendem a implementar lógica e estado.
*   Os métodos de ciclo de vida de reação podem ser usados ​​dentro de componentes de classe (por exemplo, `componentDidMount` ).
*   Você passa para os componentes da classe e acessa-os com `this.props`

```js
import React, { Component } from "react"; 
 
 class Person extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
      myState: true; 
    } 
  } 
 
  render() { 
    return ( 
      <div> 
        <h1>Hello Person</h1> 
      </div> 
    ); 
  } 
 } 
 
 export default Person; 
```

## Mais Informações

*   [Reagir Componentes](https://reactjs.org/docs/components-and-props.html)
*   [Componentes funcionais vs classe](https://react.christmas/16)
*   [Componentes funcionais Stateful vs Stateless em React](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541)
*   [Estado e LifeCycle](https://reactjs.org/docs/state-and-lifecycle.html)