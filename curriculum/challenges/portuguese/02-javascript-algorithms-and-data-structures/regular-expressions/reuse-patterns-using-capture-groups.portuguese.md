---
id: 587d7dbb367417b2b2512baa
title: Reuse Patterns Using Capture Groups
challengeType: 1
videoUrl: ''
localeTitle: Reutilizar padrões usando grupos de captura
---

## Description
<section id="description"> Alguns padrões que você procura irão ocorrer várias vezes em uma string. É um desperdício repetir manualmente esse regex. Existe uma maneira melhor de especificar quando você tem várias substrings de repetição em sua string. Você pode pesquisar substrings de repetição usando <code>capture groups</code> . Parênteses, <code>(</code> e <code>)</code> , são usados ​​para encontrar substrings de repetição. Você coloca o regex do padrão que será repetido entre os parênteses. Para especificar onde essa sequência de repetição aparecerá, use uma barra invertida ( <code>\</code> ) e, em seguida, um número. Esse número começa em 1 e aumenta com cada grupo de captura adicional usado. Um exemplo seria <code>\1</code> para corresponder ao primeiro grupo. O exemplo abaixo corresponde a qualquer palavra que ocorre duas vezes separada por um espaço: <blockquote> let repeatStr = &quot;regex regex&quot;; <br> deixe o repeatRegex = / (\ w +) \ s \ 1 /; <br> repeatRegex.test (repeatStr); // Retorna true <br> repeatStr.match (repeatRegex); // Retorna [&quot;regex regex&quot;, &quot;regex&quot;] </blockquote> Usar o método <code>.match()</code> em uma string retornará uma matriz com a string correspondente, junto com seu grupo de captura. </section>

## Instructions
<section id="instructions"> Use <code>capture groups</code> em <code>reRegex</code> para corresponder números que são repetidos apenas três vezes em uma cadeia, cada um separado por um espaço. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve usar a classe de caractere abreviada para dígitos.
    testString: 'assert(reRegex.source.match(/\\d/), "Your regex should use the shorthand character class for digits.");'
  - text: Seu regex deve reutilizar o grupo de captura duas vezes.
    testString: 'assert(reRegex.source.match(/\\\d/g).length === 2, "Your regex should reuse the capture group twice.");'
  - text: Seu regex deve ter dois espaços separando os três números.
    testString: 'assert(reRegex.source.match(/\\s/g).length === 2, "Your regex should have two spaces separating the three numbers.");'
  - text: Seu regex deve corresponder <code>&quot;42 42 42&quot;</code> .
    testString: 'assert(reRegex.test("42 42 42"), "Your regex should match <code>"42 42 42"</code>.");'
  - text: Seu regex deve corresponder a <code>&quot;100 100 100&quot;</code> .
    testString: 'assert(reRegex.test("100 100 100"), "Your regex should match <code>"100 100 100"</code>.");'
  - text: Seu regex não deve corresponder a <code>&quot;42 42 42 42&quot;</code> .
    testString: 'assert.equal(("42 42 42 42").match(reRegex.source), null, "Your regex should not match <code>"42 42 42 42"</code>.");'
  - text: Seu regex não deve corresponder a <code>&quot;42 42&quot;</code> .
    testString: 'assert.equal(("42 42").match(reRegex.source), null, "Your regex should not match <code>"42 42"</code>.");'
  - text: Seu regex não deve coincidir com <code>&quot;101 102 103&quot;</code> .
    testString: 'assert(!reRegex.test("101 102 103"), "Your regex should not match <code>"101 102 103"</code>.");'
  - text: Seu regex não deve corresponder a <code>&quot;1 2 3&quot;</code> .
    testString: 'assert(!reRegex.test("1 2 3"), "Your regex should not match <code>"1 2 3"</code>.");'
  - text: Seu regex deve coincidir com <code>&quot;10 10 10&quot;</code> .
    testString: 'assert(reRegex.test("10 10 10"), "Your regex should match <code>"10 10 10"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
