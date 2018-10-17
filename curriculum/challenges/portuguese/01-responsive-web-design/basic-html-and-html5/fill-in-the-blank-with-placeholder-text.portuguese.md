---
id: bad87fee1348bd9aedf08833
title: Fill in the Blank with Placeholder Text
challengeType: 0
videoUrl: ''
localeTitle: Preencha o espaço em branco com texto de espaço reservado
---

## Description
<section id="description"> Os desenvolvedores Web usam tradicionalmente o <code>lorem ipsum text</code> como texto de espaço reservado. O texto &quot;lorem ipsum&quot; é retirado aleatoriamente de uma passagem famosa de Cícero da Roma Antiga. O texto Lorem ipsum tem sido usado como texto de espaço reservado por tipógrafos desde o século XVI, e essa tradição continua na web. Bem, 5 séculos é tempo suficiente. Já que estamos construindo um CatPhotoApp, vamos usar algo chamado <code>kitty ipsum text</code> . </section>

## Instructions
<section id="instructions"> Substitua o texto dentro de seu elemento <code>p</code> com as primeiras palavras deste kitty texto ipsum: <code>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>p</code> deve conter as primeiras palavras do <code>kitty ipsum text</code> fornecido.
    testString: 'assert.isTrue((/Kitty(\s)+ipsum/gi).test($("p").text()), "Your <code>p</code> element should contain the first few words of the provided <code>kitty ipsum text</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
