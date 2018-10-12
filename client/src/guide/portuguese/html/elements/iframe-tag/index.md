---
title: Iframe Tag
localeTitle: Tag Iframe
---
## Tag Iframe

As tags Iframe são usadas para adicionar uma página da Web ou aplicativo existente ao seu website em um espaço definido.

Ao usar as tags iframe, o atributo src deve ser usado para indicar o local da página da Web ou do aplicativo a ser usado no quadro.

```html

<iframe src="framesite/index.html"></iframe> 
```

Você pode definir os atributos de largura e altura para limitar o tamanho do quadro.

```html

<iframe src="framesite/index.html" height="500" width="200"></iframe> 
```

Iframes tem uma borda por padrão, se você deseja remover isso, você pode fazê-lo usando o atributo style e definindo propriedades de borda CSS como none.

```html

<iframe src="framesite/index.html" height="500" width="200" style="border:none;"></iframe> 
```

#### Mais Informações:

*   [MDN - tag iframe HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
*   [W3 - especificação de iframe HTML 5.2](https://www.w3.org/TR/html5/semantics-embedded-content.html#the-iframe-element)