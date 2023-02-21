---
id: 5e46f8d6ac417301a38fb92d
title: Pedra, papel ou tesoura
challengeType: 10
forumTopicId: 462376
dashedName: rock-paper-scissors
---

# --description--

Neste desafio, você vai criar um programa para jogar Pedra, papel e tesoura. Um programa com decisões aleatórias tem uma taxa de vitória média de 50%. Para passar no desafio, seu programa vai enfrentar quatro robôs diferentes e deve vencer pelo menos 60% dos jogos contra cada um.

Você <a href="https://replit.com/github/freeCodeCamp/boilerplate-rock-paper-scissors" target="_blank" rel="noopener noreferrer nofollow">trabalhará neste projeto com nosso código inicial do Replit</a>.

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.

Ainda estamos desenvolvendo a parte instrucional interativa do currículo de aprendizagem de máquina. Por enquanto, você terá que usar outros recursos para aprender a vencer este desafio.

# --instructions--

No arquivo `RPS.py`, é fornecida uma função chamada `player`. A função recebe um argumento que é uma string descrevendo a última movimentação do oponente ("R", "P" ou "S"). A função deve retornar uma string representando o próximo movimento a ser jogado ("R", "P" ou "S").

Uma função player receberá uma string vazia como um argumento para o primeiro jogo em uma partida, já que não há nenhuma jogada anterior.

O arquivo `RPS.py` mostra uma função de exemplo que você precisará atualizar. A função de exemplo é definida com dois argumentos (`player(prev_play, opponent_history = [])`). A função nunca é chamada com um segundo argumento, então um deles é completamente opcional. A razão pela qual a função de exemplo contém um segundo argumento (`opponent_history = []`) é porque essa é a única maneira de salvar o estado entre as chamadas consecutivas da função `player`. Você só precisa do argumento `opponent_history` se você quiser manter o controle de opponent_history.

*Dica: para derrotar os quatro oponentes, seu programa pode precisar ter múltiplas estratégias que mudam dependendo das jogadas do adversário.*

## Desenvolvimento

Não modifique `RPS_game.py`. Escreva todo o seu código em `RPS.py`. Para o desenvolvimento, você pode usar `main.py` para testar seu código.

`main.py` importa a função do jogo e os bots de `RPS_game.py`.

Para testar seu código, jogue um jogo com a função `play`. A função `play` recebe quatro argumentos:

- dois jogadores para jogar um contra o outro (os jogadores são de fato funções)
- o número de jogos a serem jogados na partida
- um argumento opcional para ver um registro de cada jogo. Defina-o como `True` para ver estas mensagens.

```py
play(player1, player2, num_games[, verbose])
```

Por exemplo, aqui está como você chamaria a função se quisesse que `player` e `quincy` jogassem 1000 jogos um contra o outro e se você quisesse ver os resultados de cada jogo:

```py
play(player, quincy, 1000, verbose=True)
```

Clique no botão "Run" e `main.py` será executado.

## Testes

Os testes unitários para este projeto estão em `test_module.py`. Importamos os testes de `test_module.py` em `main.py` para a sua conveniência. Se você remover dos comentários a última linha de `main.py`, os testes serão executados automaticamente sempre que você pressionar o botão "Run".

## Envio

Copie o URL do seu projeto e envie-o abaixo.

# --hints--

Ele deve passar em todos os testes do Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
