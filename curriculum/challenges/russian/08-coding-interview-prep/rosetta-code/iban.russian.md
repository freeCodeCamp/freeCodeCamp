---
title: IBAN
id: 5a23c84252665b21eecc7eaf
challengeType: 5
videoUrl: ''
localeTitle: Они были
---

## Description
<section id="description"> <a href="https://en.wikipedia.org/wiki/International_Bank_Account_Number">Международный номер банковского счета (IBAN)</a> является международно согласованным средством определения банковских счетов через национальные границы с уменьшенным риском распространения <a href="https://en.wikipedia.org/wiki/Transcription_error">ошибок транскрипции</a> . IBAN состоит из 34 буквенно-цифровых символов: <ul><li> сначала двухбуквенный код страны ISO 3166-1 alpha-2 </li><li> затем две контрольные цифры и </li><li> наконец, базовый номер банковского счета для конкретной страны (BBAN). </li></ul> Контрольные цифры позволяют проверить работоспособность номера банковского счета, чтобы подтвердить его целостность даже перед отправкой транзакции. Напишите функцию, которая принимает строку IBAN в качестве параметра. Если это верно, верните true. В противном случае верните false. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isValid</code> должна быть функцией.
    testString: 'assert(typeof isValid=="function","<code>isValid</code> should be a function.");'
  - text: '<code>isValid(&quot;&quot;+tests[0]+&quot;&quot;)</code> должен возвращать логическое значение.'
    testString: 'assert(typeof isValid(tests[0])=="boolean","<code>isValid(""+tests[0]+"")</code> should return a boolean.");'
  - text: '<code>isValid(&quot;&quot;+tests[0]+&quot;&quot;)</code> должен возвращать <code>true</code> .'
    testString: 'assert.equal(isValid(tests[0]),true,"<code>isValid(""+tests[0]+"")</code> should return <code>true</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[1]+&quot;&quot;)</code> должен возвращать <code>false</code> .'
    testString: 'assert.equal(isValid(tests[1]),false,"<code>isValid(""+tests[1]+"")</code> should return <code>false</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[2]+&quot;&quot;)</code> должен возвращать <code>false</code> .'
    testString: 'assert.equal(isValid(tests[2]),false,"<code>isValid(""+tests[2]+"")</code> should return <code>false</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[3]+&quot;&quot;)</code> должен возвращать <code>false</code> .'
    testString: 'assert.equal(isValid(tests[3]),false,"<code>isValid(""+tests[3]+"")</code> should return <code>false</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[4]+&quot;&quot;)</code> должны возвращать <code>true</code> .'
    testString: 'assert.equal(isValid(tests[4]),true,"<code>isValid(""+tests[4]+"")</code> should return <code>true</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isValid (iban) {
  // Good luck!
}

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
