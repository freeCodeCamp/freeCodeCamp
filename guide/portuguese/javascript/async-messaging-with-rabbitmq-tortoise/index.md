---
title: Async messaging with RabbitMQ and Tortoise
localeTitle: Mensagens assíncronas com RabbitMQ e Tortoise
---
O RabbitMQ é, por acaso, a plataforma de mensagens mais fácil e eficiente com o protocolo AMQ existente hoje. Usá-lo em uma arquitetura de microsserviço se traduz em enormes ganhos de desempenho, bem como a promessa de confiabilidade. Neste guia, vamos explorar os fundamentos do uso do RabbitMQ com o Node.js.

## Teoria

Em seu nível mais básico, você idealmente teria dois serviços diferentes interagindo uns com os outros através do Rabbit - um _editor_ e um _assinante_ . Um editor normalmente envia mensagens para o Rabbit e um assinante escuta essas mensagens e executa o código com base nessas mensagens. Note que eles podem ser ambos ao mesmo tempo - um serviço pode publicar mensagens para o Rabbit e consumir mensagens ao mesmo tempo, o que faz com que sistemas realmente poderosos sejam projetados.

Agora, um editor normalmente publica mensagens com uma _chave de roteamento_ para algo chamado _troca_ . Um consumidor escuta uma _fila_ na mesma troca, vinculada à chave de roteamento. Em termos de arquitetura, sua plataforma usaria uma troca de coelho, e diferentes tipos de trabalhos / serviços teriam suas próprias chaves de roteamento e filas, para que o pub-sub funcionasse de forma eficaz. Mensagens podem ser seqüências de caracteres; eles também podem ser objetos nativos - as bibliotecas cliente AMQP fazem o trabalho pesado de converter objetos de um idioma para outro. E sim, isso significa que os serviços podem ser escritos em diferentes idiomas, desde que sejam capazes de entender o AMQP.

## Começando

Vamos elaborar um exemplo muito simples em que um script do editor publica uma mensagem para o Rabbit, contendo um URL, e um script do consumidor escuta o Rabbit, pega o URL publicado, chama e exibe os resultados. Você pode encontrar a amostra finalizada no [Github](https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise) .

Primeiro, vamos inicializar um projeto npm:

`$ npm init`

Você sempre pode simplesmente pressionar `Enter` até o fim e usar as opções padrão - ou você pode preenchê-las. Agora, vamos instalar os pacotes que precisamos. Nós vamos usar o [Tortoise](https://www.npmjs.com/package/tortoise) , para interagir com o RabbitMQ. Também vamos usar o [node-cron](https://www.npmjs.com/package/node-cron) para agendar a publicação de mensagens real.

`$ npm install --save tortoise node-cron`

Agora o seu `package.json` deve ficar muito parecido com isto:
```
{ 
  "name": "freecodecamp-guides-rabbitmq-tortoise", 
  "version": "1.0.0", 
  "description": "Sample code to accompany the FreeCodeCamp guide on async messaging with RabbitMQ and Tortoise.", 
  "main": "index.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "repository": { 
    "type": "git", 
    "url": "git+https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise.git" 
  }, 
  "keywords": [ 
    "rabbitmq", 
    "tortoise", 
    "amqp" 
  ], 
  "author": "Rudraksh MK", 
  "license": "MIT", 
  "bugs": { 
    "url": "https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise/issues" 
  }, 
  "homepage": "https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise#readme", 
  "dependencies": { 
    "node-cron": "^1.2.1", 
    "tortoise": "^1.0.1" 
  } 
 } 
```

Agora estamos todos prontos. Vamos criar um editor primeiro.

```javascript
const Tortoise = require('tortoise') 
 const cron = require('node-cron') 
 
 const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`) 
```

Depois de importar `tortoise` e `node-cron` , fomos em frente e inicializamos uma conexão com o RabbitMQ. Em seguida, vamos escrever uma função rápida e suja que publique uma mensagem para o Rabbit:

```javascript
function scheduleMessage(){ 
    let payload = {url: 'https://randomuser.me/api'} 
    tortoise 
    .exchange('random-user-exchange', 'direct', { durable:false }) 
    .publish('random-user-key', payload) 
 } 
```

Isso é bem simples. Definimos um dicionário que contém um URL para a API [RandomUser.me](https://randomuser.me/) , que é então publicado na `random-user-exchange` troca de `random-user-exchange` no RabbitMQ, com a `random-user-key` roteamento de chave de `random-user-key` . Como mencionado anteriormente, a chave de roteamento é o que determina quem consegue consumir uma mensagem. Agora, vamos escrever uma regra de agendamento para publicar essa mensagem a cada 60 segundos.

```javascript
cron.schedule('60 * * * * *', scheduleMessage) 
```

E nossa editora está pronta! Mas não é nada bom sem um consumidor consumir essas mensagens! Mas primeiro, precisamos de uma biblioteca que possa chamar o URL nessas mensagens. Pessoalmente, eu uso `superagent` : `npm install --save superagent` .

Agora, em `consumer.js` :

```javascript
const Tortoise = require('tortoise') 
 const superagent = require('superagent') 
 
 const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`) 
```

Em seguida, vamos escrever uma função assíncrona que chama um URL e exibe o resultado:

```javascript
async function getURL(url){ 
    let response = await superagent.get(url) 
    return response.body 
 } 
```

Hora de escrever código para consumir mensagens:

```javascript
tortoise 
 .queue('random-user-queue', { durable: false }) 
 // Add as many bindings as needed 
 .exchange('random-user-exchange', 'direct', 'random-user-key', { durable: false }) 
 .prefetch(1) 
 .subscribe(function(msg, ack, nack) { 
  // Handle 
  let payload = JSON.parse(msg) 
  getURL(payload['url']).then((response) => { 
    console.log('Job result: ', response) 
  }) 
  ack() // or nack() 
 }) 
```

Aqui, nós dissemos a `tortoise` para ouvir a `random-user-queue` , que está ligada à `random-user-key` `random-user-exchange` . Quando uma mensagem é recebida, a carga é recuperada da `msg` e é passada para a função `getURL` , que por sua vez retorna um Promise com a resposta JSON desejada da API RandomUser.

## Conclusão

A simplicidade associada ao uso do RabbitMQ para mensagens é incomparável, e é muito fácil criar padrões de microsserviço realmente complexos, com apenas algumas linhas de código. A melhor parte é que a lógica por trás das mensagens realmente não muda entre as linguagens - Crystal ou Go ou Python ou Ruby trabalham com Rabbit da mesma maneira - isso significa que você pode ter serviços escritos em diferentes idiomas, comunicando-se sem esforço. , permitindo que você use a melhor linguagem para o trabalho.