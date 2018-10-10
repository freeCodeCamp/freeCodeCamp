---
id: 58a25bcff9fc0f352b528e7d
title: Hash and Compare Passwords Asynchronously
challengeType: 2
videoUrl: ''
localeTitle: Hash e compare senhas de forma assíncrona
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/">GitHub</a> . Como o hashing é projetado para ser computacionalmente intensivo, recomenda-se fazê-lo de forma assíncrona em seu servidor, a fim de evitar o bloqueio de conexões de entrada enquanto você faz o hash. Tudo que você precisa fazer para criar um hash com uma senha assíncrona é chamar <code>bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) =&gt; { /*Store hash in your db*/ });</code> <hr> Adicione esta função de hash ao seu servidor (nós já definimos as variáveis ​​usadas na função para você usar) e registre-a no console para você ver! Neste ponto, você normalmente salvaria o hash em seu banco de dados. Agora, quando você precisa descobrir se uma nova entrada é os mesmos dados que o hash, basta usar a função de comparação <code>bcrypt.compare(myPlaintextPassword, hash, (err, res) =&gt; { /*res == true or false*/ });</code> . Adicione isso à sua função de hash existente (desde que você precise aguardar o hash concluir antes de chamar a função de comparação) depois de registrar o hash e log &#39;res&#39; completos no console dentro da comparação. Você deve ver no console um hash, então &#39;true&#39; é impresso! Se você alterar &#39;myPlaintextPassword&#39; na função de comparação para &#39;someOtherPlaintextPassword&#39;, deverá dizer false. <pre> bcrypt.hash (&#39;passw0rd!&#39;, 13, (err, hash) =&gt; {
  console.log (hash); //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare (&#39;passw0rd!&#39;, hash, (err, res) =&gt; {
      console.log (res); //verdade
  });
}); </pre> Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Hash assíncrono gerado e comparado corretamente
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi, "You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback"); assert.match(data, /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi, "Nested within the hash function should be the compare function comparing myPlaintextPassword to hash"); }, xhr => { throw new Error(xhr.statusText); })'

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
