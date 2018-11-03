---
title: Render Props Component
localeTitle: Componente Adereços de Renderização
---
## Componente Adereços de Renderização

Adereços de renderização é um padrão de Reação avançada, mas tão simples!

### Exemplo

Este é um exemplo de como você pode usar prop de renderização para uma funcionalidade de alternância.

```jsx
import React, { PureComponent } from "react"; 
 
 class Toggle extends PureComponent { 
  state = { 
    on: false 
  }; 
 
  toggle = () => { 
    this.setState({ 
      on: !this.state.on 
    }); 
  }; 
 
  render() { 
    const { children } = this.props; 
    return children({ 
      on: this.state.on, 
      toggle: this.toggle 
    }); 
  } 
 } 
 
 export default Toggle; 
```

Este componente de alternância vai devolvê-lo para crianças `state.on` ea alternância função. Que pode ser usado em seus componentes filhos.

Essa alternância pode ser usada da seguinte maneira:

```jsx
<Toggle> 
  {({ on, toggle }) => ( 
    <Fragment> 
      <button onClick={toggle}>Show / Hide</button> 
      {on && <h1>I can be toggled on or off!</h1>} 
    </Fragment> 
  )} 
 </Toggle> 
```

Como você pode ver, a funcionalidade de alternância pode ser usada pelo seu botão filho para alternar algum conteúdo. se on for true, a tag h1 será renderizada, caso contrário, não.

## Outros recursos

*   [React docs: Render adereços](https://reactjs.org/docs/render-props.html)