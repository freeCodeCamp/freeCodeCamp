---
title: CSS Buttons
localeTitle: Botões CSS
---
## Botões CSS

*   Você pode estilizar qualquer botão clicável (elemento HTML `<button>` )

`<button>Click Me</button>`

*   O botão padrão é semelhante ao seguinte:

![Default Button Style](https://image.ibb.co/kCweAm/button.png "Estilo de botão padrão")

## Estilizando um botão

Você pode alterar várias propriedades de um botão para alterar sua aparência.

Para adicionar sombras ao botão, use `box-shadow` propriedade `box-shadow` .

Para adicionar transparência a um botão para um efeito desabilitado, use a `opacity` da propriedade.

Para remover as margens e criar um grupo de botões, adicione `float:left/right` property.

Para criar um grupo de botões, mas com as bordas, use a propriedade `float` e adicione uma `border property` .

Para criar um grupo vertical de botões, use display: `block property` .

### Cor do botao

Para alterar a cor de fundo de um botão, use a propriedade background-color:

`button {background-color: #6ba0f4;}`

![Button Background-Color](https://image.ibb.co/f5Xpt6/button_bg_blue.png "Botão fundo-cor")

Para adicionar uma borda colorida a um botão, use a propriedade border:
```
button { 
  background-color: #FFF; 
  color: #FFF; 
  border: 2px solid #6ba0f4; 
 } 
```

![Button Border](https://image.ibb.co/kUqymR/button_border_blue.png "Borda do botão")

### Tamanho do texto do botão

Para alterar o tamanho da fonte do texto de um botão, use a propriedade font-size:

`button {font-size: 20px;}`

![Button Text Size](https://image.ibb.co/gM9r6R/button_fontsize.png "Tamanho do texto do botão")

### Botão de preenchimento

Para alterar o preenchimento de um botão, use a propriedade padding:

`button {padding: 15px 30px;}`

![Button Padding](https://image.ibb.co/fKer6R/button_padding.png "Botão de preenchimento")

### Largura do Botão

Para alterar a largura de um botão, independentemente do conteúdo do texto, use a propriedade width:

`button {width: 250px;}`

![Button Width](https://image.ibb.co/cDgSfm/button_width.png "Largura do Botão")

### Botões Arredondados

Para criar botões arredondados, use a propriedade border-radius:

`button {border-radius: 50%;}`

![Rounded Buttons](https://image.ibb.co/cfH00m/button_bradius.png "Botões Arredondados")

### Botões flutuantes

Para alterar o estilo de um botão ao passar o mouse sobre ele, use o seletor em foco:
```
button:hover { 
  background-color: #0E2C5B; 
  color: #FFF; 
 } 
```

![Hoverable Buttons](https://image.ibb.co/hxQnfm/button_hover.png "Botões flutuantes")

Para determinar a velocidade do efeito de foco, use a `transition-duration` da propriedade.

### Botões desativados

Para desabilitar um botão, use a propriedade do cursor:
```
button { 
  cursor: not-allowed; 
 } 
```

#### Mais Informações:

*   https://www.w3schools.com/css/css3\_buttons.asp
*   https://www.w3schools.com/howto/howto _css_ animate\_buttons.asp