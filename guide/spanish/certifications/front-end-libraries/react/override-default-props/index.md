---
title: Override Default Props
localeTitle: Anular apoyos predeterminados
---
## Anular apoyos predeterminados

Este desafío tiene que anular el valor predeterminado de la `quantity` de accesorios para el componente Artículos. Donde el valor predeterminado de `quantity` se establece en `0` .

```jsx
const Items = (props) => { 
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1> 
 } 
 
 Items.defaultProps = { 
  quantity: 0 
 } 
```

Para anular un valor de propiedades predeterminado, la sintaxis que se debe seguir es

```jsx
<Component propsName={Value}/> 
```

Siguiendo la sintaxis, el siguiente código debe ser declarado debajo del código dado

```jsx
<Items quantity={50}/> 
```

Esto anulará el valor `0` a `50`