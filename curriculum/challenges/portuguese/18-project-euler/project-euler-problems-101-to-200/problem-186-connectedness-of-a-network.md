---
id: 5900f4281000cf542c50ff39
title: 'Problema 186: Conectividade de uma rede'
challengeType: 1
forumTopicId: 301822
dashedName: problem-186-connectedness-of-a-network
---

# --description--

Aqui estão os registros de um sistema de telefone bastante ativo com um milhão de usuários:

| RecNr | Caller | Called |
| ----- | ------ | ------ |
| 1     | 200007 | 100053 |
| 2     | 600183 | 500439 |
| 3     | 600863 | 701497 |
| ...   | ...    | ...    |

O número de telefone de quem ligou e o número de quem recebeu a chamada no registro $n$ (RecNr) são $Caller(n) = S_{2n - 1}$ (quem ligou) e $Called(n) = S_{2n}$ (quem recebeu) em ${S}_{1,2,3,\ldots}$ veio de um "Gerador Fibonacci com atraso":

Para $1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007{k}^3]\\;(\text{modulo}\\;1000000)$

Para $56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}]\\;(\text{modulo}\\;1000000)$

Se $Caller(n) = Called(n)$, diz-se que o usuário ligou errado e há uma falha na ligação; do contrário, a chamada foi um sucesso.

Desde o início dos registros, dizemos que qualquer par de usuários $X$ e $Y$ são amigos se $X$ ligar para $Y$ ou vice-versa. Do mesmo modo, $X$ é um amigo de um amigo de $Z$ se $X$ é um amigo de $Y$ e $Y$ é um amigo de $Z$. O mesmo vale para cadeias maiores.

O número de telefone do primeiro ministro é 524287. Após quantas chamadas bem-sucedidas, sem contar as falsas, 99% dos usuários (incluindo o próprio primeiro ministro) serão amigos ou amigos de amigos do primeiro ministro?

# --hints--

`connectednessOfANetwork()` deve retornar `2325629`.

```js
assert.strictEqual(connectednessOfANetwork(), 2325629);
```

# --seed--

## --seed-contents--

```js
function connectednessOfANetwork() {

  return true;
}

connectednessOfANetwork();
```

# --solutions--

```js
// solution required
```
