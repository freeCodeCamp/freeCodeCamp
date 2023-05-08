---
id: 5900f51b1000cf542c51002e
title: 'Problema 431: Silo de espaço quadrado'
challengeType: 1
forumTopicId: 302102
dashedName: problem-431-square-space-silo
---

# --description--

Fred, o agricultor, organiza a instalação de um novo silo de armazenamento na sua fazenda e tem uma obsessão por tudo o que é quadrado. Ele fica absolutamente deprimido quando descobre que o silo é circular. Quentin, o representante da empresa que instalou o silo, explica que eles apenas fabricam silos cilíndricos, mas chama a atenção para o fato de que eles estão sobre uma base quadrada. Fred não fica feliz e insiste que seja removido da sua propriedade.

Pensando rápido, Quentin explica que, quando os materiais dos grãos são entregues por cima, uma inclinação cônica é formada. O ângulo natural feito com a horizontal é chamado de ângulo de repouso. Por exemplo, se o ângulo de repouso, $\alpha = 30°$, e se os grãos forem entregues no centro do silo, então um cone perfeito se formará em direção ao topo do cilindro. No caso deste silo, que tem um diâmetro de 6 m, a quantidade de espaço desperdiçado seria de aproximadamente 32,648388556 m<sup>3</sup>. No entanto, se o grão for entregue em um ponto na parte superior que tem uma distância horizontal de $x$ metros do centro, então um cone com uma base estranhamente curvada e inclinada é formado. Ele mostra uma foto para Fred.

<img class="img-responsive center-block" alt="imagem apresentando a formação do cone perfeito na direção do topo do cilindro" src="https://cdn.freecodecamp.org/curriculum/project-euler/square-space-silo.png" style="background-color: white; padding: 10px;" />

Vamos considerar a quantidade de espaço desperdiçada em metros cúbicos como $V(x)$. Se $x = 1.114.785.284$, que tem três casas decimais quadradas, a quantidade de espaço desperdiçada, $V(1.114.785.284) \approx 36$. Dada a amplitude de soluções possíveis para este problema, há exatamente uma outra opção: $V(2.511.167.869) \approx 49$. Seria como se soubéssemos que o quadrado é o rei do silo, sentado em glória esplêndida em cima de seus grãos.

Os olhos de Fred iluminam-se de prazer com esta resolução elegante, mas na inspeção mais atenta dos desenhos e cálculos de Quentin, sua felicidade virou desânimo mais uma vez. Fred aponta para Quentin que é o raio do silo que é 6 metros, não o diâmetro, e o ângulo de repouso para seus grãos é de 40°. No entanto, se Quentin conseguir encontrar uma série de soluções para este silo em particular, ele manterá o silo com prazer.

Se Quentin pensar rápido e quiser satisfazer Fred, o fazendeiro frustrado com paixão por todas as coisas quadradas, ele precisa determinar os valores de $x$ para todas as opções de desperdício de espaço quadrado e calcular $\sum x$ corretamente para 9 casas decimais.

# --hints--

`squareSpaceSilo()` deve retornar `23.386029052`.

```js
assert.strictEqual(squareSpaceSilo(), 23.386029052);
```

# --seed--

## --seed-contents--

```js
function squareSpaceSilo() {

  return true;
}

squareSpaceSilo();
```

# --solutions--

```js
// solution required
```
