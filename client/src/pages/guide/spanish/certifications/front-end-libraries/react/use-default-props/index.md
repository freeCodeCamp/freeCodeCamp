---
title: Use Default Props
localeTitle: Usar accesorios predeterminados
---
## Usar accesorios predeterminados

Este desafío tiene que declarar un prop predeterminado para el componente ShoppingCart

```javascript
const ShoppingCart = (props) => { 
  return ( 
    <div> 
      <h1>Shopping Cart Component</h1> 
    </div> 
  ) 
 }; 
```

Para declarar un prop predeterminado, la sintaxis a seguir es

```javascript
itemName.defaultProps = { 
  prop-x: value, 
  prop-y: value 
 } 
```

Siguiendo la sintaxis, el siguiente código debe ser declarado debajo del código dado

```javascript
ShoppingCart.defaultProps = { 
  items: 0 
 } 
```

Esto declara un prop llamado 'elementos' con el valor de '0'.