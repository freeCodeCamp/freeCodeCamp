---
title: Img Align Attribute
localeTitle: Img Align Attribute
---
## Img Align Attribute

El atributo de alineación de una imagen especifica dónde se debe alinear la imagen de acuerdo con el elemento circundante.

Valores de atributo:  
derecha - alinear imagen a la derecha izquierda - alinear imagen a la izquierda  
superior: alinear la imagen con la parte superior  
inferior: alinear la imagen con la parte inferior  
medio - alinea la imagen con el medio

Por ejemplo:

```html

<!DOCTYPE html> 
 <html lang="en"> 
  <head> 
   <title>Img Align Attribute</title> 
 </head> 
 <body> 
  <p>This is an example. <img src="image.png" alt="Image" align="middle"> More text right here 
  <img src="image.png" alt="Image" width="100"/> 
  </body> 
 </html> 
```

También podemos alinearnos a la derecha si queremos:

```html

<p>This is another example<img src="image.png" alt="Image" align="right"></p> 
```

**Tenga en cuenta que el atributo de alineación no es compatible con HTML5, y debería usar CSS en su lugar. Sin embargo, todavía es compatible con todos los principales navegadores.**

#### Más información:

[Artículo de MDN sobre la etiqueta img y sus atributos.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)