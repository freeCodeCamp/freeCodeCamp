---
id: 63ee352b0d8d4841c3a7091c
videoId: LGQuIIv2RVA
title: Questão C sobre a Introdução ao CSS
challengeType: 15
dashedName: css-foundations-question-c
---

# --description--

O que faríamos se dois grupos de elementos compartilhassem algumas de suas declarações de estilo?

```css
.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
```

Nossos seletores `.read` e `.unread` compartilham as declarações `color: white;` e `background-color: black;`, mas têm várias declarações exclusivas. Para reduzir a repetição, você pode agrupar esses dois seletores como uma lista separada por vírgulas:

```css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
```

Os dois exemplos acima (com e sem agrupamento) terão o mesmo resultado, mas o segundo exemplo reduz a repetição de declarações e torna mais fácil editar `color` ou `background-color` para as duas classes de uma vez.

# --question--

## --text--

Como você aplicaria uma única regra a dois seletores diferentes, `.red-box` e `.yellow-box`?

## --answers--

```css
.red-box,
.yellow-box {
  width: 25px;
  height: 25px;
}
```

---

```css
.red-box {
  width: 25px;
  height: 25px;
}

.yellow-box {
  width: 25px;
  height: 25px;
}
```

---

```css
.red-box { 
  width: 25px;
  .yellow-box {
    height: 25px;
  }
}
```

## --video-solution--

1
