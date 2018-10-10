---
id: 5900f4281000cf542c50ff39
challengeType: 5
title: 'Problem 186: Connectedness of a network'
videoUrl: ''
localeTitle: 'Problema 186: Conectividade de uma rede'
---

## Description
<section id="description"> Aqui estão os registros de um sistema de telefone ocupado com um milhão de usuários: <p> RecNrCallerCalled120000710005326001835004393600863701497 ......... O número de telefone do chamador e o número chamado no registro n são Chamador (n) = S2n-1 e Chamado (n) = S2n onde S1,2,3, ... vem do &quot;gerador de Fibonacci retardado&quot;: </p><p> Para 1 ≤ k ≤ 55, Sk = [100003 - 200003k + 300007k3] (módulo 1000000) Para 56 ≤ k, Sk = [Sk-24 + Sk-55] (módulo 1000000) </p><p> Se Chamador (n) = Chamado (n), presume-se que o usuário discou errado e a chamada falha; caso contrário, a chamada será bem-sucedida. </p><p> Desde o início dos registros, dizemos que qualquer par de usuários X e Y são amigos se X chamar Y ou vice-versa. Da mesma forma, X é amigo de um amigo de Z se X é amigo de Y e Y é amigo de Z; e assim por diante para cadeias mais longas. </p><p> O número de telefone do primeiro-ministro é 524287. Depois de quantas chamadas bem-sucedidas, sem contar as discagens, 99% dos usuários (incluindo a PM) será um amigo, ou um amigo de um amigo etc., do primeiro-ministro? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler186()</code> deve retornar 2325629.
    testString: 'assert.strictEqual(euler186(), 2325629, "<code>euler186()</code> should return 2325629.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler186() {
  // Good luck!
  return true;
}

euler186();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
