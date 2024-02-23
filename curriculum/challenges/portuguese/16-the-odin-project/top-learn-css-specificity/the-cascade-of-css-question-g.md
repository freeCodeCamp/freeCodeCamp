---
id: 6489cf7682cf2e4f86f03ae8
title: Questão G sobre a cascata do CSS
challengeType: 15
dashedName: the-cascade-of-css-question-g
---

# --description--

A herança se refere a certas propriedades do CSS que, quando aplicadas a um elemento, são herdados pelos descendentes desse elemento, mesmo se não escrevermos explicitamente uma regra para esses descendentes. Propriedades baseadas em tipografia (`color`, `font-size`, `font-family`, entre outras) são geralmente herdadas, enquanto a maioria das outras propriedades não é.

A exceção a isso é quando se tem um elemento como alvo diretamente, já que isso sempre vence a herança:

```html
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>
```

```css
/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}
```

Apesar do elemento `parent` (pai) ter uma especificidade maior com um ID, o elemento `child` (filho) terá o estilo `color: blue` aplicado, pois essa declaração o tem como alvo diretamente, enquanto o estilo `color: red` do pai é apenas herdado.

# --question--

## --text--

Com base nos códigos HTML e CSS fornecidos, qual seria a cor do elemento `<div class="child"></div>`?

## --answers--

Vermelho

---

Azul

---

Herdada do elemento pai

---

Transparente

## --video-solution--

2
