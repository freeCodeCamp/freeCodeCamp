---
id: 587d7dba367417b2b2512ba9
title: Positive and Negative Lookahead
challengeType: 1
videoUrl: ''
localeTitle: Lookahead positivo e negativo
---

## Description
<section id="description"> <code>Lookaheads</code> são padrões que dizem ao JavaScript para olhar em frente na sua string para verificar padrões mais adiante. Isso pode ser útil quando você deseja pesquisar vários padrões na mesma sequência. Existem dois tipos de <code>lookaheads</code> : <code>positive lookahead</code> e <code>negative lookahead</code> . Uma <code>positive lookahead</code> procurará garantir que o elemento no padrão de pesquisa esteja presente, mas não corresponderá a ele. Um lookahead positivo é usado como <code>(?=...)</code> onde o <code>...</code> é a parte requerida que não é correspondida. Por outro lado, um <code>negative lookahead</code> procurará garantir que o elemento no padrão de pesquisa não esteja lá. Um lookahead negativo é usado como <code>(?!...)</code> onde o <code>...</code> é o padrão que você não deseja estar lá. O restante do padrão será retornado se a parte lookahead negativa não estiver presente. Lookaheads são um pouco confusos, mas alguns exemplos vão ajudar. <blockquote> let quit = &quot;qu&quot;; <br> deixe noquit = &quot;qt&quot;; <br> deixe quRegex = / q (? = u) /; <br> deixe qRegex = / q (?! u) /; <br> quit.match (quRegex); // Retorna [&quot;q&quot;] <br> noquit.match (qRegex); // Retorna [&quot;q&quot;] </blockquote> Um uso mais prático de <code>lookaheads</code> é verificar dois ou mais padrões em uma string. Aqui está um verificador de senha (ingenuamente) simples que procura entre 3 e 6 caracteres e pelo menos um número: <blockquote> let password = &quot;abc123&quot;; <br> vamos checkPass = / (? = \ w {3,6}) (? = \ D * \ d) /; <br> checkPass.test (senha); // Retorna true </blockquote></section>

## Instructions
<section id="instructions"> Use <code>lookaheads</code> no <code>pwRegex</code> para corresponder senhas com mais de 5 caracteres e dois dígitos consecutivos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve usar dois positivos <code>lookaheads</code> .
    testString: 'assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null, "Your regex should use two positive <code>lookaheads</code>.");'
  - text: Seu regex não deve corresponder a <code>&quot;astronaut&quot;</code>
    testString: 'assert(!pwRegex.test("astronaut"), "Your regex should not match <code>"astronaut"</code>");'
  - text: Seu regex não deve corresponder a <code>&quot;airplanes&quot;</code>
    testString: 'assert(!pwRegex.test("airplanes"), "Your regex should not match <code>"airplanes"</code>");'
  - text: Seu regex não deve coincidir com <code>&quot;banan1&quot;</code>
    testString: 'assert(!pwRegex.test("banan1"), "Your regex should not match <code>"banan1"</code>");'
  - text: Seu regex deve coincidir com <code>&quot;bana12&quot;</code>
    testString: 'assert(pwRegex.test("bana12"), "Your regex should match <code>"bana12"</code>");'
  - text: Seu regex deve coincidir com <code>&quot;abc123&quot;</code>
    testString: 'assert(pwRegex.test("abc123"), "Your regex should match <code>"abc123"</code>");'
  - text: Seu regex não deve corresponder a <code>&quot;123&quot;</code>
    testString: 'assert(!pwRegex.test("123"), "Your regex should not match <code>"123"</code>");'
  - text: Seu regex não deve corresponder a <code>&quot;1234&quot;</code>
    testString: 'assert(!pwRegex.test("1234"), "Your regex should not match <code>"1234"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
