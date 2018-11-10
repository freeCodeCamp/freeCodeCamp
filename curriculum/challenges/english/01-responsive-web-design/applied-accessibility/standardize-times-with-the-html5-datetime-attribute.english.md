---
id: 587d778c367417b2b2512aa9
title: Standardize Times with the HTML5 datetime Attribute
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMgtz'
---

## Description
<section id='description'>
Continuing with the date theme, HTML5 also introduced the <code>time</code> element along with a <code>datetime</code> attribute to standardize times. This is an inline element that can wrap a date or time on a page. A valid format of that date is held by the <code>datetime</code> attribute. This is the value accessed by assistive devices. It helps avoid confusion by stating a standardized version of a time, even if it's written in an informal or colloquial manner in the text.
Here's an example:
<code>&lt;p&gt;Master Camper Cat officiated the cage match between Goro and Scorpion &lt;time datetime=&quot;2013-02-13&quot;&gt;last Wednesday&lt;/time&gt;, which ended in a draw.&lt;/p&gt;</code>
</section>

## Instructions
<section id='instructions'>
Camper Cat's Mortal Kombat survey results are in! Wrap a <code>time</code> tag around the text "Thursday, September 15&lt;sup&gt;th&lt;/sup&gt;" and add a <code>datetime</code> attribute to it set to "2016-09-15".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>time</code> tags should wrap around the text "Thursday, September 15&lt;sup&gt;th&lt;/sup&gt;".
    testString: assert($('time').text().match(/Thursday, September 15th/g), 'Your <code>time</code> tags should wrap around the text "Thursday, September 15&lt;sup&gt;th&lt;/sup&gt;".');
  - text: Your <code>time</code> tag should have a <code>datetime</code> attribute that is not empty.
    testString: assert($('time').attr('datetime'), 'Your <code>time</code> tag should have a <code>datetime</code> attribute that is not empty.');
  - text: Your <code>datetime</code> attribute should be set to a value of 2016-09-15.
    testString: assert($('time').attr('datetime') === "2016-09-15", 'Your <code>datetime</code> attribute should be set to a value of 2016-09-15.');
  - text: Make sure your <code>time</code> element has a closing tag.
    testString: assert(code.match(/<\/time>/g) && code.match(/<\/time>/g).length === 4, 'Make sure your <code>time</code> element has a closing tag.');

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
