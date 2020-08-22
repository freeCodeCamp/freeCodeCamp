---
id: aff0395860f5d3034dc0bfc9
title: Telephone Number Validator
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Validador de números de teléfono
---

## Description
<section id="description"> Devuelva <code>true</code> si la cadena pasada parece un número de teléfono válido de EE. UU. El usuario puede completar el campo del formulario de la forma que elija, siempre que tenga el formato de un número de EE. UU. Válido. Los siguientes son ejemplos de formatos válidos para números de EE. UU. (Consulte las siguientes pruebas para otras variantes): <blockquote> 555-555-5555 <br> (555) 555-5555 <br> (555) 555-5555 <br> 555 555 5555 <br> 5555555555 <br> 1 555 555 5555 </blockquote> Para este desafío, se te presentará una cadena como <code>800-692-7753</code> o <code>8oo-six427676;laskdjf</code> . Su trabajo es validar o rechazar el número de teléfono de los EE. UU. En función de cualquier combinación de los formatos proporcionados anteriormente. El código de área es obligatorio. Si se proporciona el código de país, debe confirmar que el código de país es <code>1</code> . Devuelva <code>true</code> si la cadena es un número de teléfono de EE. UU. Válido; de lo contrario devuelve <code>false</code> . Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>telephoneCheck(&quot;555-555-5555&quot;)</code> debe devolver un valor booleano.
    testString: 'assert(typeof telephoneCheck("555-555-5555") === "boolean", "<code>telephoneCheck("555-555-5555")</code> should return a boolean.");'
  - text: <code>telephoneCheck(&quot;1 555-555-5555&quot;)</code> debe devolver el valor verdadero.
    testString: 'assert(telephoneCheck("1 555-555-5555") === true, "<code>telephoneCheck("1 555-555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;1 (555) 555-5555&quot;)</code> debe devolver verdadero.
    testString: 'assert(telephoneCheck("1 (555) 555-5555") === true, "<code>telephoneCheck("1 (555) 555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;5555555555&quot;)</code> debe devolver verdadero.
    testString: 'assert(telephoneCheck("5555555555") === true, "<code>telephoneCheck("5555555555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;555-555-5555&quot;)</code> debe devolver verdadero.
    testString: 'assert(telephoneCheck("555-555-5555") === true, "<code>telephoneCheck("555-555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;(555)555-5555&quot;)</code> debe devolver verdadero.
    testString: 'assert(telephoneCheck("(555)555-5555") === true, "<code>telephoneCheck("(555)555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;1(555)555-5555&quot;)</code> debe devolver verdadero.
    testString: 'assert(telephoneCheck("1(555)555-5555") === true, "<code>telephoneCheck("1(555)555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;555-5555&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("555-5555") === false, "<code>telephoneCheck("555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;5555555&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("5555555") === false, "<code>telephoneCheck("5555555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;1 555)555-5555&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("1 555)555-5555") === false, "<code>telephoneCheck("1 555)555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;1 555 555 5555&quot;)</code> debe devolver verdadero.
    testString: 'assert(telephoneCheck("1 555 555 5555") === true, "<code>telephoneCheck("1 555 555 5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;1 456 789 4444&quot;)</code> debe devolver verdadero.
    testString: 'assert(telephoneCheck("1 456 789 4444") === true, "<code>telephoneCheck("1 456 789 4444")</code> should return true.");'
  - text: '<code>telephoneCheck(&quot;123**&amp;!!asdf#&quot;)</code> debe devolver falso.'
    testString: 'assert(telephoneCheck("123**&!!asdf#") === false, "<code>telephoneCheck("123**&!!asdf#")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;55555555&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("55555555") === false, "<code>telephoneCheck("55555555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(6054756961)&quot;)</code> debe devolver falso
    testString: 'assert(telephoneCheck("(6054756961)") === false, "<code>telephoneCheck("(6054756961)")</code> should return false");'
  - text: <code>telephoneCheck(&quot;2 (757) 622-7382&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("2 (757) 622-7382") === false, "<code>telephoneCheck("2 (757) 622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;0 (757) 622-7382&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("0 (757) 622-7382") === false, "<code>telephoneCheck("0 (757) 622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;-1 (757) 622-7382&quot;)</code> debe devolver falso
    testString: 'assert(telephoneCheck("-1 (757) 622-7382") === false, "<code>telephoneCheck("-1 (757) 622-7382")</code> should return false");'
  - text: <code>telephoneCheck(&quot;2 757 622-7382&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("2 757 622-7382") === false, "<code>telephoneCheck("2 757 622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;10 (757) 622-7382&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("10 (757) 622-7382") === false, "<code>telephoneCheck("10 (757) 622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;27576227382&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("27576227382") === false, "<code>telephoneCheck("27576227382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(275)76227382&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("(275)76227382") === false, "<code>telephoneCheck("(275)76227382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;2(757)6227382&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("2(757)6227382") === false, "<code>telephoneCheck("2(757)6227382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;2(757)622-7382&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("2(757)622-7382") === false, "<code>telephoneCheck("2(757)622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;555)-555-5555&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("555)-555-5555") === false, "<code>telephoneCheck("555)-555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(555-555-5555&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("(555-555-5555") === false, "<code>telephoneCheck("(555-555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(555)5(55?)-5555&quot;)</code> debe devolver falso.
    testString: 'assert(telephoneCheck("(555)5(55?)-5555") === false, "<code>telephoneCheck("(555)5(55?)-5555")</code> should return false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function telephoneCheck(str) {
  // Good luck!
  return true;
}

telephoneCheck("555-555-5555");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
