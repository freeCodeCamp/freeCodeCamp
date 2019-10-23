---
id: bad87fee1348bd9aecf08801
title: Introduction to HTML5 Elements
challengeType: 0
videoUrl: ''
localeTitle: Introdução aos elementos HTML5
---

## Description
<section id="description"> O HTML5 introduz mais tags HTML descritivas. Estes incluem <code>header</code> , <code>footer</code> , <code>nav</code> , <code>video</code> , <code>article</code> , <code>section</code> e outros. Essas tags facilitam a leitura do seu HTML, além de ajudar na Otimização do Mecanismo de Pesquisa (SEO) e na acessibilidade. A tag HTML5 <code>main</code> ajuda os mecanismos de pesquisa e outros desenvolvedores a encontrar o conteúdo principal de sua página. <strong>Nota</strong> <br> Muitas das novas tags HTML5 e seus benefícios são abordados na seção Acessibilidade Aplicada. </section>

## Instructions
<section id="instructions"> Crie um segundo elemento <code>p</code> após o elemento <code>p</code> existente com o seguinte texto ipsum gatinho: <code>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</code> Enrole os parágrafos com uma tag <code>main</code> abertura e fechamento. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você precisa de 2 elementos <code>p</code> com o texto Kitty Ipsum.
    testString: 'assert($("p").length > 1, "You need 2 <code>p</code> elements with Kitty Ipsum text.");'
  - text: Certifique-se de que cada um dos seus elementos <code>p</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure each of your <code>p</code> elements has a closing tag.");'
  - text: Seu elemento <code>p</code> deve conter as primeiras palavras do <code>kitty ipsum text</code> adicional fornecido pelo <code>kitty ipsum text</code> .
    testString: 'assert.isTrue((/Purr\s+jump\s+eat/gi).test($("p").text()), "Your <code>p</code> element should contain the first few words of the provided additional <code>kitty ipsum text</code>.");'
  - text: Seu código deve ter um elemento <code>main</code> .
    testString: 'assert($("main").length === 1, "Your code should have one <code>main</code> element.");'
  - text: O elemento <code>main</code> deve ter dois elementos de parágrafo como filhos.
    testString: 'assert($("main").children("p").length === 2, "The <code>main</code> element should have two paragraph elements as children.");'
  - text: A tag <code>main</code> abertura deve vir antes da tag do primeiro parágrafo.
    testString: 'assert(code.match(/<main>\s*?<p>/g), "The opening <code>main</code> tag should come before the first paragraph tag.");'
  - text: A tag <code>main</code> fechamento deve vir após a segunda tag de parágrafo de fechamento.
    testString: 'assert(code.match(/<\/p>\s*?<\/main>/g), "The closing <code>main</code> tag should come after the second closing paragraph tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
