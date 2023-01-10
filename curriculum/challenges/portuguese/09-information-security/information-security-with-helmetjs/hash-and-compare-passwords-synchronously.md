---
id: 58a25bcff9fc0f352b528e7e
title: Fazer o hash e comparar senhas de modo síncrono
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Fazer o hashing de forma síncrona é muito fácil de fazer, mas pode causar lag ao usar o lado do servidor com um alto custo ou com o hashing sendo feito com muita frequência. Com este método, o hashing é tão fácil quanto fazer chamadas

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

Adicione este método de hashing ao seu código e, em seguida, registre o resultado no console. Mais uma vez, as variáveis usadas já estão definidas no servidor para que você não precise ajustá-las. Você pode perceber que, apesar de estar fazendo o hashing da mesma senha que na função async, o resultado no console é diferente - isso é devido ao salt gerado aleatoriamente em cada vez, conforme vimos em função dos primeiros 22 caracteres na terceira sequência de hash. Agora, para comparar uma entrada de senha com o novo hash de sincronização, você usaria o método compareSync:

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

com o resultado sendo um booleano true ou false.

# --instructions--

Adicione a função e registre o resultado no console para vê-la funcionando.

Envie sua página quando você achar que ela está certa.

# --hints--

O hash de sincronização deve ser gerado e comparado corretamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi,
        'You should call bcrypt.hashSync on myPlaintextPassword with saltRounds'
      );
      assert.match(
        data,
        /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi,
        'You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
