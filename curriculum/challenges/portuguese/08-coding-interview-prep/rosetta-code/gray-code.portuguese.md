---
title: Gray code
id: 5a23c84252665b21eecc7e80
challengeType: 5
videoUrl: ''
localeTitle: Código cinza
---

## Description
<section id="description"> <a href="https://en.wikipedia.org/wiki/Gray code">O código cinza</a> é uma forma de codificação binária em que as transições entre números consecutivos diferem em apenas um bit. Essa é uma codificação útil para reduzir os riscos de dados de hardware com valores que mudam rapidamente e / ou se conectam a hardware mais lento como entradas. Também é útil para gerar entradas para os <a href="https://en.wikipedia.org/wiki/Karnaugh map">mapas de Karnaugh</a> , da esquerda para a direita ou de cima para baixo. Crie uma função para codificar um número e decodificar um número do código Gray. A função deve ter 2 parâmetros. O primeiro seria um booleano. A função deve codificar para true e decodificar para false. O segundo parâmetro seria o número a ser codificado / decodificado. Exibe as representações binárias normais, as representações do código Gray e os valores decodificados do código Gray para todos os números binários de 5 bits (0 a 31 inclusive, não sendo necessário 0). Existem muitos códigos Gray possíveis. O seguinte codifica o que é chamado de &quot;código cinza refletido por binário&quot;. <br> Codificação (MSB é bit 0, b é binário, g é o código Gray): <code><br> if b[i-1] = 1 <br> <span style="padding-left:1em">g[i] = not b[i]</span> <br> else <br> <span style="padding-left:1em">g[i] = b[i]</span> <br></code> Ou: <br> <code>g = b xor (b logically right shifted 1 time)</code> <br> Decodificação (MSB é bit 0, b é binário, g é o código Gray): <br> <code>b[0] = g[0] <br> for other bits: <br> b[i] = g[i] xor b[i-1] <br></code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gray</code> deve ser uma função.
    testString: 'assert(typeof gray=="function","<code>gray</code> should be a function.");'
  - text: '<code>gray(true,177)</code> deve retornar um número.'
    testString: 'assert(typeof gray(true,177)=="number","<code>gray(true,177)</code> should return a number.");'
  - text: '<code>gray(true,177)</code> deve retornar <code>233</code> .'
    testString: 'assert.equal(gray(true,177),233,"<code>gray(true,177)</code> should return <code>233</code>.");'
  - text: '<code>gray(true,425)</code> deve retornar <code>381</code> .'
    testString: 'assert.equal(gray(true,425),381,"<code>gray(true,425)</code> should return <code>381</code>.");'
  - text: '<code>gray(true,870)</code> deve retornar <code>725</code> .'
    testString: 'assert.equal(gray(true,870),725,"<code>gray(true,870)</code> should return <code>725</code>.");'
  - text: '<code>gray(false,233)</code> deve retornar <code>177</code> .'
    testString: 'assert.equal(gray(false,233),177,"<code>gray(false,233)</code> should return <code>177</code>.");'
  - text: '<code>gray(false,381)</code> deve retornar <code>425</code> .'
    testString: 'assert.equal(gray(false,381),425,"<code>gray(false,381)</code> should return <code>425</code>.");'
  - text: '<code>gray(false,725)</code> deve retornar <code>870</code> .'
    testString: 'assert.equal(gray(false,725),870,"<code>gray(false,725)</code> should return <code>870</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gray(enc, number) {
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
