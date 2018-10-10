---
id: 587d7b8c367417b2b2512b54
title: Use getters and setters to Control Access to an Object
challengeType: 1
videoUrl: ''
localeTitle: Use getters e setters para controlar o acesso a um objeto
---

## Description
<section id="description"> Você pode obter valores de um objeto e definir um valor de uma propriedade dentro de um objeto. Estes são chamados classicamente de <dfn>getters</dfn> e <dfn>setters</dfn> . As funções do Getter destinam-se a simplesmente retornar (obter) o valor da variável privada de um objeto ao usuário sem que o usuário acesse diretamente a variável privada. As funções de setter destinam-se a modificar (definir) o valor da variável privada de um objeto com base no valor passado para a função de setter. Essa alteração pode envolver cálculos ou mesmo sobrescrever completamente o valor anterior. <blockquote> livro escolar { <br> construtor (autor) { <br> this._author = autor; <br> } <br> // getter <br> obter escritor () { <br> devolve this._author; <br> } <br> // setter <br> set writer (updatedAuthor) { <br> this._author = updatedAuthor; <br> } <br> } <br> const lol = novo livro (&#39;anônimo&#39;); <br> console.log (lol.writer); // anônimo <br> lol.writer = &#39;wut&#39;; <br> console.log (lol.writer); // wut </blockquote> Observe a sintaxe que estamos usando para invocar o getter e setter - como se eles não fossem mesmo funções. Getters e setters são importantes porque ocultam detalhes internos de implementação. </section>

## Instructions
<section id="instructions"> Use a palavra-chave <code>class</code> para criar uma classe Thermostat. O construtor aceita a temperatura Fahrenheit. Agora crie <code>getter</code> e <code>setter</code> na classe, para obter a temperatura na escala Celsius. Lembre-se que <code>C = 5/9 * (F - 32)</code> e <code>F = C * 9.0 / 5 + 32</code> , onde F é o valor da temperatura na escala Fahrenheit, e C é o valor da mesma temperatura na escala Celsius. Para implementar isso, você estaria acompanhando a temperatura dentro da classe em uma escala - Fahrenheit ou Celsius. Este é o poder de getter ou setter - você está criando uma API para outro usuário, que obteria o resultado correto, não importando qual deles você rastreie. Em outras palavras, você está abstraindo os detalhes da implementação do consumidor. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Thermostat</code> deve ser uma <code>class</code> com um método <code>constructor</code> definido.
    testString: 'assert(typeof Thermostat === "function" && typeof Thermostat.constructor === "function","<code>Thermostat</code> should be a <code>class</code> with a defined <code>constructor</code> method.");'
  - text: palavra-chave <code>class</code> foi usada.
    testString: 'getUserInput => assert(getUserInput("index").match(/class/g),"<code>class</code> keyword was used.");'
  - text: <code>Thermostat</code> pode ser instanciado.
    testString: 'assert(() => {const t = new Thermostat(32); return typeof t === "object" && t.temperature === 0;}, "<code>Thermostat</code> can be instantiated.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
