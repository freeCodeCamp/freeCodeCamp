---
title: Process Object
localeTitle: 过程对象
---
## 过程对象

Node.js中的`process`对象是一个全局对象，可以在任何模块内访问，而不需要它。 Node.js中提供的全局对象或属性非常少，而`process`就是其中之一。它是Node.js生态系统中的一个重要组件，因为它提供了有关程序运行时的各种信息集。为了探索，我们将使用其中一个名为`process.versions`属性。此属性告诉我们有关已安装的Node.js版本的信息。它必须与`-p`标志一起使用。

```shell
$ node  -p "process.versions" 
 
 # output 
 { http_parser: '2.8.0', 
  node: '8.11.2', 
  v8: '6.2.414.54', 
  uv: '1.19.1', 
  zlib: '1.2.11', 
  ares: '1.10.1-DEV', 
  modules: '57', 
  nghttp2: '1.29.0', 
  napi: '3', 
  openssl: '1.0.2o', 
  icu: '60.1', 
  unicode: '10.0', 
  cldr: '32.0', 
  tz: '2017c' } 
```

您可以检查的另一个属性是`process.release` ，它与我们在安装Node.js时使用的命令`$ node --version`相同，但这次输出将更加详细。

```shell
node -p "process.release" 
 
 # output 
 { name: 'node', 
  lts: 'Carbon', 
  sourceUrl: 'https://nodejs.org/download/release/v8.11.2/node-v8.11.2.tar.gz', 
  headersUrl: 'https://nodejs.org/download/release/v8.11.2/node-v8.11.2-headers.tar.gz' } 
```

这些是我们可以在命令行中使用的一些不同命令来访问信息，否则模块无法提供。此`process`对象是EventEmitter类的一个实例，它包含自己的预定义事件，例如`exit` ，可用于了解Node.js中的程序何时完成其执行。运行以下程序，您可以观察到结果是状态代码`0` 。在Node.js中，此状态代码表示程序已成功运行。

```js
process.on('exit', code => { 
    setTimeout(() => { 
        console.log('Will not get displayed'); 
    }, 0); 
 
    console.log('Exited with status code:', code); 
 }); 
 console.log('Execution Completed'); 
```

上述计划的输出：

```shell
Execution Completed 
 Exited with status code: 0 
```

`Process`还提供了与之交互的各种属性。其中一些可以在Node应用程序中使用，以提供在Node应用程序和任何命令行界面之间进行通信的网关。如果使用Node.js构建命令行应用程序或实用程序，这非常有用

*   process.stdin：可读的流
*   process.stdout：可写流
*   process.stderr：一个可以识别错误的可用流

使用`argv`您始终可以访问在命令行中传递的参数。 `argv`是一个数组，它将Node本身作为第一个元素，将文件的绝对路径作为第二个元素。从第三个元素开始，它可以有多个参数。

尝试以下程序，以更深入地了解如何使用这些不同的属性和功能。

```js
process.stdout.write('Hello World!' + '\n'); 
 
 process.argv.forEach(function(val, index, array) { 
    console.log(index + ': ' + val); 
 }); 
```

如果使用以下命令运行上面的代码，您将获得输出，并且打印前两个元素是`argv` 。

```shell
$ node test.js 
 
 # output 
 Hello World! 
 0: /usr/local/bin/node 
 1: /Users/amanhimself/Desktop/articles/nodejs-text-tuts/test.js 

```