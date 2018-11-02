---
title: CSS3 Media Queries
localeTitle: Consultas de mídia CSS3
---
## Consultas de mídia CSS3

Consultas de mídia permitem que você tenha estilos diferentes para diferentes dispositivos / tamanhos de tela. Sua introdução em CSS3 facilitou bastante a construção de páginas responsivas.

A melhor abordagem ao projetar um site responsivo é pensar primeiro em dispositivos móveis; o que significa que você cria sua página começando com o design e o conteúdo da versão móvel. Você pode pensar que com alguns tamanhos escalonáveis ​​(%, vw ou vh), sua página se adaptará perfeitamente a qualquer dispositivo. Mas isso não acontecerá. Talvez para algum design muito básico, mas certamente não para páginas mais comuns ou complexas!

Ao projetar sua página para dispositivos menores, você se concentrará no conteúdo principal. Em uma tela maior, você terá que readaptar alguns tamanhos de fonte, margens, paddings e assim por diante, a fim de manter seu site confortável e legível, mas você também vai querer / precisa adicionar mais conteúdo, os que você não julgar fundamental e preencha o espaço criado pelo tamanho da tela.

O processo de pensamento deve ser:

1.  Qual conteúdo para mostrar?
2.  Como layout?
3.  Tamanho?

### A sintaxe básica

```css
    @media only screen and (min-width: 768px) { 
      p {padding: 30px;} 
    } 
```

A tag `p` terá um preenchimento de 30px assim que a tela atingir uma largura mínima de 768px.

### A sintaxe AND

```css
  @media only screen and (min-height: 768px) and (orientation: landscape) { 
    p {padding: 30px;} 
  } 
```

A tag `p` terá um espaçamento de 30px assim que a tela atingir uma altura mínima de 768px e sua orientação for paisagem.

### A sintaxe OR

```css
    @media only screen and (min-width: 768px), (min-resolution: 150dpi) { 
      p {padding: 30px;} 
    } 
```

A tag `p` terá um preenchimento de 30px assim que a tela atingir uma largura mínima de 768px ou sua resolução atingir um mínimo de 150dpi.

### Mais Informações

*   [MDN - consultas de mídia](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
*   [Escolas W3 - regra @media](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
*   [Truques CSS Atril](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
*   \[https://alistapart.com/article/responsive-web-design\](Ethan Marcotte A List Apart Atrícula em Web Design Responsivo)