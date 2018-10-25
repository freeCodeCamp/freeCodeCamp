---
id: 587d781e367417b2b2512ac9
title: Change an Element's Relative Position
challengeType: 0
videoUrl: ''
localeTitle: Alterar a posição relativa de um elemento
---

## Description
<section id="description"> O CSS trata cada elemento HTML como sua própria caixa, que geralmente é chamada de <code>CSS Box Model</code> do <code>CSS Box Model</code> . Os itens no nível do bloco iniciam automaticamente em uma nova linha (pense em cabeçalhos, parágrafos e divs) enquanto os itens sequenciais ficam no conteúdo ao redor (como imagens ou vãos). O layout padrão dos elementos dessa maneira é chamado de <code>normal flow</code> de um documento, mas o CSS oferece a propriedade position para substituí-lo. Quando a posição de um elemento é definida como <code>relative</code> , ele permite especificar como o CSS deve movê-lo em <i>relação</i> à sua posição atual no fluxo normal da página. Ele é emparelhado com as propriedades de deslocamento de CSS da <code>left</code> ou <code>right</code> e <code>top</code> ou <code>bottom</code> . Eles dizem quantos pixels, porcentagens ou ems para mover o item para <i>longe</i> de onde ele está normalmente posicionado. O exemplo a seguir move o parágrafo a 10 pixels da parte inferior: <blockquote> p { <br> position: relative; <br> bottom: 10px; <br> } </blockquote> Alterar a posição de um elemento para relativo não o remove do fluxo normal - outros elementos em torno dele ainda se comportam como se esse item estivesse em sua posição padrão. <strong>Nota</strong> <br> O posicionamento oferece muita flexibilidade e poder sobre o layout visual de uma página. É bom lembrar que, independentemente da posição dos elementos, a marcação HTML subjacente deve ser organizada e fazer sentido quando lida de cima para baixo. É assim que os usuários com deficiências visuais (que dependem de dispositivos de assistência, como leitores de tela) acessam seu conteúdo. </section>

## Instructions
<section id="instructions"> Altere a <code>position</code> do <code>h2</code> para <code>relative</code> e use um deslocamento de CSS para afastá-lo 15 pixels da parte <code>top</code> de onde ele se encontra no fluxo normal. Observe que não há impacto nas posições dos elementos h1 e p circundantes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O elemento <code>h2</code> deve ter uma propriedade de <code>position</code> definida como <code>relative</code> .
    testString: 'assert($("h2").css("position") == "relative", "The <code>h2</code> element should have a <code>position</code> property set to <code>relative</code>.");'
  - text: Seu código deve usar um deslocamento CSS para posicionar o <code>h2</code> 15px de forma relativamente longe do <code>top</code> de onde ele normalmente fica.
    testString: 'assert($("h2").css("top") == "15px", "Your code should use a CSS offset to relatively position the <code>h2</code> 15px away from the <code>top</code> of where it normally sits.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
