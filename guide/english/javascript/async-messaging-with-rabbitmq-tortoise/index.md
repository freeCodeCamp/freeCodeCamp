---
title: Async messaging with RabbitMQ and Tortoise
---

RabbitMQ happens to be the easiest and most performant message broker platforms using the AMQ protocol out there today. Using it in a microservice architecture translates into massive performance gains, as well as the promise of reliability. In this guide, we're going to explore the basics of using RabbitMQ with Node.js.

## Theory

At its most basic level, you'd ideally have two different services interacting with one another through Rabbit - a _publisher_ and a _subscriber_. A publisher typically pushes messages to Rabbit, and a subscriber listens to these messages, and executes code on the basis of those messages. Note that they can be both at the same time - a service can publish messages to Rabbit and consume messages at the same time, which makes for really powerful systems to be designed.

Now a publisher typically publishes messages with a _routing key_ to something called an _exchange_. A consumer listens to a _queue_ on the same exchange, bound to the routing key. In architectural terms, your platform would use one Rabbit exchange, and different kinds of jobs/services would have their own routing keys and queues, for pub-sub to work effectively. Messages can be strings; they can also be native objects - AMQP client libraries do the heavy lifting of converting objects from one language to another. And yes, that does mean services can be written in different languages, so long as they're able to understand AMQP.

## Getting started

We're going to cook up a very simple example where a publisher script publishes a message to Rabbit, containing a URL, and a consumer script listens to Rabbit, takes the published URL, calls it and displays the results. You can find the finished sample up on [Github](https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise).

First, let's initialize a npm project:

`$ npm init`

You can always just hit `Enter` all the way and use the default options - or you can fill them up. Now, let's install the packages we need. We're going to use [Tortoise](https://www.npmjs.com/package/tortoise), to interact with RabbitMQ. We're also going to use [node-cron](https://www.npmjs.com/package/node-cron), to schedule the actual message publishing.

`$ npm install --save tortoise node-cron`

Now your `package.json` should look a lot like this:

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
  "author": "Rudraksh M.K.",
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

Now we're all set. Let's create a publisher first. 

```javascript
const Tortoise = require('tortoise')
const cron = require('node-cron')

const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`)

```

After importing `tortoise` and `node-cron`, we've gone ahead and initialized a connection to RabbitMQ. Next, let's write a quick and dirty function that publishes a message to Rabbit:

```javascript
function scheduleMessage(){
    let payload = {url: 'https://randomuser.me/api'}
    tortoise
    .exchange('random-user-exchange', 'direct', { durable:false })
    .publish('random-user-key', payload)
}
```

That's simple enough. We've defined a dictionary containing a URL to the [RandomUser.me](https://randomuser.me/) API, which is then published to the `random-user-exchange` exchange on RabbitMQ, with the `random-user-key` routing key. As mentioned earlier, the routing key is what determines who gets to consume a message. Now, let's write a scheduling rule, to publish this message every 60 seconds.

```javascript
cron.schedule('60 * * * * *', scheduleMessage)
```

And our publisher's ready! But it's really no good without a consumer to actually consume these messages! But first, we do need a library that can call the URL in these messages. Personally, I use `superagent`: `npm install --save superagent`.

Now, in `consumer.js`:

```javascript
const Tortoise = require('tortoise')
const superagent = require('superagent')

const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`)

```

Next, let's write an async function that calls a URL and displays the result:

```javascript
async function getURL(url){
	let response = await superagent.get(url)
	return response.body
}
```

Time to write code to actually consume messages:

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

Here, we've told `tortoise` to listen to the `random-user-queue`, that's bound to the `random-user-key` on the `random-user-exchange`. Once a message is received, the payload is retrieved from `msg`, and is passed along to the `getURL` function, which in turn returns a Promise with the desired JSON response from the RandomUser API.

## Conclusion

The simplicity associated with using RabbitMQ for messaging is unparalleled, and it's very easy to come up with really complex microservice patterns, with just a few lines of code. The best part is that the logic behind messaging doesn't really change across languages - Crystal or Go or Python or Ruby work with Rabbit in pretty much the same way - this means you can have services written in different languages all communicating with each other effortlessly, enabling you to use the best language for the job.