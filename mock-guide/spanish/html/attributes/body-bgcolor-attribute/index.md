---
title: Body Bgcolor Attribute
localeTitle: Cuerpo Bgcolor Atributo
---
## Cuerpo Bgcolor Atributo

El atributo `<body bgcolor>` asigna un color de fondo para un documento HTML.

**Sintaxis** :

`<body bgcolor="color">` El valor de color puede ser un nombre de color (como, `purple` ) o un valor hexadecimal (como, `#af0000` ).

Para agregar un color de fondo a una página web puede usar el atributo `<body bgcolor="######">` . Especifica un color para que se muestre el documento HTML.

**Por ejemplo:**

```html

<html> 
  <head> 
    <title>Body bgcolor Attribute example</title> 
  </head> 
  <body bgcolor="#afafaf"> 
    <h1>This webpage has colored background.</h1> 
  </body> 
 </html> 
```

Puede cambiar el color reemplazando ###### con un valor hexadecimal. Para colores simples también puede usar la palabra, como "rojo" o "negro".

Todos los principales navegadores admiten el atributo `<body bgcolor>` .

_Nota:_

*   HTML 5 no admite el atributo `<body bgcolor>` . Usa CSS para este propósito. ¿Cómo? Usando el siguiente código: `<body style="background-color: color">` Por supuesto, también puede hacerlo en un documento separado en lugar de en un método en línea.
    
*   No use el valor RGB en el atributo `<body bgcolor>` porque `rgb()` es solo para CSS, es decir, no funcionará en HTML.
    

**Véalo en acción:** https://repl.it/Mwht/2

**Otros recursos:**

*   Nombres de colores HTML: https://www.w3schools.com/colors/colors\_names.asp
*   Propiedad CSS de color de fondo: https://www.w3schools.com/cssref/pr\_background-color.asp