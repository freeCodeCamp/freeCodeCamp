---
id: 587d7dad367417b2b2512b78
title: Use a Constructor to Create Objects
challengeType: 1
videoUrl: ''
localeTitle: Use um construtor para criar objetos
---

## Description
<section id="description"> Aqui está o construtor <code>Bird</code> do desafio anterior: <blockquote> função Bird () { <br> this.name = &quot;Albert&quot;; <br> this.color = &quot;azul&quot;; <br> this.numLegs = 2; <br> // &quot;this&quot; dentro do construtor sempre se refere ao objeto que está sendo criado <br> } <br><br> deixe blueBird = new Bird (); </blockquote> Observe que o <code>new</code> operador é usado ao chamar um construtor. Isso diz ao JavaScript para criar uma nova <code>instance</code> do <code>Bird</code> chamada <code>blueBird</code> . Sem o <code>new</code> operador, <code>this</code> dentro do construtor não apontaria para o objeto recém-criado, dando resultados inesperados. Agora <code>blueBird</code> tem todas as propriedades definidas dentro do construtor <code>Bird</code> : <blockquote> blueBird.name; // =&gt; Albert <br> blueBird.color; // =&gt; azul <br> blueBird.numLegs; // =&gt; 2 </blockquote> Assim como qualquer outro objeto, suas propriedades podem ser acessadas e modificadas: <blockquote> blueBird.name = &#39;Elvira&#39;; <br> blueBird.name; // =&gt; Elvira </blockquote></section>

## Instructions
<section id="instructions"> Use o construtor <code>Dog</code> da última lição para criar uma nova instância de <code>Dog</code> , atribuindo-a a um <code>hound</code> variável. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hound</code> deve ser criado usando o construtor <code>Dog</code> .
    testString: 'assert(hound instanceof Dog, "<code>hound</code> should be created using the <code>Dog</code> constructor.");'
  - text: Seu código deve usar o <code>new</code> operador para criar uma <code>instance</code> de <code>Dog</code> .
    testString: 'assert(code.match(/new/g), "Your code should use the <code>new</code> operator to create an <code>instance</code> of <code>Dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
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
