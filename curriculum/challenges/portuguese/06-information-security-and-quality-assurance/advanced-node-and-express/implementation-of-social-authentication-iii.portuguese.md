---
id: 589a8eb3f9fc0f352b528e72
title: Implementation of Social Authentication III
challengeType: 2
videoUrl: ''
localeTitle: Implementação da Autenticação Social III
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-socialauth/">GitHub</a> . A parte final da estratégia é manipular o perfil retornado do GitHub. Precisamos carregar o objeto de banco de dados de usuários, se existir, ou criar um, se não existir, e preencher os campos do perfil e, em seguida, retornar o objeto do usuário. O GitHub nos fornece um <em>ID</em> exclusivo dentro de cada perfil, que podemos usar para pesquisar com o serializador do usuário (já implementado). Abaixo está um exemplo de implementação que você pode usar em seu projeto - ele vai dentro da função que é o segundo argumento para a nova estratégia, logo abaixo do <code>console.log(profile);</code> atualmente é: <pre> db.collection (&#39;socialusers&#39;). findAndModify (
    {id: profile.id},
    {}
    {$ setOnInsert: {
        id: profile.id,
        nome: profile.displayName || &#39;John Doe&#39;,
        foto: profile.photos [0] .value || &quot;
        email: profile.emails [0] .value || &#39;Nenhum email público&#39;,
        created_on: new Date (),
        provedor: profile.provider || &quot;
    }, $ set: {
        last_login: new Date ()
    }, $ inc: {
        login_count: 1
    }}
    {upsert: true, new: true},
    (err, doc) =&gt; {
        return cb (null, doc.value);
    }
); </pre> Com um findAndModify, ele permite que você procure por um objeto e o atualize, além de fazer backup do objeto se ele não existir e receber o novo objeto de volta a cada vez em nossa função de retorno de chamada. Neste exemplo, sempre definimos o last_login como agora, sempre incrementamos o login_count por 1, e somente quando inserimos um novo objeto (novo usuário) preenchemos a maioria dos campos. Algo para notar também é o uso de valores padrão. Às vezes, um perfil retornado não terá todas as informações preenchidas ou será escolhido pelo usuário para permanecer privado; Portanto, neste caso, temos que lidar com isso para evitar um erro. Você deve conseguir acessar seu aplicativo agora - experimente! Envie sua página quando achar que está certo. Se você estiver com erros, você pode conferir um exemplo do código acabado deste mini-projeto <a href="https://glitch.com/#!/project/guttural-birch">aqui</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Configuração da estratégia do GitHub completa
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /GitHubStrategy[^]*db.collection/gi, "Strategy should use now use the database to search for the user"); assert.match(data, /GitHubStrategy[^]*socialusers/gi, "Strategy should use "socialusers" as db collection"); assert.match(data, /GitHubStrategy[^]*return cb/gi, "Strategy should return the callback function "cb""); }, xhr => { throw new Error(xhr.statusText); })'

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
