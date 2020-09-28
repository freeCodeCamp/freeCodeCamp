---
id: bd7123c9c441eddfaeb4bdef
title: Comment Your JavaScript Code
challengeType: 1
videoUrl: ''
localeTitle: Comente seu código JavaScript
---

## Description
<section id="description"> Comentários são linhas de código que o JavaScript irá ignorar intencionalmente. Os comentários são uma ótima maneira de deixar anotações para você e para outras pessoas que mais tarde precisarão descobrir o que esse código faz. Existem duas maneiras de escrever comentários em JavaScript: Usar o <code>//</code> dirá JavaScript para ignorar o restante do texto na linha atual: <blockquote> // Este é um comentário em linha. </blockquote> Você pode fazer um comentário de várias linhas começando com <code>/*</code> e terminando com <code>*/</code> : <blockquote> /* Isto é um <br> comentário de várias linhas * / </blockquote> <strong>Melhor pratica</strong> <br> Conforme você escreve o código, você deve adicionar regularmente comentários para esclarecer a função de partes do seu código. Bons comentários podem ajudar a comunicar a intenção do seu código - tanto para os outros <em>quanto</em> para o seu futuro. </section>

## Instructions
<section id="instructions"> Tente criar um de cada tipo de comentário. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Crie um <code>//</code> comentário de estilo que contenha pelo menos cinco letras.
    testString: 'assert(code.match(/(\/\/)...../g), "Create a <code>//</code> style comment that contains at least five letters.");'
  - text: Crie um comentário <code>/* */</code> style que contenha pelo menos cinco letras.
    testString: 'assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm), "Create a <code>/* */</code> style comment that contains at least five letters.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>



</section>

## Solution
<section id='solution'>

```js
// Comentário
/* Aqui também pode ser inserido um comentário */
```
</section>
