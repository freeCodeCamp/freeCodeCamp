---
title: Async messaging with RabbitMQ and Tortoise
localeTitle: Асинхронные сообщения с помощью RabbitMQ и Tortoise
---
RabbitMQ - это самые простые и эффективные платформы для брокерских сообщений, использующие сегодня протокол AMQ. Использование его в архитектуре микросервиса приводит к увеличению производительности, а также к надежности. В этом руководстве мы рассмотрим основы использования RabbitMQ с Node.js.

## теория

На самом базовом уровне вы идеально должны иметь две разные службы, взаимодействующие друг с другом через Rabbit - _издателя_ и _подписчика_ . Издатель обычно передает сообщения Кролику, и абонент слушает эти сообщения и выполняет код на основе этих сообщений. Обратите внимание, что они могут быть одновременно одновременно - служба может публиковать сообщения в Rabbit и потреблять сообщения одновременно, что позволяет создавать действительно мощные системы.

Теперь издатель обычно публикует сообщения с _ключом маршрутизации_ к тому, что называется _обменом_ . Потребитель слушает _очередь_ на том же обмене, привязанный к ключу маршрутизации. В архитектурном плане ваша платформа будет использовать один обмен кролика, а разные виды заданий / сервисов будут иметь свои собственные ключи и очереди маршрутизации, чтобы pub-sub работал эффективно. Сообщения могут быть строками; они также могут быть родными объектами - клиентские библиотеки AMQP делают тяжелый подъем конвертируемых объектов с одного языка на другой. И да, это означает, что услуги могут быть написаны на разных языках, если они способны понимать AMQP.

## Начиная

Мы собираемся подготовить очень простой пример, когда скрипт издателя публикует сообщение для Rabbit, содержащее URL-адрес, а потребительский скрипт прослушивает Rabbit, выдает опубликованный URL-адрес, вызывает его и отображает результаты. Вы можете найти готовый образец на [Github](https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise) .

Сначала давайте инициализируем проект npm:

`$ npm init`

Вы всегда можете просто нажать `Enter` полностью и использовать параметры по умолчанию - или вы можете их заполнить. Теперь давайте установим нужные нам пакеты. Мы будем использовать [Tortoise](https://www.npmjs.com/package/tortoise) , чтобы взаимодействовать с RabbitMQ. Мы также будем использовать [node-cron](https://www.npmjs.com/package/node-cron) , чтобы запланировать фактическую публикацию сообщений.

`$ npm install --save tortoise node-cron`

Теперь ваш `package.json` должен выглядеть так:
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

Теперь мы все настроены. Давайте сначала создадим издателя.

```javascript
const Tortoise = require('tortoise') 
 const cron = require('node-cron') 
 
 const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`) 
```

После импорта `tortoise` и `node-cron` мы пошли вперед и инициализировали соединение с RabbitMQ. Затем, давайте напишем быструю и грязную функцию, которая публикует сообщение для Rabbit:

```javascript
function scheduleMessage(){ 
    let payload = {url: 'https://randomuser.me/api'} 
    tortoise 
    .exchange('random-user-exchange', 'direct', { durable:false }) 
    .publish('random-user-key', payload) 
 } 
```

Это достаточно просто. Мы определили словарь, содержащий URL-адрес для API [RandomUser.me](https://randomuser.me/) , который затем публикуется на `random-user-exchange` на RabbitMQ с помощью `random-user-key` маршрутизации с `random-user-key` [доступом](https://randomuser.me/) . Как упоминалось ранее, ключ маршрутизации определяет, кто получает сообщение. Теперь давайте напишем правило планирования, чтобы опубликовать это сообщение каждые 60 секунд.

```javascript
cron.schedule('60 * * * * *', scheduleMessage) 
```

И наш издатель готов! Но действительно бесполезно, если потребитель не потребляет эти сообщения! Но сначала нам нужна библиотека, которая может вызывать URL-адрес в этих сообщениях. Лично я использую `superagent` : `npm install --save superagent` .

Теперь, в `consumer.js` :

```javascript
const Tortoise = require('tortoise') 
 const superagent = require('superagent') 
 
 const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`) 
```

Далее, давайте напишем функцию async, которая вызывает URL-адрес и отображает результат:

```javascript
async function getURL(url){ 
    let response = await superagent.get(url) 
    return response.body 
 } 
```

Время написания кода для фактического потребления сообщений:

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

Здесь мы сказали `tortoise` прослушивать `random-user-queue` , которая привязана к `random-user-key` при `random-user-exchange` . После получения сообщения полезная нагрузка извлекается из `msg` и передается вместе с функцией `getURL` , которая, в свою очередь, возвращает Promise с требуемым ответом JSON от API RandomUser.

## Вывод

Простота, связанная с использованием RabbitMQ для обмена сообщениями, не имеет себе равных, и очень легко придумать действительно сложные микросервисные шаблоны с несколькими строками кода. Лучшая часть заключается в том, что логика обмена сообщениями на самом деле не меняется на разных языках - Crystal или Go или Python или Ruby работают с Rabbit почти так же - это означает, что вы можете иметь услуги, написанные на разных языках, все общающиеся друг с другом без усилий , позволяя вам использовать лучший язык для работы.