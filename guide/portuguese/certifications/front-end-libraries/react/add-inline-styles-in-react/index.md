---
title: Add Inline Styles in React
localeTitle: Adicionar estilos inline em React
---
## Adicionar estilos inline em React

Você pode declarar um estilo de componente passando o objeto diretamente como prop 'style'. Basta lembrar que cada propriedade do objeto de estilo é camelcased. Portanto, propriedades como 'font-size' são declaradas como 'fontSize' como uma propriedade de objeto javascript válida.

### Spoiler

```jsx
class Colorful extends React.Component { 
  render() { 
    // change code below this line 
    return ( 
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div> 
    ); 
    // change code above this line 
  } 
 }; 
```

### Recursos

[Estilo Elementos DOM](https://reactjs.org/docs/dom-elements.html#style)