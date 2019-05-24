---
title: Render State in the User Interface
localeTitle: Estado de renderização na interface do usuário
---
## Estado de renderização na interface do usuário

No desafio, você precisará renderizar um valor de estado na tag `<h1>` , bem simples.

## Sugestão

Basta criar uma tag `<h1>` e renderizar `this.state.name` entre a tag.

## Solução

```jsx
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'freeCodeCamp' 
    } 
  } 
  render() { 
    return ( 
      <div> 
        { /* change code below this line */ } 
        <h1>{this.state.name}</h1> 
        { /* change code above this line */ } 
      </div> 
    ); 
  } 
 }; 

```