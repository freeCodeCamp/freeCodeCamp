---
title: Async messaging with RabbitMQ and Tortoise
localeTitle: 与RabbitMQ和Tortoise的异步消息传递
---
RabbitMQ恰好是目前使用AMQ协议的最简单，性能最高的消息代理平台。在微服务架构中使用它可以带来巨大的性能提升，以及可靠性的承诺。在本指南中，我们将探讨将RabbitMQ与Node.js一起使用的基础知识。

## 理论

在最基本的层面上，理想情况下，您可以通过Rabbit（ _发布者_和_订阅者）_彼此交互两种不同的服务。发布者通常将消息推送到Rabbit，订阅者监听这些消息，并根据这些消息执行代码。请注意，它们可以同时发生 - 服务可以将消息发布到Rabbit并同时使用消息，这样就可以设计出非常强大的系统。

现在，发布者通常会将带有_路由密钥的_消息发布到称为_交换的_东西。使用者侦听绑定到路由键的同一交换机上的_队列_ 。在架构方面，您的平台将使用一个Rabbit交换，并且不同类型的作业/服务将具有自己的路由键和队列，以使pub-sub有效地工作。消息可以是字符串;它们也可以是本机对象--AMQP客户端库可以将对象从一种语言转换为另一种语言。是的，这确实意味着服务可以用不同的语言编写，只要他们能够理解AMQP。

## 入门

我们将编写一个非常简单的示例，其中发布者脚本向Rabbit发布消息，其中包含URL，消费者脚本侦听Rabbit，获取已发布的U​​RL，调用它并显示结果。您可以在[Github](https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise)上找到完成的样本。

首先，让我们初始化一个npm项目：

`$ npm init`

您始终只需`Enter`并使用默认选项 - 或者您可以填写它们。现在，让我们安装我们需要的软件包。我们将使用[Tortoise](https://www.npmjs.com/package/tortoise)与RabbitMQ进行交互。我们还将使用[node-cron](https://www.npmjs.com/package/node-cron)来安排实际的消息发布。

`$ npm install --save tortoise node-cron`

现在你的`package.json`应该看起来像这样：
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

现在我们都准备好了。我们先创建一个发布者。

```javascript
const Tortoise = require('tortoise') 
 const cron = require('node-cron') 
 
 const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`) 
```

在导入`tortoise`和`node-cron` ，我们继续并初始化了与RabbitMQ的连接。接下来，让我们编写一个快速而脏的函数，向Rabbit发布一条消息：

```javascript
function scheduleMessage(){ 
    let payload = {url: 'https://randomuser.me/api'} 
    tortoise 
    .exchange('random-user-exchange', 'direct', { durable:false }) 
    .publish('random-user-key', payload) 
 } 
```

这很简单。我们已经定义了一个字典，其中包含[RandomUser.me](https://randomuser.me/) API的URL，然后使用`random-user-key`路由密钥将其发布到RabbitMQ上的`random-user-exchange`交换机。如前所述，路由键是决定谁使用消息的方法。现在，让我们编写一个调度规则，每隔60秒发布一条消息。

```javascript
cron.schedule('60 * * * * *', scheduleMessage) 
```

我们的出版商准备好了！但是如果没有消费者真正消费这些消息真的没有用！但首先，我们需要一个可以在这些消息中调用URL的库。就个人而言，我使用`superagent` ： `npm install --save superagent` 。

现在，在`consumer.js` ：

```javascript
const Tortoise = require('tortoise') 
 const superagent = require('superagent') 
 
 const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`) 
```

接下来，让我们编写一个异步函数来调用URL并显示结果：

```javascript
async function getURL(url){ 
    let response = await superagent.get(url) 
    return response.body 
 } 
```

编写实际消费消息的代码的时间：

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

在这里，我们告诉`tortoise`要监听`random-user-queue` ，该`random-user-queue`与`random-user-exchange`上的`random-user-exchange` `random-user-key`绑定。收到`msg` ，将从`msg`检索有效负载，并将其传递给`getURL`函数，该函数将从RandomUser API返回带有所需JSON响应的Promise。

## 结论

与使用RabbitMQ进行消息传递相关的简单性是无与伦比的，只需几行代码就可以很容易地得到非常复杂的微服务模式。最好的部分是消息传递背后的逻辑并没有真正改变语言--Crystal或Go或Python或Ruby以几乎相同的方式与Rabbit一起工作 - 这意味着您可以使用不同语言编写的服务可以毫不费力地相互通信，使您能够使用最好的语言来完成工作。