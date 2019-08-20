---
id: 587d778c367417b2b2512aa9
title: Standardize Times with the HTML5 datetime Attribute
challengeType: 0
videoUrl: ''
localeTitle: Padronizar Tempos com o Atributo de Data e Hora HTML5
---

## Description
<section id="description"> Continuando com o tema date, o HTML5 também introduziu o elemento <code>time</code> junto com um atributo <code>datetime</code> para padronizar os tempos. Este é um elemento in-line que pode envolver uma data ou hora em uma página. Um formato válido dessa data é mantido pelo atributo <code>datetime</code> . Esse é o valor acessado pelos dispositivos auxiliares. Isso ajuda a evitar a confusão, afirmando uma versão padronizada de um tempo, mesmo que seja escrito de maneira informal ou coloquial no texto. Aqui está um exemplo: <code>&lt;p&gt;Master Camper Cat officiated the cage match between Goro and Scorpion &lt;time datetime=&quot;2013-02-13&quot;&gt;last Wednesday&lt;/time&gt;, which ended in a draw.&lt;/p&gt;</code> </section>

## Instructions
<section id="instructions"> Resultados da pesquisa Mortal Kombat do Camper Cat estão em! Adicione uma tag de <code>time</code> torno do texto &quot;Quinta-feira, 15 de setembro &lt;sup&gt; th &lt;/ sup&gt;&quot; e adicione um atributo <code>datetime</code> a ele definido como &quot;2016-09-15&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Suas tags de <code>time</code> devem envolver o texto &quot;Thursday, September 15 &lt;sup&gt; th &lt;/ sup&gt;&quot;.'
    testString: 'assert($("time").text().match(/Thursday, September 15th/g), "Your <code>time</code> tags should wrap around the text "Thursday, September 15&lt;sup&gt;th&lt;/sup&gt;".");'
  - text: Sua tag de <code>time</code> deve ter um atributo de <code>datetime</code> que não esteja vazio.
    testString: 'assert($("time").attr("datetime"), "Your <code>time</code> tag should have a <code>datetime</code> attribute that is not empty.");'
  - text: Seu atributo <code>datetime</code> deve ser definido com um valor de 2016-09-15.
    testString: 'assert($("time").attr("datetime") === "2016-09-15", "Your <code>datetime</code> attribute should be set to a value of 2016-09-15.");'
  - text: Certifique-se de que seu elemento de <code>time</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/time>/g) && code.match(/<\/time>/g).length === 4, "Make sure your <code>time</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <article>
    <h2>Mortal Kombat Tournament Survey Results</h2>

    <!-- Add your code below this line -->

    <p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is Thursday, September 15<sup>th</sup>. May the best ninja win!</p>

    <!-- Add your code above this line -->

    <section>
      <h3>Comments:</h3>
      <article>
        <p>Posted by: Sub-Zero on <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time></p>
        <p>Johnny Cage better be there, I'll finish him!</p>
      </article>
      <article>
        <p>Posted by: Doge on <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time></p>
        <p>Wow, much combat, so mortal.</p>
      </article>
      <article>
        <p>Posted by: The Grim Reaper on <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time></p>
        <p>Looks like I'll be busy that day.</p>
      </article>
    </section>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
