---
id: 63ee35450d8d4841c3a70920
videoId: LGQuIIv2RVA
title: Questão G sobre a Introdução ao CSS
challengeType: 15
dashedName: css-foundations-question-g
---

# --description--

CSS interno (ou CSS incorporado) envolve adicionar o CSS no próprio arquivo HTML em vez de criar um arquivo completamente separado. Com o método interno, você coloca todas as regras dentro de um par de tags `<style>`, de abertura e de fechamento, que são então colocadas dentro das tags de abertura e de fechamento de `<head>` do seu arquivo HTML. Como os estilos estão sendo colocados diretamente dentro das tags `<head>`, você não precisa mais de um elemento `<link>`, exigido pelo método externo.

Apesar dessas diferenças, a sintaxe é exatamente a mesma que a do método externo (seletor, chaves, declarações):

```html
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>...</body>
```

Esse método pode ser útil para adicionar estilos exclusivos a uma página em um site, mas não mantém as responsabilidades separadas como o método externo. Dependendo de quantas regras e declarações existam, isso pode fazer com que o arquivo HTML fique muito grande.

# --question--

## --text--

Qual das seguintes opções é uma diferença entre os métodos interno e externo do CSS?

## --answers--

O método externo coloca as regras do CSS em um arquivo separado, enquanto o método interno coloca as regras do CSS dentro do próprio arquivo HTML.

---

O método interno mantém o CSS separado do HTML, enquanto o método externo incorpora o CSS diretamente no HTML.

---

O método interno usa o elemento `<link>` para vincular o CSS ao HTML, enquanto o método externo incorpora o CSS diretamente no HTML.


## --video-solution--

1
