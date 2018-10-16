---
title: Img Tag
localeTitle: Etiqueta Img
---
## Etiqueta Img

Un simple elemento de imagen HTML puede incluirse en un documento HTML como este:

```html

<img src="path/to/image/file" alt="this is a cool picture"> 
```

`alt` etiquetas `alt` proporcionan texto alternativo para una imagen. Un uso de la etiqueta `alt` es para personas con discapacidad visual que utilizan un lector de pantalla; se puede leer la etiqueta `alt` de la imagen para comprender el significado de la imagen.

Tenga en cuenta que la ruta al archivo de imagen puede ser relativa o absoluta. Además, recuerde que el elemento `img` se cierra automáticamente, lo que significa que no se cierra con la `<img />` y en su lugar se cierra con solo una `>` .

Ejemplo:

```html

<img src="https://example.com/image.png" alt="my picture"> 
```

(Esto es asumiendo que el archivo html está en https://example.com/index.html, por lo que está en la misma carpeta que el archivo de imagen)

es lo mismo que:

```html

<img src="image.png" alt="my picture"> 
```

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) [Escuelas w3](https://www.w3schools.com/TAGs/tag_img.asp)