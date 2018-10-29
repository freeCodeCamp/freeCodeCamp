---
title: Images in HTML
localeTitle: Imagens em HTML
---
## Introdução

Você pode definir imagens usando a tag `<img>` . Não possui uma tag de fechamento, pois pode conter apenas atributos. Para inserir uma imagem, você define a fonte e um texto alternativo que é exibido quando a imagem não pode ser renderizada.

`src` - Este atributo fornece a URL para a imagem presente no seu PC / Laptop ou para ser incluído em algum outro site. Lembre-se de que o link fornecido não deve ser quebrado, caso contrário, a imagem não será produzida em sua página da Web.

`alt` - Este atributo é usado para superar o problema de imagem quebrada ou incapacidade do seu navegador para não ser capaz de produzir imagem na página da web. Este atributo, como o nome sugere, fornece "Alternativa" à imagem, que é um "TEXTO" que descreve a imagem.

## Exemplo

```html

<img src="URL of the Image" alt="Descriptive Title" /> 
```

### Para definir a altura e a largura de uma imagem, você pode usar o atributo altura e largura:

```html

<img src="URL of the Image" alt="Descriptive Title" height="100" width="150"/> 
```

### Você também pode definir a espessura da borda (0 significa sem borda):

```html

<img src="URL of the Image" alt="Descriptive Title" border="2"/> 
```

### Alinhar uma imagem:

```html

<img src="URL of the Image" alt="Descriptive Title" align="left"/> 
```

### Você também pode usar estilos em um atributo de estilo:

```html

<img src="URL of the Image" alt="Descriptive Title" style="width: 100px; height: 150px;"/> 
```

#### Mais Informações

*   Veja a página freeCodeCamp na tag `<img>` [aqui](https://guide.freecodecamp.org/html/elements/img-tag) .
*   Para obter mais detalhes sobre imagens em HTML, confira o [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img)