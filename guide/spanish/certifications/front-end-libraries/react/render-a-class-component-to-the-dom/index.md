---
title: Render a Class Component to the DOM
localeTitle: Renderizar un componente de clase al DOM
---
## Renderizar un componente de clase al DOM

Tu código debería terminar pareciéndose a esto:

```javascript
class TypesOfVehicles extends React.Component { 
    constructor(props) { 
        super(props); 
    } 
    render() { 
        return ( 
          <div> 
          <h1>Types of Vehicles:</h1> 
          <Car /> 
          <Motorcycle /> 
          </div> 
        ); 
    } 
 } 
 ReactDOM.render(<TypesOfVehicles />,'node-id') 
```

La sintaxis de ReactDOM.render puede ser un poco complicada, debe usar los corchetes de triángulos cuando pase un componente de clase. Además, los dos subcomponentes se declaran entre bambalinas, lo que puede resultar confuso si estás acostumbrado a todas las variables que se definen en el editor de código y que están visibles delante de ti.

### Insinuación

*   use document.getElementById ('id') para obtener el nodo de destino

### Enlace relevante

*   [Elementos de representación](https://reactjs.org/docs/rendering-elements.html)