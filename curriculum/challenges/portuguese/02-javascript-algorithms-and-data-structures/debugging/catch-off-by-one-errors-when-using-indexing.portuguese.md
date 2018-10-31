---
id: 587d7b86367417b2b2512b3b
title: Catch Off By One Errors When Using Indexing
challengeType: 1
videoUrl: ''
localeTitle: Catch Off One erros ao usar a indexação
---

## Description
<section id="description"> <code>Off by one errors</code> (às vezes chamado de OBOE) surge quando você está tentando direcionar um índice específico de uma cadeia ou matriz (para dividir ou acessar um segmento), ou quando o loop sobre os índices deles. A indexação JavaScript começa em zero, não em um, o que significa que o último índice é sempre um menor que o comprimento do item. Se você tentar acessar um índice igual ao comprimento, o programa poderá lançar um erro de referência &quot;índice fora do intervalo&quot; ou imprimir <code>undefined</code> . Quando você usa métodos string ou array que usam intervalos de índice como argumentos, é útil ler a documentação e entender se eles são inclusivos (o item no índice fornecido é parte do que é retornado) ou não. Aqui estão alguns exemplos de erros: <blockquote> let alphabet = &quot;abcdefghijklmnopqrstuvwxyz&quot;; <br> vamos len = alphabet.length; <br> para (let i = 0; i &lt;= len; i ++) { <br> // faz um loop muitas vezes no final <br> console.log (alfabeto [i]); <br> } <br> para (let j = 1; j &lt;len; j ++) { <br> // faz um loop muito poucas vezes e erra o primeiro caractere no índice 0 <br> console.log (alfabeto [j]); <br> } <br> para (let k = 0; k &lt;len; k ++) { <br> // Goldilocks aprova - isso é apenas certo <br> console.log (alfabeto [k]); <br> } </blockquote></section>

## Instructions
<section id="instructions"> Corrija os dois erros de indexação na seguinte função para que todos os números de 1 a 5 sejam impressos no console. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve definir a condição inicial do loop para que ele comece no primeiro índice.
    testString: 'assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1, "Your code should set the initial condition of the loop so it starts at the first index.");'
  - text: Seu código deve corrigir a condição inicial do loop para que o índice comece em 0.
    testString: 'assert(!code.match(/i\s?=\s*?1\s*?;/g), "Your code should fix the initial condition of the loop so that the index starts at 0.");'
  - text: Seu código deve definir a condição de terminal do loop para que ele pare no último índice.
    testString: 'assert(code.match(/i\s*?<\s*?len\s*?;/g).length == 1, "Your code should set the terminal condition of the loop so it stops at the last index.");'
  - text: Seu código deve consertar a condição terminal do loop para que ele pare em 1 antes do comprimento.
    testString: 'assert(!code.match(/i\s*?<=\s*?len;/g), "Your code should fix the terminal condition of the loop so that it stops at 1 before the length.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Fix the line below
  for (let i = 1; i <= len; i++) {
  // Do not alter code below this line
    console.log(firstFive[i]);
  }
}

countToFive();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
