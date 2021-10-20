---
id: 587d781e367417b2b2512ac9
title: Mudar a posição relativa de um elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVmMtZ'
forumTopicId: 301044
dashedName: change-an-elements-relative-position
---

# --description--

O CSS trata cada elemento HTML como uma caixa. Esse conceito é geralmente referido como <dfn>CSS Box Model</dfn>. Elementos de nível de bloco são empilhados um em cima do outro (pense nas divs, parágrafos e títulos) enquanto os elementos de linha são inseridos um lado do outro (como imagens ou spans). Essa é a organização padrão dos elementos no CSS e é chamada de <dfn>normal flow</dfn> (fluxo normal). Mas o CSS também oferece uma propriedade para posicionar os elementos de forma manual.

Ao definir a posição de um elemento para `relative`, o CSS permite que você mova o elemento *relativamente* à sua posição atual. Ela trabalha em conjunto com as propriedades de deslocamento do CSS `left` (esquerda) ou `right` (direita) e `top` (superior) ou `bottom` (inferior). Estas propriedades definem quantos pixels, porcentagens ou ems deslocar o elemento *para longe* de onde ele inicialmente foi posicionado. O exemplo a seguir afasta o parágrafo em 10 pixels a partir da parte inferior:

```css
p {
  position: relative;
  bottom: 10px;
}
```

Alterar a posição de um elemento para relativo não o remove do fluxo normal - outros elementos em torno dele ainda se comportam como se o item estivesse em sua posição padrão.

**Observção:** o posicionamento dá a você muita flexibilidade e poder sobre o layout visual de uma página. É bom lembrar que a posição visual dos elementos não importa. O que importa é o código HTML final ser organizado e fazer sentido quando for lido de cima para baixo. É assim que os usuários com deficiências visuais (que dependem de dispositivos como leitores de tela) acessam seu conteúdo.

# --instructions--

No elemento `h2`, altere a propriedade `position` para `relative` e use a propriedade `top` para mover o elemento a partir do topo. Observe que a posição dos elementos h1 e p não sofre nenhuma alteração.

# --hints--

O elemento `h2` deve ter a propriedade `position` com o valor de `relative`.

```js
assert($('h2').css('position') == 'relative');
```

Você deve utilizar a propriedade CSS de deslocamento `top` para afastar o elemento `h2` em 15 pixels.

```js
assert($('h2').css('top') == '15px');
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {


  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<style>
  h2 {
    position: relative;
    top: 15px;
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
