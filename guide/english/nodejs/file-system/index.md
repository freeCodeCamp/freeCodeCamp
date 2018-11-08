---
title: File System
---
## File System

The Node.js File System module allows you to work with the file system on your computer.

Node.js has a set of built-in modules which you can use without any further installation. Similarly **File System module** contains a set of functions which are required to perform different operations on files such as read and write operation.

In order to to include a module, use the ```require()``` function with the name of the module.

```javascript
const fs = require('fs');
```

Common use for the File System module:

* Read files
* Create files
* Update files
* Delete files
* Rename files

## Reading a file

The ```fs.readFile()``` method is used to read file on your computer. It takes three arguments - filename, encoding and a call back function.

Node.js code to read file from your computer and return the content to the console.

```javascript
const fs = require('fs');
fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Content present in input.txt file : " + data.toString());
    }
});
```
The above code reads a file *input.txt* from your computer and returns the content to the console.

### Steps for execution :

* You should have Node.js installed in your computer.
* Create a file *app.js* and paste the above code.
* Create a file *input.txt* and write some content into it.
* Now open your console in the working directory and execute the command ``` node app.js ```.

*Note* : The input.txt file should be present in the same directory where your Node.js code file is present otherwise it will throw an error.

## Writing in a file

The ```fs.writeFile()``` method takes three arguments - filename, content and a call back function.

Node.js code to write content into file.

```javascript
const fs = require('fs');
fs.writeFile('output.txt', "New content added", (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("The file is saved");
    }
});
```
The above code creates a file *output.txt* and add content *New content added* to it.

### Steps for execution :

* You should have Node.js installed in your computer.
* Create a file *app.js* and paste the above code.
* Now open your console in the working directory and execute the command ``` node app.js ```.

*Note* : If file does not exist then the ```fs.writeFile()``` method creates a file and writes the content into it. On the contrary if the file exists then it overwrites the content in the file.

## Resources

* [Node.js API](https://nodejs.org/api/fs.html#fs_file_system)
* [W3 Schools](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)

