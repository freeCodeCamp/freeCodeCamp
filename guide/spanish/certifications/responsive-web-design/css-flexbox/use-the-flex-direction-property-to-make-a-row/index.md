---
title: Use the flex-direction Property to Make a Row
localeTitle: Utilice la propiedad de dirección flexible para hacer una fila
---
## Utilice la propiedad de dirección flexible para hacer una fila

Una vez que tenga un contenedor flexible agregando _display: flex;_ al contenedor principal, puede especificar si desea que los secundarios se apilen en una fila agregando lo siguiente:

```css
#box-container { 
    display: flex; /* This makes the flex container */ 
    height: 500px; 
    flex-direction: row-reverse; /* This makes the direction be a row with reversed elements */ 
  } 
```

Notará cómo los colores cambian de posición, ya que la dirección predeterminada de los contenedores flexibles son filas, como puede haber notado en el [ejemplo de tweet](https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed/index.md) .