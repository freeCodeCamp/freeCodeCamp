---
id: 58a25c98f9fc0f352b528e7f
title: Fazer o hashing de senhas
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

Voltando à seção de segurança da informação, você poderá ver que armazenar senhas em texto simples (plain text) *nunca* é uma boa ideia. Agora é a hora de implementar o BCrypt para resolver este problema.

`bcrypt@~5.0.0` já foi adicionado como dependência, então solicite-o no servidor. Você precisará lidar com hashing em 2 áreas principais: onde você trata do registro/salvamento de uma nova conta e onde você verifica se uma senha está correta no login.

Currently on your registration route, you insert a user's plaintext password into the database like so: `password: req.body.password`. Hash the passwords instead by adding the following before your database logic: `const hash = bcrypt.hashSync(req.body.password, 12);`, and replacing the `req.body.password` in the database saving with just `password: hash`.

On your authentication strategy, you check for the following in your code before completing the process: `if (password !== user.password) return done(null, false);`. Depois de fazer as alterações acima, `user.password` passa a ser um hash. Antes de fazer uma alteração no código existente, observe como a instrução está verificando se a senha **não** é igual. Se não for, deve retornar não autenticada. With this in mind, change that code to look as follows to properly check the password entered against the hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

That is all it takes to implement one of the most important security features when you have to store passwords.

Envie sua página quando você achar que ela está certa. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#hashing-your-passwords-1" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

O BCrypt deve ser uma dependência.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json()
  assert.property(
    packJson.dependencies,
    'bcrypt',
    'Your project should list "bcrypt" as a dependency'
  );
}
```

O BCrypt deverá ser corretamente solicitado e implementado.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')bcrypt\1/gi,
    'You should have required bcrypt'
  );
  assert.match(
    data,
    /bcrypt.hashSync/gi,
    'You should use hash the password in the registration'
  );
  assert.match(
    data,
    /bcrypt.compareSync/gi,
    'You should compare the password to the hash in your strategy'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
