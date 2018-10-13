---
title: Float and Clear
localeTitle: Flutuar e Limpar
---
## Flutuar e Limpar

A propriedade `float` CSS especifica como um elemento deve flutuar.

A propriedade `clear` CSS especifica quais elementos podem flutuar ao lado do elemento limpo e em qual lado.

### A propriedade `float`

A propriedade `float` é usada para posicionamento e layout em páginas da web.

A propriedade `float` pode ter um dos seguintes valores:

`left` - O elemento flutua à esquerda do contêiner `right` - o elemento flutua à direita do contêiner `none` - O elemento não flutua (será exibido exatamente onde ocorre no texto). Este é o padrão `inherit` - O elemento herda o valor float de seu pai Em seu uso mais simples, a propriedade `float` pode ser usada para envolver o texto em torno das imagens.

#### Flutuar na Imagem:

![float image for print layout](https://github.com/jamal-pb95/guides/blob/master/assets/css3-float-print-layout.png "css-tricks-float-img")
```
img { 
    float: right; 
 } 
```

Este exemplo especifica que uma imagem deve flutuar para a direita em uma página:

![Float image for web layout](https://github.com/jamal-pb95/guides/blob/master/assets/css3-float-web-text-wrap.png "float img web")
```
img { 
    float: left; 
 } 
```

Este exemplo especifica que uma imagem deve flutuar à esquerda em uma página:
```
img { 
    float: none; 
 } 
```

No exemplo a seguir, a imagem será exibida exatamente onde ocorre no texto ( `float: none;` ):

### A propriedade `clear`

A propriedade `clear` especifica quais elementos podem flutuar ao lado do elemento limpo e de que lado.

A propriedade `clear` pode ter um dos seguintes valores:

`none` - permite elementos flutuantes em ambos os lados. Este é o padrão `left` - Nenhum elemento flutuante permitido no lado esquerdo `right` - Nenhum elemento flutuante permitido no lado direito `both` - Nenhum elemento flutuante permitido no lado esquerdo ou no lado direito `inherit` - O elemento herda o valor claro de seu pai A maneira mais comum de usar a propriedade `clear` é depois de você ter usado uma propriedade `float` em um elemento.

Ao limpar os flutuadores, você deve combinar o `clear` para o `float` . Se um elemento estiver flutuando para a `left` , você deve `clear` para a `left` . Seu elemento `float` continuará a `float` , mas o elemento limpo aparecerá abaixo dele na página da web.

#### Exemplo:

![unclear footer image](https://github.com/jamal-pb95/guides/blob/master/assets/unclearedfooter.png "imagem de rodapé pouco clara") Fonte: CSS-TRICS
```
div { 
    clear: left; 
 } 
```

![clear footer image](https://github.com/jamal-pb95/guides/blob/master/assets/clearedfooter.png "imagem de rodapé claro") Fonte: CSS-TRICS

### Recursos adicionais:

*   CSS do MDN: [Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float) & [Clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
*   [Tutoriais do W3Schools](https://www.w3schools.com/css/css_float.asp)
*   CSS-Tricks: [flutuar](https://css-tricks.com/all-about-floats/) e [limpar](https://css-tricks.com/almanac/properties/c/clear/)