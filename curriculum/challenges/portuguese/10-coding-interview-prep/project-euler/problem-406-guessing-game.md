---
id: 5900f5021000cf542c510015
title: 'Problema 406: Jogo de adivinhação'
challengeType: 1
forumTopicId: 302074
dashedName: problem-406-guessing-game
---

# --description--

Estamos tentando encontrar um número oculto selecionado do conjunto de inteiros {1, 2, ..., $n$} fazendo perguntas. Cada número (pergunta) que perguntamos, recebemos uma das três possíveis respostas:

- "Seu palpite é menor que o número oculto" (e você tem um custo de a) ou
- "Seu palpite é maior que o número oculto" (e você tem um custo de b), ou
- "Sim, é esse!" (e o jogo acaba).

Dado o valor de $n$, $a$, e $b$, uma estratégia ideal minimiza o custo total <u>para o pior caso possível</u>.

Por exemplo, se $n = 5$, $a = 2$, e $b = 3$, podemos começar perguntando "<strong>2</strong>" como a nossa primeira pergunta.

Se nos disserem que 2 é maior que o número oculto (para um custo de $b = 3$), então temos certeza de que "<strong>1</strong>" é o número oculto (para um custo total de <strong><span style="color: blue;">3</span></strong>).

Se nos for dito que 2 é menor que o número oculto (para um custo de $a = 2$), então nossa próxima pergunta será "<strong>4</strong>".

Se nos for dito que 4 é maior que o número oculto (para um custo de $b = 3$), então temos certeza de que "<strong>3</strong>" é o número oculto (para um custo total de $2 + 3 = \color{blue}{\mathbf{5}}$).

Se nos for dito que 4 é menor que o número oculto (para um custo de $a = 2$), então temos a certeza de que "<strong>5</strong>" é o número oculto (para um custo total de $2 + 2 = \cor{blue}{\mathbf{4}}$).

Assim, o pior custo de caso alcançado por esta estratégia é <strong><span style="color: red">5</span></strong>. Também se pode demonstrar que este é o pior custo possível que pode ser alcançado. Então, de fato, acabamos de descrever uma estratégia ideal para os valores indicados de $n$, $a$e $b$.

Considere $C(n, a, b)$ como o pior caso de custo obtido por uma estratégia ideal para os valores dados de $n$, $a$, e $b$.

Aqui estão alguns exemplos:

$$\begin{align}   & C(5, 2, 3) = 5 \\\\
  & C(500, \sqrt{2}, \sqrt{3}) = 13.220\\,731\\,97\ldots \\\\   & C(20.000, 5, 7) = 82 \\\\
  & C(2.000.000, √5, √7) = 49.637\\,559\\,55\ldots \\\\ \end{align}$$

Considere $F_k$ como sendo os números de Fibonacci: $F_k = F_{k - 1} + F_{k - 2}$ com casos base $F_1 = F_2 = 1$.

Encontre $\displaystyle\sum_{k = 1}^{30} C({10}^{12}, \sqrt{k}, \sqrt{F_k})$ e dê sua resposta arredondada para 8 casas decimais após o ponto decimal.

# --hints--

`guessingGame()` deve retornar `36813.12757207`.

```js
assert.strictEqual(guessingGame(), 36813.12757207);
```

# --seed--

## --seed-contents--

```js
function guessingGame() {

  return true;
}

guessingGame();
```

# --solutions--

```js
// solution required
```
