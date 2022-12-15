---
id: 58a25bcff9fc0f352b528e7d
title: Fazer o hash e comparar senhas de modo assíncrono
challengeType: 2
forumTopicId: 301578
dashedName: hash-and-compare-passwords-asynchronously
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Como o hashing é projetado para ser computacionalmente intensivo, é recomendável fazê-lo de maneira assíncrona em seu servidor para evitar o bloqueio de conexões de entrada enquanto você faz o hash. Tudo o que você precisa fazer para fazer o hash de uma senha de modo assíncrona é a chamada

```js
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
});
```

# --instructions--

Adicione esta função de hashing ao seu servidor (nós já definimos as variáveis usadas na função para você usar) e registramos no console para você ver! Neste momento, você normalmente salvaria o hash no seu banco de dados.

Agora, quando você precisar descobrir se uma nova entrada é a mesma que o hash, você usaria a função de comparação.

```js
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
});
```

Adicione isso à sua função de hash existente (já que você precisa esperar que o hash termine antes de chamar a função de comparação) depois de registrar o hash completo e registra 'res' para o console dentro da comparação. Você deve ver um hash no console e a palavra 'true' é impressa! Se você mudar 'myPlaintextPassword' na função de comparação para 'qualquerOutraSenha', então ela deve dizer false.

```js
bcrypt.hash('passw0rd!', 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    console.log(res); //true
  });
});

```

Envie sua página quando você achar que ela está certa.

# --hints--

O hash assíncrono deve ser gerado e comparado corretamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi,
        'You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback'
      );
      assert.match(
        data,
        /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi,
        'Nested within the hash function should be the compare function comparing myPlaintextPassword to hash'
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
