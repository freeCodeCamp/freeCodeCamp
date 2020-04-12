---
id: 587d7daf367417b2b2512b7e
title: Understand the Constructor Property
challengeType: 1
videoUrl: ''
localeTitle: Entenda a propriedade do construtor
---

## Description
<section id="description"> Existe uma propriedade de <code>constructor</code> especial localizada nas instâncias de objetos <code>duck</code> e <code>beagle</code> que foram criadas nos desafios anteriores: <blockquote> vamos pato = novo pássaro (); <br> vamos beagle = novo cachorro (); <br><br> console.log (duck.constructor === Bird); // imprime true <br> console.log (beagle.constructor === Cachorro); // imprime true </blockquote> Observe que a propriedade <code>constructor</code> é uma referência à função construtora a qual criou a instância. A vantagem da propriedade <code>constructor</code> é que é possível verificar por esta propriedade para descobrir que tipo de objeto ela é. A seguir um exemplo de como isso pode ser usado: <blockquote> function joinBirdFraternity (candidate) { <br> if (candidato.construtor === Bird) { <br> retorno verdadeiro; <br> } outro { <br> retorna falso; <br> } <br> } </blockquote> <strong>Nota</strong> <br> Como a propriedade do <code>constructor</code> pode ser sobrescrita (o que será abordado nos próximos dois desafios), geralmente é melhor usar o método <code>instanceof</code> para verificar o tipo de um objeto. </section>

## Instructions
<section id="instructions"> Escreva uma função <code>joinDogFraternity</code> que utiliza um parâmetro <code>candidate</code> e, usando a propriedade <code>constructor</code> , retorne <code>true</code> se o candidato for um <code>Dog</code> . Caso contrário, retorne <code>false</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>joinDogFraternity</code> deve ser definido como uma função.
    testString: 'assert(typeof(joinDogFraternity) === "function", "<code>joinDogFraternity</code> should be defined as a function.");'
  - text: <code>joinDogFraternity</code> deve retornar true se o <code>candidate</code> for uma instância de <code>Dog</code> .
    testString: 'assert(joinDogFraternity(new Dog("")) === true, "<code>joinDogFraternity</code> should return true if<code>candidate</code> is an instance of <code>Dog</code>.");'
  - text: <code>joinDogFraternity</code> deve usar a propriedade <code>constructor</code> .
    testString: 'assert(/\.constructor/.test(code) && !/instanceof/.test(code), "<code>joinDogFraternity</code> should use the <code>constructor</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {

}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
