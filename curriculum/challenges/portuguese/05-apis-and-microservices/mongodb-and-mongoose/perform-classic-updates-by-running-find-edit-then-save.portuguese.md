---
id: 587d7fb8367417b2b2512c0e
title: 'Perform Classic Updates by Running Find, Edit, then Save'
localeTitle: 'Executar atualizações clássicas executando Localizar, editar e salvar'
challengeType: 2
---

## Description
<section id='description'> 
Nos bons e velhos tempos isso era o que você precisava fazer se quisesse editar um documento e ser capaz de usá-lo de alguma forma, por exemplo, enviando-o de volta em uma resposta do servidor. O Mongoose possui um método de atualização dedicado: Model.update (). Ele é vinculado ao driver mongo de baixo nível. Ele pode editar em massa muitos documentos que atendem a determinados critérios, mas não envia de volta o documento atualizado, apenas uma mensagem de 'status'. Além disso, dificulta a validação de modelos, porque apenas chama diretamente o driver mongo. 
Encontre uma pessoa por _id (use qualquer um dos métodos acima) com o parâmetro personId como chave de busca. Adicione "hamburger" à lista de seus favoriteFoods (você pode usar Array.push ()). Então - dentro do callback de busca - salve () a Pessoa atualizada. 
[*] Dica: Isso pode ser complicado se no seu Schema você declarar favoriteFoods como Array, sem especificar o tipo (ie [String]). Em que casefavoriteFoods padrão para o tipo misto, e você tem que marcá-lo manualmente como editado usando document.markModified ('edited-field'). (http://mongoosejs.com/docs/schematypes.html - #Mixed) 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Localizar-editar-atualizar um item deve ser bem-sucedido
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-edit-save'', {name:''Poldo'', age: 40, favoriteFoods:[''spaghetti'']}).then(data => { assert.equal(data.name, ''Poldo'', ''item.name is not what expected''); assert.equal(data.age, 40, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''spaghetti'', ''hamburger''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 1, ''The item should be previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
