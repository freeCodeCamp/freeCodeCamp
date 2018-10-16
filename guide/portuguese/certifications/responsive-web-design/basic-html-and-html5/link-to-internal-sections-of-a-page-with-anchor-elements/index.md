---
title: Link to Internal Sections of a Page with Anchor Elements
localeTitle: Vincular a seções internas de uma página com elementos âncora
---
## Vincular a seções internas de uma página com elementos âncora

Como indicado nas instruções do link interno é composto por dois elementos: a `a` tag eo elemento html com o `id` usado no `href` atributo do `a` tag.

Todos esses links internos são válidos:

TAG DE ÂNCORA | Traz para ----- | ------ `<a href="#destination">I am an internal link</a>` | `<p id="destination">I am the destination of the link</p>` `<a href="#inlinestuff">I am an internal link</a>` | `<span id="inlinestuff">I am the destination of the link</span>` `<a href="#title">I am an internal link</a>` | `<h1 id="title">I am the destination of the link</h1>` `<a href="#mainarticle">I am an internal link</a>` | `<article id="mainarticle">I am the destination of the link</article>`

Você é solicitado a usar o elemento âncora existente para criar seu link interno, portanto, não escreva outra tag de âncora.

Para transformar a tag âncora real não é a única coisa que o desafio quer que você faça, há mais dois pontos:

*   Para remover o `target` atributo do `a` tag: você não quer mais para abrir uma nova aba no seu navegador, é a página real que vai 'movimento' up / down.
    
*   Para modificar o conteúdo de texto do `a` tag: de `cat photos` para `Jump to Bottom` (capitalização verifique).
    
    Boa sorte!