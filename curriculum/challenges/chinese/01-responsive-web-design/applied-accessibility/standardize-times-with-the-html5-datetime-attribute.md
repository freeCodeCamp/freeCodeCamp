---
id: 587d778c367417b2b2512aa9
title: 使用 HTML5 的 datetime 属性标准化时间
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMgtz'
forumTopicId: 301025
dashedName: standardize-times-with-the-html5-datetime-attribute
---

# --description--

继续日期主题。 HTML5 还引入了 `time` 标签与 `datetime` 属性来标准化时间。 `time` 元素是一个行内元素，用于在一个页面上显示日期或时间。 `datetime` 属性包含的有效格式。 辅助设备可以获取这个值。 这个属性也有助于避免混乱，因为它规定了时间的标准化版本，甚至可以在文本中以非正式的方式或学术方式使用它。

举个例子：

```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

# --instructions--

Camper Cat 格斗的调查结果出来了！ 用 `time` 标签包裹文本 `Thursday, September 15<sup>th</sup>`，添加一个 `datetime` 属性，将属性值设置为 `2016-09-15`。

# --hints--

应存在一个 `time` 元素和一个内容文本为 `Thank you to everyone for responding to Master Camper Cat's survey.` 的 `p` 元素。

```js
assert(timeElement);
```

`time` 元素的内容文本应为 `Thursday, September 15<sup>th</sup>`。

```js
assert(
  timeElement &&
    timeElement?.innerHTML?.trim() === 'Thursday, September 15<sup>th</sup>'
);
```

`time` 元素应包含非空的 `datetime` 属性。

```js
assert(datetimeAttr && datetimeAttr?.length);
```

`datetime` 的属性值应为 `2016-09-15`。

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
