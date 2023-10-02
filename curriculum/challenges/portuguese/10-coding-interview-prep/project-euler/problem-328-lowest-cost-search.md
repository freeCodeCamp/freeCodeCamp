---
id: 5900f4b41000cf542c50ffc7
title: 'Problema 328: Pesquisa pelo menor custo'
challengeType: 1
forumTopicId: 301985
dashedName: problem-328-lowest-cost-search
---

# --description--

Estamos tentando encontrar um número oculto selecionado de um conjunto de números inteiros {1, 2, ..., $n$} fazendo perguntas. Cada número (pergunta) que perguntamos, tem um <u>custo igual ao número solicitado</u> e nós recebemos uma de três respostas possíveis:

- "Seu palpite é menor que o número oculto", ou
- "Sim, é isso!", ou
- "Seu palpite é maior que o número oculto".

Dado o valor de $n$, uma estratégia ideal minimiza o custo total (ou seja, a soma de todas as perguntas feitas) <u>para o pior caso possível</u>. Ex:

Se $n = 3$, o melhor que podemos fazer é obviamente perguntar o número "<strong>2</strong>". A resposta nos levará imediatamente a encontrar o número oculto (a um custo total de 2).

Se $n = 8$, nós podemos decidir usar um tipo de estratégia com "busca binária": nossa primeira questão seria "<strong>4</strong>" e se o número oculto for maior que 4, precisaremos de uma ou duas questões adicionais. Considere que nossa segunda pergunta seja "<strong>6</strong>". Se o número oculto ainda for superior a 6, necessitaremos de uma terceira pergunta para discriminar entre 7 e 8. Assim, nossa terceira pergunta será "<strong>7</strong>" e o custo total para este cenário pior, será $4 + 6 + 7 = \mathbf{\color{red}{17}}$.

Podemos melhorar consideravelmente o pior custo para $n = 8$, tendo "<strong>5</strong>" como nossa primeira pergunta. Se nos disserem que o número oculto é maior que 5, a nossa segunda pergunta será "<strong>7</strong>", então saberemos com certeza qual é o número oculto (para um custo total de $5 + 7 = \mathbf{\color{blue}{12}}$). Se nos disserem que o número oculto é menor que 5, nossa segunda pergunta será "<strong>3</strong>". Se for menor que 3, nossa terceira pergunta será "<strong>1</strong>", dando um custo total de $5 + 3 + 1 = \mathbf{\color{blue}{9}}$. Como $\mathbf{\color{blue}{12 > 9}}$, o pior caso de custo para esta estratégia é <strong><span style="color: red;">12</span></strong>. Isso é melhor do que o que alcançamos anteriormente com a estratégia de "pesquisa binária"; também é melhor ou igual a qualquer outra estratégia. Então, de fato, acabamos de descrever uma estratégia ideal para $n = 8$.

Considere $C(n)$ como o pior caso de custo alcançado com uma estratégia ideal para $n$, como descrito acima. Assim, $C(1) = 0$, $C(2) = 1$, $C(3) = 2$ e $C(8) = 12$.

Da mesma forma, $C(100) = 400$ e $\displaystyle\sum_{n = 1}^{100} C(n) = 17575$.

Encontre $\displaystyle\sum_{n = 1}^{200.000} C(n)$.

# --hints--

`lowestCostSearch()` deve retornar `260511850222`.

```js
assert.strictEqual(lowestCostSearch(), 260511850222);
```

# --seed--

## --seed-contents--

```js
function lowestCostSearch() {

  return true;
}

lowestCostSearch();
```

# --solutions--

```js
// solution required
```
