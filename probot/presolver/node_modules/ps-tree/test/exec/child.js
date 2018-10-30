// does nothing child process
console.log("Child process.id: " + process.pid);
console.log(" - - - - - - - - - - - - - - - - - - - - - - - ");

setTimeout(function () {
  /* Does nothing, but prevents exit */
}, 1000);
