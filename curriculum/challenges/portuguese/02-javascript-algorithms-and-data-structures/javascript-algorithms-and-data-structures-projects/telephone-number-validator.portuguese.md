---
id: aff0395860f5d3034dc0bfc9
title: Telephone Number Validator
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Validador de números de telefone
---

## Description
<section id="description"> Retorna <code>true</code> se a string passada parecer um número de telefone válido nos EUA. O usuário pode preencher o campo de formulário da maneira que escolher, desde que tenha o formato de um número válido nos EUA. A seguir, exemplos de formatos válidos para números dos EUA (consulte os testes abaixo para outras variantes): <blockquote> 555-555-5555 <br> (555)555-5555 <br> (555) 555-5555 <br> 555 555 5555 <br> 5555555555 <br> 1 555 555 5555 </blockquote> Para este desafio, você será presenteado com uma seqüência de caracteres, como <code>800-692-7753</code> ou <code>8oo-six427676;laskdjf</code> . Seu trabalho é validar ou rejeitar o número de telefone dos EUA com base em qualquer combinação dos formatos fornecidos acima. O código de área é obrigatório. Se o código do país for fornecido, você deve confirmar que o código do país é <code>1</code> . Retorna <code>true</code> se a string for um número de telefone válido nos EUA. caso contrário, retorne <code>false</code> . Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>telephoneCheck(&quot;555-555-5555&quot;)</code> deve retornar um booleano.
    testString: 'assert(typeof telephoneCheck("555-555-5555") === "boolean", "<code>telephoneCheck("555-555-5555")</code> should return a boolean.");'
  - text: <code>telephoneCheck(&quot;1 555-555-5555&quot;)</code> deve retornar true.
    testString: 'assert(telephoneCheck("1 555-555-5555") === true, "<code>telephoneCheck("1 555-555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;1 (555) 555-5555&quot;)</code> deve retornar true.
    testString: 'assert(telephoneCheck("1 (555) 555-5555") === true, "<code>telephoneCheck("1 (555) 555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;5555555555&quot;)</code> deve retornar true.
    testString: 'assert(telephoneCheck("5555555555") === true, "<code>telephoneCheck("5555555555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;555-555-5555&quot;)</code> deve retornar true.
    testString: 'assert(telephoneCheck("555-555-5555") === true, "<code>telephoneCheck("555-555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;(555)555-5555&quot;)</code> deve retornar true.
    testString: 'assert(telephoneCheck("(555)555-5555") === true, "<code>telephoneCheck("(555)555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;1(555)555-5555&quot;)</code> deve retornar true.
    testString: 'assert(telephoneCheck("1(555)555-5555") === true, "<code>telephoneCheck("1(555)555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;555-5555&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("555-5555") === false, "<code>telephoneCheck("555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;5555555&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("5555555") === false, "<code>telephoneCheck("5555555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;1 555)555-5555&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("1 555)555-5555") === false, "<code>telephoneCheck("1 555)555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;1 555 555 5555&quot;)</code> deve retornar true.
    testString: 'assert(telephoneCheck("1 555 555 5555") === true, "<code>telephoneCheck("1 555 555 5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;1 456 789 4444&quot;)</code> deve retornar true.
    testString: 'assert(telephoneCheck("1 456 789 4444") === true, "<code>telephoneCheck("1 456 789 4444")</code> should return true.");'
  - text: '<code>telephoneCheck(&quot;123**&amp;!!asdf#&quot;)</code> deve retornar false.'
    testString: 'assert(telephoneCheck("123**&!!asdf#") === false, "<code>telephoneCheck("123**&!!asdf#")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;55555555&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("55555555") === false, "<code>telephoneCheck("55555555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(6054756961)&quot;)</code> deve retornar false
    testString: 'assert(telephoneCheck("(6054756961)") === false, "<code>telephoneCheck("(6054756961)")</code> should return false");'
  - text: <code>telephoneCheck(&quot;2 (757) 622-7382&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("2 (757) 622-7382") === false, "<code>telephoneCheck("2 (757) 622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;0 (757) 622-7382&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("0 (757) 622-7382") === false, "<code>telephoneCheck("0 (757) 622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;-1 (757) 622-7382&quot;)</code> deve retornar false
    testString: 'assert(telephoneCheck("-1 (757) 622-7382") === false, "<code>telephoneCheck("-1 (757) 622-7382")</code> should return false");'
  - text: <code>telephoneCheck(&quot;2 757 622-7382&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("2 757 622-7382") === false, "<code>telephoneCheck("2 757 622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;10 (757) 622-7382&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("10 (757) 622-7382") === false, "<code>telephoneCheck("10 (757) 622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;27576227382&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("27576227382") === false, "<code>telephoneCheck("27576227382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(275)76227382&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("(275)76227382") === false, "<code>telephoneCheck("(275)76227382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;2(757)6227382&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("2(757)6227382") === false, "<code>telephoneCheck("2(757)6227382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;2(757)622-7382&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("2(757)622-7382") === false, "<code>telephoneCheck("2(757)622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;555)-555-5555&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("555)-555-5555") === false, "<code>telephoneCheck("555)-555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(555-555-5555&quot;)</code> deve retornar false.
    testString: 'assert(telephoneCheck("(555-555-5555") === false, "<code>telephoneCheck("(555-555-5555")</code> should return false.");'
  - text: ''
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
