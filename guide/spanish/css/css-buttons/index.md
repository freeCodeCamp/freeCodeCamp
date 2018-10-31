---
title: CSS Buttons
localeTitle: Botones CSS
---
## Botones CSS

*   Puede aplicar estilo a cualquier botón pulsable (elemento `<button>` HTML)

`<button>Click Me</button>`

*   El botón predeterminado se parece a lo siguiente:

![Default Button Style](https://image.ibb.co/kCweAm/button.png "Estilo de botón predeterminado")

## Estilo de un botón

Puede cambiar varias propiedades de un botón para cambiar su apariencia.

Para agregar sombras al botón use la propiedad `box-shadow` .

Para agregar transparencia a un botón para un efecto deshabilitado use la `opacity` la propiedad.

Para eliminar los márgenes y crear un grupo de botones, agregue `float:left/right` propiedad `float:left/right` .

Para crear un grupo de botones pero con los bordes, use la propiedad `float` y agregue una `border property` .

Para crear un grupo vertical de botones use display: `block property` .

### Color del boton

Para cambiar el color de fondo de un botón, use la propiedad de color de fondo:

`button {background-color: #6ba0f4;}`

![Button Background-Color](https://image.ibb.co/f5Xpt6/button_bg_blue.png "Botón de fondo-color")

Para agregar un borde de color a un botón, use la propiedad de borde:
```
button { 
  background-color: #FFF; 
  color: #FFF; 
  border: 2px solid #6ba0f4; 
 } 
```

![Button Border](https://image.ibb.co/kUqymR/button_border_blue.png "Borde del botón")

### Tamaño del texto del botón

Para cambiar el tamaño de fuente del texto de un botón, use la propiedad de tamaño de fuente:

`button {font-size: 20px;}`

![Button Text Size](https://image.ibb.co/gM9r6R/button_fontsize.png "Tamaño del texto del botón")

### Acolchado de botones

Para cambiar el relleno de un botón, use la propiedad de relleno:

`button {padding: 15px 30px;}`

![Button Padding](https://image.ibb.co/fKer6R/button_padding.png "Acolchado de botones")

### Ancho del botón

Para cambiar el ancho de un botón, independientemente del contenido del texto, use la propiedad de ancho:

`button {width: 250px;}`

![Button Width](https://image.ibb.co/cDgSfm/button_width.png "Ancho del botón")

### Botones redondos

Para crear botones redondeados, use la propiedad border-radius:

`button {border-radius: 50%;}`

![Rounded Buttons](https://image.ibb.co/cfH00m/button_bradius.png "Botones redondos")

### Botones Hoverable

Para cambiar el estilo de un botón cuando mueva el mouse sobre él, use el: selector de desplazamiento:
```
button:hover { 
  background-color: #0E2C5B; 
  color: #FFF; 
 } 
```

![Hoverable Buttons](https://image.ibb.co/hxQnfm/button_hover.png "Botones Hoverable")

Para determinar la velocidad del efecto de desplazamiento, utilice la `transition-duration` la propiedad.

### Botones desactivados

Para deshabilitar un botón, use la propiedad del cursor:
```
button { 
  cursor: not-allowed; 
 } 
```

#### Más información:

*   https://www.w3schools.com/css/css3\_buttons.asp
*   https://www.w3schools.com/howto/howto _css_ animate\_buttons.asp