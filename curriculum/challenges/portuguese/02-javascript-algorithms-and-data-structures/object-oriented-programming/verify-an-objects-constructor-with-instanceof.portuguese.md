---
id: 587d7dae367417b2b2512b7a
title: Verify an Object's Constructor with instanceof
challengeType: 1
videoUrl: ''
localeTitle: Verificar o construtor de um objeto com instância de
---

## Description
<section id="description"> Sempre que uma função construtora cria um novo objeto, esse objeto é considerado uma <code>instance</code> de seu construtor. O JavaScript oferece uma maneira conveniente de verificar isso com o operador <code>instanceof</code> . <code>instanceof</code> permite comparar um objeto com um construtor, retornando <code>true</code> ou <code>false</code> base no fato de o objeto ter sido criado ou não com o construtor. Aqui está um exemplo: <blockquote> deixe Bird = function (nome, cor) { <br> this.name = nome; <br> this.color = cor; <br> this.numLegs = 2; <br> } <br><br> deixe corvo = novo Pássaro (&quot;Alexis&quot;, &quot;preto&quot;); <br><br> exemplo de pássaro; // =&gt; true </blockquote> Se um objeto é criado sem usar um construtor, o <code>instanceof</code> irá verificar se ele não é uma instância desse construtor: <blockquote> deixe canário = { <br> nome: &quot;Mildred&quot;, <br> cor amarela&quot;, <br> numLegs: 2 <br> }; <br><br> exemplo canário de Bird; // =&gt; false </blockquote></section>

## Instructions
<section id="instructions"> Crie uma nova instância do construtor <code>House</code> , chamando-a de <code>myHouse</code> e passando por vários quartos. Em seguida, use <code>instanceof</code> para verificar se é uma instância de <code>House</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myHouse</code> deve ter um atributo <code>numBedrooms</code> definido para um número.
    testString: 'assert(typeof myHouse.numBedrooms === "number", "<code>myHouse</code> should have a <code>numBedrooms</code> attribute set to a number.");'
  - text: Certifique-se de verificar se <code>myHouse</code> é uma instância do <code>House</code> usando o operador <code>instanceof</code> .
    testString: 'assert(/myHouse\s*instanceof\s*House/.test(code), "Be sure to verify that <code>myHouse</code> is an instance of <code>House</code> using the <code>instanceof</code> operator.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
