---
id: 695cc8f280fef0cc3bed02c9
title: What Is the os Module and How Does It Work?
challengeType: 19
dashedName: what-is-the-os-module-and-how-does-it-work
---

# --description--

The OS module is another standard module that comes built into Node.js.

It lets you interact with the current operating system Node is running on so you can access vital information like the OS type, CPU details, available memory, total memory, network interfaces, and more.

To use the OS module, you import it this way:

```js
const os = require("os");
```

The OS module provides several methods you can use to make your application more system-aware. Let's look at some common ones.

The `platform()` method retrieves the operating system Node is currently running on:

```js
const os = require("os");
console.log(os.platform()); // darwin
```

It can be useful for implementing cross-platform scripting:

```js
if (os.platform() === 'win32') {
 // Windows specific code
} else {
 // Non-Windows specific code
}
```

The `arch()` method shows a string representing the CPU architecture Node.js was compiled for:

```js
const os = require("os");
console.log(os.arch()); // arm64
```

This can be useful if you want users to download the correct binaries and dependencies for a given architecture.

Other possible values are `'x64'`, `'arm'`, `'arm64'`, `'ia32'`, `'mips'`, `'ppc'`, and others.

`type()` gets the official OS name, so you can programmatically identify operating systems:

```js
const os = require("os");
console.log(os.type()); // Darwin (the core OS for macOS, iOS, and other Apple products)
```

`release()` shows the system's OS kernel version, the core part of the operating system that manages system resources and communication between hardware and software components. This method can be useful for tracking compatibility between OS kernel versions and server requirements.

It returns this as a string like `'20.6.0'`:

```js
const os = require("os");
console.log(os.release()); // 25.0.0
```

`version()` returns the specific operating system version with more details than the `release()` method:

```js
const os = require("os");
console.log(os.version());
// Darwin Kernel Version 25.0.0: Wed Sep 17 21:41:39 PDT 2025;
// root:xnu-12377.1.9~141/RELEASE_ARM64_T8103
```

`cpus()` returns an array of objects with details about each logical CPU core. This can help monitor CPU load:

```js
const os = require("os");
console.log(os.cpus());

/*
[
 {
   model: 'Apple M1',
   speed: 2400,
   times: { user: 2184260, nice: 0, sys: 1767340, idle: 8344200, irq: 0 }
 },
 {
   model: 'Apple M1',
   speed: 2400,
   times: { user: 2049430, nice: 0, sys: 1641050, idle: 8612980, irq: 0 }
 },
 {
   model: 'Apple M1',
   speed: 2400,
   times: { user: 1162300, nice: 0, sys: 1193390, idle: 9986140, irq: 0 }
 },
 ...
]
*/
```

`uptime()` shows the time since the system was booted up. It can help determine how long servers have been running:

```js
const os = require("os");
console.log(os.uptime()); // 23047
```

`totalmem()` and `freemem()` show the total amount of system memory in bytes and free system memory in bytes, respectively:

```js
const os = require("os");
console.log(os.totalmem()); // 8589934592 (8 GB)
console.log(os.freemem()); // 93585408 (87 MB)
```

`userInfo()` returns an object containing information about the current system user:

```js
const os = require("os");
console.log(os.userInfo());

/*
[Object: null prototype] {
 uid: 502,
 gid: 20,
 username: 'user',
 homedir: '/Users/user',
 shell: '/bin/zsh'
}
*/
```

Lastly, `networkInterfaces()` returns an object containing only network interfaces that have been assigned a network address.

```js
console.log(os.networkInterfaces());

/*
{
  lo0: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    },
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    }
  ],
  en0: [
    {
      address: '192.168.1.10',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: 'aa:bb:cc:dd:ee:ff',
      internal: false,
      cidr: '192.168.1.10/24'
    },
    {
      address: 'fe80::abcd:1234:5678:9abc',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: 'aa:bb:cc:dd:ee:ff',
      internal: false,
      cidr: 'fe80::abcd:1234:5678:9abc/64',
      scopeid: 2
    }
  ],
  // ...more network interfaces
};
*/
```

# --questions--

## --text--

What do the `os.totalmem()` and `os.freemem()` methods in Node.js display?

## --answers--

The total and free memory used by Node.js only.

### --feedback--

These methods measure system-level memory, not app-level memory.

---

The total and free memory of a specific process.

### --feedback--

These methods measure system-level memory, not app-level memory.

---

The total and free disk storage space.

### --feedback--

These methods measure system-level memory, not app-level memory.

---

The total and free system memory in bytes.

## --video-solution--

4

## --text--

Which of these is a possible value returned by the `os.arch()` method in Node.js?

## --answers--

`'Windows'`

### --feedback--

Look out for what represents the CPU architecture Node.js was compiled for.

---

`'x64'`

---

`'intel'`

### --feedback--

Look out for what represents the CPU architecture Node.js was compiled for.

---

`'CPU1'`

### --feedback--

Look out for what represents the CPU architecture Node.js was compiled for.

## --video-solution--

2

## --text--

What does the Node.js OS module allow you to do?

## --answers--

Interact with the current operating system to access details like CPU, memory, and network info.

---

Interact with databases and perform SQL queries.

### --feedback--

Focus on what gives Node access to system-level info such as OS type and memory details.

---

Handle HTTP requests and responses between the client and server.

### --feedback--

Focus on what gives Node access to system-level info such as OS type and memory details.

---

Manage file uploads and read data from streams.

### --feedback--

Focus on what gives Node access to system-level info such as OS type and memory details.

## --video-solution--

1


