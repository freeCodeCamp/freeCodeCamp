---
title: Img Align Attribute
localeTitle: Img Align Attribute
---
## Img Align Attribute

O atributo de alinhamento de uma imagem especifica onde a imagem deve ser alinhada de acordo com o elemento circundante.

Valores de Atributo:  
à direita - Alinhar imagem à direita esquerda - Alinhar imagem à esquerda  
parte superior - Alinhar imagem ao topo  
parte inferior - Alinhar imagem ao fundo  
meio - Alinhar imagem ao meio

Por exemplo:

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

Também podemos nos alinhar corretamente se quisermos:

```html

<p>This is another example<img src="image.png" alt="Image" align="right"></p> 
```

**Observe que o atributo align não é suportado em HTML5 e você deve usar CSS. No entanto, ainda é suportado por todos os principais navegadores.**

#### Mais Informações:

[Artigo do MDN sobre a tag img e seus atributos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)