---
id: 56533eb9ac21ba0edf2244bb
title: Word Blanks
challengeType: 1
videoUrl: ''
localeTitle: Blanks da palavra
---

## Description
<section id="description"> Agora usaremos nosso conhecimento de strings para criar um jogo de palavras estilo &quot; <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a> &quot; que estamos chamando de &quot;Word Blanks&quot;. Você criará uma frase &quot;Preencha os espaços em branco&quot; (opcionalmente engraçada). Em um jogo &quot;Mad Libs&quot;, você recebe frases com algumas palavras ausentes, como substantivos, verbos, adjetivos e advérbios. Você então preenche as partes que faltam com palavras de sua escolha de uma forma que a sentença completa faça sentido. Considere esta frase - &quot;Foi realmente <strong>____</strong> , e nós <strong>____</strong> nós mesmos <strong>____</strong> &quot;. Esta frase tem três partes faltando - um adjetivo, um verbo e um advérbio, e podemos adicionar palavras de nossa escolha para completá-lo. Podemos então atribuir a frase completa a uma variável da seguinte forma: <blockquote> var sentença = &quot;Foi realmente&quot; + &quot;quente&quot; + &quot;, e nós&quot; + &quot;rimos&quot; + &quot;nós mesmos&quot; + &quot;bobos.&quot;; </blockquote></section>

## Instructions
<section id="instructions"> Neste desafio, fornecemos a você um substantivo, um verbo, um adjetivo e um advérbio. Você precisa formar uma frase completa usando palavras de sua escolha, juntamente com as palavras que fornecemos. Você precisará usar o operador de concatenação de strings <code>+</code> para construir uma nova string, usando as variáveis ​​fornecidas: <code>myNoun</code> , <code>myAdjective</code> , <code>myVerb</code> e <code>myAdverb</code> . Você então atribuirá a string formada à variável de <code>result</code> . Você também precisará considerar espaços em sua string, para que a frase final tenha espaços entre todas as palavras. O resultado deve ser uma frase completa. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>wordBlanks(&quot;&quot;,&quot;&quot;,&quot;&quot;,&quot;&quot;)</code> deve retornar uma string.'
    testString: 'assert(typeof wordBlanks("","","","") === "string", "<code>wordBlanks("","","","")</code> should return a string.");'
  - text: '<code>wordBlanks(&quot;dog&quot;, &quot;big&quot;, &quot;ran&quot;, &quot;quickly&quot;)</code> deve conter todas as palavras passadas separadas por caracteres que não sejam palavras (e quaisquer palavras adicionais em seu madlib).'
    testString: 'assert(/\bdog\b/.test(test1) && /\bbig\b/.test(test1) && /\bran\b/.test(test1) && /\bquickly\b/.test(test1),"<code>wordBlanks("dog", "big", "ran", "quickly")</code> should contain all of the passed in words separated by non-word characters (and any additional words in your madlib).");'
  - text: '<code>wordBlanks(&quot;cat&quot;, &quot;little&quot;, &quot;hit&quot;, &quot;slowly&quot;)</code> deve conter todas as palavras passadas separadas por caracteres que não sejam palavras (e quaisquer palavras adicionais em seu madlib).'
    testString: 'assert(/\bcat\b/.test(test2) && /\blittle\b/.test(test2) && /\bhit\b/.test(test2) && /\bslowly\b/.test(test2),"<code>wordBlanks("cat", "little", "hit", "slowly")</code> should contain all of the passed in words separated by non-word characters (and any additional words in your madlib).");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
