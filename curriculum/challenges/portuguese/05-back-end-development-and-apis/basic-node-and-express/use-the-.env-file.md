---
id: 587d7fb1367417b2b2512bf2
title: Usar o arquivo .env
challengeType: 2
forumTopicId: 301521
dashedName: use-the--env-file
---

# --description--

O arquivo `.env` é um arquivo oculto que é usado para passar variáveis de ambiente para seu aplicativo. Este arquivo é secreto, ninguém além de você pode acessá-lo. Ele pode ser usado para armazenar dados que você deseja manter privados ou ocultos. Por exemplo, você pode armazenar chaves da API de serviços externos ou o URI do seu banco de dados. Você também pode usá-lo para armazenar as opções de configuração. Ao definir as opções de configuração, você pode alterar o comportamento de sua aplicação sem a necessidade de reescrever algum código.

As variáveis de ambiente podem ser acessadas pelo aplicativo usando `process.env.VAR_NAME`. O objeto `process.env` é um objeto global do Node e suas variáveis são passadas como strings. Por convenção, os nomes de variáveis ficam todos em letras maiúsculas, com palavras separadas por um sublinhado. O `.env` é um arquivo shell. Assim, você não precisa encapsular nomes ou valores entre aspas. Também é importante notar que não pode haver espaço em torno do sinal de igual quando você estiver atribuindo valores às suas variáveis, como, por exemplo, `VAR_NAME=value`. Normalmente, você colocará cada definição de variável em uma linha separada.

# --instructions--

Vamos adicionar uma variável de ambiente como uma opção de configuração.

Crie um arquivo `.env` na raiz do diretório do seu projeto e armazene a variável `MESSAGE_STYLE=uppercase` nele.

Depois, no manipulador da rota GET `/json` que você criou no último desafio, acesse `process.env.MESSAGE_STYLE` e transforme a `message` do objeto de resposta em letras maiúsculas se a variável for igual a `uppercase`. O objeto de resposta deve ser `{"message": "Hello json"}` ou `{"message": "HELLO JSON"}`, dependendo do valor de `MESSAGE_STYLE`. Observe que você deve ler o valor de `process.env.MESSAGE_STYLE` **dentro** do manipulador de rota, não fora dela, devido ao modo como nossos testes são executados.

**Observação:** se você estiver usando o Replit, você não poderá criar um arquivo `.env`. Em vez disso, use a aba embutida <dfn>SECRETS</dfn> para adicionar a variável.

Se você estiver trabalhando localmente, precisará do pacote `dotenv`. Ele carrega as variáveis de ambiente do seu arquivo `.env` em `process.env`. O pacote `dotenv` já foi instalado e está no arquivo `package.json` do projeto. Na parte superior do seu arquivo `myApp.js`, adicione `require('dotenv').config()` para carregar as variáveis de ambiente.

# --hints--

A resposta do endpoint `/json` deve ser alterada de acordo com a variável de ambiente `MESSAGE_STYLE`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/use-env-vars').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'The response of "/json" does not change according to MESSAGE_STYLE'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
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
