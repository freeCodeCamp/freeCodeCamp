---
id: 56533eb9ac21ba0edf2244c9
title: Accessing Object Properties with Variables
challengeType: 1
videoUrl: ''
localeTitle: Acessando propriedades de objetos com variáveis
---

## Description
<section id="description"> Outro uso da notação de colchetes em objetos é acessar uma propriedade que é armazenada como o valor de uma variável. Isso pode ser muito útil para iterar pelas propriedades de um objeto ou ao acessar uma tabela de pesquisa. Aqui está um exemplo de uso de uma variável para acessar uma propriedade: <blockquote> var dogs = { <br> Fido: &quot;Mutt&quot;, Hunter: &quot;Doberman&quot;, Snoopie: &quot;Beagle&quot; <br> }; <br> var myDog = &quot;Caçador&quot;; <br> var myBreed = cachorros [myDog]; <br> console.log (myBreed); // &quot;Doberman&quot; </blockquote> Outra maneira de usar esse conceito é quando o nome da propriedade é coletado dinamicamente durante a execução do programa, da seguinte maneira: <blockquote> var someObj = { <br> propName: &quot;John&quot; <br> }; <br> function propPrefix (str) { <br> var s = &quot;prop&quot;; <br> return s + str; <br> } <br> var someProp = propPrefix (&quot;Nome&quot;); // someProp agora contém o valor &#39;propName&#39; <br> console.log (someObj [someProp]); // &quot;John&quot; </blockquote> Observe que <em>não</em> usamos aspas ao redor do nome da variável ao usá-lo para acessar a propriedade porque estamos usando o <em>valor</em> da variável, não o <em>nome</em> . </section>

## Instructions
<section id="instructions"> Use a variável <code>playerNumber</code> para procurar o player <code>16</code> em <code>testObj</code> usando a notação de colchetes. Em seguida, atribua esse nome à variável do <code>player</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>playerNumber</code> deve ser um número
    testString: 'assert(typeof playerNumber === "number", "<code>playerNumber</code> should be a number");'
  - text: O <code>player</code> variável deve ser uma string
    testString: 'assert(typeof player === "string", "The variable <code>player</code> should be a string");'
  - text: O valor do <code>player</code> deve ser &quot;Montana&quot;
    testString: 'assert(player === "Montana", "The value of <code>player</code> should be "Montana"");'
  - text: Você deve usar a notação de colchetes para acessar o <code>testObj</code>
    testString: 'assert(/testObj\s*?\[.*?\]/.test(code),"You should use bracket notation to access <code>testObj</code>");'
  - text: Você não deve atribuir o valor <code>Montana</code> ao <code>player</code> variável diretamente.
    testString: 'assert(!code.match(/player\s*=\s*"|\"\s*Montana\s*"|\"\s*;/gi),"You should not assign the value <code>Montana</code> to the variable <code>player</code> directly.");'
  - text: Você deve estar usando a variável <code>playerNumber</code> na sua notação de colchetes
    testString: 'assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code),"You should be using the variable <code>playerNumber</code> in your bracket notation");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber;       // Change this Line
var player = testObj;   // Change this Line

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
