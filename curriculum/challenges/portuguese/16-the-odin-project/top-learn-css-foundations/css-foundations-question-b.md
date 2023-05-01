---
id: 63ee35240d8d4841c3a7091b
videoId: LGQuIIv2RVA
title: Questão B sobre a Introdução ao CSS
challengeType: 15
dashedName: css-foundations-question-b
---

# --description--

Seletores de classe selecionarão todos os elementos com a `class`, que é apenas um atributo que você coloca em um elemento do HTML. Veja como adicionar uma classe a uma tag do HTML e selecioná-la no CSS:

```html
<!-- index.html -->

<div class="alert-text">
  Please agree to our terms of service.
</div>
```

```css
/* styles.css */

.alert-text {
  color: red;
}
```

Observe a sintaxe para seletores `class`: um ponto seguido imediatamente pelo valor do atributo de class, diferenciando maiúsculas de minúsculas. As classes não precisam ser exclusivas. Então, você pode usar a mesma `class` em quantos elementos quiser.

Outra coisa que você pode fazer com o atributo `class` é adicionar várias classes a um único elemento como uma lista separada por espaços, como, por exemplo, `class="alert-text severe-alert"`. Como um espaço em branco é usado para separar os nomes das classes em `class`, como no exemplo, você nunca deve usar espaços para nomes com várias palavras. Em vez disso, use um hífen.

## Seletores de ID
Os seletores de ID são semelhantes aos seletores `class`. Eles selecionarão um elemento com o `id` fornecido, que é outro atributo que você coloca em um elemento do HTML:

```html
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
```

```css
/* styles.css */

#title {
  background-color: red;
}
```

Em vez de um ponto, você usa uma hashtag imediatamente seguida do valor do atributo `id`, diferenciando maiúsculas de minúsculas. Uma armadilha comum é o uso em excesso do atributo `id` quando ele não é, de fato, necessário. Há casos onde as classes bastarão. Embora haja casos onde usar `id` faz sentido ou é necessário, como para tirar vantagem de uma especificidade ou fazer com que links redirecionem para uma seção na página atual, você deve usar o `id` com moderação (se precisar usar).

A maior diferença entre classes e IDs é o fato de que um elemento pode ter apenas um `id`. Um `id` não pode ser repetido na mesma página. O atributo `id` também não deve conter espaços em branco.

# --question--

## --text--

Qual é a sintaxe para seletores de class e id?

## --answers--

Para selecionar uma `class`, você usa `$`. Para selecionar um `id`, você usa `#`.

---

Para selecionar uma `class`, você usa `.`. Para selecionar um `id`, você usa `$`. `*`

---

Para selecionar uma `class`, você usa `.`. Para selecionar um `id`, você usa `#`.


## --video-solution--

3
