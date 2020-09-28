---
id: 587d7fb9367417b2b2512c12
title: Chain Search Query Helpers to Narrow Search Results
localeTitle: Auxiliares de consulta de pesquisa em cadeia para restringir os resultados da pesquisa
challengeType: 2
---

## Description
<section id='description'> 
Se você não passar o retorno de chamada como o último argumento para Model.find () (ou para os outros métodos de pesquisa), a consulta não será executada. Você pode armazenar a consulta em uma variável para uso posterior. Esse tipo de objeto permite que você crie uma consulta usando a sintaxe de encadeamento. A pesquisa real do banco de dados é executada quando você encadeia o método .exec (). Passe seu retorno de chamada para este último método. Existem muitos helpers de consulta, aqui usaremos os mais "famosos". 
Encontre pessoas que gostam de "burrito". Ordena-os pelo nome, limita os resultados a dois documentos e oculta a idade. Cadeia .find (), .sort (), .limit (), .select () e, em seguida, .exec (). Passe o retorno de chamada concluído (err, data) para exec (). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Encadeamento de helpers de consulta deve ser bem-sucedido
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/query-tools'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''Pablo'', age: 26, favoriteFoods: [''burrito'', ''hot-dog'']}, {name: ''Bob'', age: 23, favoriteFoods: [''pizza'', ''nachos'']}, {name: ''Ashley'', age: 32, favoriteFoods: [''steak'', ''burrito'']}, {name: ''Mario'', age: 51, favoriteFoods: [''burrito'', ''prosciutto'']} ]) }).then(data => { assert.isArray(data, ''the response should be an Array''); assert.equal(data.length, 2, ''the data array length is not what expected''); assert.notProperty(data[0], ''age'', ''The returned first item has too many properties''); assert.equal(data[0].name, ''Ashley'', ''The returned first item name is not what expected''); assert.notProperty(data[1], ''age'', ''The returned second item has too many properties''); assert.equal(data[1].name, ''Mario'', ''The returned second item name is not what expected'');}, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
