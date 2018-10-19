---
id: 56533eb9ac21ba0edf2244bb
title: Word Blanks
challengeType: 1
videoUrl: ''
localeTitle: Word Blanks
---

## Description
<section id="description"> Теперь мы будем использовать наши знания объектов String для создания словесной игры « <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a> », которую мы называем «Word Blanks». Вы создадите (возможно, юмористическое) предложение стиля «Заполнить пропуски». В игре «Mad Libs» вам предоставляются предложения с некоторыми пропущенными словами, такими как существительные, глаголы, прилагательные и наречия. Затем вы заполняете недостающие части словами по вашему выбору так, чтобы законченное предложение имело смысл. Рассмотрите это предложение - «Он был действительно <strong>____</strong> , а мы <strong>____</strong> не <strong>____</strong> ». В этом предложении есть три недостающих фрагмента: прилагательное, наречие и глагол, и мы можем добавить слова по нашему выбору, чтобы завершить его. Затем мы можем назначить заполненное предложение переменной следующим образом: <blockquote> var sentence = «Он был действительно« + »страшный« + », а мы« + »совершенно« + »не» + «боялись»; </blockquote></section>

## Instructions
<section id="instructions"> В этой задаче мы предоставляем вам существительное, глагол, прилагательное и наречие. Вам нужно составить полное предложение, используя слова по вашему выбору, а также слова, которые мы предоставляем. Вам понадобится использовать оператор конкатенации строк <code>+</code> для создания новой строки с использованием предоставленных переменных: <code>myNoun</code> , <code>myAdjective</code> , <code>myVerb</code> и <code>myAdverb</code> . Затем вы присвойте сформированную строку переменной <code>result</code> . Вам также нужно будет учитывать пробелы в вашей строке, так что последнее предложение имеет пробелы между всеми словами. Результат должен быть полным предложением. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>wordBlanks(&quot;&quot;,&quot;&quot;,&quot;&quot;,&quot;&quot;)</code> должен возвращать строку.'
    testString: 'assert(typeof wordBlanks("","","","") === "string", "<code>wordBlanks("","","","")</code> should return a string.");'
  - text: '<code>wordBlanks(&quot;dog&quot;, &quot;big&quot;, &quot;ran&quot;, &quot;quickly&quot;)</code> должен содержать все переданные в словах, разделенные символами без слов (и любые дополнительные слова в вашем madlib).'
    testString: 'assert(/\bdog\b/.test(test1) && /\bbig\b/.test(test1) && /\bran\b/.test(test1) && /\bquickly\b/.test(test1),"<code>wordBlanks("dog", "big", "ran", "quickly")</code> should contain all of the passed in words separated by non-word characters (and any additional words in your madlib).");'
  - text: '<code>wordBlanks(&quot;cat&quot;, &quot;little&quot;, &quot;hit&quot;, &quot;slowly&quot;)</code> должен содержать все переданные в словах, разделенные символами без слов (и любые дополнительные слова в вашем madlib).'
    testString: 'assert(/\bcat\b/.test(test2) && /\blittle\b/.test(test2) && /\bhit\b/.test(test2) && /\bslowly\b/.test(test2),"<code>wordBlanks("cat", "little", "hit", "slowly")</code> should contain all of the passed in words separated by non-word characters (and any additional words in your madlib).");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
