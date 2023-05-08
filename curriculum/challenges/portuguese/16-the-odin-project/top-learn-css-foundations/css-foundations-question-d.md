---
id: 63ee35300d8d4841c3a7091d
videoId: LGQuIIv2RVA
title: Questão D sobre a Introdução ao CSS
challengeType: 15
dashedName: css-foundations-question-d
---

# --description--

Outra forma de usar seletores é encadeá-los como uma lista sem separação. Vamos dizer que você tem o seguinte HTML:

```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```

Você tem dois elementos com a classe `subsection` que tem algum tipo de estilo único, mas se você quiser apenas aplicar uma regra separada para o elemento que também tem `header` como uma segunda classe, o que pode fazer? Bem, você pode encadear ambos os seletores `class` no CSS assim:

```css
.subsection.header {
  color: red;
}
```

O que `.subsection.header` faz é selecionar qualquer elemento que tenha as classes `subsection` e `header`. Observe como não há espaço entre os seletores `class` `.subsection` e `.header`. Esta sintaxe basicamente funciona para encadear qualquer combinação de seletores, exceto para encadear mais de um seletor de tipos.

Isso também pode ser usado para encadear uma classe e um id, como mostrado abaixo:

```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">This is where a preview for a post might go.</p>
</div>
```

Você pode pegar os dois elementos acima e combiná-los assim:

```css
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
```

Geralmente, você não pode encadear mais de um tipo de seletor, já que um elemento não pode ter dois tipos diferentes de uma vez. Por exemplo, encadear dois seletores de tipo como `div` e `p` nos daria o seletor `divp`, que não funcionaria porque o seletor tentaria encontrar um elemento literal, `<divp>`, que não existe.

# --question--

## --text--

Dado o elemento que tem um `id` `title` e uma `class` `primary`, como você usaria os dois atributos em uma única regra?

## --answers--

```css
.title.primary {
  ...
}
```

---

```css
.title > primary {
  ...
}
```

---

```css
#title.primary { 
  ...
}
```


## --video-solution--

3
