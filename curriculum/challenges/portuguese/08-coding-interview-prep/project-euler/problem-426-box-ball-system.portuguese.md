---
id: 5900f5171000cf542c510029
challengeType: 5
title: 'Problem 426: Box-ball system'
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> Considere uma fileira infinita de caixas. Algumas das caixas contêm uma bola. Por exemplo, uma configuração inicial de 2 caixas ocupadas consecutivas seguidas de 2 caixas vazias, 2 caixas ocupadas, 1 caixa vazia e 2 caixas ocupadas pode ser denotada pela seqüência (2, 2, 2, 1, 2), na qual o número de caixas ocupadas e vazias consecutivas aparecem alternadamente. <p> Um turn consiste em mover cada bola exatamente uma vez, de acordo com a seguinte regra: Transferir a bola mais à esquerda que não foi movida para a caixa vazia mais próxima à sua direita. </p><p> Após uma volta, a sequência (2, 2, 2, 1, 2) torna-se (2, 2, 1, 2, 3) como pode ser visto abaixo; note que começamos a nova sequência começando na primeira caixa ocupada. </p><p> Um sistema como este é chamado de Sistema Box-Ball ou BBS. </p><p> Pode ser mostrado que, após um número suficiente de voltas, o sistema evolui para um estado em que os números consecutivos de caixas ocupadas são invariantes. No exemplo abaixo, os números consecutivos de caixas ocupadas evoluem para [1, 2, 3]; nós chamaremos isso de estado final. </p><p> Definimos a sequência {ti}: s0 = 290797 sk + 1 = sk2 mod 50515093 tk = (sk mod 64) + 1 </p><p> A partir da configuração inicial (t0, t1,…, t10), o estado final torna-se [1, 3, 10, 24, 51, 75]. A partir da configuração inicial (t0, t1,…, t10 000 000), encontre o estado final. Dê como sua resposta a soma dos quadrados dos elementos do estado final. Por exemplo, se o estado final for [1, 2, 3], então 14 (= 12 + 22 + 32) é a sua resposta. </p></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler426()</code> deve retornar 31591886008.
    testString: 'assert.strictEqual(euler426(), 31591886008, "<code>euler426()</code> should return 31591886008.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler426() {
  // Good luck!
  return true;
}

euler426();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
