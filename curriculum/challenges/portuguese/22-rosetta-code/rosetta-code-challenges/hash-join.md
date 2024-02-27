---
id: 5956795bc9e2c415eb244de1
title: União de hashes
challengeType: 1
forumTopicId: 302284
dashedName: hash-join
---

# --description--

Um inner join é uma operação que combina duas tabelas de dados em uma tabela, com base na correspondência dos valores da coluna. A maneira mais simples de implementar esta operação é o algoritmo de junção de laço aninhado, mas uma alternativa mais escalável é o algoritmo de junção de hashes.

O algoritmo de união de hashes (ou "hash join") consiste em duas etapas:

<ol>
  <li><strong>Fase de hash:</strong> crie um multimapa a partir de uma das duas tabelas, mapeando a partir de cada valor de coluna da junção para todas as linhas que a contêm.</li>
  <ul>
    <li>O multimapa deve suportar uma pesquisa baseada em hash, que seja melhor dimensionada do que uma simples pesquisa linear, pois esse é o sentido desse algoritmo.</li>
    <li>Idealmente, devemos criar o multimapa para a tabela menor, assim minimizando seu tempo de criação e o tamanho da memória.</li>
  </ul>
  <li><strong>Fase de união:</strong> escaneie a outra tabela e encontre linhas correspondentes buscando no multimapa criado anteriormente.</li>
</ol>

Em pseudocódigo, o algoritmo poderia ser expresso da seguinte forma:

<pre><strong>permita que</strong> <i>A</i> = a primeira tabela de entrada (ou idealmente, a maior)
<strong>permita que</strong> <i>B</i> = a segunda tabela de entrada (ou idealmente, a menor)
<strong>permita que</strong> <i>j<sub>A</sub></i> = o ID da coluna de união da tabela <i>A</i>
<strong>permita que</strong> <i>j<sub>B</sub></i> = o ID da coluna de união da tabela <i>B</i>
<strong>permita que</strong> <i>M<sub>B</sub></i> = um multimapa para o mapeamento de valores únicos para múltiplas linhas da tabela <i>B</i> (começa vazio)
<strong>permita que</strong> <i>C</i> = a tabela de saída (começa vazia)
<strong>para cada</strong> linha <i>b</i> na tabela <i>B</i>:
  <strong>coloque</strong> <i>b</i> no multimapa <i>M<sub>B</sub></i> com a chave <i>b(j<sub>B</sub>)</i>
<strong>para cada</strong> linha <i>a</i> na tabela <i>A</i>:
  <strong>para cada</strong> linha <i>b</i> no multimapa <i>M<sub>B</sub></i> com a chave <i>a(j<sub>A</sub>)</i>:
    <strong>permita que</strong> <i>c</i> = a concatenação da linha <i>a</i> e da linha <i>b</i>
    <strong>coloque</strong> a linha <i>c</i> na tabela <i>C</i>
</pre>

# --instructions--

Implemente o algoritmo de "hash join" como uma função e demonstre que ele passa pelo caso de teste listado abaixo. A função deve aceitar dois arrays de objetos e retornar um array de objetos combinados.

**Entrada**

<table>
  <tr>
    <td style="padding: 4px; margin: 5px;">
      <table style="border:none; border-collapse:collapse;">
        <tr>
          <td style="border:none"><i>A =</i></td>
          <td style="border:none">
            <table>
              <tr>
                <th style="padding: 4px; margin: 5px;">Idade</th>
                <th style="padding: 4px; margin: 5px;">Nome</th>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">27</td>
                <td style="padding: 4px; margin: 5px;">Jonah</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">18</td>
                <td style="padding: 4px; margin: 5px;">Alan</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">28</td>
                <td style="padding: 4px; margin: 5px;">Glory</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">18</td>
                <td style="padding: 4px; margin: 5px;">Popeye</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">28</td>
                <td style="padding: 4px; margin: 5px;">Alan</td>
              </tr>
            </table>
          </td>
          <td style="border:none; padding-left:1.5em;" rowspan="2"></td>
          <td style="border:none"><i>B =</i></td>
          <td style="border:none">
            <table>
              <tr>
                <th style="padding: 4px; margin: 5px;">Personagem</th>
                <th style="padding: 4px; margin: 5px;">Inimigo</th>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Jonah</td>
                <td style="padding: 4px; margin: 5px;">Whales</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Jonah</td>
                <td style="padding: 4px; margin: 5px;">Spiders</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Alan</td>
                <td style="padding: 4px; margin: 5px;">Ghosts</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Alan</td>
                <td style="padding: 4px; margin: 5px;">Zombies</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Glory</td>
                <td style="padding: 4px; margin: 5px;">Buffy</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="border:none">
            <i>j<sub>A</sub> =</i>
          </td>
          <td style="border:none">
            <i><code>Name</code> (ou seja, a coluna 1)</i>
          </td>
          <td style="border:none">
            <i>j<sub>B</sub> =</i>
          </td>
          <td style="border:none">
            <i><code>Character</code> (ou seja, a coluna 0)</i>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

**Saída**

| A_age | A_name | B_character | B_nemesis |
| ----- | ------ | ----------- | --------- |
| 27    | Jonah  | Jonah       | Whales    |
| 27    | Jonah  | Jonah       | Spiders   |
| 18    | Alan   | Alan        | Ghosts    |
| 18    | Alan   | Alan        | Zombies   |
| 28    | Glory  | Glory       | Buffy     |
| 28    | Alan   | Alan        | Ghosts    |
| 28    | Alan   | Alan        | Zombies   |

A ordem das linhas na tabela de saída não é significativa.

# --hints--

`hashJoin` deve ser uma função.

```js
assert(typeof hashJoin === 'function');
```

`hashJoin([{ age: 27, name: "Jonah" }, { age: 18, name: "Alan" }, { age: 28, name: "Glory" }, { age: 18, name: "Popeye" }, { age: 28, name: "Alan" }], [{ character: "Jonah", nemesis: "Whales" }, { character: "Jonah", nemesis: "Spiders" }, { character: "Alan", nemesis: "Ghosts" }, { character:"Alan", nemesis: "Zombies" }, { character: "Glory", nemesis: "Buffy" }, { character: "Bob", nemesis: "foo" }])` deve retornar `[{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Whales"}, {"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Spiders"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}, {"A_age": 28,"A_name": "Glory", "B_character": "Glory", "B_nemesis": "Buffy"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}]`

```js
assert.deepEqual(hashJoin(hash1, hash2), res);
```

# --seed--

## --after-user-code--

```js
const hash1 = [
    { age: 27, name: 'Jonah' },
    { age: 18, name: 'Alan' },
    { age: 28, name: 'Glory' },
    { age: 18, name: 'Popeye' },
    { age: 28, name: 'Alan' }
];

const hash2 = [
    { character: 'Jonah', nemesis: 'Whales' },
    { character: 'Jonah', nemesis: 'Spiders' },
    { character: 'Alan', nemesis: 'Ghosts' },
    { character: 'Alan', nemesis: 'Zombies' },
    { character: 'Glory', nemesis: 'Buffy' },
    { character: 'Bob', nemesis: 'foo' }
];

const res = [
    { A_age: 27, A_name: 'Jonah', B_character: 'Jonah', B_nemesis: 'Whales' },
    { A_age: 27, A_name: 'Jonah', B_character: 'Jonah', B_nemesis: 'Spiders' },
    { A_age: 18, A_name: 'Alan', B_character: 'Alan', B_nemesis: 'Ghosts' },
    { A_age: 18, A_name: 'Alan', B_character: 'Alan', B_nemesis: 'Zombies' },
    { A_age: 28, A_name: 'Glory', B_character: 'Glory', B_nemesis: 'Buffy' },
    { A_age: 28, A_name: 'Alan', B_character: 'Alan', B_nemesis: 'Ghosts' },
    { A_age: 28, A_name: 'Alan', B_character: 'Alan', B_nemesis: 'Zombies' }
];

const bench1 = [{ name: 'u2v7v', num: 1 }, { name: 'n53c8', num: 10 }, { name: 'oysce', num: 9 }, { name: '0mto2s', num: 1 }, { name: 'vkh5id', num: 4 }, { name: '5od0cf', num: 8 }, { name: 'uuulue', num: 10 }, { name: '3rgsbi', num: 9 }, { name: 'kccv35r', num: 4 }, { name: '80un74', num: 9 }, { name: 'h4pp3', num: 6 }, { name: '51bit', num: 7 }, { name: 'j9ndf', num: 8 }, { name: 'vf3u1', num: 10 }, { name: 'g0bw0om', num: 10 }, { name: 'j031x', num: 7 }, { name: 'ij3asc', num: 9 }, { name: 'byv83y', num: 8 }, { name: 'bjzp4k', num: 4 }, { name: 'f3kbnm', num: 10 }];
const bench2 = [{ friend: 'o8b', num: 8 }, { friend: 'ye', num: 2 }, { friend: '32i', num: 5 }, { friend: 'uz', num: 3 }, { friend: 'a5k', num: 4 }, { friend: 'uad', num: 7 }, { friend: '3w5', num: 10 }, { friend: 'vw', num: 10 }, { friend: 'ah', num: 4 }, { friend: 'qv', num: 7 }, { friend: 'ozv', num: 2 }, { friend: '9ri', num: 10 }, { friend: '7nu', num: 4 }, { friend: 'w3', num: 9 }, { friend: 'tgp', num: 8 }, { friend: 'ibs', num: 1 }, { friend: 'ss7', num: 6 }, { friend: 'g44', num: 9 }, { friend: 'tab', num: 9 }, { friend: 'zem', num: 10 }];
```

## --seed-contents--

```js
function hashJoin(hash1, hash2) {

  return [];
}
```

# --solutions--

```js
function hashJoin(hash1, hash2) {
  const hJoin = (tblA, tblB, strJoin) => {
    const [jA, jB] = strJoin.split('=');
    const M = tblB.reduce((a, x) => {
      const id = x[jB];
      return (
        a[id] ? a[id].push(x) : (a[id] = [x]),
        a
      );
    }, {});

    return tblA.reduce((a, x) => {
      const match = M[x[jA]];
      return match ? (
                a.concat(match.map(row => dictConcat(x, row)))
            ) : a;
    }, []);
  };

  const dictConcat = (dctA, dctB) => {
    const ok = Object.keys;
    return ok(dctB).reduce(
            (a, k) => (a[`B_${k}`] = dctB[k]) && a,
            ok(dctA).reduce(
                (a, k) => (a[`A_${k}`] = dctA[k]) && a, {}
            )
        );
  };

  return hJoin(hash1, hash2, 'name=character');
}
```
