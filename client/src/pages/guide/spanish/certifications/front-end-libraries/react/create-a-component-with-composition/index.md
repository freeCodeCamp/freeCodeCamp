---
title: Create a Component with Composition
localeTitle: Crear un componente con composición
---
## Crear un componente con composición

### Sugerencia 1

Agregue el componente que se va a representar en el componente en el que se va a representar.

### Sugerencia 2

Utilice las etiquetas de cierre automático JSX.

### Sugerencia 3

El componente que se procesará es ChildComponenet y se representará en ParentComponent

### Solución

Lo siguiente representará a ChildComponent en ParentComponent, según sea necesario:

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