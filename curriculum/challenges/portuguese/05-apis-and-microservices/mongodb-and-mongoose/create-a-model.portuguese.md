---
id: 587d7fb6367417b2b2512c07
title: Create a Model
localeTitle: Crie um modelo
challengeType: 2
---

## Description
<section id='description'> 
Primeiro de tudo, precisamos de um esquema. Cada esquema mapeia para uma coleção do MongoDB. Ele define a forma dos documentos dentro dessa coleção. 
Esquemas são blocos de construção para modelos. Eles podem ser aninhados para criar modelos complexos, mas, nesse caso, manteremos as coisas simples. 
Um modelo permite criar instâncias de seus objetos, chamados documentos. 
Crie uma pessoa com este protótipo: 
<code>- Person Prototype -</code> 
<code>--------------------</code> 
<code>name : string [required]</code> 
<code>age : number</code> 
<code>favoriteFoods : array of strings (*)</code> 
Use os tipos básicos de esquema do mangusto. Se desejar, você também pode adicionar mais 
campos, usar validadores simples, como obrigatório ou exclusivo, 
e definir valores padrão. Veja o <a href='http://mongoosejs.com/docs/guide.html'>mangusto docs</a> . 
[C] RUD Parte I - CREATE 
Nota: Glitch é um servidor real, e em servidores reais as interações com o banco de dados acontecem nas funções do manipulador. Essas funções são executadas quando algum evento acontece (por exemplo, alguém atinge um endpoint em sua API). Vamos seguir a mesma abordagem nesses exercícios. A função done () é um retorno de chamada que nos informa que podemos prosseguir após concluir uma operação assíncrona, como inserir, pesquisar, atualizar ou excluir. Está seguindo a convenção do Nó e deve ser chamado como concluído (nulo, dados) em sucesso, ou concluído (err) em erro. 
Aviso - Ao interagir com serviços remotos, podem ocorrer erros! 
<code>/* Example */</code> 
<code>var someFunc = function(done) {</code> 
<code>//... do something (risky) ...</code> 
<code>if(error) return done(error);</code> 
<code>done(null, result);</code> 
<code>};</code> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Criar uma instância de um esquema de mongoose deve ser bem-sucedido
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/mongoose-model'', {name: ''Mike'', age: 28, favoriteFoods: [''pizza'', ''cheese'']}).then(data => { assert.equal(data.name, ''Mike'', ''"model.name" is not what expected''); assert.equal(data.age, ''28'', ''"model.age" is not what expected''); assert.isArray(data.favoriteFoods, ''"model.favoriteFoods" is not an Array''); assert.include(data.favoriteFoods, ''pizza'', ''"model.favoriteFoods" does not include the expected items''); assert.include(data.favoriteFoods, ''cheese'', ''"model.favoriteFoods" does not include the expected items''); }, xhr => { throw new Error(xhr.responseText); })'

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
