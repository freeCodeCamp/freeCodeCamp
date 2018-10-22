---
id: 587d7db4367417b2b2512b92
title: Extract Matches
challengeType: 1
videoUrl: ''
localeTitle: Extrair correspondências
---

## Descrição
<section id="description"> Até agora, você só verificou se um padrão existe ou não em uma string. Você também pode extrair as correspondências encontradas usando o método <code>.match()</code> . Para usar o método <code>.match()</code> , aplique o método em uma string e passe o regex dentro dos parênteses. Aqui está um exemplo: <blockquote> &quot;Hello, World!&quot;. Match (/ Hello /); <br> // Retorna [&quot;Hello&quot;] <br> let ourStr = &quot;Regular expressions&quot;; <br> let ourRegex = / expressions /; <br> ourStr.match (ourRegex); <br> // Retorna [&quot;expression&quot;] </blockquote></section>

## Instrucões
<section id="instructions"> Aplique o método <code>.match()</code> para extrair a palavra <code>coding</code> . </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: O <code>result</code> deve ter a palavra <code>coding</code>
    testString: 'assert(result.join() === "coding", "O <code>result</code> deve ter a palavra <code>coding</code>");'
  - text: Seu regex <code>codingRegex</code> deve procurar por <code>coding</code>
    testString: 'assert(codingRegex.source === "coding", "Seu regex <code>codingRegex</code> deve procurar por <code>coding</code>");'
  - text: Você deve usar o método <code>.match()</code> .
    testString: 'assert(code.match(/\.match\(.*\)/), "Você deve usar o método <code>.match()</code>.");'

```

</section>

## Desafio
<section id='challengeSeed'>

<div id='js-seed'>

```js
let extractStr = "Extraia a palavra 'coding' da string.";
let codingRegex = /change/; // Altere esta linha
let result = extractStr; // Altere esta linha

```

</div>



</section>

## Solução
<section id='solution'>

```js
// solution required
```
</section>
