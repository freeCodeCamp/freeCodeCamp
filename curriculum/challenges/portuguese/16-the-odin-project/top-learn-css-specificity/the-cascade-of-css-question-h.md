---
id: 648acb0745e79f79650fa2ac
title: Questão H sobre a cascata do CSS
challengeType: 15
dashedName: the-cascade-of-css-question-h
---

# --description--

O fator final, o final da linha, o desempate dos desempates. Digamos que depois que todos os outros fatores serem levados em conta, ainda existem várias regras conflitantes que têm como alvo um elemento. Como a cascata determina qual regra aplicar?

É bastante simples, na verdade. Qualquer que seja a última regra definida é declarada a vencedora.

```css
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
```

Para um elemento que possui as classes `alert` e `warning`, a cascata passaria por todos os outros fatores, incluindo herança (não há nenhuma aqui) e especificidade (não há nenhuma regra mais específica do que a outra). Como a regra `.warning` foi a última definida, e como nenhum outro fator foi capaz de determinar qual regra aplicar, ela é a regra que será aplicada ao elemento.

# --question--
## --text--

O que determina qual regra do CSS é aplicada quando há regras conflitantes que visam o mesmo elemento?

## --answers--

A especificidade da regra do CSS.

---

A hierarquia de herança do elemento.

---

A presença de classes ou IDs no elemento.

---

A ordem na qual as regras foram definidas.

## --video-solution--

4
