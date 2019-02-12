---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
localeTitle: Executar novas atualizações em um documento usando model.findOneAndUpdate ()
challengeType: 2
---

## Description
<section id='description'> 
Versões recentes do mongoose possuem métodos para simplificar a atualização de documentos. Alguns recursos mais avançados (isto é, ganchos de pré / pós, validação) se comportam de maneira diferente com essa abordagem, portanto, o método Clássico ainda é útil em muitas situações. findByIdAndUpdate () pode ser usado ao pesquisar por Id. 
Encontre uma pessoa por Nome e defina sua idade como 20. Use o parâmetro de função personName como chave de pesquisa. 
Dica: queremos que você devolva o documento atualizado. Para fazer isso, você precisa passar o documento de opções {new: true} como o terceiro argumento para findOneAndUpdate (). Por padrão, esses métodos retornam o objeto não modificado. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: findOneAndUpdate um item deve ter sucesso
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-update'', {name:''Dorian Gray'', age: 35, favoriteFoods:[''unknown'']}).then(data => { assert.equal(data.name, ''Dorian Gray'', ''item.name is not what expected''); assert.equal(data.age, 20, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''unknown''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''findOneAndUpdate does not increment version by design !!!''); }, xhr => { throw new Error(xhr.responseText); })'

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
