---
id: 587d7fb6367417b2b2512c09
title: Create and Save a Record of a Model
localeTitle: Criar e salvar um registro de um modelo
challengeType: 2
---

## Description
<section id='description'> 
Crie uma instância de documento usando o construtor Person que você construiu antes. Passe para o construtor um objeto com os campos name, age e favoriteFoods. Seus tipos devem estar em conformidade com os do esquema pessoal. Em seguida, chame o método document.save () na instância do documento retornado. Passe para ele um retorno de chamada usando a convenção Node. Esse é um padrão comum, todos os métodos CRUD a seguir assumem uma função de retorno de chamada como o último argumento. 
<code>/* Example */</code> 
<code>// ...</code> 
<code>person.save(function(err, data) {</code> 
<code>// ...do your stuff here...</code> 
<code>});</code> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Criar e salvar um item do banco de dados deve ser bem-sucedido
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/create-and-save-person'').then(data => { assert.isString(data.name, ''"item.name" should be a String''); assert.isNumber(data.age, ''28'', ''"item.age" should be a Number''); assert.isArray(data.favoriteFoods, ''"item.favoriteFoods" should be an Array''); assert.equal(data.__v, 0, ''The db item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
