---
id: 587d7fb0367417b2b2512bee
title: Start a Working Express Server
localeTitle: Inicie um servidor do Working Express
challengeType: 2
---

## Description
<section id='description'> 
Nas duas primeiras linhas do arquivo myApp.js você pode ver como é fácil criar um objeto de aplicativo Express. Esse objeto tem vários métodos e aprenderemos muitos deles nesses desafios. Um método fundamental é <code>app.listen(port)</code> . Ele diz ao seu servidor para escutar em uma determinada porta, colocando-o em estado de execução. Você pode vê-lo na parte inferior do arquivo. Ele está dentro dos comentários porque, por motivos de teste, precisamos que o aplicativo esteja em execução em segundo plano. Todo o código que você deseja adicionar vai entre essas duas partes fundamentais. Glitch armazena o número da porta na variável de ambiente <code>process.env.PORT</code> . Seu valor é <code>3000</code> . 
Vamos servir nossa primeira string! No Express, as rotas levam a seguinte estrutura: <code>app.METHOD(PATH, HANDLER)</code> . MÉTODO é um método http em minúsculas. PATH é um caminho relativo no servidor (pode ser uma string ou até uma expressão regular). HANDLER é uma função que o Express chama quando a rota é correspondida. 
Manipuladores assumem a <code>function(req, res) {...}</code> form <code>function(req, res) {...}</code> , em que req é o objeto request e res é o objeto response. Por exemplo, o manipulador 
<blockquote>function(req, res) {<br> res.send('Response String');<br>}</blockquote> 
servirá a string 'Response String'. 
Use o método <code>app.get()</code> para exibir a string Hello Express, para solicitações GET correspondentes ao caminho / root. Certifique-se de que seu código funciona observando os registros e, em seguida, veja os resultados no seu navegador, clicando no botão "Mostrar ao vivo" na interface do usuário do Glitch. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu aplicativo deve exibir a string "Hello Express"
    testString: 'getUserInput => $.get(getUserInput(''url'')).then(data => { assert.equal(data, ''Hello Express'', ''Your app does not serve the text "Hello Express"''); }, xhr => { throw new Error(xhr.responseText); })'

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
