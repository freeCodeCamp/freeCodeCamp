---
id: 6489cf6782cf2e4f86f03ae7
title: Questão F sobre a cascata do CSS
challengeType: 15
dashedName: the-cascade-of-css-question-f
---

# --description--

```css
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class .second-class {
  font-size: 24px;
}
```

Aqui, a regra 1 e a regra 2 têm a mesma especificidade. A regra 1 usa um seletor de encadeamento (sem espaço) e a regra 2 usa um combinador descendente (o espaço vazio). As duas regras, no entanto, têm duas classes e o símbolo do combinador em si não aumenta a especificidade.

```css
/* rule 1 */
.class.second-class {
  font-size: 12px;
}
/* rule 2 */
.class > .second-class {
  font-size: 24px;
}
```

Este exemplo mostra a mesma coisa. Mesmo que a regra 2 esteja usando um combinador de filhos (`>`), isso não altera o valor de especificidade. As duas regras ainda têm duas classes. Por isso, elas têm os mesmos valores de especificidade.

*Observação:* nem tudo adiciona especificidade. Ao comparar seletores, você pode encontrar símbolos especiais para o seletor universal (`*`), bem como os combinadores (`+`, `~`, `>` e o espaço vazio). Esses símbolos não adicionam nenhuma especificidade por eles mesmos.

# --question--

## --text--

Com base no código CSS dado, qual tamanho de fonte seria aplicado aos elementos com as classes "class second-class"?

## --answers--

12px

---

36px

---

24px

---

48px

## --video-solution--

3
