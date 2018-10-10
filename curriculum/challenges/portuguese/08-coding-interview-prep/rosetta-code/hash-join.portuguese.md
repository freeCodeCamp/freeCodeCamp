---
title: Hash join
id: 5956795bc9e2c415eb244de1
challengeType: 5
videoUrl: ''
localeTitle: Junção de hash
---

## Description
<section id="description"><p> Uma <a href="https://en.wikipedia.org/wiki/Join_(SQL)#Inner_join" title="wp: Join_ (SQL) #Inner_join">junção interna</a> é uma operação que combina duas tabelas de dados em uma tabela, com base em valores de coluna correspondentes. A maneira mais simples de implementar essa operação é o algoritmo de <a href="https://en.wikipedia.org/wiki/Nested loop join" title="wp: Junção de loop aninhada">junção de loop aninhado</a> , mas uma alternativa mais escalável é o algoritmo de <a href="https://en.wikipedia.org/wiki/hash join" title="wp: junção de hash">junção de hash</a> . </p><p> Implemente o algoritmo &quot;hash join&quot; e demonstre que ele passa no caso de teste listado abaixo. </p><p> Você deve representar as tabelas como estruturas de dados que parecem naturais em sua linguagem de programação. </p><p> O algoritmo &quot;hash join&quot; consiste em duas etapas: </p> Fase de hash: cria um <a href="https://en.wikipedia.org/wiki/Multimap" title="wp: Multimap">multimap</a> de uma das duas tabelas, mapeando de cada valor de coluna de junção para todas as linhas que o contêm. O multimap deve suportar uma pesquisa baseada em hash que é melhor que uma busca linear simples, porque esse é o ponto principal desse algoritmo. Idealmente, devemos criar o multimap para a tabela menor, minimizando assim o tempo de criação e o tamanho da memória. Fase de junção: escaneie a outra tabela e encontre linhas correspondentes olhando no multimap criado anteriormente. <p> No pseudocódigo, o algoritmo poderia ser expresso da seguinte maneira: </p><pre> seja A = a primeira tabela de entrada (ou, idealmente, a maior)
seja B = a segunda tabela de entrada (ou, idealmente, a menor)
deixe j <sub>A</sub> = o ID da coluna de junção da tabela A
deixe j <sub>B</sub> = o ID da coluna de junção da tabela B
deixe M <sub>B</sub> = um multimap para mapear de valores únicos para múltiplas linhas da tabela B (começa vazia)
deixe C = a tabela de saída (começa vazia)
para cada linha b na tabela B:
  coloque b no multimap M <sub>B</sub> na chave b (j <sub>B</sub> )
para cada linha a na tabela A:
  para cada linha b no multimap M <sub>B</sub> na chave a (j <sub>A</sub> ):
    vamos c = a concatenação da linha ae linha b
    coloque a linha c na tabela C <p></p>
</pre> Caso de teste <p> Entrada </p><table><tbody><tr><td style="padding: 4px; margin: 5px;"><table style="border:none; border-collapse:collapse;"><tbody><tr><td style="border:none"> <i>A =</i> </td><td style="border:none"><table><tbody><tr><th style="padding: 4px; margin: 5px;"> Era </th><th style="padding: 4px; margin: 5px;"> Nome </th></tr><tr><td style="padding: 4px; margin: 5px;"> 27 </td><td style="padding: 4px; margin: 5px;"> Jonas </td></tr><tr><td style="padding: 4px; margin: 5px;"> 18 </td><td style="padding: 4px; margin: 5px;"> Alan </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> Glória </td></tr><tr><td style="padding: 4px; margin: 5px;"> 18 </td><td style="padding: 4px; margin: 5px;"> Popeye </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> Alan </td></tr></tbody></table></td><td style="border:none; padding-left:1.5em;" rowspan="2"></td><td style="border:none"> <i>B =</i> </td><td style="border:none"><table><tbody><tr><th style="padding: 4px; margin: 5px;"> Personagem </th><th style="padding: 4px; margin: 5px;"> Nêmesis </th></tr><tr><td style="padding: 4px; margin: 5px;"> Jonas </td><td style="padding: 4px; margin: 5px;"> Baleias </td></tr><tr><td style="padding: 4px; margin: 5px;"> Jonas </td><td style="padding: 4px; margin: 5px;"> Aranhas </td></tr><tr><td style="padding: 4px; margin: 5px;"> Alan </td><td style="padding: 4px; margin: 5px;"> Fantasmas </td></tr><tr><td style="padding: 4px; margin: 5px;"> Alan </td><td style="padding: 4px; margin: 5px;"> Zumbis </td></tr><tr><td style="padding: 4px; margin: 5px;"> Glória </td><td style="padding: 4px; margin: 5px;"> Buffy </td></tr></tbody></table></td></tr><tr><td style="border:none"> <i>j <sub>A</sub> =</i> </td><td style="border:none"> <i><code>Name</code> (coluna 1)</i> </td><td style="border:none"> <i>j <sub>B</sub> =</i> </td><td style="border:none"> <i><code>Character</code> (isto é, coluna 0)</i> </td></tr></tbody></table></td><td style="padding: 4px; margin: 5px;"></td></tr></tbody></table><p> Saída </p><table><tbody><tr><th style="padding: 4px; margin: 5px;"> A.Age </th><th style="padding: 4px; margin: 5px;"> Um nome </th><th style="padding: 4px; margin: 5px;"> B.Caracter </th><th style="padding: 4px; margin: 5px;"> B.Nemesis </th></tr><tr><td style="padding: 4px; margin: 5px;"> 27 </td><td style="padding: 4px; margin: 5px;"> Jonas </td><td style="padding: 4px; margin: 5px;"> Jonas </td><td style="padding: 4px; margin: 5px;"> Baleias </td></tr><tr><td style="padding: 4px; margin: 5px;"> 27 </td><td style="padding: 4px; margin: 5px;"> Jonas </td><td style="padding: 4px; margin: 5px;"> Jonas </td><td style="padding: 4px; margin: 5px;"> Aranhas </td></tr><tr><td style="padding: 4px; margin: 5px;"> 18 </td><td style="padding: 4px; margin: 5px;"> Alan </td><td style="padding: 4px; margin: 5px;"> Alan </td><td style="padding: 4px; margin: 5px;"> Fantasmas </td></tr><tr><td style="padding: 4px; margin: 5px;"> 18 </td><td style="padding: 4px; margin: 5px;"> Alan </td><td style="padding: 4px; margin: 5px;"> Alan </td><td style="padding: 4px; margin: 5px;"> Zumbis </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> Glória </td><td style="padding: 4px; margin: 5px;"> Glória </td><td style="padding: 4px; margin: 5px;"> Buffy </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> Alan </td><td style="padding: 4px; margin: 5px;"> Alan </td><td style="padding: 4px; margin: 5px;"> Fantasmas </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> Alan </td><td style="padding: 4px; margin: 5px;"> Alan </td><td style="padding: 4px; margin: 5px;"> Zumbis </td></tr></tbody></table><p></p><p></p><p> A ordem das linhas na tabela de saída não é significativa. </p><p> Se você estiver usando matrizes numericamente indexadas para representar as linhas da tabela (em vez de se referir a colunas por nome), você poderia representar as linhas de saída na forma <code style="white-space:nowrap">[[27, &quot;Jonah&quot;], [&quot;Jonah&quot;, &quot;Whales&quot;]]</code> . </p><hr></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hashJoin</code> é uma função.
    testString: 'assert(typeof hashJoin === "function", "<code>hashJoin</code> is a function.");'
  - text: '<code>hashJoin([{ age: 27, name: &quot;Jonah&quot; }, { age: 18, name: &quot;Alan&quot; }, { age: 28, name: &quot;Glory&quot; }, { age: 18, name: &quot;Popeye&quot; }, { age: 28, name: &quot;Alan&quot; }], [{ character: &quot;Jonah&quot;, nemesis: &quot;Whales&quot; }, { character: &quot;Jonah&quot;, nemesis: &quot;Spiders&quot; }, { character: &quot;Alan&quot;, nemesis: &quot;Ghosts&quot; }, { character:&quot;Alan&quot;, nemesis: &quot;Zombies&quot; }, { character: &quot;Glory&quot;, nemesis: &quot;Buffy&quot; }, { character: &quot;Bob&quot;, nemesis: &quot;foo&quot; }])</code> deve retornar <code>[{&quot;A_age&quot;: 27,&quot;A_name&quot;: &quot;Jonah&quot;, &quot;B_character&quot;: &quot;Jonah&quot;, &quot;B_nemesis&quot;: &quot;Whales&quot;}, {&quot;A_age&quot;: 27,&quot;A_name&quot;: &quot;Jonah&quot;, &quot;B_character&quot;: &quot;Jonah&quot;, &quot;B_nemesis&quot;: &quot;Spiders&quot;}, {&quot;A_age&quot;: 18,&quot;A_name&quot;: &quot;Alan&quot;, &quot;B_character&quot;: &quot;Alan&quot;, &quot;B_nemesis&quot;: &quot;Ghosts&quot;}, {&quot;A_age&quot;: 18,&quot;A_name&quot;: &quot;Alan&quot;, &quot;B_character&quot;: &quot;Alan&quot;, &quot;B_nemesis&quot;: &quot;Zombies&quot;}, {&quot;A_age&quot;: 28,&quot;A_name&quot;: &quot;Glory&quot;, &quot;B_character&quot;: &quot;Glory&quot;, &quot;B_nemesis&quot;: &quot;Buffy&quot;}, {&quot;A_age&quot;: 28,&quot;A_name&quot;: &quot;Alan&quot;, &quot;B_character&quot;: &quot;Alan&quot;, &quot;B_nemesis&quot;: &quot;Ghosts&quot;}, {&quot;A_age&quot;: 28,&quot;A_name&quot;: &quot;Alan&quot;, &quot;B_character&quot;: &quot;Alan&quot;, &quot;B_nemesis&quot;: &quot;Zombies&quot;}]</code>'
    testString: 'assert.deepEqual(hashJoin(hash1, hash2), res, "<code>hashJoin([{ age: 27, name: "Jonah" }, { age: 18, name: "Alan" }, { age: 28, name: "Glory" }, { age: 18, name: "Popeye" }, { age: 28, name: "Alan" }], [{ character: "Jonah", nemesis: "Whales" }, { character: "Jonah", nemesis: "Spiders" }, { character: "Alan", nemesis: "Ghosts" }, { character:"Alan", nemesis: "Zombies" }, { character: "Glory", nemesis: "Buffy" }, { character: "Bob", nemesis: "foo" }])</code> should return <code>[{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Whales"}, {"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Spiders"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}, {"A_age": 28,"A_name": "Glory", "B_character": "Glory", "B_nemesis": "Buffy"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function hashJoin (hash1, hash2) {
  // Good luck!
  return [];
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
