---
title: Media Queries
localeTitle: Consultas de mídia
---
#### Leitura sugerida:

[Usando consultas de mídia - MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

Veja também a seção [Princípios de design da Web responsivo](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/01-responsive-web-design/responsive-web-design.json) em Beta

#### Versão preliminar do artigo:

Consultas de mídia são conjuntos de regras que definem propriedades CSS. Você pode definir consultas de mídia para alterar a aparência do seu conteúdo com base em como seu conteúdo é visualizado.

As consultas de mídia podem determinar a aparência do seu conteúdo em exibições diferentes. Alguns exemplos de exibições diferentes são: imagens em uma tela de computador, texto impresso ou páginas da Web em um leitor de tela de áudio.

Em páginas da Web, alguns elementos podem não ser exibidos de forma consistente em diferentes tamanhos de tela. Você pode usar consultas de mídia para definir regras especiais para telas pequenas e maiores.

Aqui está um exemplo de uma consulta de mídia que define o tamanho do texto do corpo em uma tela do telefone:

```css
@media screen and (max-width: 450px) { 
 body { 
   font-size: 12px; 
  } 
 } 
```

Esta consulta de mídia estipula que, para tamanhos de tela de até 450 pixels de largura, o texto do corpo deve ser exibido em um tamanho de fonte de 12 px.

Consultas de mídia podem ser úteis no [design da Web responsivo](https://guide.freecodecamp.org/html/responsive-web-design) .