---
id: 58a25bcef9fc0f352b528e7c
title: Compreender hashes do BCrypt
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

Para os próximos desafios, você estará trabalhando com um novo projeto inicial diferente do anterior. Você pode encontrar o novo projeto inicial em <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou cloná-lo no <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Os hashes do BCrypt são muito seguros. Um hash é basicamente uma impressão digital do dado original, sempre exclusivo. Isso é realizado alimentando os dados originais em um algoritmo e retornando um resultado de comprimento fixo. Para complicar ainda mais esse processo e torná-lo mais seguro, você também pode usar *salt* seu hash. O salting do seu hash envolve a adição de dados aleatórios aos dados originais antes do processo de hashing, o que torna ainda mais difícil quebrar o hash.

Os hashes do BCrypt terão sempre essa aparência: `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm`, o que mostra uma estrutura. O primeiro dados`$2a` está definindo que tipo de algoritmo de hash foi usado. A próxima porção `$13` define o *custo*. Custo tem a ver com a força necessária para calcular o hash. Está em escala logarítmica de 2^custo e determina quantas vezes os dados são colocados através do algoritmo de hash. Por exemplo, com um custo de 10, você consegue o hash de 10 senhas por segundo em um computador médio. No entanto, a um custo de 15, leva 3 segundos por hash... e, chegando um pouco mais longe, a um custo de 31 dias, levaria vários dias para completar um hash. Neste momento, considera-se muito seguro um custo de 12. A última parte do seu hash `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm`, parece com uma linha grande de números, pontos e letras, mas, na verdade, são duas informações separadas. Os primeiros 22 caracteres são o salt em texto simples. O resto é a senha com hash!

# --instructions--

Adicione todo o código para estas aulas no arquivo `server.js` entre o código que fornecemos para você começar. Não altere nem exclua o código que adicionamos para você.

O BCrypt já foi adicionado como uma dependência, então solicite-o como `bcrypt` em seu servidor.

Envie sua página quando você achar que ela está certa.

# --hints--

O BCrypt deve ser uma dependência.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'bcrypt',
        'Your project should list "bcrypt" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

O BCrypt deve ser devidamente solicitado.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /bcrypt.*=.*require.*('|")bcrypt('|")/gi,
        'You should correctly require and instantiate socket.io as io.'
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
