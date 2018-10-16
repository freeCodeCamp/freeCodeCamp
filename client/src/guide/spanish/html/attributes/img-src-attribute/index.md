---
title: Img Src Attribute
localeTitle: Atributo Img Src
---
## Atributo Img Src

El atributo `<img src>` refiere a la fuente de la imagen que desea mostrar. La etiqueta `img` no mostrará una imagen sin el atributo `src` . Sin embargo, si configura la fuente en la ubicación de la imagen, puede mostrar cualquier imagen.

Hay una imagen del logotipo de freeCodeCamp ubicado en `https://avatars0.githubusercontent.com/u/9892522?v=4&s=400`

Puedes establecer eso como la imagen usando el atributo `src` .

```html

<html> 
  <head> 
    <title>Img Src Attribute Example</title> 
  </head> 
  <body> 
    <img src="https://avatars0.githubusercontent.com/u/9892522?v=4&s=400"> 
  </body> 
 </html> 
```

El código de arriba se muestra así:

![El avatar de freeCodeCamp](https://avatars0.githubusercontent.com/u/9892522?v=4&s=400?raw=true)

El atributo `src` es compatible con todos los navegadores.

También puede tener un archivo alojado localmente como su imagen.

Por ejemplo, `<img src="images/freeCodeCamp.jpeg>` funcionaría si tuviera una carpeta llamada `images` que tuviera `freeCodeCamp.jpeg` dentro, siempre y cuando la carpeta 'images' estuviera en la misma ubicación que el archivo `index.html` .

`../files/index.html`

`..files/images/freeCodeCamp.jpeg`

### Más información:

*   [HTML.com](https://html.com/attributes/img-src/)
*   [Escuelas w3](https://www.w3schools.com/tags/att_img_src.asp)