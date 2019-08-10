---
id: 587d774e367417b2b2512a9f
title: Jump Straight to the Content Using the main Element
challengeType: 0
videoUrl: ''
localeTitle: Ir Direto para o Conteúdo Usando o Elemento Main
---

## Description
<section id="description"> O HTML5 introduziu vários novos elementos que oferecem aos desenvolvedores mais opções, além de incorporar recursos de acessibilidade. Essas tags incluem <code>main</code>, <code>header</code>, <code>footer</code>, <code>nav</code>, <code>article</code> e <code>section</code>, entre outras. Por padrão, um navegador renderiza esses elementos de forma semelhante a um <code>div</code>. No entanto, usá-los quando apropriado dá significado adicional à sua marcação. O nome da tag sozinho pode indicar o tipo de informação que contém, o que adiciona significado semântico a esse conteúdo. As tecnologias assistivas podem acessar essa informação para fornecer um melhor resumo da página ou opções de navegação para seus usuários. O elemento <code>main</code> é usado para envolver (você adivinhou) o conteúdo principal, e deve haver apenas um por página. Ele é destinado a cercar as informações relacionadas ao tópico central da sua página. Ele não é destinado para incluir itens que se repetem nas páginas, como links de navegação ou banners. A tag <code>main</code> também possui um recurso de ponto de referência integrado que a tecnologia assistiva pode usar para navegar rapidamente para o conteúdo principal. Se você já viu um link &quot;Ir para conteúdo principal&quot; na parte superior de uma página, usar a tag main automaticamente fornece aos dispositivos de tecnologia assistiva essa funcionalidade. </section>

## Instructions
<section id="instructions">Camper Cat tem algumas grandes ideias para a sua página de armas ninja. Ajude-o a definir sua marcação adicionando as tags <code>main</code> de abertura e fechamento entre o <code>header</code> e o <code>footer</code> (abordados em outros desafios). Mantenha as tags <code>main</code> vazias por enquanto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter uma tag <code>main</code> .
    testString: 'assert($("main").length == 1, "Your code should have one <code>main</code> tag.");'
  - text: As tags <code>main</code> devem estar entre a tag <code>header</code> de fechamento e a tag <code>footer</code> de abertura.
    testString: 'assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi), "The <code>main</code> tags should be between the closing <code>header</code> tag and the opening <code>footer</code> tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<header>
  <h1>Armas de um Ninja</h1>
</header>



<footer></footer>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
