---
id: 587d8250367417b2b2512c5f
title: Create a Stack Class
challengeType: 1
videoUrl: ''
localeTitle: Crie uma classe de pilha
---

## Description
<section id="description"> Na última seção, falamos sobre o que é uma pilha e como podemos usar uma matriz para representar uma pilha. Nesta seção, criaremos nossa própria classe de pilha. Embora você possa usar matrizes para criar pilhas, às vezes é melhor limitar a quantidade de controle que temos com nossas pilhas. Além do método <code>push</code> e <code>pop</code> , as pilhas possuem outros métodos úteis. Vamos adicionar um método <code>peek</code> , <code>isEmpty</code> e <code>clear</code> a nossa classe stack. Instruções Escreva um método <code>push</code> que empurre um elemento para o topo da pilha, um método <code>pop</code> que remova o elemento na parte superior da pilha, um método de <code>peek</code> que examine o primeiro elemento na pilha, um método <code>isEmpty</code> que verifique se o elemento pilha está vazia e um método <code>clear</code> que remove todos os elementos da pilha. Normalmente as pilhas não têm isso, mas adicionamos um método auxiliar de <code>print</code> que o console registra na coleção. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe <code>Stack</code> deve ter um método <code>push</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.push === "function")}()), "Your <code>Stack</code> class should have a <code>push</code> method.");'
  - text: Sua classe <code>Stack</code> deve ter um método <code>pop</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.pop === "function")}()), "Your <code>Stack</code> class should have a <code>pop</code> method.");'
  - text: Sua classe <code>Stack</code> deve ter um método de <code>peek</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.peek === "function")}()), "Your <code>Stack</code> class should have a <code>peek</code> method.");'
  - text: Sua classe <code>Stack</code> deve ter um método <code>isEmpty</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.isEmpty === "function")}()), "Your <code>Stack</code> class should have a <code>isEmpty</code> method.");'
  - text: Sua classe <code>Stack</code> deve ter um método <code>clear</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.clear === "function")}()), "Your <code>Stack</code> class should have a <code>clear</code> method.");'
  - text: O método <code>peek</code> deve retornar o elemento principal da pilha
    testString: 'assert((function(){var test = new Stack();  test.push("CS50"); return (test.peek() === "CS50")}()), "The <code>peek</code> method should return the top element of the stack");'
  - text: O método <code>pop</code> deve remover e retornar o elemento principal da pilha
    testString: 'assert((function(){var test = new Stack(); test.push("CS50"); return (test.pop() === "CS50");}()), "The <code>pop</code> method should remove and return the top element of the stack");'
  - text: O método <code>isEmpty</code> deve retornar true se uma pilha não contiver nenhum elemento
    testString: 'assert((function(){var test = new Stack(); return test.isEmpty()}()), "The <code>isEmpty</code> method should return true if a stack does not contain any elements");'
  - text: O método <code>clear</code> deve remover todos os elementos da pilha
    testString: 'assert((function(){var test = new Stack();  test.push("CS50"); test.clear(); return (test.isEmpty())}()), "The <code>clear</code> method should remove all element from the stack");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Stack() {
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line

    // Only change code above this line
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
