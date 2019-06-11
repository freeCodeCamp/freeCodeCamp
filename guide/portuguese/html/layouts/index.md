---
title: Layouts
localeTitle: Layouts
---
## Layouts

Os layouts organizam diferentes áreas da página da web.

Quase todas as páginas da web que vemos podem ser divididas em caixas, que podem ser organizadas em ordem específica para criar essa página da web. A imagem abaixo é um desses exemplos.

![Exemplo de Website Design - www.codementor.io](https://cdn-media-1.freecodecamp.org/imgr/Z1DSMYC.png)

> Os sites geralmente exibem conteúdo em várias colunas (como uma revista ou jornal).

E as técnicas de layout HTML nos ajudam a colocar as informações necessárias no pedido ou no design necessários.

### Técnicas para implementar layouts

#### Tabelas HTML

Uma das ferramentas mais básicas para implementar layouts em uma página da Web, elas são fornecidas por HTML. Mas à medida que o layout se torna complicado, as tabelas HTML rapidamente perdem a facilidade, devido ao aumento do texto de marcação.

#### Float CSS

Se você for projetar uma página baseada em 2 colunas com o painel de navegação esquerdo e a área de visualização do conteúdo central, é fácil fazê-lo com floats de CSS. Basta definir a página de navegação esquerda em uma propriedade `<div>` com estilo `float: left;` . E voila você tem esse design. Mas e se você tivesse 4 colunas em uma única seção. Claro, pode-se fazer com floats, mas a sintaxe do HTML que você estaria escrevendo seria fácil de entender.

#### Frameworks CSS

É aí que entram as estruturas CSS, como [Bootstrap](http://getbootstrap.com/) e [Materialize](http://materializecss.com/) . Essas estruturas fornecem uma funcionalidade de grade que permite dividir cada seção da sua página da Web em 12 colunas, que você pode criar.

![Exemplo de grade](http://blog.gridbox.io/wp-content/uploads/2018/01/download-1-1024x271.png)

> Grade de inicialização de amostra

### Elementos semânticos de HTML

Os sites geralmente exibem conteúdo em várias colunas (como uma revista ou jornal).

O HTML5 oferece novos elementos semânticos que definem as diferentes partes de uma página da web:
```
<header> - Defines a header for a document or a section 
 <nav> - Defines a container for navigation links 
 <section> - Defines a section in a document 
 <article> - Defines an independent self-contained article 
 <aside> - Defines content aside from the content (like a sidebar) 
 <footer> - Defines a footer for a document or a section 
 <details> - Defines additional details 
 <summary> - Defines a heading for the <details> element 
```

#### Mais Informações:

*   [Escolas W3 - Layout](https://www.w3schools.com/html/html_layout.asp)
*   [CodeMentorTeam](https://www.codementor.io/codementorteam/4-different-html-css-layout-techniques-to-create-a-site-85i9t1x34) - Técnicas de Layout para criar um site