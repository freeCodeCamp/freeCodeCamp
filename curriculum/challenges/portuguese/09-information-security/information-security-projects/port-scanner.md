---
id: 5e46f979ac417301a38fb932
title: Scanner de porta
challengeType: 10
forumTopicId: 462372
helpCategory: Python
dashedName: port-scanner
---

# --description--

Você <a href="https://replit.com/github/freeCodeCamp/boilerplate-port-scanner" target="_blank" rel="noopener noreferrer nofollow">trabalhará neste projeto com nosso código inicial do Replit</a>.

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.


Ainda estamos desenvolvendo a parte instrucional interativa do currículo Python. Por enquanto, aqui estão alguns vídeos no canal do freeCodeCamp.org do YouTube que ensinarão tudo o que você precisa saber para completar este projeto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Curso de Python em vídeo para todos</a> (14 horas)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Aprenda muito sobre o básico em Python</a> (4 horas)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Curso de Python intermediário</a> (6 horas)

# --instructions--

Crie um scanner de portas usando Python.

No arquivo `port_scanner.py`, crie uma função chamada `get_open_ports` que recebe um argumento `target` e um argumento `port_range`. `target` pode ser um URL ou um endereço IP. `port_range` é uma lista de dois números indicando o primeiro e último números do intervalo de portas a serem verificadas.

Aqui estão exemplos de como a função pode ser chamada:

```py
get_open_ports("209.216.230.240", [440, 445])
get_open_ports("www.stackoverflow.com", [79, 82])
```

A função deve retornar uma lista de portas abertas no intervalo informado.

A função `get_open_ports` também deve receber um terceiro argumento opcional `True` para indicar o modo "Verbose". Se definido como True, a função deve retornar uma string descritiva ao invés de uma lista de portas.

Aqui está o formato da string que deve ser retornada no modo Verbose (o texto dentro de `{}` indica a informação que deve aparecer):

```bash
Open ports for {URL} ({IP address})
PORT     SERVICE
{port}   {service name}
{port}   {service name}
```

Você pode usar o dicionário em `common_ports.py` para obter o nome de serviço correto para cada porta.

Por exemplo, se a função é chamada assim:

```py
port_scanner.get_open_ports("scanme.nmap.org", [20, 80], True)
```

Ela deve devolver o seguinte:

```bash
Open ports for scanme.nmap.org (45.33.32.156)
PORT     SERVICE
22       ssh
80       http
```

Certifique-se de incluir o espaçamento adequado e caracteres de nova linha.

Se o URL passado para a função `get_open_ports` for inválido, a função deve retornar a string: "Error: Invalid hostname".

Se o endereço IP passado para a função `get_open_ports` for inválido, a função deve retornar a string: "Error: Invalid IP address".

## Desenvolvimento

Escreva seu código em `port_scanner.py`. Para o desenvolvimento, você pode usar `main.py` para testar seu código. Clique no botão "Run" e `main.py` será executado.

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
