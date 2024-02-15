---
id: 587d778c367417b2b2512aa9
title: HTML5의 datetime 속성을 사용하여 시간을 표준화하세요.
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMgtz'
forumTopicId: 301025
dashedName: standardize-times-with-the-html5-datetime-attribute
---

# --description--

날짜 주제를 이어가자면, HTML5에서는 `datetime` 속성과 함께 `time` 요소를 소개하여 시간을 표준화했습니다. `time` 요소는 페이지에서 날짜 또는 시간을 감쌀 수 있는 인라인 요소입니다. `datetime` 속성은 해당 날짜의 유효한 형식을 저장합니다. 이 값은 접근성 기기에서 액세스할 수 있습니다. 이것은 텍스트에서 표준어가 아니거나 대화체로 쓰여진 시간의 표준화된 버전을 나타내어 혼란을 방지하는 데 도움이 됩니다.

여기 예시가 있습니다.

```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

# --instructions--

캠퍼 캣의 모탈 컴뱃 설문 조사 결과가 나왔습니다! 주어진 텍스트인 `Thursday, September 15<sup>th</sup>`를 `time` 태그로 감싸고 `datetime` 속성을 `2016-09-15`로 설정하세요.

# --hints--

코드에는 `p` 요소가 있어야 하며 그 안에는 텍스트 `Thank you to everyone for responding to Master Camper Cat's survey.`와 `time` 요소를 포함해야 합니다.

```js
assert(timeElement);
```

추가한 `time` 태그는 텍스트 `Thursday, September 15<sup>th</sup>`을 감싸야 합니다.

```js
assert(
  timeElement &&
    timeElement?.innerHTML?.trim() === 'Thursday, September 15<sup>th</sup>'
);
```

`time` 태그에는 `datetime` 속성이 있어야 하며, 이 속성은 비어있으면 안 됩니다.

```js
assert(datetimeAttr && datetimeAttr?.length);
```

추가한 `datetime` 속성은 `2016-09-15`로 설정되어야 합니다.

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
