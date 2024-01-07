---
id: 587d778c367417b2b2512aa9
title: HTML5 の datetime 属性で時刻を標準化する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMgtz'
forumTopicId: 301025
dashedName: standardize-times-with-the-html5-datetime-attribute
---

# --description--

日付に関する話題を続けます。HTML5 では時刻を標準化する `time` 要素と `datetime` 属性が導入されました。 `time` 要素は、ページ上の日付や時刻をラップできるインライン要素です。 `datetime` 属性は、その日付の有効なフォーマットを保持します。 支援デバイスがこの値にアクセスします。 テキスト中で時刻が非公式または口語的な形式で記載されている場合であっても、標準化された形式の時刻を記述することで混乱を避けることができます。

例:

```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

# --instructions--

Camper Cat の Mortal Kombat の調査結果が出ました！ `Thursday, September 15<sup>th</sup>` というテキストの周りを `time` タグでラップし、`2016-09-15` が設定された `datetime` 属性を追加してください。

# --hints--

コードには `Thank you to everyone for responding to Master Camper Cat's survey.` のテキストを持つ `p` 要素と、`time` 要素が必要です。

```js
assert(timeElement);
```

追加された `time` タグは `Thursday, September 15<sup>th</sup>` テキストをラップしなければなりません。

```js
assert(
  timeElement &&
    timeElement?.innerHTML?.trim() === 'Thursday, September 15<sup>th</sup>'
);
```

`time` タグは空ではない `datetime` 属性を持つ必要があります。

```js
assert(datetimeAttr && datetimeAttr?.length);
```

追加された `datetime` 属性には `2016-09-15` の値を設定する必要があります。

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
