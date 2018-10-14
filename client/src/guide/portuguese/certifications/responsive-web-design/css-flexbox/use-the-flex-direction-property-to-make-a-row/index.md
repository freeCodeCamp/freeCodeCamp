---
title: Use the flex-direction Property to Make a Row
localeTitle: Use a propriedade flex-direction para criar uma linha
---
## Use a propriedade flex-direction para criar uma linha

Depois de ter um contêiner flexível, adicione a _exibição: flex;_ para o contêiner pai, você pode especificar se deseja que os filhos sejam empilhados em uma linha, adicionando o seguinte:

```css
#box-container { 
    display: flex; /* This makes the flex container */ 
    height: 500px; 
    flex-direction: row-reverse; /* This makes the direction be a row with reversed elements */ 
  } 
```

Você notará como as cores trocam de posição como a direção padrão dos contêineres flexíveis são linhas, como você deve ter notado no [exemplo](https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed/index.md) do [tweet](https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed/index.md) .