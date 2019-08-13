---
title: Body Bgcolor Attribute
localeTitle: Atributo de cuerpo Bbgcolor 
---
## Cuerpo Bgcolor Atributo

El atributo `<body bgcolor>` asigna un color de fondo para un documento HTML.

**Sintaxis** :

`<body bgcolor="color">` El valor de color puede ser un nombre de color escrito en inglés (como, por ejemplo, `purple` ) o un valor hexadecimal (como `#af0000` ).

Para añadir un color de fondo a una página web puedes usar el atributo `<body bgcolor="######">` . Éste especifica un color en el que se muestre el documento HTML.

**Por ejemplo:**

```html

<html> 
  <head> 
    <title>Ejemplo de atributo de cuerpo bgcolor</title> 
  </head> 
  <body bgcolor="#afafaf"> 
    <h1>Esta página web tiene el fondo en un color.</h1> 
  </body> 
 </html> 
```

Puedes cambiar el color reemplazando el ###### de `<body bgcolor="######">` con un valor hexadecimal. Por ejemplo el color afafaf es gris.

Para colores simples también puedes usar la palabra en inglés, por ejemplo `red`, para el rojo, o `black` para el negro. Así `<body bgcolor="red">` y `<body bgcolor="black">`, respectivamente.

Todos los principales navegadores admiten el atributo `<body bgcolor>` .

_Nota:_

*   HTML5 no admite el atributo `<body bgcolor>`, así que tienes que usar CSS para este propósito. ¿Cómo? Usando el siguiente código: `<body style="background-color: color">` Por supuesto, también puedes hacerlo en un documento separado en lugar de en un método en línea.
    
*   No uses el valor RGB en el atributo `<body bgcolor>` porque `rgb()` es solo para CSS y no funcionará en HTML.
    

**Verlo en acción:** https://repl.it/Mwht/2

**Otros recursos:**

*   Nombres de colores HTML: https://www.w3schools.com/colors/colors\_names.asp
*   Propiedad CSS de color de fondo: https://www.w3schools.com/cssref/pr\_background-color.asp
*   Conversor de colores: https://convertingcolors.com/hex-color-AFAFAF.html
