---
title: Create a Component with Composition
localeTitle: Crie um componente com composição
---
## Crie um componente com composição

### Sugestão 1

Adicione o componente a ser renderizado no componente no qual ele será renderizado.

### Sugestão 2

Use tags de fechamento automático de JSX.

### Dica 3

O componente a ser renderizado é ChildComponenet e deve ser renderizado em ParentComponent

### Solução

A seguir será renderizado o ChildComponent no ParentComponent, conforme necessário:

```javascript
class ParentComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <h1>I am the parent</h1> 
        <ChildComponent /> 
      </div> 
    ); 
  } 
 }; 

```