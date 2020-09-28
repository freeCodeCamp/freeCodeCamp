---
id: bad88fee1348bd9aedf08816
title: Link to Internal Sections of a Page with Anchor Elements
challengeType: 0
videoUrl: ''
localeTitle: Vincular a seções internas de uma página com elementos âncora
---

## Description
<section id="description"> Os elementos âncora também podem ser usados ​​para criar links internos para pular para diferentes seções dentro de uma página da Web. Para criar um link interno, atribua o atributo <code>href</code> um link a um símbolo de hash <code>#</code> mais o valor do atributo de <code>id</code> para o elemento que você deseja vincular internamente, geralmente mais abaixo na página. Em seguida, você precisa adicionar o mesmo atributo <code>id</code> ao elemento ao qual está vinculando. Um <code>id</code> é um atributo que descreve exclusivamente um elemento. Abaixo está um exemplo de um link de âncora interna e seu elemento de destino: <blockquote> &lt;a href=&quot;#contacts-header&quot;&gt; Contatos &lt;/a&gt; <br> ... <br> &lt;h2 id = &quot;contatos-cabeçalho&quot;&gt; Contatos &lt;/ h2&gt; </blockquote> Quando os usuários clicam no link Contatos, eles são levados para a seção da página da Web com o elemento de cabeçalho <b>Contatos</b> . </section>

## Instructions
<section id="instructions"> Altere seu link externo para um link interno alterando o atributo <code>href</code> para &quot;#footer&quot; e o texto de &quot;cat photos&quot; para &quot;Jump to Bottom&quot;. Remova o atributo <code>target=&quot;_blank&quot;</code> da tag de âncora, pois isso faz com que o documento vinculado seja aberto em uma nova guia da janela. Em seguida, adicione um atributo <code>id</code> com o valor &quot;footer&quot; ao elemento <code>&lt;footer&gt;</code> na parte inferior da página. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Deve haver apenas uma tag de âncora na sua página.
    testString: 'assert($("a").length == 1, "There should be only one anchor tag on your page.");'
  - text: Deve haver apenas uma tag de <code>footer</code> na sua página.
    testString: 'assert($("footer").length == 1, "There should be only one <code>footer</code> tag on your page.");'
  - text: 'A <code>a</code> tag deve ter um <code>href</code> atributo definido como &quot;#footer&quot;.'
    testString: 'assert($("a").eq(0).attr("href") == "#footer", "The <code>a</code> tag should have an <code>href</code> attribute set to "#footer".");'
  - text: A <code>a</code> tag não deve ter um <code>target</code> atributo
    testString: 'assert(typeof $("a").eq(0).attr("target") == typeof undefined || $("a").eq(0).attr("target") == true, "The <code>a</code> tag should not have a <code>target</code> attribute");'
  - text: A <code>a</code> texto deve ser &quot;Ir para fundo&quot;.
    testString: 'assert($("a").eq(0).text().match(/Jump to Bottom/gi), "The <code>a</code> text should be "Jump to Bottom".");'
  - text: A tag de <code>footer</code> deve ter um atributo <code>id</code> definido como &quot;footer&quot;.
    testString: 'assert($("footer").eq(0).attr("id") == "footer", "The <code>footer</code> tag should have an <code>id</code> attribute set to "footer".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer>Copyright Cat Photo App</footer>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
