---
id: 5e44412c903586ffb414c94c
title: Formatador aritmético
challengeType: 10
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

Você <a href="https://replit.com/github/freeCodeCamp/boilerplate-arithmetic-formatter" target="_blank" rel="noopener noreferrer nofollow"> trabalhará neste projeto com nosso código inicial do Replit</a>.

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.


# --instructions--

Os alunos da escola primária geralmente organizam problemas aritméticos de modo vertical para facilitar a sua resolução. Por exemplo, "235 + 52" se torna:

```py
  235
+  52
-----
```

Crie uma função que receba uma lista de strings que sejam problemas aritméticos e retorne os problemas dispostos verticalmente e lado a lado. A função deve, como opção, receber um segundo argumento. Quando o segundo argumento for definido como `True`, as respostas devem ser exibidas.

## Exemplo

Chamada da função:

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

Resultado:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

Chamada da função:

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

Resultado:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## Regras

A função retornará a conversão correta se os problemas fornecidos forem formatados corretamente. Caso contrário, ela **retornará** uma **string** que descreve um erro significativo para o usuário.


- Situações que retornarão um erro:
  - Se **houver muitos problemas** fornecidos para a função. O limite é **5**. Qualquer outro número retornará: `Error: Too many problems.`
  - Os operadores apropriados que a função aceitará são **adição** e **subtração**. A multiplicação e a divisão retornarão um erro. Outros operadores não mencionados aqui não precisarão ser testados. O erro retornado será: `Error: Operator must be '+' or '-'.`
  - Cada número (operando) deve conter apenas algarismos. Caso contrário, a função retornará: `Error: Numbers must only contain digits.`
  - Cada operando (ou seja, o número de cada lado do operador) tem, no máximo, quatro algarismos. Do contrário, a string de erro retornada será: `Error: Numbers cannot be more than four digits.`
- Se o usuário forneceu o formato correto dos problemas, a conversão retornada seguirá estas regras:
  - Deve haver um único espaço entre o operador e o maior entre os dois operandos. O operador estará na mesma linha do segundo operando. Ambos os operadores estarão na mesma ordem fornecida – o primeiro será o de cima e o segundo será o de baixo.
  - Os números devem estar alinhados à direita.
  - Deve haver quatro espaços entre cada problema.
  - Deve haver travessões abaixo de cada problema. Os travessões devem compreender todo o tamanho de cada problema individualmente. (O exemplo acima mostra como deve ser a aparência do resultado.)

## Desenvolvimento

Escreva seu código em `arithmetic_arranger.py`. Para o desenvolvimento, você pode usar `main.py` para testar sua função `arithmetic_arranger()`. Clique no botão "Run" e `main.py` será executado.

## Testes

Os testes unitários para este projeto estão em `test_module.py`. Estamos executando os testes de `test_module.py` em `main.py` para a sua conveniência. Os testes serão executados automaticamente sempre que você clicar no botão "Run". Como alternativa, você pode executar testes inserindo `pytest` no console.

## Envio

Copie o URL do seu projeto e envie-o abaixo.

# --hints--

O programa deve formatar corretamente um problema aritmético e passar em todos os testes.

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
