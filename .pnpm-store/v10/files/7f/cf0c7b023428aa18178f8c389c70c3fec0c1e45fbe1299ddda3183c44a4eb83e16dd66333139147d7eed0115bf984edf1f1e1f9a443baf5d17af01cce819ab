address
=======

[![NPM version][npm-image]][npm-url]
[![Node.js CI](https://github.com/node-modules/address/actions/workflows/nodejs.yml/badge.svg)](https://github.com/node-modules/address/actions/workflows/nodejs.yml)
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/address.svg?style=flat-square
[npm-url]: https://npmjs.org/package/address
[coveralls-image]: https://img.shields.io/coveralls/node-modules/address.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/node-modules/address?branch=master
[download-image]: https://img.shields.io/npm/dm/address.svg?style=flat-square
[download-url]: https://npmjs.org/package/address

Get current machine IP, MAC and DNS servers.

DNS servers receive from `/etc/resolv.conf`.

## Install

```bash
$ npm install address
```

## Usage

Get IP is sync and get MAC is async for now.

```js
const address = require('address');

// default interface 'eth' on linux, 'en' on osx.
address.ip();   // '192.168.0.2'
address.ipv6(); // 'fe80::7aca:39ff:feb0:e67d'
address.mac(function (err, addr) {
  console.log(addr); // '78:ca:39:b0:e6:7d'
});

// local loopback
address.ip('lo'); // '127.0.0.1'

// vboxnet MAC
address.mac('vboxnet', function (err, addr) {
  console.log(addr); // '0a:00:27:00:00:00'
});
```

### Get all addresses: IPv4, IPv6 and MAC

```js
address((err, addrs) => {
  console.log(addrs.ip, addrs.ipv6, addrs.mac);
  // '192.168.0.2', 'fe80::7aca:39ff:feb0:e67d', '78:ca:39:b0:e6:7d'
});

address('vboxnet', (err, addrs) => {
  console.log(addrs.ip, addrs.ipv6, addrs.mac);
  // '192.168.56.1', null, '0a:00:27:00:00:00'
});
```

### Get an interface info with family

```js
address.interface('IPv4', 'eth1');
// { address: '192.168.1.1', family: 'IPv4', mac: '78:ca:39:b0:e6:7d' }
```

### Get DNS servers

```js
address.dns((err, addrs) => {
  console.log(addrs);
  // ['10.13.2.1', '10.13.2.6']
});
```

## License

[MIT](LICENSE.txt)

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/156269?v=4" width="100px;"/><br/><sub><b>fengmk2</b></sub>](https://github.com/fengmk2)<br/>|[<img src="https://avatars.githubusercontent.com/u/1147375?v=4" width="100px;"/><br/><sub><b>alsotang</b></sub>](https://github.com/alsotang)<br/>|[<img src="https://avatars.githubusercontent.com/u/10237910?v=4" width="100px;"/><br/><sub><b>jkelleyrtp</b></sub>](https://github.com/jkelleyrtp)<br/>|[<img src="https://avatars.githubusercontent.com/u/1409643?v=4" width="100px;"/><br/><sub><b>mariodu</b></sub>](https://github.com/mariodu)<br/>|[<img src="https://avatars.githubusercontent.com/u/11351322?v=4" width="100px;"/><br/><sub><b>mathieutu</b></sub>](https://github.com/mathieutu)<br/>|[<img src="https://avatars.githubusercontent.com/u/2139038?v=4" width="100px;"/><br/><sub><b>zhangyuheng</b></sub>](https://github.com/zhangyuheng)<br/>|
| :---: | :---: | :---: | :---: | :---: | :---: |
[<img src="https://avatars.githubusercontent.com/u/1400114?v=4" width="100px;"/><br/><sub><b>coolme200</b></sub>](https://github.com/coolme200)<br/>|[<img src="https://avatars.githubusercontent.com/u/5856440?v=4" width="100px;"/><br/><sub><b>whxaxes</b></sub>](https://github.com/whxaxes)<br/>

This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Tue Sep 13 2022 09:09:11 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->
