---
id: 587d7dad367417b2b2512b76
title: Make Code More Reusable with the this Keyword
challengeType: 1
videoUrl: ''
localeTitle: Tornar o código mais reutilizável com esta palavra-chave
---

## Description
<section id="description"> O último desafio introduziu um <code>method</code> ao objeto <code>duck</code> . <code>duck.name</code> notação de pontos <code>duck.name</code> para acessar o valor da propriedade <code>name</code> na declaração de retorno: <code>sayName: function() {return &quot;The name of this duck is &quot; + duck.name + &quot;.&quot;;}</code> Embora seja um válido maneira de acessar a propriedade do objeto, há uma armadilha aqui. Se o nome da variável for alterado, qualquer código que faça referência ao nome original também precisará ser atualizado. Em uma definição de objeto curta, isso não é um problema, mas se um objeto tiver muitas referências a suas propriedades, haverá uma chance maior de erro. Uma maneira de evitar esses problemas é com a palavra-chave <code>this</code> : <blockquote> vamos pato = { <br> nome: &quot;Aflac&quot;, <br> numLegs: 2, <br> sayName: function () {return &quot;O nome deste pato é&quot; + this.name + &quot;.&quot;;} <br> }; </blockquote> <code>this</code> é um tópico profundo, e o exemplo acima é apenas uma maneira de usá-lo. No contexto atual, <code>this</code> se refere ao objeto ao qual o método está associado: <code>duck</code> . Se o nome do objeto for alterado para <code>mallard</code> , não será necessário encontrar todas as referências para o <code>duck</code> no código. Isso torna o código reutilizável e mais fácil de ler. </section>

## Instructions
<section id="instructions"> Modifique o método <code>dog.sayLegs</code> para remover quaisquer referências ao <code>dog</code> . Use o exemplo do <code>duck</code> para orientação. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog.sayLegs()</code> deve retornar a string dada.
    testString: 'assert(dog.sayLegs() === "This dog has 4 legs.", "<code>dog.sayLegs()</code> should return the given string.");'
  - text: Seu código deve usar a palavra-chave <code>this</code> para acessar a propriedade <code>numLegs</code> do <code>dog</code> .
    testString: 'assert(code.match(/this\.numLegs/g), "Your code should use the <code>this</code> keyword to access the <code>numLegs</code> property of <code>dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
