---
id: 5900f4591000cf542c50ff6b
title: 'Problema 236: Cestos de luxo'
challengeType: 1
forumTopicId: 301881
dashedName: problem-236-luxury-hampers
---

# --description--

Os fornecedores "A" e "B" forneceram os seguintes números de produtos para o mercado de cestos de luxo:

| Produto             | 'A'  | 'B'  |
| ------------------- | ---- | ---- |
| Caviar Beluga       | 5248 | 640  |
| Bolo de Natal       | 1312 | 1888 |
| Carne de cervo      | 2624 | 3776 |
| Vinho do Porto      | 5760 | 3776 |
| Trufas no champanhe | 3936 | 5664 |

Embora os fornecedores se esforcem muito por transportar seus produtos em condições perfeitas, há inevitavelmente alguns estragos, ou seja, os produtos que se perdem.

Os fornecedores comparam seu desempenho usando dois tipos de estatística:

- As cinco taxas de desperdício por produto para cada fornecedor são iguais ao número de produtos que se perderam dividido pelo número de produtos fornecidos para cada um dos cinco produtos separadamente.
- A taxa de perda geral para cada fornecedor é igual ao número total de produtos que se perdeu dividido pelo número total de produtos fornecidos por esse fornecedor.

Para a surpresa deles, os fornecedores descobriram que cada uma das taxas de desperdício por produto era pior (superior) para 'B' do que para 'A' pelo mesmo fator (proporção de taxas de desperdício), $m > 1$; e, no entanto, paradoxalmente, a taxa geral de desperdício foi pior para o "A" do que para o "B", também por um fator de $m$.

Há trinta e cinco $m > 1$ para os quais esse resultado surpreendente poderia ter ocorrido, sendo o menor deles $\frac{1476}{1475}$.

Qual é o maior valor possível de $m$? Dê sua resposta como uma string com uma fração reduzida aos termos mais baixos, na forma `u/v`.

# --hints--

`luxuryHampers()` deve retornar uma string.

```js
assert(typeof luxuryHampers() === 'string');
```

`luxuryHampers()` deve retornar a string `123/59`.

```js
assert.strictEqual(luxuryHampers(), '123/59');
```

# --seed--

## --seed-contents--

```js
function luxuryHampers() {

  return true;
}

luxuryHampers();
```

# --solutions--

```js
// solution required
```
