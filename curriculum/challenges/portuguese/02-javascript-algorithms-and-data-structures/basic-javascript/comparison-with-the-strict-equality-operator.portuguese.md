---
id: 56533eb9ac21ba0edf2244d1
title: Comparison with the Strict Equality Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparação com o operador Strict Equality
---

## Description
<section id="description"> A igualdade estrita ( <code>===</code> ) é a contrapartida do operador de igualdade ( <code>==</code> ). No entanto, ao contrário do operador de igualdade, que tenta converter os dois valores sendo comparados a um tipo comum, o operador de igualdade estrita não executa uma conversão de tipo. Se os valores que estão sendo comparados tiverem tipos diferentes, eles serão considerados desiguais e o operador de igualdade estrita retornará false. <strong>Exemplos</strong> <blockquote> 3 === 3 // verdadeiro <br> 3 === &#39;3&#39; // false </blockquote> No segundo exemplo, <code>3</code> é um tipo <code>Number</code> e <code>&#39;3&#39;</code> é um tipo <code>String</code> . </section>

## Instructions
<section id="instructions"> Use o operador de igualdade estrito na instrução <code>if</code> para que a função retorne &quot;Equal&quot; quando <code>val</code> for estritamente igual a <code>7</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testStrict(10)</code> deve retornar &quot;não igual&quot;
    testString: 'assert(testStrict(10) === "Not Equal", "<code>testStrict(10)</code> should return "Not Equal"");'
  - text: <code>testStrict(7)</code> deve retornar &quot;igual&quot;
    testString: 'assert(testStrict(7) === "Equal", "<code>testStrict(7)</code> should return "Equal"");'
  - text: <code>testStrict(&quot;7&quot;)</code> deve retornar &quot;não igual&quot;
    testString: 'assert(testStrict("7") === "Not Equal", "<code>testStrict("7")</code> should return "Not Equal"");'
  - text: Você deve usar o operador <code>===</code>
    testString: 'assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0, "You should use the <code>===</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
