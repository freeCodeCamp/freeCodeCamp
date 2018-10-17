---
title: How to Insert Spaces or Tabs in Text Using HTML and CSS
localeTitle: Como inserir espaços ou tabulações no texto usando HTML e CSS
---
## Como inserir espaços ou tabulações no texto usando HTML e CSS

Há uma infinidade de maneiras de inserir espaços usando html. Por simplicidade, vamos passe por cima de um desses, inserindo uma tag Span.

## Tag Span

`<span>`

Span Tags `<span>` são tags de fechamento automático, o que significa que eles não precisam de um `/>` .

## Exemplo de Span

Um exemplo de como uma tag `<span>` insere um espaço entre o texto pode ser visto abaixo.

`<p>Hello may name is <span> James</p>`

Se você atribuir uma classe ao seu `<span>` , poderá adicionar alguns css a ela. Igual a,

`<p>Hello my name is <span class=tab> James</p>`

Então, em uma folha de estilo externa ou em uma folha de estilos interna, você pode fornecer a `class .tab` algumas propriedades.

## Exemplo de classe de span

Por exemplo

`.tab {padding-left: 2px;}`

Você também pode fornecer ao `<span>` algumas propriedades no estilo inline, como mostrado abaixo.

`<p>Hello my name is <span style="padding-left: 2px;"> James</p>`

## Mais Informações

Para mais informações sobre a tag ou em; Como inserir espaços ou tabulações no texto Usando HTML e CSS, você pode visitar w3schools. https://www.w3schools.com/tags/tag\_span.asp