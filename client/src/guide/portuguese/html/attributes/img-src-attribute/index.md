---
title: Img Src Attribute
localeTitle: Img Src Atributo
---
## Img Src Atributo

O atributo `<img src>` refere-se à origem da imagem que você deseja exibir. A tag `img` não exibirá uma imagem sem o atributo `src` . No entanto, se você definir a fonte para o local da imagem, poderá exibir qualquer imagem.

Há uma imagem do logotipo freeCodeCamp, localizado em `https://avatars0.githubusercontent.com/u/9892522?v=4&s=400`

Você pode definir isso como a imagem usando o atributo `src` .

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

O código acima é exibido assim:

![O avatar freeCodeCamp](https://avatars0.githubusercontent.com/u/9892522?v=4&s=400?raw=true)

O atributo `src` é suportado por todos os navegadores.

Você também pode ter um arquivo hospedado localmente como sua imagem.

Por exemplo, `<img src="images/freeCodeCamp.jpeg>` funcionaria se você tivesse uma pasta chamada `images` que tivesse o `freeCodeCamp.jpeg` dentro, desde que a pasta 'images' estivesse no mesmo local que o arquivo `index.html` .

`../files/index.html`

`..files/images/freeCodeCamp.jpeg`

### Mais Informações:

*   [HTML.com](https://html.com/attributes/img-src/)
*   [Escolas W3](https://www.w3schools.com/tags/att_img_src.asp)