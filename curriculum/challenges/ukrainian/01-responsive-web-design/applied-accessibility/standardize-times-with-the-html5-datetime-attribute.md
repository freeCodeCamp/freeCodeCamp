---
id: 587d778c367417b2b2512aa9
title: Стандартизуйте час за допомогою атрибута datetime в HTML5
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMgtz'
forumTopicId: 301025
dashedName: standardize-times-with-the-html5-datetime-attribute
---

# --description--

Продовжуючи тему дати, HTML5 запропонував елемент `time` разом з атрибутом `datetime` з метою стандартизації часу. Елемент `time` є вбудованим і може зберігати дату або час на сторінці. Атрибут `datetime` містить правильний формат дати. До цього значення мають доступ допоміжні пристрої. Атрибут допомагає уникнути плутанини, вказуючи стандартизований формат часу, навіть якщо він неформально вказаний у тексті.

Наприклад:

```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

# --instructions--

Результати опитування Camper Cat стосовно Mortal Combat готові! Обгорніть теґ `time` навколо тексту `Thursday, September 15<sup>th</sup>` і додайте атрибут `datetime`, встановлений на значення `2016-09-15`.

# --hints--

Ваш код має містити елемент `p`, що включає текст `Thank you to everyone for responding to Master Camper Cat's survey.` і елемент `time`.

```js
assert(timeElement);
```

Додані теґи `time` мають обгортати текст `Thursday, September 15<sup>th</sup>`.

```js
assert(
  timeElement &&
    timeElement?.innerHTML?.trim() === 'Thursday, September 15<sup>th</sup>'
);
```

Доданий теґ `time` має містити атрибут `datetime`, який не є порожнім.

```js
assert(datetimeAttr && datetimeAttr?.length);
```

Доданий атрибут `datetime` має бути встановленим на значення `2016-09-15`.

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
