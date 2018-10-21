---
title: ExpressJS
localeTitle: ExpressJS
---
## ExpressJS

在使用Node.js构建Web应用程序时，创建服务器可能会花费大量时间。多年来，由于社区的支持，Node.js已经足够成熟。使用Node.js作为Web应用程序和网站的后端，可以帮助开发人员快速开始处理他们的应用程序或产品。在本教程中，我们将研究Expressjs，这是一个用于Web开发的Node.js框架，它具有路由和呈现以及REST API支持等功能。

## 什么是快递？

Express是最受欢迎的Node.js框架，因为它需要最少的设置来启动应用程序或API，并且速度快，并且同时不受影响。换句话说，与Rails和Django不同，它没有强制执行应用程序或API应以特定方式构建的理念。它的灵活性可以通过可用的`npm`模块的数量来计算，这使得它可以同时插入。如果您具有HTML，CSS和JavaScript的基本知识以及Node.js的一般工作方式，那么您很快就可以开始使用Expressjs了。

Express由TJ Holowaychuk开发，现在由Node.js基金会和开源开发人员维护。要使用Express开始开发，您需要安装Node.js和npm。您可以在本地计算机上安装[Node.js](https://nodejs.org/en/) ，然后是命令行实用程序`npm` ，它将帮助我们稍后在项目中安装插件或被称为依赖项。

要检查是否所有内容都已正确安装，请打开终端并输入：

```shell
node --version 
 v5.0.0 
 npm --version 
 3.5.2 
```

如果您获得版本号而不是错误，则表示您已成功安装Node.js和npm。

## 为什么要使用Expressjs？

在我们开始使用Express作为后端框架的机制之前，让我们首先探讨为什么我们应该考虑使用它或它的受欢迎程度的原因。

*   Express允许您构建单页，多页和混合Web和移动应用程序。其他常见的后端用途是为客户端（无论是Web还是移动）提供API。
*   它带有一个默认模板引擎Jade，它有助于促进数据流入网站结构，并支持其他模板引擎。
*   它支持MVC（模型 - 视图 - 控制器），这是一种非常常见的架构来设计Web应用程序。
*   它是跨平台的，不限于任何特定的操作系统。
*   它利用Node.js单线程和异步模型。

每当我们使用`npm`创建项目时，我们的项目必须有一个`package.json`文件。

### 创建package.json

JSON（JavaScript Object Notation）文件包含有关任何Express项目的所有信息。安装的模块数，项目名称，版本和其他元信息。要在项目中添加Expressjs作为模块，首先我们需要创建一个项目目录，然后创建一个package.json文件。

```shell
mkdir express-app-example 
 cd express-app-example 
 npm init --yes 
```

这将在项目目录的根目录中生成`package.json`文件。要从`npm`安装任何模块，我们需要在该目录中存在`package.json`文件。

```json
{ 
  "name": "express-web-app", 
  "version": "0.1.0", 
  "description": "", 
  "main": "index.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "keywords": [], 
  "license": "MIT" 
 } 
```

### 安装Express

现在我们有了`package.json`文件，我们可以通过运行命令来安装Express：

```shell
npm install --save express 
```

我们可以通过两种方式确认Express已正确安装。首先，在我们的Express存在的`package.json`文件中将有一个名为`dependencies`新部分：

```json
{ 
  "name": "express-web-app", 
  "version": "0.1.0", 
  "description": "", 
  "main": "index.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "keywords": [], 
  "license": "MIT", 
  "dependencies": { 
    "express": "4.16.0" 
  } 
 } 
```

第二种方法是在项目目录的根目录中突然出现一个名为`node_modules`的新文件夹。此文件夹存储我们在项目中本地安装的软件包。

## 使用Express构建服务器

要将我们安装的包用于Express框架并创建一个简单的服务器应用程序，我们将在项目目录的根目录下创建文件`index.js` 。

```javascript
const express = require('express'); 
 const app = express(); 
 
 app.get('/', (req, res) => res.send('Hello World!')); 
 
 app.listen(3000, () => console.log('Example app listening on port 3000!')); 
```

要启动服务器，请转到终端并键入：

```shell
node index.js 
```

这将启动服务器。这个极少数应用程序将侦听端口3000.我们通过浏览器在`http://localhost:3000`上发出请求，我们的服务器将使用`Hello World`响应，浏览器是客户端，消息将显示在那里。

我们代码的第一行是使用`require`函数来包含`express`模块。这就是我们如何在项目的任何JavaScript文件中包含和使用从npm安装的软件包。在我们开始使用Express之前，我们需要定义一个实例来处理从服务器到客户端的请求和响应。在我们的例子中，它是变量`app` 。

`app.get()`是一个函数，它告诉服务器在调用给定路由的`get`请求时该怎么做。它有一个回调函数`(req, res)` ，它监听传入的请求`req`对象并使用`res`响应对象进行相应的响应。 Express框架都可以使用`req`和`res` 。

`req`对象表示HTTP请求，并具有请求查询字符串，参数，正文和HTTP标头的属性。 res对象表示Express应用程序在收到HTTP请求时发送的HTTP响应。在我们的例子中，每当请求路由`/`时，我们都会发送一个文本`Hello World` 。

最后， `app.listen()`是启动端口和主机的函数，在我们的例子中是`localhost`用于侦听来自客户端的传入请求的连接。我们可以定义端口号，例如`3000` 。

## 快速应用剖析

Express服务器文件的典型结构很可能包含以下部分：

**依赖**

导入表达本身等依赖项。使用`npm`安装这些依赖项，就像我们在前面的示例中所做的那样。

**实例**

这些是创建对象的语句。要使用express，我们必须从中实例化`app`变量。

**配置**

这些语句是基于自定义应用程序的设置，它们是在实例化之后定义的，或者在单独的文件中定义（在讨论项目结构时更多内容）并且在我们的主服务器文件中是必需的。

**中间件**

这些函数确定请求 - 响应周期的流程。它们在每次传入请求后执行。我们还可以定义自定义中间件功能。我们在下面有关于它们的部分。

**路线**

它们是我们的服务器中定义的端点，有助于执行特定客户端请求的操作。

**引导服务器**

在Express服务器中执行的最后一个是`app.listen()`函数，它启动我们的服务器。

我们现在开始讨论我们之前没有讨论过的部分。

## 路由

路由是指服务器端应用程序如何响应对特定端点的客户端请求。此端点由URI（诸如`/`或`/books`类的路径）和HTTP方法（如GET，POST，PUT，DELETE等）组成。

路由可以是良好的旧网页或REST API端点。在这两种情况下，语法类似于路由的语法可以定义为：

```javascript
app.METHOD(PATH, HANDLER); 
```

路由器有助于分离诸如不同端点之类的关注点并将源代码的相关部分保持在一起。它们有助于构建可维护的代码。所有路由都是在`app.listen()`函数调用之前定义的。在典型的Express应用程序中， `app.listen()`将是最后执行的函数。

### 路由方法

HTTP是客户端和服务器进行通信的标准协议。它为客户端提供了不同的请求方法。每条路线至少具有hanlder功能或回调功能。此回调函数确定服务器对该特定路由的响应。例如， `app.get()`的路由用于处理GET请求，并作为响应发送简单消息。

```javascript
// GET method route 
 app.get('/', (req, res) => res.send('Hello World!')); 
```

### 路由路径

路由路径是请求方法的组合，用于定义客户端可以发出请求的端点。路径路径可以是字符串，字符串模式或正则表达式。

让我们在基于服务器的应用程序中定义另外两个端点。

```javascript
app.get('/home', (req, res) => { 
  res.send('Home Page'); 
 }); 
 app.get('/about', (req, res) => { 
  res.send('About'); 
 }); 
```

将上面的代码视为最低限度的网站，它有两个端点， `/home`和`/about` 。如果客户端发出主页请求，它将仅响应`Home Page`并且在`/about`它将发送响应： `About Page` 。如果选择了定义的两个路由中的任何一个，我们使用`res.send`函数将字符串发送回客户端。

### 路由参数

路径参数是命名的URL段，用于捕获在URL中的位置指定的值。在这种情况下使用`req.params`对象，因为它可以访问url中传递的所有参数。

```javascript
app.get('/books/:bookId', (req, res) => { 
  res.send(req.params); 
 }); 
```

上述源代码中客户端的请求URL为`http://localhost:3000/books/23` 。路由参数的名称必须由字符组成（\[A-Za-z0-9\_\]）。在我们的应用程序中，路由参数的一般用例是具有404路由。

```javascript
// For invalid routes 
 app.get('*', (req, res) => { 
  res.send('404! This is an invalid URL.'); 
 }); 
```

如果我们现在使用`node index.js`从命令行启动服务器并尝试访问URL： `http://localhost:3000/abcd` 。作为回应，我们将收到404消息。

## 中间件功能

中间件函数是那些可以访问请求对象（ `req` ），响应对象（ `res` ）以及应用程序请求 - 响应周期中的`next`函数的函数。这些函数的目标是修改任务的请求和响应对象，如解析请求体，添加响应头，对请求 - 响应周期进行其他更改，结束请求 - 响应周期以及调用下一个中间件函数。

`next`功能是Express路由器中的一个功能，用于执行当前中间件之后的其他中间件功能。如果中间件函数确实包含`next()` ，则意味着请求 - 响应周期在那里结束。函数`next()`的名称完全是仲裁的，你可以随意命名，但是坚持最佳实践并尝试遵循一些约定很重要，特别是如果你正在与其他开发人员合作。

此外，在编写自定义中间件时，不要忘记向其添加`next()`函数。如果你没有提到`next()` ，请求 - 响应周期将在不知名的地方挂起，你的servr可能导致客户端超时。

让我们使用创建自定义中间件功能来掌握对这个概念的理解。以此代码为例：

```javascript
const express = require('express'); 
 const app = express(); 
 
 // Simple request time logger 
 app.use((req, res, next) => { 
   console.log("A new request received at " + Date.now()); 
 
   // This function call tells that more processing is 
   // required for the current request and is in the next middleware 
   function/route handler. 
   next(); 
 }); 
 
 app.get('/home', (req, res) => { 
  res.send('Home Page'); 
 }); 
 
 app.get('/about', (req, res) => { 
  res.send('About Page'); 
 }); 
 
 app.listen(3000, () => console.log('Example app listening on port 3000!')); 
```

要设置任何中间件，无论是自定义还是可用作npm模块，我们都使用`app.use()`函数。它作为一个可选参数路径和一个必需参数回调。在我们的例子中，我们没有使用可选的参数路​​径。

```javascript
app.use((req, res, next) => { 
  console.log('A new request received at ' + Date.now()); 
  next(); 
 }); 
```

为客户端发出的每个请求调用上述中间件函数。运行服务器时，您会注意到，对于端点`/`上的每个浏览器请求，您将在终端中看到一条消息：

```shell
A new request received at 1467267512545 
```

中间件功能可用于特定路由。请参阅以下示例：

```javascript
const express = require('express'); 
 const app = express(); 
 
 //Simple request time logger for a specific route 
 app.use('/home', (req, res, next) => { 
  console.log('A new request received at ' + Date.now()); 
  next(); 
 }); 
 
 app.get('/home', (req, res) => { 
  res.send('Home Page'); 
 }); 
 
 app.get('/about', (req, res) => { 
  res.send('About Page'); 
 }); 
 
 app.listen(3000, () => console.log('Example app listening on port 3000!')); 
```

这次，当客户端请求端点`/home`时，您将只看到类似的提示，因为`app.use()`提到了该路由。当客户端请求端点`/about`时，终端中不会显示任何`/about` 。

中间件函数的顺序很重要，因为它们定义何时调用哪个中间件函数。在上面的例子中，如果我们在中间件`app.use('/home')...`之前定义路由`app.get('/home')...` `app.use('/home')...` ，则不会调用中间件函数。

### 第三方中间件功能

中间件功能是有用的模式，允许开发人员在其应用程序中重用代码，甚至以NPM模块的形式与其他人共享。中间件的基本定义是一个带有三个参数的函数：request（或req），response（res），以及我们在上一节中观察到的next。

通常在我们的基于Express的服务器应用程序中，我们将使用第三方中间件功能。这些功能由Express本身提供。它们就像可以使用npm安装的插件，这就是Express灵活的原因。

Express应用程序中一些最常用的中间件功能是：

#### bodyParser

它允许开发人员处理传入的数据，例如正文有效负载。有效负载只是我们从要处理的客户端接收的数据。对POST方法最有用。它安装使用：

```shell
npm install --save body-parser 
```

用法：

```javascript
const bodyParser = require('body-parser'); 
 
 // To parse URL encoded data 
 app.use(bodyParser.urlencoded({ extended: false })); 
 
 // To parse json data 
 app.use(bodyParser.json()); 
```

它可能是任何Express应用程序中最常用的第三方中间件功能之一。

#### cookieParser

它解析Cookie标头并使用由cookie名称键入的对象填充`req.cookies` 。要安装它，

```shell
$ npm install --save cookie-parser 
```

```javascript
const cookieParser = require('cookie-parser'); 
 app.use(cookieParser()); 
```

#### 会议

此中间件功能使用给定选项创建会话中间件。会话通常用于登录/注册等应用程序。

```shell
$ npm install --save session 
```

```javascript
app.use( 
  session({ 
    secret: 'arbitary-string', 
    resave: false, 
    saveUninitialized: true, 
    cookie: { secure: true } 
  }) 
 ); 
```

### 摩根

摩根中间件根据指定的输出格式跟踪所有请求和其他重要信息。

```shell
npm install --save morgan 
```

```javascript
const logger = require('morgan'); 
 // ... Configurations 
 app.use(logger('common')); 
```

`common`是预定义格式的案例，您可以在应用程序中使用它。还有其他预定义格式，例如tiny和dev，但您也可以使用morgan可用的字符串参数定义您自己的自定义格式。

此[链接](https://expressjs.com/en/resources/middleware.html)提供了最常用的中间件功能列表。

## 提供静态文件

提供静态文件，如CSS样式表，图像等.Express提供了一个内置的中间件函数`express.static` 。静态文件是客户端从服务器下载的那些文件。

它是Express框架附带的唯一中间件功能，我们可以直接在我们的应用程序中使用它。所有其他中间件都是第三方。

默认情况下，Express不允许提供静态文件。我们必须使用这个中间件功能。开发Web应用程序的一种常见做法是将所有静态文件存储在项目根目录下的“public”目录下。我们可以通过在`index.js`文件中写入来提供此文件夹以提供静态文件：

```javascript
app.use(express.static('public')); 
```

现在，将加载公共目录中的静态文件。

```shell
http://localhost:3000/css/style.css 
 http://localhost:3000/images/logo.png 
 http://localhost:3000/images/bg.png 
 http://localhost:3000/index.html 
```

### 多个静态目录

要使用多个静态资产目录，请多次调用`express.static`中间件函数：

```javascript
app.use(express.static('public')); 
 app.use(express.static('files')); 
```

### 虚拟路径前缀

还可以提供修复路径前缀作为`express.static`中间件功能的第一个参数。这称为_虚拟路径前缀，_因为项目中不存在实际路径。

```javascript
app.use('/static', express.static('public')); 
```

如果我们现在尝试加载文件：

```shell
http://localhost:3000/static/css/style.css 
 http://localhost:3000/static/images/logo.png 
 http://localhost:3000/static/images/bg.png 
 http://localhost:3000/static/index.html 
```

当提供多个目录来提供静态文件时，这种技术会派上用场。前缀用于帮助区分多个目录。

## 模板引擎

模板引擎是允许我们使用不同模板语言的库。模板语言是一组特殊的指令（语法和控制结构），用于指示引擎如何处理数据。使用Express可以轻松使用模板引擎。流行的模板引擎，如Pug，EJS，Swig和Handlebars与Express兼容。但是，Express附带了一个默认模板引擎Jade，这是Pug的第一个发布版本。

为了演示如何使用模板引擎，我们将使用Pug。它是一个功能强大的模板引擎，提供过滤器，包含，插值等功能。要使用它，我们必须首先使用`npm`作为模块安装在我们的项目中。

```shell
npm install --save pug 
```

此命令将安装pug并验证安装是否正确，只需查看`package.json`文件即可。要首先将它与我们的应用程序一起使用，我们必须将其设置为模板引擎并创建一个新目录“./views”，我们将存储与模板引擎相关的所有文件。

```javascript
app.set('view engine', 'pug'); 
 app.set('views', './views'); 
```

由于我们使用`app.set()`来指示我们的服务器文件中的配置，因此我们必须在定义任何路由或中间件函数之前放置它们。

在`views` ，创建名为`index.pug`文件。

```pug
doctype html 
  html 
    head 
      tite="Hello from Pug" 
    body 
      p.greetings Hello World! 
```

要运行此页面，我们将向应用程序添加以下路由。

```javascript
app.get('/hello', (req, res) => { 
  res.render('index'); 
 }); 
```

由于我们已经将Pug设置为我们的模板引擎，因此在`res.render`我们不必提供`.pug`扩展名。此函数将任何`.pug`文件中的代码呈现为HTML，以供客户端显示。浏览器只能呈现HTML文件。如果您现在启动服务器，并访问路由`http://localhost:3000/hello`您将看到正确呈现的输出`Hello World` 。

在Pug中，您必须注意我们不必像在HTML中那样将结束标记写入元素。上面的代码将呈现为HTML格式：

```html

<!DOCTYPE html> 
 <html> 
   <head> 
      <title>Hello from Pug</title> 
   </head> 
 
   <body> 
      <p class = "greetings">Hello World!</p> 
   </body> 
 </html> 
```

使用模板引擎优于原始HTML文件的优点是它们为执行数据任务提供支持。 HTML无法直接呈现数据。 Angular和React等框架与模板引擎共享此行为。

您还可以直接从路径处理函数将值传递给模板引擎。

```javascript
app.get('/', (req, res) => { 
  res.render('index', { title: 'Hello from Pug', message: 'Hello World!' }); 
 }); 
```

对于上面的情况，我们的`index.pug`文件将写为：

```pug
doctype html 
  html 
    head 
      title= title 
    body 
      h1= message 
```

输出将与先前的情况相同。

## Express App的项目结构

由于Express不会对使用它的开发人员施加太多强制，因此有时它会对应该遵循的项目结构有点压倒性。它没有正式定义的结构，但任何基于Node.js的应用程序遵循的最常见用例是分离不同模块中的不同任务。这意味着拥有单独的JavaScript文件。

让我们看一下基于Express的Web应用程序的典型结构。
```
project-root/ 
   node_modules/          // This is where the packages installed are stored 
   config/ 
      db.js                // Database connection and configuration 
      credentials.js       // Passwords/API keys for external services used by your app 
      config.js            // Environment variables 
   models/                 // For mongoose schemas 
      books.js 
      things.js 
   routes/                 // All routes for different entities in different files 
      books.js 
      things.js 
   views/ 
      index.pug 
      404.pug 
        ... 
   public/                 // All static files 
      images/ 
      css/ 
      javascript/ 
   app.js 
   routes.js               // Require all routes in this and then require this file in 
   app.js 
   package.json 
```

这种模式通常称为MVC，模型 - 视图 - 控制器。仅仅因为我们的数据库模型，应用程序的UI和控制器（在我们的例子中是路由）被编写并存储在单独的文件中。如果您希望将来引入更多路由或静态文件并且代码可维护，则此设计模式可使任何Web应用程序易于扩展。