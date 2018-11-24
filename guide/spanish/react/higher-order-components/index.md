---
title: Higher-Order Components
localeTitle: Componentes de orden superior
---
## Componentes de orden superior

En React, un **componente de orden superior** (HOC) es una función que toma un componente y devuelve un nuevo componente. Los programadores utilizan HOC para lograr la **reutilización de la lógica de los componentes** .

Si ha utilizado la `connect` de Redux, ya ha trabajado con componentes de orden superior.

La idea central es:

```jsx
const EnhancedComponent = enhance(WrappedComponent); 
```

Dónde:

*   `enhance` es el componente de orden superior;
*   `WrappedComponent` es el componente que desea mejorar; y
*   `EnhancedComponent` es el nuevo componente creado.

Este podría ser el cuerpo de la `enhance` HOC:

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

En este caso, la `enhance` devuelve una **clase anónima** que extiende `React.Component` . Este nuevo componente está haciendo tres cosas simples:

*   Renderizar el `WrappedComponent` dentro de un elemento `div` ;
*   Pasando sus propios apoyos al `WrappedComponent` ; y
*   Inyectando un apoyo extra al `WrappedComponent` .

Los HOC son solo un patrón que utiliza el poder de la naturaleza compositiva de React. **Añaden características a un componente** . ¡Hay muchas más cosas que puedes hacer con ellos!

## Otros recursos

*   [Reaccionar documentos: componentes de orden superior](https://reactjs.org/docs/higher-order-components.html)