---
id: 58a25c98f9fc0f352b528e7f
title: Hashing Your Passwords
challengeType: 2
videoUrl: ''
localeTitle: Hashing suas senhas
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Voltando à seção de segurança da informação, você pode se lembrar que o armazenamento de senhas em texto puro <em>nunca</em> é bom. Agora é hora de implementar o BCrypt para resolver esse problema. <hr> Adicione o BCrypt como uma dependência e exija no seu servidor. Você precisará manipular o hash em duas áreas principais: onde você lida com o registro / salvamento de uma nova conta e quando verificar se a senha está correta no login. Atualmente em nossa rota de registro, você insere a senha de um usuário no banco de dados, como segue: <code>password: req.body.password</code> . Uma maneira fácil de implementar salvar um hash é adicionar o seguinte antes da lógica do banco de dados <code>var hash = bcrypt.hashSync(req.body.password, 12);</code> e substituindo o <code>req.body.password</code> no banco de dados salvando com apenas <code>password: hash</code> . Finalmente, em nossa estratégia de autenticação, verificamos o seguinte em nosso código antes de concluir o processo: <code>if (password !== user.password) { return done(null, false); }</code> . Depois de fazer as alterações anteriores, agora <code>user.password</code> é um hash. Antes de fazer uma alteração no código existente, observe como a instrução está verificando se a senha NÃO é igual e, em seguida, retorne não autenticada. Com isso em mente, o seu código poderia ser o seguinte para verificar corretamente a senha inserida contra o hash: <code>if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }</code> Isso é tudo o que é preciso para implementar um dos recursos de segurança mais importantes quando você precisa armazenar senhas! Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: BCrypt é uma dependência
    testString: ' getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "bcrypt", "Your project should list "bcrypt" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: BCrypt corretamente exigido e implementado
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")bcrypt("|")/gi, "You should have required bcrypt"); assert.match(data, /bcrypt.hashSync/gi, "You should use hash the password in the registration"); assert.match(data, /bcrypt.compareSync/gi, "You should compare the password to the hash in your strategy"); }, xhr => { throw new Error(xhr.statusText); })'

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
