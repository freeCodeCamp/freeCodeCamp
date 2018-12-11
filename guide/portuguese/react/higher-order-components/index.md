---
title: Higher-Order Components
localeTitle: Componentes de ordem superior
---
## Componentes de ordem superior

Em React, um **componente de ordem mais alta** (HOC) é uma função que usa um componente e retorna um novo componente. Os programadores usam HOCs para obter a **reutilização lógica de componentes** .

Se você já usou o Redux's `connect` , você já trabalhou com componentes de alta ordem.

A ideia principal é:

```jsx
const EnhancedComponent = enhance(WrappedComponent); 
```

Onde:

*   `enhance` é o componente de ordem superior;
*   `WrappedComponent` é o componente que você deseja aprimorar; e
*   `EnhancedComponent` é o novo componente criado.

Este poderia ser o corpo da `enhance` HOC:

```jsx
function enhance(WrappedComponent) { 
  return class extends React.Component { 
    render() { 
      const extraProp = 'This is an injected prop!'; 
      return ( 
        <div className="Wrapper"> 
          <WrappedComponent 
            {...this.props} 
            extraProp={extraProp} 
          /> 
        </div> 
      ); 
    } 
  } 
 } 
```

Nesse caso, `enhance` retorna uma **classe anônima** que estende `React.Component` . Este novo componente está fazendo três coisas simples:

*   Renderizando o `WrappedComponent` dentro de um elemento `div` ;
*   Passando seus próprios props para o `WrappedComponent` ; e
*   Injetando um suporte extra para o `WrappedComponent` .

Os HOCs são apenas um padrão que usa o poder da natureza composicional de React. **Eles adicionam recursos a um componente** . Há muito mais coisas que você pode fazer com eles!

## Outros recursos

*   [React docs: Componentes de alta ordem](https://reactjs.org/docs/higher-order-components.html)