---
id: 587d7fb3367417b2b2512bfb
title: 'How to Use package.json, the Core of Any Node.js Project or npm Package'
localeTitle: 'Como usar o package.json, o Core de qualquer projeto Node.js ou npm Package'
challengeType: 2
---

## Description
<section id='description'> 
O arquivo package.json é o centro de qualquer projeto Node.js ou pacote npm. Ele armazena informações sobre seu projeto da mesma forma que a seção &lt;head&gt; em um documento HTML descreve o conteúdo de uma página da Web. O pacote.json consiste em um único objeto JSON, onde as informações são armazenadas em "chave": pares de valores. Existem apenas dois campos obrigatórios em um pacote mínimo.json - nome e versão - mas é uma boa prática fornecer informações adicionais sobre o seu projeto que podem ser úteis para futuros usuários ou mantenedores. 
O autor-campo 
Se você for ao projeto Glitch que você configurou anteriormente e olhar no lado esquerdo da sua tela, você encontrará a árvore de arquivos onde você pode ver uma visão geral dos vários arquivos em seu projeto. Sob a seção de back-end da árvore de arquivos, você encontrará o pacote.json - o arquivo que estaremos aprimorando nos próximos desafios. 
Uma das informações mais comuns neste arquivo é o autor-campo que especifica quem é o criador de um projeto. Pode ser uma string ou um objeto com detalhes de contato. O objeto é recomendado para projetos maiores, mas no nosso caso, uma string simples como o exemplo a seguir serve. 
<code>"author": "Jane Doe",</code> 
Instruções 
Adicione seu nome ao autor-campo no package.json do seu projeto Glitch. 
Lembre-se que você está escrevendo JSON. 
Todos os nomes de campos devem usar aspas duplas ("), por exemplo," autor " 
Todos os campos devem ser separados por uma vírgula (,) 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'package.json deve ter uma chave "author" válida'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.author, ''"author" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
