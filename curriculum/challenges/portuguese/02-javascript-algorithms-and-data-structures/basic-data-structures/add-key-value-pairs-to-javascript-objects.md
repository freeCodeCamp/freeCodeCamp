---
id: 587d7b7c367417b2b2512b18
title: Adicione Pares de Chave-Valor a objetos JavaScript
challengeType: 1
forumTopicId: 301153
dashedName: add-key-value-pairs-to-javascript-objects
---

# --description--

Em suas formas mais básicas, objetos são apenas coleções de pares de <dfn>chave-valor</dfn>. Em outras palavras, eles são pedaços de dados (<dfn>valores</dfn>) mapeados para identificadores únicos chamados <dfn>propriedades</dfn> (<dfn>chaves</dfn>). Dê uma olhada no exemplo:

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

O código acima define um objeto de caractere de jogo Tekken chamado `tekkenCharacter`. Tem três propriedades, em que cada uma é mapeada para um valor específico. Se você quer adicionar uma propriedade adicional, como "origin", pode ser feito ao atribuir `origin` ao objeto:

```js
tekkenCharacter.origin = 'South Korea';
```

Isso usa notação de ponto. Se você observar o objeto `tekkenCharacter`, agora incluirá a propriedade `origin`. Hwoarang também tinha distintos cabelos laranja. Você pode adicionar essa propriedade com notação de colchetes fazendo:

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

A notação de colchete é necessária se sua propriedade tem um espaço nele ou se você deseja usar uma variável para nomear a propriedade. No caso acima, a propriedade está entre aspas para denotá-la como uma string e será adicionada exatamente como mostrada. Sem aspas, ele será avaliado como uma variável e o nome da propriedade será qualquer valor que a variável seja. Aqui está um exemplo com uma variável:

```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

Após adicionar todos os exemplos, o objeto ficará assim:

```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

# --instructions--

O objeto `foods` foi criado com três entradas. Usando a sintaxe de sua escolha, adicione mais três entradas a ele: `bananas` com um valor de `13`, `uvas` com um valor de `35` e `morangos` com um valor de `27`.

# --hints--

`foods` deve ser um objeto.

```js
assert(typeof foods === 'object');
```

O objeto `foods` deve ter a chave `bananas` com o valor de `13`.

```js
assert(foods.bananas === 13);
```

O objeto `foods` deve ter a chave `grapes` com o valor de `35`.

```js
assert(foods.grapes === 35);
```

O objeto `foods` deve ter a chave `strawberries` com o valor de `35`.

```js
assert(foods.strawberries === 27);
```

Os pares de chave-valor devem serem definidos usando a notação de ponto ou de colchetes.

```js
assert(
  code.search(/bananas:/) === -1 &&
    code.search(/grapes:/) === -1 &&
    code.search(/strawberries:/) === -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
```
