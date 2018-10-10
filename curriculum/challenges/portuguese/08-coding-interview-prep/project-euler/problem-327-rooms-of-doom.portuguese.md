---
id: 5900f4b31000cf542c50ffc6
challengeType: 5
title: 'Problem 327: Rooms of Doom'
videoUrl: ''
localeTitle: 'Problema 327: Salas da Perdição'
---

## Description
<section id="description"> Uma série de três salas são conectadas umas às outras por portas automáticas. <p> Cada porta é operada por um cartão de segurança. Uma vez que você entra em uma sala, a porta fecha automaticamente e esse cartão de segurança não pode ser usado novamente. Uma máquina no início dispensará um número ilimitado de cartões, mas cada sala (incluindo a sala inicial) contém scanners e, se detectar que você está segurando mais de três cartões de segurança ou se detectar um cartão de segurança desacompanhado no chão, todas as portas ficarão permanentemente bloqueadas. No entanto, cada sala contém uma caixa onde você pode armazenar com segurança qualquer número de cartões de segurança para uso posterior. </p><p> Se você simplesmente tentasse viajar pelos quartos um de cada vez, então, ao entrar no quarto 3, você teria usado todos os três cartões e ficaria preso naquele quarto para sempre! </p><p> No entanto, se você usar as caixas de armazenamento, o escape será possível. Por exemplo, você pode entrar na sala 1 usando seu primeiro cartão, colocar um cartão na caixa de armazenamento e usar seu terceiro cartão para sair da sala de volta ao início. Então, depois de coletar mais três cartões da máquina distribuidora, você pode usar um para entrar no quarto 1 e coletar o cartão que você colocou na caixa um momento atrás. Agora você tem mais três cartas e poderá viajar pelas três portas restantes. Esse método permite que você viaje pelas três salas usando seis cartões de segurança no total. </p><p> É possível viajar por seis salas usando um total de 123 cartões de segurança, com um máximo de 3 cartões. </p><p> Seja C o número máximo de cartões que podem ser carregados a qualquer momento. Seja R o número de quartos para percorrer. Seja M (C, R) o número mínimo de cartões requeridos pela máquina distribuidora para viajar por salas R que transportem até um máximo de cartões C a qualquer momento. </p><p> Por exemplo, M (3,6) = 123 e M (4,6) = 23.E, ΣM (C, 6) = 146 para 3 ≤ C ≤ 4. </p><p> Você é dado que ΣM (C, 10) = 10382 para 3 ≤ C ≤ 10. </p><p> Encontre ΣM (C, 30) para 3 ≤ C ≤ 40. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler327()</code> deve retornar 34315549139516.
    testString: 'assert.strictEqual(euler327(), 34315549139516, "<code>euler327()</code> should return 34315549139516.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler327() {
  // Good luck!
  return true;
}

euler327();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
