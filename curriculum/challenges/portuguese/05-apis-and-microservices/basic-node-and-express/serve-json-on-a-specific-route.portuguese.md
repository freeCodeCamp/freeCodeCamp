---
id: 587d7fb1367417b2b2512bf1
title: Serve JSON on a Specific Route
localeTitle: Servir JSON em uma rota específica
challengeType: 2
---

## Description
<section id='description'> 
Enquanto um servidor HTML exibe (você adivinhou!) HTML, uma API exibe dados. Uma API <dfn>REST</dfn> (REpresentational State Transfer) permite a troca de dados de maneira simples, sem a necessidade de os clientes conhecerem detalhes sobre o servidor. O cliente só precisa saber onde o recurso está (a URL) e a ação que deseja executar nele (o verbo). O verbo GET é usado quando você está buscando algumas informações, sem modificar nada. Atualmente, o formato de dados preferencial para mover informações pela Web é o JSON. Simplificando, o JSON é uma maneira conveniente de representar um objeto JavaScript como uma string, para que ele possa ser facilmente transmitido. 
Vamos criar uma API simples criando uma rota que responda com JSON no caminho <code>/json</code> . Você pode fazer isso normalmente, com o método <code>app.get()</code> . Dentro do manipulador de rota, use o método <code>res.json()</code> , passando um objeto como argumento. Este método fecha o loop de solicitação-resposta, retornando os dados. Nos bastidores, ele converte um objeto JavaScript válido em uma string e, em seguida, define os cabeçalhos apropriados para informar ao seu navegador que você está exibindo JSON e envia os dados de volta. Um objeto válido tem a estrutura usual <code>{key: data}</code> . Os dados podem ser um número, uma string, um objeto aninhado ou uma matriz. Os dados também podem ser uma variável ou o resultado de uma chamada de função; nesse caso, ela será avaliada antes de ser convertida em uma string. 
Sirva o objeto <code>{"message": "Hello json"}</code> como uma resposta no formato JSON, para as requisições GET para o route <code>/json</code> . Em seguida, aponte seu navegador para seu app-url / json, você deverá ver a mensagem na tela. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O endpoint <code>/json</code> deve servir o objeto json <code>{"message": "Hello json"}</code> '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/json'').then(data => { assert.equal(data.message, ''Hello json'', ''The \''/json\'' endpoint does not serve the right data''); }, xhr => { throw new Error(xhr.responseText); })'

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
