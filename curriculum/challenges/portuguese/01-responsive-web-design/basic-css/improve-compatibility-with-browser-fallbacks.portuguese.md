---
id: 5b7d72c338cd7e35b63f3e14
title: Improve Compatibility with Browser Fallbacks
challengeType: 0
videoUrl: ''
localeTitle: Aprimore a compatibilidade com fallbacks do navegador
---

## Description
<section id="description"> Ao trabalhar com o CSS, você provavelmente se deparará com problemas de compatibilidade do navegador em algum momento. É por isso que é importante fornecer fallbacks do navegador para evitar possíveis problemas. Quando seu navegador analisa o CSS de uma página da Web, ele ignora as propriedades que não reconhece ou não suporta. Por exemplo, se você usar uma variável CSS para atribuir uma cor de plano de fundo em um site, o Internet Explorer ignorará a cor do plano de fundo porque ela não suporta variáveis ​​CSS. Nesse caso, o navegador usará qualquer valor que tenha para essa propriedade. Se não puder encontrar nenhum outro valor definido para essa propriedade, ele será revertido para o valor padrão, que normalmente não é o ideal. Isso significa que, se você quiser fornecer um retorno do navegador, será tão fácil quanto fornecer outro valor com maior suporte imediatamente antes de sua declaração. Dessa forma, um navegador mais antigo terá algo em que voltar, enquanto um navegador mais recente irá interpretar qualquer declaração que venha depois na cascata. </section>

## Instructions
<section id="instructions"> Parece que uma variável está sendo usada para definir a cor de fundo da classe <code>.red-box</code> . Vamos melhorar nossa compatibilidade com o navegador, adicionando outra declaração de <code>background</code> antes da declaração existente e definindo seu valor para vermelho. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua regra de <code>.red-box</code> vermelha deve incluir um fallback com o <code>background</code> definido como vermelho imediatamente antes da declaração de <code>background</code> existente.
    testString: 'assert(code.match(/.red-box\s*{[^}]*background:\s*(red|#ff0000|#f00|rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)|rgb\(\s*100%\s*,\s*0%\s*,\s*0%\s*\)|hsl\(\s*0\s*,\s*100%\s*,\s*50%\s*\))\s*;\s*background:\s*var\(\s*--red-color\s*\);/gi), "Your <code>.red-box</code> rule should include a fallback with the <code>background</code> set to red immediately before the existing <code>background</code> declaration.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
