---
title: File System
---

## File System

The Node.js File System module allows you to work with the file system on your computer.

Node.js has a set of built-in modules which you can use without any further installation. Similarly **File System module** contains a set of functions which are required to perform different operations on files such as read and write operation.

In order to to include a module, use the `require()` function with the name of the module.

```javascript
const fs = require('fs');
```

Common use for the File System module:

- Read files
- Create files
- Update files
- Append to files
- Delete files
- Rename files
- Move files

## Reading a file

The ```fs.readFile()``` method is used to read file on your computer. It takes three arguments - filename, encoding and a call back function.

Node.js code to read file from your computer and return the content to the console.

**Asynchronous**

```javascript
const fs = require('fs');
fs.readFile('path/to/input.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log("Content present in input.txt file : " + data.toString());
});
```

**Synchronous**

```javascript
const fs = require('fs');
try {
  var data = fs.readFileSync('path/to/input.txt', 'utf-8');
} catch (err){
  console.log(err.message);
}
console.log("Content present in input.txt file: " + data.toString());
```

The above code reads a file *input.txt* from your computer and returns the content to the console.

### Steps for execution :

- You should have Node.js installed in your computer.
- Create a file *app.js* and paste the above code.
- Create a file *input.txt* and write some content into it.
- Now open your console in the working directory and execute the command `node app.js`.

*Note* : The input.txt file should be present in the same directory where your Node.js code file is present otherwise it will throw an error.

## Writing in a file

The `fs.writeFile()` method takes three arguments - filename, content and a call back function.

Node.js code to write content into file.

**Asynchronous**

```javascript
const fs = require('fs');
fs.writeFile('path/to/output.txt', "New content added", (err) => {
  if (err) throw err;
    console.log("The file is saved");
});
```

**Synchronous**

```javascript
const fs = require('fs');
var data = "New Content Added"
try {
    fs.writeFileSync('path/to/output.txt', data, encoding='utf-8', flag='w')
    console.log("The file us saved")
} catch (err) {
    console.log("The file could not be updated due to: " + err.message);
}
```

The above code creates a file *output.txt* and add content *New content added* to it.

### Steps for execution :

- You should have Node.js installed in your computer.
- Create a file *app.js* and paste the above code.
- Now open your console in the working directory and execute the command `node app.js`.

*Note* : If file does not exist then the `fs.writeFile()` method creates a file and writes the content into it. On the contrary if the file exists then it overwrites the content in the file.

## Append to files

The ```fs.appendFile()``` method is used to append text at the end of a file on your computer. It takes three arguments - filename, text to be appended at the end and a call back function.

```javascript
const fs = require('fs');
fs.appendFile('output.txt', ' This is added at the end.', function (err) {
    if (err) {
        console.log(err);
    }
	else {
		console.log('Text Appended!');
    }
});
```

The above code adds ' *This is added at the end.*' at the end of *input.txt* file on your computer.

### Steps for execution :

- You should have Node.js installed in your computer.
- Create a file *app.js* and paste the above code.
- Create a file *output.txt*.
- Now open your console in the working directory and execute the command `node app.js`.

*Note* : The *output.txt* file should be present in the same directory where your Node.js code file is present otherwise it will throw an error.

## Delete files

The `fs.unlink()` method is used to files from your computer. It takes two arguments - filename and a call back function.

```javascript
const fs = require('fs');
fs.unlink('delete_me.txt', function (err) {
	if (err) {
        console.log(err);
    }
	else {
        console.log('File deleted!');
    }
});
```

The above deletes *input.txt* file from your computer.

### Steps for execution :

- You should have Node.js installed in your computer.
- Create a file *app.js* and paste the above code.
- Create a file *delete_me.txt*.
- Now open your console in the working directory and execute the command `node app.js`.

*Note* : The file you want to delete should exist otherwise it will throw an error.In this example the *delete_me.txt* file is in the same directory as the Node.js code file.

## Rename files

The `fs.rename()` method is used to rename a file on your computer. It takes three arguments - filename, name to rename to and a call back function.

```javascript
const fs = require('fs');
fs.rename('myfile.txt', 'myrenamedfile.txt', function (err) {
  if (err) {
    console.log(err);
	} else {
		console.log('File Renamed!');
  }
});
```

The above code will rename *myfile.txt* file to *myrenamedfile.txt*.

### Steps for execution :

- You should have Node.js installed in your computer.
- Create a file *app.js* and paste the above code.
- Create a file *myfile.txt*.
- Now open your console in the working directory and execute the command `node app.js`.

*Note* : The *myfile.txt* file should be present in the same directory where your Node.js code file is present otherwise it will throw an error.

## Move files

Moving files is pretty much the same as renaming them.

```javascript
const fs = require('fs');
fs.rename('myfile.txt', 'copy/myrenamedfile.txt', function (err) {
  if (err) {
    console.log(err);
	} else {
		console.log('File Moved!');
  }
});
```

The above code will move *myfile.txt* file to a directory called *copy* with the name *myrenamedfile.txt*.

### Steps for execution :

- You should have Node.js installed in your computer.
- Create a file *app.js* and paste the above code.
- Create a file *myfile.txt*.
- Create a directory named *copy*
- Now open your console in the working directory and execute the command `node app.js`.

*Note* : The *myfile.txt* file should be present in the same directory where your Node.js code file is present otherwise it will throw an error. Also the directory you want to copy the file to must exist otherwise it will throw an error

## Resources

- [Node.js API](https://nodejs.org/api/fs.html#fs_file_system)
- [W3 Schools](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
