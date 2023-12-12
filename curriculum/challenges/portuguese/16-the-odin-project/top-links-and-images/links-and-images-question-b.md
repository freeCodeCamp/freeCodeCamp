---
id: 637f703572c65bc8e73dfe35
title: Questão B de Links e imagens
challengeType: 15
dashedName: links-and-images-question-b
---

# --description--

Para fazer alguns exercícios práticos usando links e imagens nesta lição, você precisa de um projeto de HTML para trabalhar.

- Crie um diretório chamado `odin-links-and-images`.

- Dentro desse diretório, crie um arquivo e dê a ele o nome de `index.html`.

- Preencha o boilerplate do HTML de sempre.

- Por fim, adicione o seguinte `h1` ao `body`: `<h1>Homepage</h1>`

## Elementos de âncora
Para criar um link em HTML, use o elemento de âncora. Um elemento de âncora é definido agregando o texto ou outro elemento do HTML que você que seja um link à tag `<a>`. Adicione o seguinte ao `body` da página `index.html` que você criou e abra a página no navegador:

```html
<a>click me</a>
```

Você pode ter notado que, ao clicar nesse link, nada acontece. Isso ocorre porque uma tag de âncora sozinha não saberá para onde você quer ir. Você tem que informar a ela um destino. Você faz isso utilizando um atributo do HTML. Um atributo do HTML fornece informações adicionais para um elemento do HTML e sempre vai na tag de abertura do elemento. Um atributo é geralmente composto por duas partes: um nome e um valor. No entanto, nem todos os atributos requerem um valor. No seu caso, você precisa adicionar um atributo `href` (referência de hiperlink) à tag de abertura do elemento de âncora. O valor do atributo `href` é o destino para o qual você quer o seu link vá. Adicione o atributo `href` abaixo ao elemento âncora que você criou anteriormente e tente clicar novamente. Não se esqueça de atualizar o navegador para que as novas alterações possam ser aplicadas.

```html
<a href="https://www.theodinproject.com/about">click me</a>
```

Por padrão, qualquer texto agregado a uma tag de âncora sem um atributo `href` parecerá texto simples. Se o atributo `href` estiver presente, o navegador dará ao texto uma cor azul e vai sublinhá-lo para representar um link. Vale a pena notar que você pode usar tags de âncora para vincular qualquer tipo de recurso na internet, não apenas outros documentos HTML. Você pode vincular vídeos, arquivos em PDF, imagens e assim por diante. Na maioria das vezes, no entanto, você vinculará a tag a outros documentos HTML.

# --question--
## --text--

O que é um atributo?
## --answers--

Um atributo do HTML fornece informações adicionais para um elemento do HTML e sempre vai na tag de fechamento do elemento.

---

Um atributo do HTML é usado para informar ao navegador o que o elemento contém.

---

Um atributo do HTML fornece informações adicionais para um elemento do HTML e sempre vai na tag de abertura do elemento.


## --video-solution--

3
