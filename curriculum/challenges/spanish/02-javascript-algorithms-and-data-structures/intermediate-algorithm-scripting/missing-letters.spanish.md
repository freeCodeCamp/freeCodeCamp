---
id: af7588ade1100bde429baf20
title: Missing letters
localeTitle: Cartas perdidas
isRequired: true
challengeType: 5
---

## Description
<section id='description'> 
Encuentre la letra que falta en el rango de la letra pasada y devuélvala. 
Si todas las letras están presentes en el rango, devuelve indefinido. 
Recuerda usar <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fearNotLetter(&quot;abce&quot;)</code> debe devolver &quot;d&quot;.
    testString: 'assert.deepEqual(fearNotLetter("abce"), "d", "<code>fearNotLetter("abce")</code> should return "d".");'
  - text: <code>fearNotLetter(&quot;abcdefghjklmno&quot;)</code> debe devolver &quot;i&quot;.
    testString: 'assert.deepEqual(fearNotLetter("abcdefghjklmno"), "i", "<code>fearNotLetter("abcdefghjklmno")</code> should return "i".");'
  - text: <code>fearNotLetter(&quot;stvwx&quot;)</code> debería devolver &quot;u&quot;.
    testString: 'assert.deepEqual(fearNotLetter("stvwx"), "u", "<code>fearNotLetter("stvwx")</code> should return "u".");'
  - text: <code>fearNotLetter(&quot;bcdf&quot;)</code> debe devolver &quot;e&quot;.
    testString: 'assert.deepEqual(fearNotLetter("bcdf"), "e", "<code>fearNotLetter("bcdf")</code> should return "e".");'
  - text: <code>fearNotLetter(&quot;abcdefghijklmnopqrstuvwxyz&quot;)</code> debe devolver undefined.
    testString: 'assert.isUndefined(fearNotLetter("abcdefghijklmnopqrstuvwxyz"), "<code>fearNotLetter("abcdefghijklmnopqrstuvwxyz")</code> should return undefined.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function fearNotLetter (str) {
  for (var i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
    var letter = String.fromCharCode(i);
    if (str.indexOf(letter) === -1) {
      return letter;
    }
  }

  return undefined;
}
```

</section>
