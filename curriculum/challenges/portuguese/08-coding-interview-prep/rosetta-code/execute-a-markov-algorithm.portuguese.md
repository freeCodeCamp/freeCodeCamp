---
title: Execute a Markov algorithm
id: 59e09e6d412c5939baa02d16
challengeType: 5
videoUrl: ''
localeTitle: Execute um algoritmo de Markov
---

## Description
<section id="description"> Tarefa: <p> Crie um interpretador para um <a href="https://en.wikipedia.org/wiki/Markov algorithm" title="wp: algoritmo de Markov">Algoritmo de Markov</a> . </p><p> Regras tem a sintaxe: </p><p><ruleset> :: = (( <comment> | <rule> ) <newline> +) * </newline></rule></comment></ruleset></p><p><comment> :: = # { <any character=""> } </any></comment></p><p><rule> :: = <pattern><whitespace> -&gt; <whitespace> [.] <replacement></replacement></whitespace></whitespace></pattern></rule></p><p><whitespace> :: = ( <tab> | <space> ) [ <whitespace> ] </whitespace></space></tab></whitespace></p><p> Existe uma regra por linha. </p><p> Se houver um <b>.</b> (período) presente antes do <replacement> , então esta é uma regra de terminação, caso em que o intérprete deve parar a execução. </replacement></p><p> Um conjunto de regras consiste em uma sequência de regras, com comentários opcionais. </p><p> <big><big>Conjuntos de regras</big></big> </p><p> Use os seguintes testes nas entradas: </p> Conjunto de regras 1: <pre> Este arquivo de regras é extraído da Wikipedia:
http://en.wikipedia.org/wiki/Markov_AlgorithmA -&gt; apple
B -&gt; saco
S -&gt; loja
T -&gt; o
a loja -&gt; meu irmão
uma regra de terminação nunca usada -&gt;.
</pre><p> Exemplo de texto de: </p><p> <code>I bought a B of As from T S.</code> </p> <p> Deve gerar a saída: </p><p> <code>I bought a bag of apples from my brother.</code> </p> Conjunto de regras 2: <p> Um teste da regra de terminação </p><pre> Ligeiramente modificado das regras na WikipediaA -&gt; maçã
B -&gt; saco
S -&gt; .shop
T -&gt; o
a loja -&gt; meu irmão
uma regra de terminação nunca usada -&gt;. </pre><p> Exemplo de texto de: </p><p> <code>I bought a B of As from T S.</code> </p> <p> Deve gerar: </p><p> <code>I bought a bag of apples from T shop.</code> </p> Conjunto de regras 3: <p> Isso testa a ordem de substituição correta e pode interceptar rotinas de substituição baseadas em regexp simples se caracteres especiais de expressão regular não forem escapados. </p><pre> Regras de teste de sintaxe BNFA -&gt; apple
WWWW -&gt; com
Bgage -&gt; -&gt;. *
B -&gt; saco
-&gt;. * -&gt; dinheiro
W -&gt; WW
S -&gt; .shop
T -&gt; o
a loja -&gt; meu irmão
uma regra de terminação nunca usada -&gt;.
</pre><p> Exemplo de texto de: </p><p> <code>I bought a B of As W my Bgage from T S.</code> </p> <p> Deve gerar: </p><p> <code>I bought a bag of apples with my money from T shop.</code> </p> Conjunto de regras 4: <p> Isso testa a ordem correta de varredura de regras e pode interceptar rotinas de substituição que digitalizam na ordem errada. Ele implementa um mecanismo geral de multiplicação unário. (Observe que a expressão de entrada deve ser colocada dentro de sublinhados nesta implementação.) </p><pre> ## Unary Multiplication Engine, para testar implementações do Algoritmo de Markov
## Por Donal Fellows.
Mecanismo de adição unário_ + 1 -&gt; _1 +
1 + 1 -&gt; 11+
Passe por converter da divisão da multiplicação em comum
addition1! -&gt;! 1
! -&gt;! +
_! -&gt; _
Multiplicação unária duplicando lado esquerdo, lado direito times1 * 1 -&gt; x, @ y
1x -&gt; xx
X, -&gt; 1,1
X1 -&gt; 1X
_x -&gt; _X
, x -&gt;, X
y1 -&gt; 1y
y_ -&gt; _
Próxima fase de aplicação1 @ 1 -&gt; x, @ y
1 @ _ -&gt; @_
@ _ -&gt;! _
++ -&gt; +
Limpeza de terminação para addition_1 -&gt; 1
1 + _ -&gt; 1
_ + _ -&gt;
</pre><p> Exemplo de texto de: </p><p> <code>_1111*11111_</code> </p> <p> deve gerar a saída: </p><p> <code>11111111111111111111</code> </p> Conjunto de regras 5: <p> Uma simples <a href="http://en.wikipedia.org/wiki/Turing_machine" title="link: http://en.wikipedia.org/wiki/Turing_machine">máquina de Turing</a> </p><p> implementando um <a href="http://en.wikipedia.org/wiki/Busy_beaver" title="link: http://en.wikipedia.org/wiki/Busy_beaver">castor ocupado de</a> três estados. </p><p> A fita consiste em 0s e 1s, os estados são A, B, C e H (para Halt), e a posição da cabeça é indicada escrevendo a letra de estado antes do caractere onde a cabeça está. </p><p> Todas as partes da fita inicial em que a máquina opera devem ser fornecidas na entrada. </p><p> Além de demonstrar que o algoritmo Markov é Turing-complete, ele também me fez pegar um bug na implementação do C ++ que não foi pego pelos quatro primeiros conjuntos de regras. </p><pre> Máquina de Turing: castor ocupado de três estados
# estado A, símbolo 0 =&gt; escrever 1, mover para a direita, novo estado BA0 -&gt; 1B
estado A, símbolo 1 =&gt; escrever 1, mover para a esquerda, novo estado C0A1 -&gt; C01
1A1 -&gt; C11
estado B, símbolo 0 =&gt; escrever 1, mover para a esquerda, novo estado A0B0 -&gt; A01
1B0 -&gt; A11
estado B, símbolo 1 =&gt; escrever 1, mover para a direita, novo estado BB1 -&gt; 1B
estado C, símbolo 0 =&gt; escrever 1, mover para a esquerda, novo estado B0C0 -&gt; B01
1C0 -&gt; B11
estado C, símbolo 1 =&gt; escrever 1, mover para a esquerda, halt0C1 -&gt; H01
1C1 -&gt; H11
</pre><p> Este conjunto de regras deve virar </p><p> <code>000000A000000</code> </p> <p> para dentro </p><p> <code>00011H1111000</code> </p> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>markov</code> é uma função.
    testString: 'assert(typeof markov === "function", "<code>markov</code> is a function.");'
  - text: '<code>markov([&quot;A -&gt; apple&quot;,&quot;B -&gt; bag&quot;,&quot;S -&gt; shop&quot;,&quot;T -&gt; the&quot;,&quot;the shop -&gt; my brother&quot;,&quot;a never used -&gt; .terminating rule&quot;],&quot;I bought a B of As from T S.&quot;)</code> deve retornar &quot;Eu comprei um saco de maçãs do meu irmão&quot;.'
    testString: 'assert.deepEqual(markov(rules[0],tests[0]),outputs[0],"<code>markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")</code> should return "I bought a bag of apples from my brother.".");'
  - text: '<code>markov([&quot;A -&gt; apple&quot;,&quot;B -&gt; bag&quot;,&quot;S -&gt; .shop&quot;,&quot;T -&gt; the&quot;,&quot;the shop -&gt; my brother&quot;,&quot;a never used -&gt; .terminating rule&quot;],&quot;I bought a B of As from T S.&quot;)</code> deveria devolver&quot; Eu comprei uma bolsa de maçãs de loja de T. &quot;.'
    testString: 'assert.deepEqual(markov(rules[1],tests[1]),outputs[1],"<code>markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")</code> should return "I bought a bag of apples from T shop.".");'
  - text: '<code>markov([&quot;A -&gt; apple&quot;,&quot;WWWW -&gt; with&quot;,&quot;Bgage -&gt; -&gt;.*&quot;,&quot;B -&gt; bag&quot;,&quot;-&gt;.* -&gt; money&quot;,&quot;W -&gt; WW&quot;,&quot;S -&gt; .shop&quot;,&quot;T -&gt; the&quot;,&quot;the shop -&gt; my brother&quot;,&quot;a never used -&gt; .terminating rule&quot;],&quot;I bought a B of As W my Bgage from T S.&quot;)</code> deve retornar &#39;Eu comprei um saco de maçãs com o meu dinheiro de loja T.&#39;.'
    testString: 'assert.deepEqual(markov(rules[2],tests[2]),outputs[2],"<code>markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As W my Bgage from T S.")</code> should return "I bought a bag of apples with my money from T shop.".");'
  - text: '<code>markov([&quot;_+1 -&gt; _1+&quot;,&quot;1+1 -&gt; 11+&quot;,&quot;1! -&gt; !1&quot;,&quot;,! -&gt; !+&quot;,&quot;_! -&gt; _&quot;,&quot;1*1 -&gt; x,@y&quot;,&quot;1x -&gt; xX&quot;,&quot;X, -&gt; 1,1&quot;,&quot;X1 -&gt; 1X&quot;,&quot;_x -&gt; _X&quot;,&quot;,x -&gt; ,X&quot;,&quot;y1 -&gt; 1y&quot;,&quot;y_ -&gt; _&quot;,&quot;1@1 -&gt; x,@y&quot;,&quot;1@_ -&gt; @_&quot;,&quot;,@_ -&gt; !_&quot;,&quot;++ -&gt; +&quot;,&quot;_1 -&gt; 1&quot;,&quot;1+_ -&gt; 1&quot;,&quot;_+_ -&gt; &quot;],&quot;_1111*11111_&quot;)</code> deve retornar&quot; 11111111111111111111 &quot;.'
    testString: 'assert.deepEqual(markov(rules[3],tests[3]),outputs[3],"<code>markov(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],"_1111*11111_")</code> should return "11111111111111111111".");'
  - text: '<code>markov([&quot;A0 -&gt; 1B&quot;,&quot;0A1 -&gt; C01&quot;,&quot;1A1 -&gt; C11&quot;,&quot;0B0 -&gt; A01&quot;,&quot;1B0 -&gt; A11&quot;,&quot;B1 -&gt; 1B&quot;,&quot;0C0 -&gt; B01&quot;,&quot;1C0 -&gt; B11&quot;,&quot;0C1 -&gt; H01&quot;,&quot;1C1 -&gt; H11&quot;],&quot;&quot;)</code> deve retornar&quot; 00011H1111000 &quot;.'
    testString: 'assert.deepEqual(markov(rules[4],tests[4]),outputs[4],"<code>markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")</code> should return "00011H1111000".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function markov (rules,test) {
  // Good luck!
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
