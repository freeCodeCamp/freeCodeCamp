---
title: Background
localeTitle: Fondo
---
## Fondo

La propiedad de fondo (background) te permite usar imágenes y colores para crear fondos para tus páginas web.

### Color de Fondo

La propiedad de color de fondo te permite elegir el color de tu elemento. Éste puede ser el fondo de toda la página o el fondo de una sección de tu página.

*   Un elemento es una pieza de HTML, como un encabezado o un párrafo en una página web.

Este es un ejemplo de cómo configurar el color de fondo para una página web en verde.

```css
  body { 
    background-color: green; 
  } 
```

![fullbackground](https://user-images.githubusercontent.com/26467304/31036038-845567f2-a538-11e7-8e6c-8a52bb0d44b8.png)

Aquí hay un ejemplo de configuración de los colores para dos elementos. Esto establecerá el fondo del encabezado al color morado y el resto de la página a azul.

```css
  body { 
    background-color: blue; 
  } 
  h1 { 
    background–color: purple; 
  } 
```

![Twobackground](https://user-images.githubusercontent.com/26467304/31036152-0607936a-a539-11e7-9e9f-a5e60ade042d.png)

En CSS el color se puede definir de tres maneras:

*   Un nombre de color válido como `blue`
*   Un valor HEX como `#FFFFF` (Este es el valor hexadecimal para el blanco).
*   Un valor RGB como `rgb(76,175,80)` (este es el valor RGB para verde claro).

### Imágenes de Fondo

Puedes utilizar la propiedad de imagen de fondo para establecer una imagen como fondo para un elemento. La imagen se repite de forma predeterminada para que cubra todo el elemento.

```css
body { 
  background-image: url("barn.jpg"); 
 } 
```

![imagen](https://user-images.githubusercontent.com/26467304/31036366-eb1fc260-a539-11e7-835d-e3f935a22c86.png)

También puede vincular imágenes o gifs que encuentre en línea usando un enlace (ej.: desde una búsqueda en Google Imágenes).

```css
body { 
  background-image: url("https://mdn.mozillademos.org/files/11983/starsolid.gif"); 
 } 
```

### Imagen de Fondo - La Propiedad de Repetición

La imagen de fondo se repite tanto verticalmente (arriba y abajo) como horizontalmente (a través de la página web) de forma predeterminada. Puedes usar la propiedad de repetición de fondo para repetir la imagen vertical u horizontalmente.

Aquí hay un ejemplo que repite la imagen verticalmente.

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: repeat-y; 
 } 
```

![vertical](https://user-images.githubusercontent.com/26467304/31039770-8962c7a6-a54e-11e7-9d25-4fb09760d219.PNG)

Puede repetir la imagen horizontalmente configurando la propiedad de repetición de fondo en `repeat-x`.

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: repeat-x; 
 } 
```

También puede configurar la propiedad de repetición de fondo para que una imagen no se repita.

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: no-repeat; 
 } 
```

![norepeat](https://user-images.githubusercontent.com/26467304/31039801-c8761efc-a54e-11e7-8bb9-ec5b88885a50.PNG)

### Imagen de Fondo - La Propiedad de Posición

Puedes usar la propiedad de posición para especificar dónde se ubicará tu imagen en una página web.

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: no-repeat; 
  background-position: right top; 
 } 
```

![posición](https://user-images.githubusercontent.com/26467304/31039828-077d1038-a54f-11e7-8aa6-092253ca92b8.PNG)

### Imagen de Fondo - La Posición Fija

Puede utilizar la propiedad `background-attachment` para establecer una imagen en una posición fija. Una posición fija hace que una imagen no se desplace con el resto de la página.

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: no-repeat; 
  background-position: right top; 
  background-attachment: fixed; 
 } 
```

![fijo](https://user-images.githubusercontent.com/26467304/31039859-39612c92-a54f-11e7-93ca-9d7bcb938225.PNG)

### Gradientes de Fondo

Un gradiente es una transición entre dos o más colores y se puede usar en CSS de forma similar a una imagen de fondo.

La sintaxis de un fondo con gradiente puede ser bastante compleja, y a menudo se usa con prefijos de proveedores debido a las inconsistencias entre los navegadores compatibles.

El [Colorzilla Gradient Editor](http://www.colorzilla.com/gradient-editor/) es una excelente herramienta en línea para generar gradientes personalizados y el marcado css asociado.

### Fondo - La Propiedad Abreviada

Puede escribir las propiedades de fondo en una sola línea. Esto se conoce como propiedad abreviada.

```css
body { 
  background: url("barn.jpg") no-repeat right top; 
 } 
```

Puede omitir las propiedades que no necesita al usar la propiedad abreviada, pero las propiedades deben utilizarse en un cierto orden. El orden es:

*   `color`
*   `image`
*   `repeat`
*   `attachment`
*   `position`

### Múltiples Imágenes de Fondo

Puedes especificar varias imágenes de fondo en una sola propiedad de fondo.

```css
body { 
  background: url("barn.jpg"), url("stars.jpg"), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)); 
 } 
```

La primera imagen (o gradiente) especificada se situa encima, la segunda viene después, y así sucesivamente. Si uno de los elementos no es correcto debido a su URL o su sintaxis, el navegador ignorará toda la línea.

### Algunas Propiedades Básicas de Fondo de CSS

Las propiedades de fondo de CSS se utilizan para definir los efectos de fondo para los elementos.

Propiedades de fondo CSS: `background-color` `background-image` `background-repeat` `background-attachment` `background-position`

Puede consultar el siguiente enlace a W3 Schools para obtener más información sobre antecedentes y temas relacionados en CSS. [Referencia de fondo a W3](https://www.w3schools.com/css/css_background.asp)

### Otros recursos

*   [Lista de valores de color](http://cloford.com/resources/colours/500col.htm)
*   [Herramienta selector de color](http://colrd.com/create/palette/)
