---
id: 58a25bcff9fc0f352b528e7e
title: Hash and Compare Passwords Synchronously
challengeType: 2
videoUrl: ''
localeTitle: Hash e Compare Senhas Sinteticamente
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/">GitHub</a> . Hashing de forma síncrona é tão fácil de fazer, mas pode causar atrasos se for usado do lado do servidor com um alto custo ou com hash feito com muita frequência. Hashing com este método é tão fácil quanto chamar <code>var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);</code> <hr> Adicione esse método de hash ao seu código e, em seguida, registre o resultado no console. Novamente, as variáveis ​​usadas já estão definidas no servidor, então você não precisará ajustá-las. Você pode notar que mesmo que você esteja processando a mesma senha que na função assíncrona, o resultado no console é diferente - isso se deve ao fato de o sal ser gerado aleatoriamente conforme visto pelos 22 primeiros caracteres da terceira string do hash. . Agora, para comparar uma entrada de senha com o novo hash de sincronização, você usaria o método compareSync: <code>var result = bcrypt.compareSync(myPlaintextPassword, hash);</code> com o resultado sendo um booleano verdadeiro ou falso. Adicione esta função e registre no console o resultado para vê-lo funcionando. Envie sua página quando achar que está certo. Se você encontrou erros durante esses desafios, pode dar uma olhada no exemplo de código concluído <a href="https://gist.github.com/JosephLivengood/9a2698fb63e42d9d8b4b84235c08b4c4">aqui</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sincronizar hash gerado e comparado corretamente
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi, "You should call bcrypt.hashSync on myPlaintextPassword with saltRounds"); assert.match(data, /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi, "You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line"); }, xhr => { throw new Error(xhr.statusText); })'

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
