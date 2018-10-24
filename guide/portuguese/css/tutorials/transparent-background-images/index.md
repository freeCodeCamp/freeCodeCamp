---
title: Transparent Background Images
localeTitle: Imagens de fundo transparentes
---
## Imagens de fundo transparentes

Este é um esboço. [Ajude nossa comunidade a expandi-lo](https://github.com/freecodecamp/guides/tree/master/src/pages/css/tutorials/transparent-background-images/index.md) .

[Este guia de estilo rápido ajudará a garantir que sua solicitação de recebimento seja aceita](https://github.com/freecodecamp/guides/blob/master/README.md) .

Não existe uma propriedade background-opacity no CSS, no entanto é possivel fazê-lo inserindo um pseudo elemento com uma opacidade regular no tamanho exato do elemento por trás dele.

```CSS
div {
  width: 200px;
  height: 200px;
  display: block;
  position: relative;
}

div::after {
  content: "";
  background: url(image.jpg);
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}
```

#### Mais Informações:
* [CSS-Tricks](https://css-tricks.com/snippets/css/transparent-background-images/)
