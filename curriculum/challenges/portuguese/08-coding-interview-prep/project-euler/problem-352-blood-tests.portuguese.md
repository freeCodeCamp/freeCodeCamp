---
id: 5900f4cd1000cf542c50ffdf
challengeType: 5
title: 'Problem 352: Blood tests'
videoUrl: ''
localeTitle: 'Problema 352: Exames de sangue'
---

## Description
<section id="description"> Cada uma das 25 ovelhas de um rebanho deve ser testada para um vírus raro, conhecido por afetar 2% da população de ovinos. Existe um teste de PCR preciso e extremamente sensível para amostras de sangue, produzindo um claro resultado positivo / negativo, mas é muito demorado e caro. <p> Devido ao alto custo, o veterinário sugere que, em vez de realizar 25 testes separados, o seguinte procedimento pode ser usado: As ovelhas são divididas em 5 grupos de 5 ovelhas em cada grupo. Para cada grupo, as 5 amostras são misturadas e um único teste é realizado. Então, se o resultado for negativo, todas as ovelhas desse grupo serão consideradas livres de vírus. Se o resultado for positivo, 5 testes adicionais serão realizados (um teste separado para cada animal) para determinar o (s) indivíduo (s) afetado (s). </p><p> Como a probabilidade de infecção para qualquer animal específico é de apenas 0,02, o primeiro teste (nas amostras reunidas) para cada grupo será: Negativo (e não mais testes necessários) com probabilidade 0,985 = 0,9039207968. Positivo (5 testes adicionais necessários) com probabilidade 1 - 0,9039207968 = 0,0960792032. </p><p> Assim, o número esperado de testes para cada grupo é de 1 + 0,0960792032 × 5 = 1,480396016. Consequentemente, todos os 5 grupos podem ser selecionados usando uma média de apenas 1.480396016 × 5 = 7.40198008 testes, o que representa uma enorme economia de mais de 70%! </p><p> Embora o esquema que acabamos de descrever pareça ser muito eficiente, ele ainda pode ser consideravelmente melhorado (sempre assumindo que o teste é suficientemente sensível e que não há efeitos adversos causados ​​pela mistura de amostras diferentes). Por exemplo: Podemos começar executando um teste em uma mistura de todas as 25 amostras. Pode-se verificar que em cerca de 60,35% dos casos este teste será negativo, não sendo necessários mais testes. Testes adicionais serão necessários apenas para os 39,65% restantes dos casos. Se sabemos que pelo menos um animal em um grupo de 5 está infectado e os primeiros 4 testes individuais saem negativos, não há necessidade de executar um teste no quinto animal (sabemos que ele deve estar infectado). Podemos tentar um número diferente de grupos / número diferente de animais em cada grupo, ajustando esses números em cada nível para que o número total esperado de testes seja minimizado. </p><p> Para simplificar o amplo leque de possibilidades, existe uma restrição quando concebemos o esquema de testes mais eficiente em termos de custos: sempre que começamos com uma amostra mista, todos os ovinos que contribuem para essa amostra devem ser totalmente selecionados (isto é, um veredicto de infectados). / livre de vírus deve ser alcançado para todos eles) antes de começarmos a examinar qualquer outro animal. </p><p> Para o exemplo atual, verifica-se que o esquema de teste mais eficiente em termos de custo (vamos chamá-lo de estratégia ótima) requer uma média de apenas 4.155452 testes! </p><p> Usando a estratégia ótima, vamos T (s, p) representar o número médio de testes necessários para rastrear um rebanho de ovelhas para um vírus tendo probabilidade p de estar presente em qualquer indivíduo. Assim, arredondado para seis casas decimais, T (25, 0.02) = 4.155452 e T (25, 0.10) = 12.702124. </p><p> Encontre ΣT (10000, p) para p = 0,01, 0,02, 0,03, ... 0,50. Dê sua resposta arredondada para seis casas decimais. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler352()</code> deve retornar 378563.260589.
    testString: 'assert.strictEqual(euler352(), 378563.260589, "<code>euler352()</code> should return 378563.260589.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler352() {
  // Good luck!
  return true;
}

euler352();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
