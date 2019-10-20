---
title: Execute Brain****
id: 59e0a8df964e4540d5abe599
challengeType: 5
videoUrl: ''
localeTitle: Execute o cérebro ****
---

## Description
<section id="description"><p> Escreva uma função para implementar um interpretador do Brain ****. A função terá uma string como parâmetro e deve retornar uma string como saída. Mais detalhes são fornecidos abaixo: </p><p> O RCBF é um conjunto de compiladores e intérpretes da <a href="http://rosettacode.org/wiki/Brainf***" title="Brainf ***">Brainf ***</a> escritos para o Rosetta Code em vários idiomas. </p><p> Abaixo estão os links para cada uma das versões do RCBF. </p><p> Uma implementação só precisa implementar corretamente as seguintes instruções: </p><p> {| </p><p> !Comando </p><p> !Descrição </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>&gt;</code> || Mova o ponteiro para a direita </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>&lt;</code> || Mova o ponteiro para a esquerda </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>+</code> || Incrementar a célula de memória sob o ponteiro </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>-</code> || Decrementar a célula de memória sob o ponteiro </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>.</code> || Saída do caractere representado pela célula no ponteiro </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>,</code> || Insira um caractere e armazene-o na célula no ponteiro </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>[</code> || Saltar após a correspondência <code>]</code> se a célula abaixo do ponteiro for 0 </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>]</code> || Pular de volta para a correspondência <code>[</code> se a célula abaixo do ponteiro for diferente de zero </p><p> |} </p><p> Qualquer tamanho de célula é permitido, o suporte EOF ( <u>E</u> nd- <u>O</u> - <u>F</u> ile) é opcional, assim como se você tem memória limitada ou ilimitada. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>brain(bye)</code> deve retornar uma string
    testString: 'assert(typeof brain(bye) === "string", "<code>brain(bye)</code> should return a string");'
  - text: '<code>brain("++++++[>++++++++++<-]>+++++.")</code should return "A"'
    testString: 'assert.equal(brain("++++++[>++++++++++<-]>+++++."),"A", "<code>brain("++++++[>++++++++++<-]>+++++.")</code should return "A"");'
  - text: '<code>brain(bye)</code> deve retornar <code>Goodbye, World!\\r\\n</code>'
    testString: 'assert.equal(brain(bye), "Goodbye, World!\r\n", "<code>brain(bye)</code> should return <code>Goodbye, World!\\r\\n</code>");'
  - text: '<code>brain(hello)</code> deve retornar <code>Hello World!\\n</code> &#39;'
    testString: 'assert.equal(brain(hello), "Hello World!\n", "<code>brain(hello)</code> should return <code>Hello World!\\n</code>");'
  - text: '<code>brain(fib)</code> deve retornar <code>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89</code>'
    testString: 'assert.equal(brain(fib), "1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89", "<code>brain(fib)</code> should return <code>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function brain (prog) {
  // Good luck!
}

```

</div>

### Before Test
<div id='js-setup'>

```js
let fib=`+

++

+++

++++

+>+>>

>>++++

+++++++

++++++++

+++++++++

++++++++++

++++++>++++

++++++++++++

+++++++++++++

+++<<<<<<[>[>>

>>>>+>+<<<<<<<-

]>>>>>>>[<<<<<<<

+>>>>>>>-]<[>++++

++++++[-<-[>>+>+<<

<-]>>>[<<<+>>>-]+<[

>[-]<[-]]>[<<[>>>+<<

<-]>>[-]]<<]>>>[>>+>+

<<<-]>>>[<<<+>>>-]+<[>

[-]<[-]]>[<<+>>[-]]<<<<

<<<]>>>>>[++++++++++++++

+++++++++++++++++++++++++

+++++++++.[-]]++++++++++<[

->-<]>+++++++++++++++++++++

+++++++++++++++++++++++++++.

[-]<<<<<<<<<<<<[>>>+>+<<<<-]>

>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]

<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+

>-]>[<+>-]<<<-]`;
let hello='++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.'
let bye='++++++++++[>+>+++>++++>+++++++>++++++++>+++++++++>++++++++++>+++++++++++>++++++++++++<<<<<<<<<-]>>>>+.>>>>+..<.<++++++++.>>>+.<<+.<<<<++++.<++.>>>+++++++.>>>.+++.<+++++++.--------.<<<<<+.<+++.---.';

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
