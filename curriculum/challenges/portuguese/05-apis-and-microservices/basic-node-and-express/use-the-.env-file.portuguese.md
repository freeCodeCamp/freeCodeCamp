---
id: 587d7fb1367417b2b2512bf2
title: Use the .env File
localeTitle: Use o arquivo .env
challengeType: 2
---

## Description
<section id='description'> 
O arquivo <code>.env</code> é um arquivo oculto usado para transmitir variáveis de ambiente ao seu aplicativo. Este arquivo é secreto, ninguém além de você pode acessá-lo e pode ser usado para armazenar dados que você deseja manter privados ou ocultos. Por exemplo, você pode armazenar chaves de API de serviços externos ou do URI do seu banco de dados. Você também pode usá-lo para armazenar opções de configuração. Ao definir opções de configuração, você pode alterar o comportamento do seu aplicativo, sem a necessidade de reescrever algum código. 
As variáveis de ambiente podem ser acessadas no aplicativo como <code>process.env.VAR_NAME</code> . O objeto <code>process.env</code> é um objeto Node global e as variáveis são passadas como strings. Por convenção, os nomes das variáveis são todos em maiúsculas, com palavras separadas por um sublinhado. O <code>.env</code> é um arquivo de shell, portanto, você não precisa <code>.env</code> nomes ou valores entre aspas. Também é importante observar que não pode haver espaço ao redor do sinal de igual quando você está atribuindo valores às suas variáveis, por exemplo, <code>VAR_NAME=value</code> . Normalmente, você irá colocar cada definição de variável em uma linha separada. 
Vamos adicionar uma variável de ambiente como uma opção de configuração. Armazene a variável <code>MESSAGE_STYLE=uppercase</code> no arquivo <code>.env</code> . Em seguida, informe ao manipulador de rota GET <code>/json</code> que você criou no último desafio para transformar a mensagem do objeto de resposta em maiúsculas, se <code>process.env.MESSAGE_STYLE</code> for igual a <code>uppercase</code> . O objeto de resposta deve se tornar <code>{"message": "HELLO JSON"}</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A resposta do nó de extremidade <code>/json</code> deve mudar de acordo com a variável de ambiente <code>MESSAGE_STYLE</code>
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/use-env-vars'').then(data => { assert.isTrue(data.passed, ''The response of "/json" does not change according to MESSAGE_STYLE''); }, xhr => { throw new Error(xhr.responseText); })'

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
