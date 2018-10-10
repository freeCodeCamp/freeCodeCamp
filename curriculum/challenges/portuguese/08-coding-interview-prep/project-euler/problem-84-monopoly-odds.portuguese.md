---
id: 5900f3c11000cf542c50fed3
challengeType: 5
title: 'Problem 84: Monopoly odds'
videoUrl: ''
localeTitle: 'Problema 84: Probabilidades do monopólio'
---

## Description
<section id="description"> No jogo, Monopólio, o tabuleiro padrão é configurado da seguinte maneira: <p> Ir A1 CC1 A2 T1 R1 B1 CH1 B2 B3 JAIL H2 </p><p> C1 T2 </p><p> U1 H1 </p><p> C2 CH3 </p><p> C3 R4 </p><p> R2 G3 </p><p> D1 CC3 </p><p> CC2 G2 </p><p> D2 G1 </p><p> D3 G2J F3 U2 F2 F1 R3 E3 E2 CH2 E1 FP </p><p> Um jogador começa no quadrado GO e adiciona as pontuações em dois dados de 6 faces para determinar o número de quadrados que avançam no sentido horário. Sem quaisquer outras regras, esperamos visitar cada quadrado com igual probabilidade: 2,5%. No entanto, aterrissar em G2J (Go To Jail), CC (peito da comunidade) e CH (chance) altera essa distribuição. Além de G2J, e uma carta de cada um dos CC e CH, que ordena que o jogador vá diretamente para a cadeia, se um jogador rolar três duplas consecutivas, ele não avançará o resultado de seu 3º turno. Em vez disso, eles vão diretamente para a cadeia. No início do jogo, as cartas CC e CH são embaralhadas. Quando um jogador aterra em CC ou CH, recebe uma carta do topo da respectiva pilha e, depois de seguir as instruções, é devolvida ao fundo da pilha. Há dezesseis cartas em cada pilha, mas, para o propósito deste problema, estamos preocupados apenas com cartas que ordenam um movimento; qualquer instrução não relacionada com o movimento será ignorada e o jogador permanecerá no quadrado CC / CH. Baú da comunidade (2/16 cartas): Avance para GO Vá para a CADEIA </p><p> Chance (10/16 cartões): Avance para GO Vá para JAIL Vá para C1 Vá para E3 Vá para H2 Vá para R1 Vá para o próximo R (empresa ferroviária) Vá para o próximo R Vá para o próximo U (empresa de serviços públicos) Volte 3 praças . </p><p> O coração deste problema diz respeito à probabilidade de visitar um determinado quadrado. Ou seja, a probabilidade de terminar naquele quadrado depois de um lançamento. Por esta razão, deve ficar claro que, com a exceção de G2J para o qual a probabilidade de terminá-lo é zero, os quadrados CH terão as probabilidades mais baixas, como 5/8 solicitam um movimento para outro quadrado, e é o final quadrado em que o jogador termina em cada jogada que nos interessa. Não faremos qualquer distinção entre &quot;Apenas Visitar&quot; e sermos enviados para a JAIL, e também ignoraremos a regra sobre a exigência de um duplo para &quot;sair da prisão&quot;, assumindo que eles pagam para sair em seu próximo turno. Começando em GO e numerando os quadrados sequencialmente de 00 a 39, podemos concatenar esses números de dois dígitos para produzir sequências que correspondam a conjuntos de quadrados. Estatisticamente, pode-se mostrar que as três praças mais populares, em ordem, são JAIL (6,24%) = Quadrado 10, E3 (3,18%) = Quadrado 24, e GO (3,09%) = Quadrado 00. Então esses três quadrados mais populares pode ser listado com a string modal de seis dígitos: 102400. Se, em vez de usar dois dados de 6 faces, dois dados de 4 faces forem usados, encontre a string modal de seis dígitos. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler84()</code> deve retornar 101524.
    testString: 'assert.strictEqual(euler84(), 101524, "<code>euler84()</code> should return 101524.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler84() {
  // Good luck!
  return true;
}

euler84();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
