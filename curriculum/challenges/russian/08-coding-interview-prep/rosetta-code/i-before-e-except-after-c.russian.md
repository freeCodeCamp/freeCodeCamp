---
title: I before E except after C
id: 5a23c84252665b21eecc7eb0
challengeType: 5
videoUrl: ''
localeTitle: 'I до E, за исключением C'
---

## Description
<section id="description"> Фраза <a href="https://en.wikipedia.org/wiki/I before E except after C">«I до E, за исключением C»</a> - широко известная мнемоника, которая должна помочь при написании английских слов. Используя предоставленные слова, проверьте, являются ли два подкласса фразы правдоподобными: <ol><li style="margin-bottom: 5px;"> <i>«Я до E, когда не предшествует C».</i> </li><li> <i>«E до I, когда предшествует C».</i> </li></ol> Если обе подфразы правдоподобны, то исходную фразу можно назвать правдоподобной. Напишите функцию, которая принимает слово и проверяет, соответствует ли это слово этому правилу. Функция должна возвращать true, если она соответствует правилу, в противном случае false. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>IBeforeExceptC</code> должен быть функцией.
    testString: 'assert(typeof IBeforeExceptC=="function","<code>IBeforeExceptC</code> should be a function.");'
  - text: <code>IBeforeExceptC(&quot;receive&quot;)</code> должен возвращать логическое значение.
    testString: 'assert(typeof IBeforeExceptC("receive")=="boolean","<code>IBeforeExceptC("receive")</code> should return a boolean.");'
  - text: <code>IBeforeExceptC(&quot;receive&quot;)</code> должен возвращать <code>true</code> .
    testString: 'assert.equal(IBeforeExceptC("receive"),true,"<code>IBeforeExceptC("receive")</code> should return <code>true</code>.");'
  - text: <code>IBeforeExceptC(&quot;science&quot;)</code> должен возвращать <code>false</code> .
    testString: 'assert.equal(IBeforeExceptC("science"),false,"<code>IBeforeExceptC("science")</code> should return <code>false</code>.");'
  - text: <code>IBeforeExceptC(&quot;imperceivable&quot;)</code> должен возвращать <code>true</code> .
    testString: 'assert.equal(IBeforeExceptC("imperceivable"),true,"<code>IBeforeExceptC("imperceivable")</code> should return <code>true</code>.");'
  - text: <code>IBeforeExceptC(&quot;inconceivable&quot;)</code> должен возвращать <code>true</code> .
    testString: 'assert.equal(IBeforeExceptC("inconceivable"),true,"<code>IBeforeExceptC("inconceivable")</code> should return <code>true</code>.");'
  - text: <code>IBeforeExceptC(&quot;insufficient&quot;)</code> должен возвращать <code>false</code> .
    testString: 'assert.equal(IBeforeExceptC("insufficient"),false,"<code>IBeforeExceptC("insufficient")</code> should return <code>false</code>.");'
  - text: <code>IBeforeExceptC(&quot;omniscient&quot;)</code> должен возвращать <code>false</code> .
    testString: 'assert.equal(IBeforeExceptC("omniscient"),false,"<code>IBeforeExceptC("omniscient")</code> should return <code>false</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function IBeforeExceptC (word) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
