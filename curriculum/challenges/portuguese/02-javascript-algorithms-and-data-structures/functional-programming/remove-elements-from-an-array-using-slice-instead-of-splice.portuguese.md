---
id: 9d7123c8c441eeafaeb5bdef
title: Remove Elements from an Array Using slice Instead of splice
challengeType: 1
videoUrl: ''
localeTitle: Remover elementos de um array usando slice Em vez de splice
---

## Description
<section id="description"> Um padrão comum ao trabalhar com matrizes é quando você deseja remover itens e manter o restante da matriz. JavaScript oferece o método <code>splice</code> para isso, que leva argumentos para o índice de onde começar a remover itens e, em seguida, o número de itens a serem removidos. Se o segundo argumento não for fornecido, o padrão será remover itens até o final. No entanto, o método de <code>splice</code> altera o array original em que é chamado. Aqui está um exemplo: <blockquote> var cities = [&quot;Chicago&quot;, &quot;Delhi&quot;, &quot;Islamabad&quot;, &quot;Londres&quot;, &quot;Berlim&quot;]; <br> towns.splice (3, 1); // Retorna &quot;Londres&quot; e apaga da matriz de cidades <br> // cidades é agora [&quot;Chicago&quot;, &quot;Delhi&quot;, &quot;Islamabad&quot;, &quot;Berlin&quot;] </blockquote> Como vimos no último desafio, o método <code>slice</code> não altera o array original, mas retorna um novo que pode ser salvo em uma variável. Lembre-se de que o método de <code>slice</code> usa dois argumentos para os índices começarem e terminarem a fatia (o final não é inclusivo) e retorna esses itens em uma nova matriz. Usar o método de <code>slice</code> , em vez de <code>splice</code> ajuda a evitar efeitos colaterais de alteração de matriz. </section>

## Instructions
<section id="instructions"> Reescreva a função <code>nonMutatingSplice</code> usando <code>slice</code> vez de <code>splice</code> . Ele deve limitar o array de <code>cities</code> fornecidas a um comprimento de 3 e retornar um novo array com apenas os três primeiros itens. Não mude o array original fornecido para a função. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método de <code>slice</code> .
    testString: 'assert(code.match(/\.slice/g), "Your code should use the <code>slice</code> method.");'
  - text: Seu código não deve usar o método de <code>splice</code> .
    testString: 'assert(!code.match(/\.splice/g), "Your code should not use the <code>splice</code> method.");'
  - text: A matriz <code>inputCities</code> não deve ser alterada.
    testString: 'assert(JSON.stringify(inputCities) === JSON.stringify(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]), "The <code>inputCities</code> array should not change.");'
  - text: '<code>nonMutatingSplice([&quot;Chicago&quot;, &quot;Delhi&quot;, &quot;Islamabad&quot;, &quot;London&quot;, &quot;Berlin&quot;])</code> deve retornar <code>[&quot;Chicago&quot;, &quot;Delhi&quot;, &quot;Islamabad&quot;]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])) === JSON.stringify(["Chicago", "Delhi", "Islamabad"]), "<code>nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])</code> should return <code>["Chicago", "Delhi", "Islamabad"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingSplice(cities) {
  // Add your code below this line
  return cities.splice(3);

  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
