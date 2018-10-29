---
title: Links
localeTitle: Links
---
## Links

Este é um esboço. [Ajude nossa comunidade a expandi-lo](https://github.com/freecodecamp/guides/tree/master/src/pages/html/attributes/links/index.md) .

[Este guia de estilo rápido ajudará a garantir que sua solicitação de recebimento seja aceita](https://github.com/freecodecamp/guides/blob/master/README.md) .

Os links são usados ​​em toda a web, com o objetivo de direcionar usuários a vários itens de conteúdo. Eles geralmente são indicados pelo cursor se transformando em um ícone de mão. Os links podem ser textos, imagens ou outros elementos contidos em seu HTML ou página da web.

Você usa uma tag de `code <a>` ou um elemento de âncora para definir seu link, que também precisa de um endereço de destino que você acessará com o atributo `code href` . Aqui está um trecho que faz da frase "o guia FreeCodeCamp" um link:

```html

<a href="https://guide.freecodecamp.org">the freeCodeCamp Guide</a> 
```

Se quiser que seu link seja aberto em uma nova guia, você usará o atributo `code target` junto com o `code "_blank"` dentro da tag de `code <a>` abertura `code <a>` . Isso parece assim:

```html

<a href="https://guide.freecodecamp.org" target="_blank">the freeCodeCamp Guide</a> 
```

Quando você precisa guiar os usuários para uma parte específica da sua página da web, vamos assumir a parte inferior, primeiro você precisa atribuir o símbolo `code #` hash ao atributo `code href` , como este

```html

<a href="#footer>More about us<a/> 
```

você precisará usar um atributo de `code id` no elemento para o qual deseja direcionar o usuário - nesse caso, o `code <footer>` na parte inferior da página da Web.

```html

<footer id="footer">Powered by freeCodeCamp</footer> 
```

#### Mais Informações:

[w3sschools - Links HTML](https://www.w3schools.com/html/html_links.asp)