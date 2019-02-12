---
id: 587d7fb0367417b2b2512bef
title: Serve an HTML File
localeTitle: Servir um arquivo HTML
challengeType: 2
---

## Description
<section id='description'> 
Podemos responder com um arquivo usando o método <code>res.sendFile(path)</code> . 
Você pode colocá-lo dentro do manipulador de rota <code>app.get('/', ...)</code> . Nos bastidores, este método irá definir os cabeçalhos apropriados para instruir o seu navegador sobre como lidar com o arquivo que você deseja enviar, de acordo com o seu tipo. Então ele irá ler e enviar o arquivo. Esse método precisa de um caminho de arquivo absoluto. Recomendamos que você use a variável global do nó <code>__dirname</code> para calcular o caminho. 
exemplo <code>absolutePath = __dirname + relativePath/file.ext</code> . 
O arquivo a ser enviado é <code>/views/index.html</code> . Tente "Mostrar ao vivo" seu aplicativo, você deve ver um grande título HTML (e um formulário que usaremos mais tarde ...), sem estilo aplicado. 
Nota: Você pode editar a solução do desafio anterior ou criar uma nova. Se você criar uma nova solução, lembre-se de que o Express avalia as rotas de cima para baixo. Ele executa o manipulador para o primeiro jogo. Você precisa comentar a solução anterior ou o servidor continuará respondendo com uma string. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu aplicativo deve exibir o arquivo views / index.html
    testString: 'getUserInput => $.get(getUserInput(''url'')).then(data => { assert.match(data, /<h1>.*<\/h1>/, ''Your app does not serve the expected HTML''); }, xhr => { throw new Error(xhr.responseText); })'

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
