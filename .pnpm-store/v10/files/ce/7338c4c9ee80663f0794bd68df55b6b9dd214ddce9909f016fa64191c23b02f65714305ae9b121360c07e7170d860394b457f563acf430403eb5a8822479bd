// workaround for tty output truncation upon process.exit()
// https://github.com/nodejs/node/issues/6456

[process.stdout, process.stderr].forEach((s) => {
  s && s.isTTY && s._handle && s._handle.setBlocking &&
    s._handle.setBlocking(true)
});
