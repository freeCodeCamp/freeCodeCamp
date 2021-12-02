---
id: 5900f4cd1000cf542c50ffdf
title: 'Problema 352: Testes sanguíneos'
challengeType: 5
forumTopicId: 302012
dashedName: problem-352-blood-tests
---

# --description--

Cada uma das 25 ovelhas que se encontram em um rebanho tem de ser testada para um vírus raro, conhecido por afetar 2% da população de ovinos.

Existe um teste de PCR preciso e extremamente sensível para amostras de sangue, produzindo um resultado claramente positivo/negativo, mas é muito demorado e caro.

Devido ao alto custo, a veterinária encarregada sugere que, em vez de executar 25 testes separados, o seguinte procedimento seja usado:

As ovelhas são divididas em 5 grupos de 5 ovelhas em cada grupo. Para cada grupo, as 5 amostras são misturadas e realiza-se um único teste. Então,

- Se o resultado for negativo, todas as ovelhas desse grupo são consideradas sem vírus.
- Se o resultado for positivo, serão realizados 5 testes adicionais (um teste separado para cada animal) para determinar o(s) indivíduo(s).

Como a probabilidade de infecção para qualquer animal específico é de apenas 0,02, o primeiro teste (nas amostras em conjunto) de cada grupo será:

- Negativo (e sem mais testes necessários) com probabilidade ${0.98}^5 = 0.9039207968$.
- Positivo (5 testes adicionais necessários) com probabilidade $1 - 0.9039207968 = 0.0960792032$.

Assim, o número esperado de testes para cada grupo é $1 + 0.0960792032 × 5 = 1.480396016$.

Consequentemente, todos os 5 grupos podem ser avaliados com uma média de apenas US$1.480396016 × 5 = \mathbf{7.40198008}$ testes, o que representa uma grande economia de mais de 70%!

Embora o regime que acabamos de descrever pareça muito eficiente, ele ainda pode ser melhorado consideravelmente (partindo sempre do princípio de que o teste é suficientemente sensível e que não há efeitos adversos causados pela mistura de amostras diferentes). Ex:

- Podemos começar por fazer um teste com uma mistura de todas as 25 amostras. É possível verificar que em cerca de 60,35% dos casos este teste será negativo, pelo que não serão necessários mais testes. Só serão necessários mais testes para os 39,65% restantes dos casos.
- Se sabemos que pelo menos um animal em um grupo de 5 é infectado e que os 4 primeiros testes individuais são negativos, não há necessidade de realizar um ensaio no quinto animal (sabemos que deve ser infectado).
- Podemos tentar um número diferente de grupos/um número diferente de animais em cada grupo, ajustando esses números a cada nível para que o número total esperado de testes seja minimizado.

Para simplificar a vasta gama de possibilidades, há uma restrição que impomos ao criar o esquema de testes mais econômico: sempre que começamos com uma amostra mista, todas as ovelhas que contribuem para essa amostra devem ser totalmente testadas (ou seja, é preciso chegar a um veredito sobre ela estar infectada/sem vírus) antes de começarmos a examinar qualquer outro animal.

Para o exemplo atual, ocorre que o esquema de testes mais econômico (chamamos isso de estratégia ideal) requer uma média de apenas <strong>4,155452</strong> testes!

Usando a estratégia ideal, considere $T(s, p)$ como representando o número médio de testes necessários para analisar um rebanho de $s$ ovelhas para o vírus, com a probabilidade de $p$ de o vírus estar presente em qualquer indivíduo. Assim, arredondado para seis casas decimais, $T(25, 0,02) = 4,155452$ e $T(25, 0,10) = 12,702124$.

Encontre $\sum T(10.000, p)$ para $p = 0.01, 0.02, 0.03, \ldots 0.50$. Dê sua resposta arredondada para seis casas decimais.

# --hints--

`bloodTests()` deve retornar `378563.260589`.

```js
assert.strictEqual(bloodTests(), 378563.260589);
```

# --seed--

## --seed-contents--

```js
function bloodTests() {

  return true;
}

bloodTests();
```

# --solutions--

```js
// solution required
```
