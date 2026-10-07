write-file-atomic
-----------------

This is an extension for node's `fs.writeFile` that makes its operation
atomic and allows you set ownership (uid/gid of the file).

### var writeFileAtomic = require('write-file-atomic')<br>writeFileAtomic(filename, data, [options], [callback])

* filename **String**
* data **String** | **Buffer**
* options **Object** | **String**
  * chown **Object** default, uid & gid of existing file, if any
    * uid **Number**
    * gid **Number**
  * encoding **String** | **Null** default = 'utf8'
  * fsync **Boolean** default = true
  * mode **Number** default, from existing file, if any
  * tmpfileCreated **Function** called when the tmpfile is created
* callback **Function**

Atomically and asynchronously writes data to a file, replacing the file if it already
exists.  data can be a string or a buffer.

The file is initially named `filename + "." + murmurhex(__filename, process.pid, ++invocations)`.
Note that `require('worker_threads').threadId` is used in addition to `process.pid` if running inside of a worker thread.
If writeFile completes successfully then, if passed the **chown** option it will change
the ownership of the file. Finally it renames the file back to the filename you specified. If
it encounters errors at any of these steps it will attempt to unlink the temporary file and then
pass the error back to the caller.
If multiple writes are concurrently issued to the same file, the write operations are put into a queue and serialized in the order they were called, using Promises. Writes to different files are still executed in parallel.

If provided, the **chown** option requires both **uid** and **gid** properties or else
you'll get an error.  If **chown** is not specified it will default to using
the owner of the previous file.  To prevent chown from being ran you can
also pass `false`, in which case the file will be created with the current user's credentials.

If **mode** is not specified, it will default to using the permissions from
an existing file, if any.  Expicitly setting this to `false` remove this default, resulting
in a file created with the system default permissions.

If options is a String, it's assumed to be the **encoding** option. The **encoding** option is ignored if **data** is a buffer. It defaults to 'utf8'.

If the **fsync** option is **false**, writeFile will skip the final fsync call.

If the **tmpfileCreated** option is specified it will be called with the name of the tmpfile when created.

Example:

```javascript
writeFileAtomic('message.txt', 'Hello Node', {chown:{uid:100,gid:50}}, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
```

This function also supports async/await:

```javascript
(async () => {
  try {
    await writeFileAtomic('message.txt', 'Hello Node', {chown:{uid:100,gid:50}});
    console.log('It\'s saved!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
```

### var writeFileAtomicSync = require('write-file-atomic').sync<br>writeFileAtomicSync(filename, data, [options])

The synchronous version of **writeFileAtomic**.
