---
id: 587d778c367417b2b2512aa9
title: Standardizzare gli orari con l'attributo HTML5 datetime
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMgtz'
forumTopicId: 301025
dashedName: standardize-times-with-the-html5-datetime-attribute
---

# --description--

Proseguendo con il tema della data, HTML5 ha introdotto l'elemento `time` insieme a un attributo `datetime` per standardizzare gli orari. L'elemento `time` è un elemento in linea che può avvolgere una data o un'ora in una pagina. Un attributo `datetime` contiene un formato valido di quella data. Questo è il valore accessibile alle tecnologie assistive. Esso aiuta ad evitare confusione fornendo una versione standardizzata di una data, anche se è scritta in modo informale o colloquiale nel testo.

Ecco un esempio:

```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

# --instructions--

I risultati del sondaggio di Camper Cat sul torneo di Mortal Kombat sono arrivati! Metti un tag `time` intorno al testo `Thursday, September 15<sup>th</sup>` e aggiungi un attributo `datetime` impostato a `2016-09-15`.

# --hints--

Il tuo codice dovrebbe avere un elemento `p` che include il testo `Thank you to everyone for responding to Master Camper Cat's survey.` e che abbia un elemento `time`.

```js
assert(timeElement);
```

I tuoi tag `time` aggiuntivi dovrebbero avvolgere il testo `Thursday, September 15<sup>th</sup>`.

```js
assert(
  timeElement &&
    timeElement?.innerHTML?.trim() === 'Thursday, September 15<sup>th</sup>'
);
```

Il tuo tag `time` dovrebbe avere un attributo `datetime` non vuoto.

```js
assert(datetimeAttr && datetimeAttr?.length);
```

Il tuo attributo `datetime` dovrebbe essere impostato sul valore `2016-09-15`.

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
