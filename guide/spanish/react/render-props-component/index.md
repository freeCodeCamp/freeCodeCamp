---
title: Render Props Component
localeTitle: Componente Render Props
---
## Componente Render Props

Los accesorios de renderización son un patrón React avanzado, pero tan simple!

### Ejemplo

Este es un ejemplo de cómo puede usar la función de representación para una funcionalidad de alternar.

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

Este componente Toggle devolverá los niños es `state.on` y la palanca de funcionamiento. Que se puede utilizar en sus componentes secundarios.

Este Toggle se puede utilizar de la siguiente manera:

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

Como puede ver, la función de alternar puede ser utilizada por su botón secundario para alternar algún contenido. si está activado, la etiqueta h1 se procesará de otro modo.

También vale la pena brevemente mencionar que una forma análoga y común de usar el patrón de render props puede ser expresada de la siguiente manera:

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
    const { render } = this.props; 
    return render({
      on: this.state.on,
      toggle: this.toggle
    });
  }
 }
 
 export default Toggle;
```
Y consecuentemente en su uso,

```jsx
<Toggle onToggle={onToggle} render={({ on, toggle }) => ( 
<Fragment>
  <button onClick={toggle}>Show / Hide</button>
  {on && <h1>I can be toggled on or off!</h1>}
</Fragment>)} />
```
El uso de ambas formas son funcionalmente equivalentes. No hay ninguna diferencia de funcionalidad.

## Otros recursos

*   [React docs: Render props](https://reactjs.org/docs/render-props.html)
