---
id: 5e601c775ac9d0ecd8b94aff
title: Jogo multijogador seguro em tempo real
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

Desenvolva um jogo multijogador 2D em tempo real usando a API do Canvas do HTML e o Socket.io que seja funcionalmente similar a este: <a href="https://secure-real-time-multiplayer-game.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://secure-real-time-multiplayer-game.freecodecamp.rocks/</a>. Trabalhar nesse projeto vai fazer com que você escreva seu código usando um dos seguintes métodos:

-   Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/" target="_blank" rel="noopener noreferrer nofollow">este repositório do GitHub</a> e complete o projeto localmente.
-   Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game" target="_blank" rel="noopener noreferrer nofollow">nosso projeto inicial do Replit</a> para completar o projeto.
-   Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Se você usa o Replit, siga estas etapas para configurar o projeto:

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para a solução no campo Solution Link. Como opção, envie também um link para o código-fonte do projeto no campo GitHub Link.

# --instructions--

Crie um jogo multijogador seguro no qual cada jogador pode mover seu avatar, há pelo menos um item colecionável e a classificação dos jogadores é calculada com base na pontuação de cada um.

Para obter detalhes, consulte os testes abaixo.

Certifique-se de que o jogo é seguro! Incluir estas medidas de segurança:

- O client não deve ser capaz de adivinhar/descobrir o tipo de MIME
- Evitar ataques XSS
- Não faça o cache de nada que seja do site da web no client
- Os cabeçalhos dizem que o site é alimentado por `PHP 7.4.3`

**Observação**: `helmet@^3.21.3` é necessário para as histórias de usuários. Isto significa que você precisará usar a versão anterior da documentação do Helmet, para obter informações sobre como obter as histórias de usuários.

# --hints--

Você pode fornecer seu próprio projeto, não o exemplo de URL.

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Vários jogadores podem se conectar a um servidor e jogar.

```js

```

Cada jogador tem um avatar.

```js

```

Cada jogador é representado por um objeto criado pela classe `Player` em `Player.mjs`.

```js

```

No mínimo, cada objeto do jogador deve conter um `id` único, um `score` e coordenadas `x` e `y` representando a posição atual do jogador.

```js

```

O jogo tem pelo menos um tipo de item colecionável. Complete a classe `Collectible` em `Collectible.mjs` para implementar isso.

```js

```

No mínimo, cada objeto de item colecionável criado pela classe `Collectible` deve conter um `id` único, um `value` e coordenadas `x` e `y` representando a posição atual do item.

```js

```

Os jogadores podem usar as teclas WASD e/ou as setas do teclado para mover seu avatar. Complete o método `movePlayer` em `Player.mjs` para implementar isso.

```js

```

O método `movePlayer` deve aceitar dois argumentos: uma string para "up", "down", "left" ou "right" e um número para a quantidade de pixels que a posição do jogador deve mudar. `movePlayer` deve ajustar as coordenadas `x` e `y` do objeto do jogador de onde ele é chamado.

```js

```

A pontuação do jogador deve ser usada para calcular a classificação entre os outros jogadores. Complete o método `calculateRank` em `Player` para implementar isso.

```js

```

O método `calculateRank` deve aceitar um array de objetos representando todos os jogadores conectados e retornar a string `Rank: currentRanking/totalPlayers`. Por exemplo, em um jogo com dois jogadores, se o jogador A tiver uma pontuação de 3 e o jogador B tiver uma pontuação de 5, `calculateRank` para o Jogador A deve retornar `Rank: 2/2`.

```js

```

Os jogadores podem colidir com um item colecionável. Complete o método `collision` em `Player.mjs` para implementar isso.

```js

```

O método `collision` deve aceitar o objeto de um item colecionável como um argumento. Se o avatar do jogador cruzar com o item, o método `collision` deve retornar `true`.

```js

```

Todos os jogadores são mantidos em sincronia.

```js

```

Os jogadores podem se desconectar do jogo a qualquer momento.

```js

```

Impedir que o client tente adivinhar/detectar o tipo MIME.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

Evitar ataques de cross-site scripting (XSS).

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

Nada do site está armazenado em cache no client.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['surrogate-control'], 'no-store');
  assert.equal(
    parsed.headers['cache-control'],
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  assert.equal(parsed.headers['pragma'], 'no-cache');
  assert.equal(parsed.headers['expires'], '0');
};
```

Os cabeçalhos dizem que o site usa "PHP 7.4.3", mesmo que não seja verdade (como uma medida de segurança).

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-powered-by'], 'PHP 7.4.3');
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
