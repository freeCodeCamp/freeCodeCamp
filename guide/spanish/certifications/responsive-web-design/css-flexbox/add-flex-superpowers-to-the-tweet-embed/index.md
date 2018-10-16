---
title: Add Flex Superpowers to the Tweet Embed
localeTitle: Añadir Flex Superpowers al Tweet Insertar
---
## Añadir Flex Superpowers al Tweet Insertar

Sobre la base del [desafío anterior](https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/use-display-flex-to-position-two-boxes/index.md) , deberá agregar la propiedad a los selectores correctos. Aquí el truco es identificar el selector correcto y todo lo que necesita para agregar la _pantalla: flex;_ propiedad.

El encabezado asegurará que los botones de imagen, nombre, control y seguimiento se reposicionen horizontalmente.

```CSS
header { 
    display: flex; 
 } 
```

Alinea el nombre y la manija para mirar como una oración.

```CSS
header .profile-name { 
    display:flex; 
    margin-left: 10px; 
  } 
```

Agregar la propiedad al botón de seguimiento junto con el margen centrará el botón en el tamaño correcto.

```CSS
header .follow-btn { 
    display:flex; 
    margin: 0 0 0 auto; 
  } 
```

La misma idea se utiliza en los elementos del pie de página.