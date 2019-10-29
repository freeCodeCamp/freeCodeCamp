---
id: 587d7fb8367417b2b2512c11
title: Delete Many Documents with model.remove()
localeTitle: Excluir muitos documentos com model.remove ()
challengeType: 2
---

## Description
<section id='description'> 
Model.remove () é útil para excluir todos os documentos que correspondem a determinados critérios. Exclua todas as pessoas cujo nome é "Mary", usando Model.remove (). Passe-o para um documento de consulta com o conjunto de campos “nome” e, claro, um retorno de chamada. 
Nota: Model.remove () não retorna o documento excluído, mas um objeto JSON contendo o resultado da operação e o número de itens afetados. Não esqueça de passá-lo para o callback done (), já que o usamos em testes. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A exclusão de muitos itens de uma só vez deve ser bem-sucedida
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/remove-many-people'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''Mary'', age: 16, favoriteFoods: [''lollipop'']}, {name: ''Mary'', age: 21, favoriteFoods: [''steak'']}])}).then(data => { assert.isTrue(!!data.ok, ''The mongo stats are not what expected''); assert.equal(data.n, 2, ''The number of items affected is not what expected''); assert.equal(data.count, 0, ''the db items count is not what expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
