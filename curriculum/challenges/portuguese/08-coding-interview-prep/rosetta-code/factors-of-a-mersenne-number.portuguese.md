---
title: Factors of a Mersenne number
id: 598eea87e5cf4b116c3ff81a
challengeType: 5
videoUrl: ''
localeTitle: Fatores de um número de Mersenne
---

## Description
<section id="description"><p> Um número de Mersenne é um número na forma de 2 <sup>P</sup> -1. </p><p> Se P é primo, o número de Mersenne pode ser um primo de Mersenne </p><p> (se P não é primo, o número de Mersenne também não é primo). </p><p> Na busca por números primos de Mersenne, é vantajoso eliminar os expoentes encontrando um pequeno fator antes de iniciar um teste potencialmente longo, <a href="http://rosettacode.org/wiki/Lucas-Lehmer test" title="Teste de Lucas-Lehmer">Lucas-Lehmer</a> . </p><p> Existem algoritmos muito eficientes para determinar se um número divide 2 <sup>P</sup> -1 (ou equivalentemente, se 2 <sup>P</sup> mod (o número) = 1). </p><p> Algumas linguagens já possuem implementações embutidas desta operação expoente e mod (chamada modPow ou similar). </p><p> O seguinte é como implementar este modPow você mesmo: </p><p> Por exemplo, vamos calcular 2 <sup>23</sup> mod 47. </p><p> Converta o expoente 23 para binário, você obtém 10111. Começando com <tt>square</tt> = 1, repetidamente, faça o quadrado. </p><p> Remova o bit de cima do expoente, e se for 1 multiplique o <tt>quadrado</tt> pela base da exponenciação (2), então calcule o módulo <tt>quadrado</tt> 47. </p><p> Use o resultado do módulo da última etapa como o valor inicial do <tt>quadrado</tt> na próxima etapa: </p><p> Remover Opcional </p><p> bit superior quadrado multiplicar por 2 mod 47 </p><p> ------------ ------- ------------- ------ </p><p> 1 * 1 = 1 1 0111 1 * 2 = 2 2 </p><p> 2 * 2 = 4 0 111 não 4 </p><p> 4 * 4 = 16 1 11 16 * 2 = 32 32 </p><p> 32 * 32 = 1024 1 1 1024 * 2 = 2048 27 </p><p> 27 * 27 = 729 1 729 * 2 = 1458 1 </p><p> Desde 2 <sup>23</sup> mod 47 = 1, 47 é um fator de 2 <sup>P</sup> -1. </p><p> (Para ver isso, subtraia 1 de ambos os lados: 2 <sup>23</sup> -1 = 0 mod 47.) </p><p> Já que mostramos que 47 é um fator, 2 <sup>23</sup> -1 não é primo. </p><p> Outras propriedades dos números de Mersenne nos permitem refinar ainda mais o processo. </p><p> Qualquer fator q de 2 <sup>P</sup> -1 deve ter a forma 2kP + 1, sendo k um inteiro positivo ou zero. Além disso, q deve ser 1 ou 7 mod 8. </p><p> Finalmente, qualquer fator potencial q deve ser <a href="http://rosettacode.org/wiki/Primality by Trial Division" title="Primality pela divisão experimental">primo</a> . </p><p> Como em outros algoritmos de divisão de teste, o algoritmo para quando 2kP + 1&gt; sqrt (N). </p><p> Esses testes de primalidade só funcionam em números de Mersenne onde P é primo. Por exemplo, M <sub>4</sub> = 15 não produz nenhum fator usando essas técnicas, mas os fatores em 3 e 5, nenhum dos quais se ajusta a 2kP + 1. </p> Tarefa: <p> Usando o método acima, encontre um fator de 2 <sup>929</sup> -1 (também conhecido como M929) </p> Tarefas relacionadas: <a href="http://rosettacode.org/wiki/count in factors" title="contar em fatores">contar em fatores fatores</a> <a href="http://rosettacode.org/wiki/prime decomposition" title="decomposição primária">primários de decomposição</a> <a href="http://rosettacode.org/wiki/factors of an integer" title="fatores de um inteiro">de um inteiro</a> <a href="http://rosettacode.org/wiki/Sieve of Eratosthenes" title="Peneira de Eratóstenes">Cremer of Eratosthenes</a> <a href="http://rosettacode.org/wiki/primality by trial division" title="primalidade por divisão experimental">primality por trial</a> <a href="http://rosettacode.org/wiki/trial factoring of a Mersenne number" title="fatoração experimental de um número de Mersenne">trial factoring de um número Mersenne</a> <a href="http://rosettacode.org/wiki/partition an integer X into N primes" title="particionar um inteiro X em N primos">partition um inteiro X em N primes</a> <a href="http://rosettacode.org/wiki/sequence of primes by Trial Division" title="sequência de primos por Divisão de Julgamento">seqüência de primos por Trial Division</a> <a href="https://www.youtube.com/watch?v=SNwvJ7psoow" title="link: https://www.youtube.com/watch?v=SNwvJ7psoow">Computers em 1948: 2¹²⁷-1</a> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>check_mersenne</code> é uma função.
    testString: 'assert(typeof check_mersenne === "function", "<code>check_mersenne</code> is a function.");'
  - text: <code>check_mersenne(3)</code> deve retornar uma string.
    testString: 'assert(typeof check_mersenne(3) == "string", "<code>check_mersenne(3)</code> should return a string.");'
  - text: <code>check_mersenne(3)</code> deve retornar &quot;M3 = 2 ^ 3-1 é primo&quot;.
    testString: 'assert.equal(check_mersenne(3),"M3 = 2^3-1 is prime","<code>check_mersenne(3)</code> should return "M3 = 2^3-1 is prime".");'
  - text: <code>check_mersenne(23)</code> deve retornar &quot;M23 = 2 ^ 23-1 é composto com fator 47&quot;.
    testString: 'assert.equal(check_mersenne(23),"M23 = 2^23-1 is composite with factor 47","<code>check_mersenne(23)</code> should return "M23 = 2^23-1 is composite with factor 47".");'
  - text: <code>check_mersenne(929)</code> deve retornar &quot;M929 = 2 ^ 929-1 é composto com fator 13007
    testString: 'assert.equal(check_mersenne(929),"M929 = 2^929-1 is composite with factor 13007","<code>check_mersenne(929)</code> should return "M929 = 2^929-1 is composite with factor 13007");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function check_mersenne (p) {
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
