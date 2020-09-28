---
id: 587d7fb2367417b2b2512bf7
title: Use body-parser to Parse POST Requests
localeTitle: Use o analisador de corpo para analisar solicitações de POST
challengeType: 2
---

## Description
<section id='description'> 
Além de GET, existe outro verbo http comum, é o POST. POST é o método padrão usado para enviar dados do cliente com formulários HTML. Na convenção REST, o POST é usado para enviar dados para criar novos itens no banco de dados (um novo usuário ou uma nova postagem no blog). Não temos um banco de dados neste projeto, mas vamos aprender como lidar com solicitações POST de qualquer maneira. 
Nesse tipo de solicitações, os dados não aparecem no URL, eles estão ocultos no corpo da solicitação. Esta é uma parte da solicitação HTML, também chamada de payload. Como o HTML é baseado em texto, mesmo que você não veja os dados, isso não significa que eles sejam secretos. O conteúdo bruto de uma solicitação HTTP POST é mostrado abaixo: 
<blockquote>POST /path/subpath HTTP/1.0<br>From: john@example.com<br>User-Agent: someBrowser/1.0<br>Content-Type: application/x-www-form-urlencoded<br>Content-Length: 20<br>name=John+Doe&age=25</blockquote> 
Como você pode ver, o corpo é codificado como a string de consulta. Este é o formato padrão usado pelos formulários HTML. Com o Ajax, também podemos usar JSON para manipular dados com uma estrutura mais complexa. Há também outro tipo de codificação: multipart / form-data. Este é usado para fazer upload de arquivos binários. 
Neste exercício, usaremos um corpo com codificação de URL. 
Para analisar os dados provenientes de solicitações POST, você precisa instalar um pacote: o analisador de corpo. Este pacote permite que você use uma série de middleware, que pode decodificar dados em diferentes formatos. Veja os documentos <a href="https://github.com/expressjs/body-parser" target="_blank" >aqui</a> . 
Instale o módulo body-parser no seu package.json. Em seguida, solicite-o no topo do arquivo. Armazene-o em uma variável chamada bodyParser. 
O middleware para manipular dados codificados em URL é retornado por <code>bodyParser.urlencoded({extended: false})</code> . <code>extended=false</code> é uma opção de configuração que diz ao analisador para usar a codificação clássica. Ao usá-lo, os valores podem ser apenas strings ou matrizes. A versão estendida permite mais flexibilidade de dados, mas é superada pelo JSON. Passe para <code>app.use()</code> a função retornada pela chamada do método anterior. Como de costume, o middleware deve ser montado antes de todas as rotas que precisam dele. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O middleware 'body-parser' deve ser montado
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/add-body-parser'').then(data => { assert.isAbove(data.mountedAt, 0, ''"body-parser" is not mounted correctly'') }, xhr => { throw new Error(xhr.responseText); })'

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
