---
title: HTTP
localeTitle: HTTP
---
## HTTP

O Node.js tem um conjunto de módulos integrados que você pode usar sem qualquer instalação adicional. Da mesma forma, o **módulo HTTP** contém um conjunto de funções que são necessárias para transferir dados através do protocolo HTTP (Hyper Text Transfer Protocol).

O módulo HTTP pode criar um servidor HTTP que ouve as portas do servidor e retorna uma resposta ao cliente.

Para incluir um módulo, use a função `require()` com o nome do módulo.

```javascript
const http = require('http');
```

## Node.js como um servidor da Web

O método `createServer()` é usado para criar um servidor HTTP. O primeiro argumento do método `res.writeHead()` é o código de status, `200` significa que tudo está OK, o segundo argumento é um objeto que contém os cabeçalhos de resposta.

```javascript
const http = require('http');

 //create a server object:
 http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
 }).listen(8000); //the server object listens on port 8000

 console.log("Server is listening on port no : 8000");
```

### Etapas para execução:

*   Você deve ter o Node.js instalado em seu computador.
*   Crie um arquivo _app.js_ e cole o código acima.
*   Agora abra seu console no diretório de trabalho e execute o `node app.js` comando `node app.js`
*   Abra seu navegador e digite `http://localhost:8000`

_Nota:_ Para fechar o servidor, pressione `ctrl + C` no seu console para usuários do Windows.

## Recursos

*   [API do Node.js](https://nodejs.org/api/http.html#http_http)
*   [Escolas W3](https://www.w3schools.com/nodejs/nodejs_http.asp)