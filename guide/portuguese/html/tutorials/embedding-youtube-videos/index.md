---
title: Embedding Youtube Videos
localeTitle: Incorporando vídeos do YouTube
---
## Incorporando vídeos do YouTube

Provavelmente, muitas vezes você viu vídeos incorporados em seus sites favoritos. Hoje vamos falar sobre a incorporação de vídeos do YouTube, o que é muito fácil de fazer, mesmo se você não tem conhecimento sobre isso. Para esta ação, usaremos o elemento `<frame>` , que é muito útil na incorporação de outros HTMLs. É muito usado para promover alguns produtos como acréscimos. Observe que você não está limitado apenas ao YouTube. Você também pode experimentar outros documentos.

### `<frame>`

#### Usando

Você pode facilmente colocar seu vídeo escolhido usando o elemento `<frame>` . Mas lembre-se, você também precisa definir a altura e a largura do seu player, então usaremos os atributos `height` e `width` .

O que vamos precisar?

*   Vídeo no YouTube e URL
*   elemento `<frame>` (não esqueça de fechá-lo!)
*   atributos de `width` e `height`

```html

<iframe width="420" height="315" 
 src="https://www.youtube.com/watch?v=v8kFT4I31es"> 
 </iframe> 
```

Os valores inseridos são recomendados, mas sinta-se à vontade para alterá-los da maneira que desejar.

#### Reprodução automática

O que devemos fazer se quisermos que este player comece a ser reproduzido automaticamente? Basta adicionar ao seu valor de link `?autoplay=1` . Mas tenha cuidado, porque pode ser irritante para muitas pessoas que visitam sua página.

```html

<iframe width="420" height="315" 
 src="https://www.youtube.com/watch?v=v8kFT4I31es?autoplay=1"> 
 </iframe> 

```