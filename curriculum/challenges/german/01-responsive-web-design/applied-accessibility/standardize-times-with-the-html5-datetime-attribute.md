---
id: 587d778c367417b2b2512aa9
title: Standardisiere Zeitangaben mit dem HTML5 datetime-Attribut
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMgtz'
forumTopicId: 301025
dashedName: standardize-times-with-the-html5-datetime-attribute
---

# --description--

Um mit dem Datumsthema fortzufahren, HTML5 führte auch das `time`-Element zusammen mit einem `datetime`-Attribut ein, um Zeiten zu standardisieren. Das `time`-Tag ist ein Inline-Element, das ein Datum oder eine Uhrzeit auf einer Webseite enthalten kann. Ein `datetime`-Attribut enthält dieses Datum in einem gültigen Format. Dies ist der Wert, auf den Assistenzgeräte zugreifen. Es hilft Verwirrungen zu vermeiden, indem es eine standardisierte Version einer Zeitangabe bereithält, auch wenn diese im Text informell oder umgangssprachlich ausgedrückt wurde.

Hier ist ein Beispiel:

```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

# --instructions--

Die Ergebnisse der Mortal Kombat-Umfrage von Camper Cat sind da! Umschließe den Text `Thursday, September 15<sup>th</sup>` mit einem `time`-Tag und füge ein `datetime` Attribut mit dem Wert `2016-09-15` hinzu.

# --hints--

Dein Code sollte ein `p`-Element enthalten, das den Text `Thank you to everyone for responding to Master Camper Cat's survey.` und ein `time`-Element enthält.

```js
assert(timeElement);
```

Deine hinzugefügten `time`-Tags sollten den Text `Thursday, September 15<sup>th</sup>` umschließen.

```js
assert(
  timeElement &&
    timeElement?.innerHTML?.trim() === 'Thursday, September 15<sup>th</sup>'
);
```

Dein hinzugefügtes `time`-Tag sollte ein `datetime`-Attribut haben, das nicht leer ist.

```js
assert(datetimeAttr && datetimeAttr?.length);
```

Dein hinzugefügtes `datetime`-Attribut sollte auf den Wert `2016-09-15` gesetzt werden.

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
