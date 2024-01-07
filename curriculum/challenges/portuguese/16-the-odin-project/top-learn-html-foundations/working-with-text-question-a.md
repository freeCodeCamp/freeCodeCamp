---
id: 637f4e5872c65bc8e73dfe27
videoId: yqcd-XkxZNM
title: Questão A de Trabalhando com textos
challengeType: 15
dashedName: working-with-text-question-a
---

# --description--

O que você esperaria que o seguinte texto exibisse em uma página HTML?

```html
<body>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</body>
```

Parece que há dois parágrafos do texto. Ou seja, pode-se esperar que sejam exibidos desse modo. No entanto, esse não é o caso, como você pode ver pelo resultado abaixo:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/xxrKqeV?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=xxrKqeV&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="CodePen incorporado" loading="lazy" id="cp_embed_xxrKqeV"></iframe>

Quando o navegador encontrar novas linhas como essa em seu HTML, ele as comprimirá em um único espaço. O resultado desta compressão é que todo o texto é colocado em uma única linha.

Se quiser criar parágrafos em HTML, é preciso utilizar o elemento de parágrafo, que acrescentará uma nova linha após cada um dos parágrafos. Um elemento de parágrafo é definido envolvendo o conteúdo do texto com uma tag `<p>`.

Ao mudar nosso exemplo de antes para usar elementos dos parágrafos, corrigimos o problema:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_2" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/mdwbmdp?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=mdwbmdp&amp;user=TheOdinProjectExamples&amp;name=cp_embed_2" style="width: 100%; overflow:hidden; display:block;" title="CodePen incorporado" loading="lazy" id="cp_embed_mdwbmdp"></iframe>

# --question--

## --assignment--

Assista o vídeo de Kevin Powell sobre Parágrafos e títulos do HTML acima.

## --text--

Como se cria um parágrafo em HTML?

## --answers--

`<h3>This is a paragraph</h3>`

---

`<p>This is a paragraph</p>`

---

`<strong>This is a paragraph<strong>`


## --video-solution--

2
