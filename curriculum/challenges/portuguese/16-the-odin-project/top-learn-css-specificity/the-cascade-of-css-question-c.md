---
id: 6489cb0b82cf2e4f86f03ae3
title: Questão C sobre a cascata do CSS
challengeType: 15
dashedName: the-cascade-of-css-question-c
---

# --description--

Vamos dar uma olhada em alguns exemplos rápidos para visualizar como a especificidade funciona. Considere o seguinte código em HTML e CSS:

```html
<!-- index.html -->

<div class="main">
  <div class="list subsection"></div>
</div>
```

```css
/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

No exemplo acima, as duas regras estão usando apenas seletores de classe, mas a regra 2 é mais específica porque está usando mais seletores de classe.

# --question--

## --text--

Com base no código HTML e CSS fornecido, com qual a cor o elemento `<div class="list subsection"></div>` seria renderizado?

## --answers--

azul

---

vermelho

---

roxo

---

preto

## --video-solution--

2
