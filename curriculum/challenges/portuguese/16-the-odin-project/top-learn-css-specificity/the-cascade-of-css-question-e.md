---
id: 6489cf6282cf2e4f86f03ae6
title: Questão E sobre a cascata do CSS
challengeType: 15
dashedName: the-cascade-of-css-question-e
---

# --description--

```css
/* rule 1 */
#subsection .list {
  background-color: yellow;
  color: blue;
}

/* rule 2 */
#subsection .main .list {
  color: red;
}
```

Neste exemplo final, as duas regras estão usando seletores de ID e de classe. Portanto, nenhuma regra está usando um seletor mais específico que a outra. A cascata, então, verifica as quantidades de cada tipo de seletor. As duas regras só têm um seletor de ID, mas a regra 2 tem mais seletores de classe, então a regra 2 tem uma especificidade superior!

Embora a declaração de `color: red` tenha precedência, a declaração de `background-color: yellow` ainda será aplicada, pois não há nenhuma declaração conflitante para ela.

# --question--

## --text--

Considerando o código CSS atualizado, qual das afirmações abaixo descreve a renderização do elemento `<div class="list" id="subsection"></div>`?

## --answers--

Cor do texto: vermelho; cor de fundo: transparente

---

Cor do texto: vermelho; cor de fundo: amarelo

---

Cor do texto: azul; cor de fundo: transparente

---

Cor do texto: azul; cor de fundo: amarelo

## --video-solution--

2
