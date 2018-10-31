---
id: 587d7db1367417b2b2512b88
title: Override Inherited Methods
challengeType: 1
videoUrl: ''
localeTitle: Substituir Métodos Herdados
---

## Description
<section id="description"> Nas lições anteriores, você aprendeu que um objeto pode herdar seu comportamento (métodos) de outro objeto clonando seu objeto de <code>prototype</code> : <blockquote> ChildObject.prototype = Object.create (ParentObject.prototype); </blockquote> Então o <code>ChildObject</code> recebeu seus próprios métodos encadeando-os em seu <code>prototype</code> : <blockquote> ChildObject.prototype.methodName = function () {...}; </blockquote> É possível substituir um método herdado. É feito da mesma maneira - adicionando um método ao <code>ChildObject.prototype</code> usando o mesmo nome de método que aquele para substituir. Aqui está um exemplo de <code>Bird</code> substituindo o método <code>eat()</code> herdado de <code>Animal</code> : <blockquote> function Animal () {} <br> Animal.prototype.eat = function () { <br> devolver &quot;nom nom nom&quot;; <br> }; <br> função Bird () {} <br><br> // Herdar todos os métodos do Animal <br> Bird.prototype = Object.create (Animal.prototype); <br><br> // Bird.eat () substitui Animal.eat () <br> Bird.prototype.eat = function () { <br> retorno &quot;peck peck peck&quot;; <br> }; </blockquote> Se você tiver uma instância, <code>let duck = new Bird();</code> e você chama <code>duck.eat()</code> , é assim que o JavaScript procura o método na cadeia de <code>prototype</code> <code>duck&#39;s</code> : 1. duck =&gt; Eat () é definido aqui? No. 2. Bird =&gt; Eat () é definido aqui? =&gt; Sim. Execute e pare de procurar. 3. Animal =&gt; eat () também é definido, mas o JavaScript parou de procurar antes de atingir esse nível. 4. Object =&gt; O JavaScript parou de procurar antes de atingir este nível. </section>

## Instructions
<section id="instructions"> Sobrescreva o método <code>fly()</code> do <code>Penguin</code> para que ele retorne &quot;Alas, este é um pássaro que não <code>fly()</code> &quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>penguin.fly()</code> deve retornar a string &quot;Ai, esse é um pássaro que não voa&quot;.'
    testString: 'assert(penguin.fly() === "Alas, this is a flightless bird.", "<code>penguin.fly()</code> should return the string "Alas, this is a flightless bird."");'
  - text: O método <code>bird.fly()</code> deve retornar &quot;Estou voando!&quot;
    testString: 'assert((new Bird()).fly() === "I am flying!", "The <code>bird.fly()</code> method should return "I am flying!"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line



// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
