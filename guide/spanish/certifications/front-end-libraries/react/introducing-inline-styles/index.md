---
title: Introducing Inline Styles
localeTitle: Introducción a los estilos en línea
---
## Introducción a los estilos en línea

## Solución

Este puede ser un poco complicado porque JSX es muy similar a HTML pero **NO es el mismo** .

Repasemos los pasos para que puedas entender la diferencia. Primero establece tu etiqueta de estilo en un **objeto JavaScript** .

```jsx
class Colorful extends React.Component { 
  render() { 
    return ( 
      <div style={{}}> 
        Big Red 
      </div> 
    ); 
  } 
 }; 
```

Ahora tienes tu etiqueta de estilo establecida en un objeto vacío. Observe cómo hay dos conjuntos de llaves. Esta es una diferencia importante entre JSX y HTML.

En segundo lugar, vamos a configurar el color en rojo.

```jsx
class Colorful extends React.Component { 
  render() { 
    return ( 
      <div style={{ color: 'red' }}> 
        Big Red 
      </div> 
    ); 
  } 
 }; 
```

Finalmente, vamos a establecer el tamaño de la fuente a 72px.

### Alerón

```jsx
class Colorful extends React.Component { 
  render() { 
    return ( 
      <div style={{ color: 'red', fontSize: '72'}}> 
        Big Red 
      </div> 
    ); 
  } 
 }; 
```

Observe cómo el atributo JSX es **camelCase** . Esta es otra diferencia importante para recordar acerca de JSX. Además, probablemente notó que no hay unidad. En JSX, al configurar el atributo fontSize, la **unidad es opcional** y se configurará automáticamente a px si no se configura manualmente.