---
id: 9d7123c8c441eeafaeb5bdef
title: Remover elementos de um array usando slice em vez de splice
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

É comum precisar remover alguns itens de um array e manter o resto. O JavaScript oferece o método `splice`, que recebe uma posição de onde começar a remover e o número de elementos para remover como argumentos para isso. Se o segundo argumento for omitido, o padrão é remover todos os itens até o final. No entanto, o método `splice` modifica o array original em que é chamado. Exemplo:

```js
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

Aqui `splice` retorna a string `London` e a remove do array cities. `cities` terá o valor `["Chicago", "Delhi", "Islamabad", "Berlin"]`.

Como vimos no último desafio, o método `slice` não altera o array original; ele retorna um novo array que pode ser armazenado em uma variável. Lembre-se de que o método `slice` toma dois argumentos para os índices de início e fim e retorna um array com os elementos presentes entre esses índices (o índice de fim é não-inclusivo). Usar o método `slice` em vez do `splice` ajuda a evitar alterações em arrays e, portanto, efeitos colaterais.

# --instructions--

Reescreva a função `nonMutatingSplice` com `slice` em vez de `splice`. Ela deve limitar o array `cities` providenciado ao tamanho 3 e retornar um novo array com apenas os três primeiros itens.

Não modifique o array original passado à função.

# --hints--

Você deve usar o método `slice`.

```js
assert(code.match(/\.slice/g));
```

Você não deve usar o método `splice`.

```js
assert(!code.match(/\.?[\s\S]*?splice/g));
```

O array `inputCities` não deve ser alterado.

```js
assert(
  JSON.stringify(inputCities) ===
    JSON.stringify(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
);
```

`nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` deve retornar `["Chicago", "Delhi", "Islamabad"]`.

```js
assert(
  JSON.stringify(
    nonMutatingSplice(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
  ) === JSON.stringify(['Chicago', 'Delhi', 'Islamabad'])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

# --solutions--

```js
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
```
