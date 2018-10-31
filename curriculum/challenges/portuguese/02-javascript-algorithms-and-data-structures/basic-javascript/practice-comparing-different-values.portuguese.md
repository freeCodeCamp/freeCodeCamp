---
id: 599a789b454f2bbd91a3ff4d
title: Practice comparing different values
challengeType: 1
videoUrl: ''
localeTitle: Pratique a comparação de valores diferentes
---

## Description
<section id="description"> Nos dois últimos desafios, aprendemos sobre o operador de igualdade ( <code>==</code> ) e o operador de igualdade estrito ( <code>===</code> ). Vamos fazer uma revisão rápida e praticar o uso desses operadores um pouco mais. Se os valores que estão sendo comparados não forem do mesmo tipo, o operador de igualdade executará uma conversão de tipo e, em seguida, avaliará os valores. No entanto, o operador de igualdade estrita irá comparar tanto o tipo de dados quanto o valor como está, sem converter um tipo para o outro. <strong>Exemplos</strong> <blockquote> 3 == &#39;3&#39; // retorna verdadeiro porque o JavaScript executa conversão de tipo de string para number <br> 3 === &#39;3&#39; // retorna falso porque os tipos são diferentes e o tipo de conversão não é executado </blockquote> <strong>Nota</strong> <br> Em JavaScript, você pode determinar o tipo de uma variável ou um valor com o operador <code>typeof</code> , da seguinte maneira: <blockquote> typeof 3 // retorna &#39;number&#39; <br> typeof &#39;3&#39; // retorna &#39;string&#39; </blockquote></section>

## Instructions
<section id="instructions"> A função <code>compareEquality</code> no editor compara dois valores usando o <code>equality operator</code> . Modifique a função para que ela retorne &quot;Equal&quot; somente quando os valores forem estritamente iguais. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>compareEquality(10, &quot;10&quot;)</code> deve retornar &quot;Not Equal&quot;'
    testString: 'assert(compareEquality(10, "10") === "Not Equal", "<code>compareEquality(10, "10")</code> should return "Not Equal"");'
  - text: '<code>compareEquality(&quot;20&quot;, 20)</code> deve retornar &quot;Not Equal&quot;'
    testString: 'assert(compareEquality("20", 20) === "Not Equal", "<code>compareEquality("20", 20)</code> should return "Not Equal"");'
  - text: Você deve usar o operador <code>===</code>
    testString: 'assert(code.match(/===/g), "You should use the <code>===</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
