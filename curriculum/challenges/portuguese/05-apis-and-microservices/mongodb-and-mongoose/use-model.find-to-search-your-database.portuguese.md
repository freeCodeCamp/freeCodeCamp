---
id: 587d7fb7367417b2b2512c0b
title: Use model.find() to Search Your Database
localeTitle: Use model.find () para pesquisar seu banco de dados
challengeType: 2
---

## Description
<section id='description'> 
Encontre todas as pessoas que possuem um determinado nome, usando Model.find () -&gt; [Person] 
Em seu uso mais simples, Model.find () aceita um documento de consulta (um objeto JSON) como o primeiro argumento e, em seguida, um retorno de chamada. Ele retorna uma matriz de correspondências. Suporta uma gama extremamente ampla de opções de pesquisa. Verifique nos documentos. Use o argumento de função personName como chave de pesquisa. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Encontrar todos os itens correspondentes a um critério devem ser bem sucedidos
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-all-by-name'', {name: ''r@nd0mN4m3'', age: 24, favoriteFoods: [''pizza'']}).then(data => { assert.isArray(data, ''the response should be an Array'');  assert.equal(data[0].name, ''r@nd0mN4m3'', ''item.name is not what expected''); assert.equal(data[0].__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
