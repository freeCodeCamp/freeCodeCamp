write-file-atomic
-----------------

This is an extension for node's `fs.writeFile` that makes its operation
atomic and allows you set ownership (uid/gid of the file).

### var writeFileAtomic = require('write-file-atomic')<br>writeFileAtomic(filename, data, [options], callback)

* filename **String**
* data **String** | **Buffer**
* options **Object**
  * chown **Object**
    * uid **Number**
    * gid **Number**
  * encoding **String** | **Null** default = 'utf8'
  * fsync **Boolean** default = true
  * mode **Number** default = 438 (aka 0666 in Octal)
  * Promise **Object** default = native Promise object
callback **Function**

Atomically and asynchronously writes data to a file, replacing the file if it already
exists.  data can be a string or a buffer.

The file is initially named `filename + "." + murmurhex(__filename, process.pid, ++invocations)`.
If writeFile completes successfully then, if passed the **chown** option it will change
the ownership of the file. Finally it renames the file back to the filename you specified. If
it encounters errors at any of these steps it will attempt to unlink the temporary file and then
pass the error back to the caller.
If multiple writes are concurrently issued to the same file, the write operations are put into a queue and serialized in the order they were called, using Promises. Native promises are used by default, but you can inject your own promise-like object with the **Promise** option. Writes to different files are still executed in parallel.

If provided, the **chown** option requires both **uid** and **gid** properties or else
you'll get an error.

The **encoding** option is ignored if **data** is a buffer. It defaults to 'utf8'.

If the **fsync** option is **false**, writeFile will skip the final fsync call.

Example:

```javascript
writeFileAtomic('message.txt', 'Hello Node', {chown:{uid:100,gid:50}}, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
```

### var writeFileAtomicSync = require('write-file-atomic').sync<br>writeFileAtomicSync(filename, data, [options])

The synchronous version of **writeFileAtomic**.
