---
id: 587d7dae367417b2b2512b79
title: Extend Constructors to Receive Arguments
challengeType: 1
videoUrl: ''
localeTitle: Estender construtores para receber argumentos
---

## Description
<section id="description"> Os construtores <code>Bird</code> e <code>Dog</code> do último desafio funcionaram bem. No entanto, observe que todos os <code>Birds</code> criados com o construtor <code>Bird</code> são automaticamente denominados Albert, são de cor azul e têm duas pernas. E se você quiser pássaros com valores diferentes para nome e cor? É possível alterar as propriedades de cada ave manualmente, mas isso seria muito trabalho: <blockquote> vamos cisne = new Bird (); <br> swan.name = &quot;Carlos&quot;; <br> swan.color = &quot;branco&quot;; </blockquote> Suponha que você estivesse escrevendo um programa para acompanhar centenas ou até milhares de aves diferentes em um aviário. Levaria muito tempo para criar todas as aves e depois alterar as propriedades para valores diferentes para cada uma delas. Para criar mais facilmente diferentes objetos <code>Bird</code> , você pode projetar seu construtor Bird para aceitar parâmetros: <blockquote> função Bird (nome, cor) { <br> this.name = nome; <br> this.color = cor; <br> this.numLegs = 2; <br> } </blockquote> Em seguida, passe os valores como argumentos para definir cada ave única no construtor <code>Bird</code> : <code>let cardinal = new Bird(&quot;Bruce&quot;, &quot;red&quot;);</code> Isso fornece uma nova instância de <code>Bird</code> com nome e propriedades de cor definidas como Bruce e vermelho, respectivamente. A propriedade <code>numLegs</code> ainda está definida como 2. O <code>cardinal</code> tem estas propriedades: <blockquote> cardinal.name // =&gt; Bruce <br> cardinal.color // =&gt; vermelho <br> cardinal.numLegs // =&gt; 2 </blockquote> O construtor é mais flexível. Agora é possível definir as propriedades de cada <code>Bird</code> no momento em que ele é criado, o que é uma maneira de os construtores de JavaScript serem tão úteis. Eles agrupam objetos com base em características e comportamentos compartilhados e definem um blueprint que automatiza sua criação. </section>

## Instructions
<section id="instructions"> Crie outro construtor <code>Dog</code> . Desta vez, configure-o para obter o <code>name</code> e a <code>color</code> dos parâmetros e tenha a propriedade <code>numLegs</code> fixada em 4. Em seguida, crie um novo <code>Dog</code> salvo em um <code>terrier</code> variável. Passe duas strings como argumentos para as propriedades <code>name</code> e <code>color</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog</code> deve receber um argumento pelo <code>name</code> .
    testString: 'assert((new Dog("Clifford")).name === "Clifford", "<code>Dog</code> should receive an argument for <code>name</code>.");'
  - text: <code>Dog</code> deve receber um argumento por <code>color</code> .
    testString: 'assert((new Dog("Clifford", "yellow")).color === "yellow", "<code>Dog</code> should receive an argument for <code>color</code>.");'
  - text: <code>Dog</code> deve ter <code>numLegs</code> propriedade definidos como 4.
    testString: 'assert((new Dog("Clifford")).numLegs === 4, "<code>Dog</code> should have property <code>numLegs</code> set to 4.");'
  - text: <code>terrier</code> deve ser criado usando o construtor <code>Dog</code> .
    testString: 'assert(terrier instanceof Dog, "<code>terrier</code> should be created using the <code>Dog</code> constructor.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog() {

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
