---
title: HTTP
---
## HTTP

Node.js has a set of built-in modules which you can use without any further installation. Similarly **HTTP module** contains a set of functions which are required to transfer data over the Hyper Text Transfer Protocol (HTTP).

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

In order to to include a module, use the ```require()``` function with the name of the module.

```javascript
const http = require('http');
```

## Node.js as a Web Server

The ```createServer()``` method is used to create an HTTP server. The first argument of the ```res.writeHead()``` method is the status code, ```200``` means that all is OK, the second argument is an object containing the response headers.

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

### Steps for execution :

* You should have Node.js installed in your computer.
* Create a file *app.js* and paste the above code.
* Now open your console in the working directory and execute the command ``` node app.js ```.
* Open your browser and enter ```http://localhost:8000```

*Note:* In order to close the server then press ```ctrl + C``` in your console for windows users.

## Resources

* [Node.js API](https://nodejs.org/api/http.html#http_http)
* [W3 Schools](https://www.w3schools.com/nodejs/nodejs_http.asp)
