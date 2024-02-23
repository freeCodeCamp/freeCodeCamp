---
id: 587d774e367417b2b2512a9f
title: Saltar para o conteúdo diretamente usando o elemento main
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
dashedName: jump-straight-to-the-content-using-the-main-element
---

# --description--

O HTML5 introduziu uma série de novos elementos que fornecem aos desenvolvedores mais opções, ao mesmo tempo em que incorporam recursos de acessibilidade. Essas tags incluem `main`, `header`, `footer`, `nav`, `article` e `section`, entre outros.

Por padrão, um navegador torna esses elementos semelhantes ao elemento `div`. No entanto, usá-los onde eles forem apropriados fornece um significado adicional ao código. O nome da tag, sozinho, pode indicar o tipo de informação que esta contém, o que adiciona significado semântico a esse conteúdo. As tecnologias assistivas podem acessar essas informações para fornecer um resumo melhor da página ou opções de navegação para seus usuários.

O elemento `main` é usado para envolver (você adivinhou) o conteúdo principal, e deve haver apenas um por página. O objetivo é envolver as informações relacionadas ao tópico central da página. Ele não tem como objetivo incluir itens que se repetem nas páginas, como links de navegação ou banners.

A tag `main` também possui um recurso de referência incorporado que a tecnologia assistiva pode usar para navegar rapidamente até o conteúdo principal. Se você já viu um link "Ir para o conteúdo principal" no topo de uma página, usar a tag `main` automaticamente fornece essa funcionalidade aos dispositivos assistivos.

# --instructions--

O Camper Cat tem grandes ideias para a página de armas ninja que ele criou. Ajude-o a configurar o código adicionando tags de abertura e fechamento `main` entre o `header` e o `footer` (abordados em outros desafios). Mantenha a tag `main` vazia por enquanto.

# --hints--

O código deve ter uma tag `main`.

```js
assert($('main').length == 1);
```

A tag `main` deve estar entre a tag de fechamento `header` e a tag de abertura `footer`.

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --seed--

## --seed-contents--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>
```

# --solutions--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main>

</main>
<footer></footer>
```
