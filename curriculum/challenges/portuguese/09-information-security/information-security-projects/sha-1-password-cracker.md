---
id: 5e46f983ac417301a38fb933
title: Quebrador de senhas SHA-1
challengeType: 10
forumTopicId: 462374
helpCategory: Python
dashedName: sha-1-password-cracker
---

# --description--

Você <a href="https://replit.com/github/freeCodeCamp/boilerplate-SHA-1-password-cracker" target="_blank" rel="noopener noreferrer nofollow">trabalhará neste projeto com nosso código inicial do Replit</a>.

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.


Ainda estamos desenvolvendo a parte instrucional interativa do currículo Python. Por enquanto, aqui estão alguns vídeos no canal do freeCodeCamp.org do YouTube que ensinarão tudo o que você precisa saber para completar este projeto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Curso de Python em vídeo para todos</a> (14 horas)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Aprenda muito sobre o básico em Python</a> (4 horas)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Curso de Python intermediário</a> (6 horas)

# --instructions--

As senhas nunca devem ser armazenadas em texto simples. Elas devem ser armazenadas como hashes, para o caso de a lista de senhas ser descoberta. No entanto, nem todas as hashes são criadas da mesma forma.

Para este projeto, você vai aprender sobre a importância de boa segurança criando um cracker de senha para descobrir senhas que passaram por hashing usando SHA-1.

Crie uma função que receba um hash SHA-1 de uma senha e retorne a senha se for uma das 10.000 senhas mais usadas. Se o hash SHA-1 NÃO for o de uma senha no banco de dados, retorne "PASSWORD NOT IN DATABASE".

A função deve fazer o hash cada senha de `top-10000-passwords.txt` e compará-la ao hash passado pela função.

A função deve receber um segundo argumento opcional chamado `use_salts`. Se definido como True, cada string de salt do arquivo `known-salts.txt` deve ser anexada E pré-incluída em cada senha de `top-10000-passwords.txt` antes de fazer o hashing e antes de compará-la com o hash passado pela função.

Aqui estão algumas senhas com hash para testar a função:

- `b305921a3723cd5d70a375cd21a61e60aabb84ec` deve retornar "sammy123"
- `c7ab388a5ebefbf4d550652f1eb4d833e5316e3e` deve retornar "abacab"
- `5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8` deve retornar "password"

Aqui estão algumas senhas com hash para testar a função quando `use_salts` for definido como `True`:

- `53d8b3dc9d39f0184144674e310185e41a87ffd5` deve retornar "superman"
- `da5a4e8cf89539e66097acd2f8af128acae2f8ae` deve retornar "q1w2e3r4t5"
- `ea3f62d498e3b98557f9f9cd0d905028b3b019e1` deve retornar "bubbles1"

A biblioteca `hashlib` foi importada para você. Sugerimos que você a use no seu código. <a href="https://docs.python.org/3/library/hashlib.html" target="_blank" rel="noopener noreferrer nofollow">Siaba mais sobre a "hashlib" aqui</a>.

## Desenvolvimento

Escreva seu código em `password_cracker.py`. Para o desenvolvimento, você pode usar `main.py` para testar seu código. Clique no botão "Run" e `main.py` será executado.

## Testes

Os testes unitários para este projeto estão em `test_module.py`. Importamos os testes de `test_module.py` em `main.py` para a sua conveniência. Os testes serão executados automaticamente sempre que você clicar no botão "Run".

## Envio

Copie o URL do seu projeto e envie-o para o freeCodeCamp.

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
