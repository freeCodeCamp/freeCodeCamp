---
id: 5e444136903586ffb414c94d
title: Calculadora de tempo
challengeType: 10
forumTopicId: 462360
dashedName: time-calculator
---

# --description--

Você <a href="https://replit.com/github/freeCodeCamp/boilerplate-time-calculator" target="_blank" rel="noopener noreferrer nofollow">trabalhará neste projeto com nosso código inicial do Replit</a>.

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.

# --instructions--

Escreva uma função chamada `add_time`, que recebe dois parâmetros necessários e um parâmetro opcional:

- uma hora de início no formato de relógio de 12 horas (terminando em AM ou PM)
- um tempo de duração que indica o número de horas e minutos
- (opcional) um dia de início na semana, sem distinção de maiúsculas ou minúsculas

A função deve adicionar o tempo de duração ao horário inicial e retornar o resultado.

Se o resultado for no dia seguinte, ele deve mostrar `(next day)` (dia seguinte) após o tempo. Se o resultado for mais de um dia depois, ele deve mostrar `(n days later)` (n dias depois) após o tempo, onde "n" é o número de dias depois.

Se a função receber o parâmetro opcional do dia de início na semana, então o resultado deve exibir o dia da semana do resultado. O dia da semana no resultado deve aparecer após o tempo e antes do número de dias depois.

Abaixo vemos alguns exemplos dos diferentes casos que a função deve tratar. Preste muita atenção ao espaçamento e à pontuação dos resultados.

```py
add_time("3:00 PM", "3:10")
# Returns: 6:10 PM

add_time("11:30 AM", "2:32", "Monday")
# Returns: 2:02 PM, Monday

add_time("11:43 AM", "00:20")
# Returns: 12:03 PM

add_time("10:10 PM", "3:30")
# Returns: 1:40 AM (next day)

add_time("11:43 PM", "24:20", "tueSday")
# Returns: 12:03 AM, Thursday (2 days later)

add_time("6:30 PM", "205:12")
# Returns: 7:42 AM (9 days later)
```

Não importe nenhuma biblioteca do Python. Suponha que os horários de início são tempos válidos. Os minutos no tempo de duração serão um número inteiro menor que 60, mas a hora pode ser qualquer número inteiro.

## Desenvolvimento

Escreva seu código em `time_calculator.py`. Para o desenvolvimento, você pode usar `main.py` para testar sua função `time_calculator()`. Clique no botão "Run" e `main.py` será executado.

## Testes

Os testes unitários para este projeto estão em `test_module.py`. Importamos os testes de `test_module.py` em `main.py` para a sua conveniência. Os testes serão executados automaticamente sempre que você clicar no botão "Run".

## Envio

Copie o URL do seu projeto e envie-o para o freeCodeCamp.

# --hints--

Ele deve adicionar os tempos corretamente e passar em todos os testes.

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
