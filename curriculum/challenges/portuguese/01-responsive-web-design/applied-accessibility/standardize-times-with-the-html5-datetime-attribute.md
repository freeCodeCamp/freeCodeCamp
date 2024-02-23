---
id: 587d778c367417b2b2512aa9
title: Padronizar o tempo com o atributo datetime no HTML5
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMgtz'
forumTopicId: 301025
dashedName: standardize-times-with-the-html5-datetime-attribute
---

# --description--

Continuando com o tema da data, o HTML5 também introduziu o elemento `time` junto com um atributo `datetime` para padronizar os tempos de data e hora. O elemento `time` é um elemento inline que pode envolver a data ou a hora na página. Um atributo `datetime` mantém um formato válido dessa data. O valor atribuído a este atributo será acessado por dispositivos assistivos. Isso ajuda a evitar confusão ao declarar uma versão padronizada de um horário, mesmo que seja escrito de maneira informal ou coloquial no texto.

Exemplo:

```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

# --instructions--

Os resultados da pesquisa do jogo Mortal Kombat do Camper Cat chegaram! Envolva uma tag `time` em torno do texto `Thursday, September 15<sup>th</sup>` e adicione um atributo `datetime` definido com o valor de `2016-09-15`.

# --hints--

O código deve ter um elemento `p` que inclui o texto `Thank you to everyone for responding to Master Camper Cat's survey.` e inclua um elemento `time`.

```js
assert(timeElement);
```

A tag `time` que você adicionou deve estar ao redor do texto `Thursday, September 15<sup>th</sup>`.

```js
assert(
  timeElement &&
    timeElement?.innerHTML?.trim() === 'Thursday, September 15<sup>th</sup>'
);
```

A tag `time` que você adicionou deve ter um atributo `datetime` que não pode estar vazio.

```js
assert(datetimeAttr && datetimeAttr?.length);
```

O atributo `datetime` adicionado deve ser um conjunto de valores no formato `2016-09-15`.

```js
assert(datetimeAttr === '2016-09-15');
```

# --seed--

## --after-user-code--

```html
<script>
const pElement = [...document.querySelectorAll("article > p")]
  .filter(x => x?.textContent?.includes("Thank you to everyone for responding to Master Camper Cat's survey."));
const timeElement = pElement[0] ? pElement[0].querySelector("time") : null;
const datetimeAttr = timeElement?.getAttribute("datetime");
</script>
```

## --seed-contents--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <article>
    <h2>Mortal Kombat Tournament Survey Results</h2>

    <!-- Only change code below this line -->

    <p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is Thursday, September 15<sup>th</sup>. May the best ninja win!</p>

    <!-- Only change code above this line -->

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

# --solutions--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <article>
    <h2>Mortal Kombat Tournament Survey Results</h2>

    <p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is <time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time>. May the best ninja win!</p>

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
