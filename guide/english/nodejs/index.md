---
title: Node.js
---

<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" height="123" width="201">


## Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

#### Let's break it down.
- Javascript runtime built on Google Chrome's V8 JavaScript engine.  
Every browser has a JavaSript engine built in it to process JavaScript files contained in websites. Chrome uses V8, which is built using C++. Node.js also uses this super-fast engine to interpret JavaScript files.
- Node.js uses an event-driven model.  
This means that Node.js waits for certain events to take place. It then acts on those events. Events can be anything from a click to a HTTP request. We can also declare our own custom events and make node.js listen for those events.
- Node.js uses a non-blocking I/O model.  
We know that I/O tasks take much longer than processing tasks. Node.js uses callback functions to handle such requests.

Let us assume that a particular I/O task takes 5 secs to execute.
And we want to perform this I/O twice in our code.

**Python**
```python
import time

def my_io_task():
  time.sleep(5)
  print("done")

my_io_task()
my_io_task()
```

**Node.js**
```node
function my_io_task() {
    setTimeout(function() {
      console.log('done');
    }, 5000);
}

my_io_task();
my_io_task();
```

Both look similar but the time taken to execute are different. The python code takes 10 seconds to execute while the Node.js code takes only 5 seconds to execute.

Node.js takes less time because of its non-blocking I/O model. The first call to ```my_io_task()``` starts the timer and leaves it there. It does not wait for the response from the function, instead, it moves on to call the second ```my_io_task()```, starts the timer and leaves it there.  

When the timer completes it's execution taking 5 seconds, it calls the function and prints ```done``` on the console. Since, both the timers are started together, they complete together and therefore take same amount of time.

#### Why use NodeJS:
1. Great for beginners. JavaScript is a beginner friendly language.
2. Great supportive community and massive amount of modules (Express, Grunt, etc).
3. Wide range of hosting options.

#### More information:
- [Official NodeJS site](https://nodejs.org)
- [Node Version Manager](https://github.com/creationix/nvm/blob/master/README.md)
- [n: Interactive NodeJS Version Manager](https://github.com/tj/n)
- [The definitive Node.js handbook](https://medium.freecodecamp.org/the-definitive-node-js-handbook-6912378afc6e)
