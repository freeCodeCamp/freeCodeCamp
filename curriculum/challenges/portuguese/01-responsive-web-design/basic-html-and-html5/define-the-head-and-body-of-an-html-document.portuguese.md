---
id: 587d78aa367417b2b2512aec
title: Define the Head and Body of an HTML Document
challengeType: 0
videoUrl: ''
localeTitle: Definir a cabeça e o corpo de um documento HTML
---

## Description
<section id="description"> Você pode adicionar outro nível de organização em seu documento HTML dentro das tags <code>html</code> com os elementos <code>head</code> e <code>body</code> . Qualquer marcação com informações sobre sua página entraria na tag <code>head</code> . Então, qualquer marcação com o conteúdo da página (o que é exibido para um usuário) entraria na tag <code>body</code> . Elementos de metadados, como <code>link</code> , <code>meta</code> , <code>title</code> e <code>style</code> , normalmente entram no elemento <code>head</code> . Aqui está um exemplo de layout de uma página: <blockquote> &lt;! DOCTYPE html&gt; <br> &lt;html&gt; <br> &lt;cabeça&gt; <br> &lt;! - elementos de metadados -&gt; <br> &lt;/ head&gt; <br> &lt;body&gt; <br> &lt;! - conteúdo da página -&gt; <br> &lt;/ body&gt; <br> &lt;/ html&gt; </blockquote></section>

## Instructions
<section id="instructions"> Edite a marcação para que haja uma <code>head</code> e um <code>body</code> . O elemento <code>head</code> deve incluir apenas o <code>title</code> , e o elemento <code>body</code> deve incluir apenas o <code>h1</code> e o <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Deve haver apenas um elemento <code>head</code> na página.
    testString: 'assert($("head").length == 1, "There should be only one <code>head</code> element on the page.");'
  - text: Deve haver apenas um elemento de <code>body</code> na página.
    testString: 'assert($("body").length == 1, "There should be only one <code>body</code> element on the page.");'
  - text: O elemento <code>head</code> deve ser um filho do elemento <code>html</code> .
    testString: 'assert($("html").children("head").length == 1, "The <code>head</code> element should be a child of the <code>html</code> element.");'
  - text: O elemento <code>body</code> deve ser filho do elemento <code>html</code> .
    testString: 'assert($("html").children("body").length == 1, "The <code>body</code> element should be a child of the <code>html</code> element.");'
  - text: O elemento <code>head</code> deve envolver o elemento <code>title</code> .
    testString: 'assert(code.match(/<head>\s*?<title>\s*?.*?\s*?<\/title>\s*?<\/head>/gi), "The <code>head</code> element should wrap around the <code>title</code> element.");'
  - text: O elemento do <code>body</code> deve envolver os elementos <code>h1</code> e <code>p</code> .
    testString: 'assert($("body").children("h1").length == 1 && $("body").children("p").length == 1, "The <code>body</code> element should wrap around both the <code>h1</code> and <code>p</code> elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
