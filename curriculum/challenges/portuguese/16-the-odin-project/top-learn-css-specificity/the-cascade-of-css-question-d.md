---
id: 6489cf5882cf2e4f86f03ae5
title: Questão D sobre a cascata do CSS
challengeType: 15
dashedName: the-cascade-of-css-question-d
---

# --description--

Agora, vamos mudar um pouco as coisas:

```html
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection"></div>
</div>
```

```css
/* rule 1 */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

No exemplo acima, apesar da regra 2 ter mais seletores de classe do que seletores de ID, a regra 1 é mais específica porque ID sempre vence a classe.

# --question--

## --text--

Com base no código HTML e CSS modificado, com qual a cor o elemento `<div class="list" id="subsection"></div>` seria renderizado?

## --answers--

laranja

---

vermelho

---

azul

---

ciano

## --video-solution--

3
