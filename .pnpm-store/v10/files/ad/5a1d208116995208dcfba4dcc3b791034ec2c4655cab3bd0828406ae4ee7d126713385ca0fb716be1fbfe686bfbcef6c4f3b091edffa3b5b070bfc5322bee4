[![logo][logo-image]][logo-url]

---

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

[logo-image]: ./logo.png
[logo-url]: https://npmjs.org/package/detect-port
[npm-image]: https://img.shields.io/npm/v/detect-port.svg
[npm-url]: https://npmjs.org/package/detect-port
[travis-image]: https://img.shields.io/travis/node-modules/detect-port.svg
[travis-url]: https://travis-ci.org/node-modules/detect-port
[codecov-image]: https://img.shields.io/coveralls/node-modules/detect-port.svg
[codecov-url]: https://codecov.io/gh/node-modules/detect-port
[download-image]: https://img.shields.io/npm/dm/detect-port.svg
[download-url]: https://npmjs.org/package/detect-port

> Node.js implementation of port detector

## Who are using or has used

- ⭐⭐⭐[eggjs/egg](//github.com/eggjs/egg)
- ⭐⭐⭐[alibaba/ice](//github.com/alibaba/ice)
- ⭐⭐⭐[alibaba/uirecorder](//github.com/alibaba/uirecorder)
- ⭐⭐⭐[facebook/create-react-app](//github.com/facebook/create-react-app/blob/main/packages/react-dev-utils/package.json)
- ⭐⭐⭐[facebook/flipper](//github.com/facebook/flipper)
- ⭐⭐⭐[umijs/umi](//github.com/umijs/umi)
- ⭐⭐⭐[gatsbyjs/gatsby](//github.com/gatsbyjs/gatsby)
- ⭐⭐⭐[electron-react-boilerplate/electron-react-boilerplate](//github.com/electron-react-boilerplate/electron-react-boilerplate)
- ⭐⭐⭐[zeit/micro](//github.com/zeit/micro)
- ⭐⭐⭐[rails/webpacker](//github.com/rails/webpacker)
- ⭐⭐⭐[storybookjs/storybook](//github.com/storybookjs/storybook)

[For more](//github.com/node-modules/detect-port/network/dependents)

## Usage

```bash
$ npm i detect-port --save
```

```javascript
const detect = require('detect-port');
/**
 * use as a promise
 */

detect(port)
  .then(_port => {
    if (port == _port) {
      console.log(`port: ${port} was not occupied`);
    } else {
      console.log(`port: ${port} was occupied, try port: ${_port}`);
    }
  })
  .catch(err => {
    console.log(err);
  });

```

## Command Line Tool

```bash
$ npm i detect-port -g
```

### Quick Start

```bash
# get an available port randomly
$ detect

# detect pointed port
$ detect 80

# output verbose log
$ detect --verbose

# more help
$ detect --help
```

## FAQ

Most likely network error, check that your `/etc/hosts` and make sure the content below:

```
127.0.0.1       localhost
255.255.255.255 broadcasthost
::1             localhost
```

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars.githubusercontent.com/u/156269?v=4" width="100px;"/><br/><sub><b>fengmk2</b></sub>](https://github.com/fengmk2)<br/>|[<img src="https://avatars.githubusercontent.com/u/1044425?v=4" width="100px;"/><br/><sub><b>ziczhu</b></sub>](https://github.com/ziczhu)<br/>|[<img src="https://avatars.githubusercontent.com/u/810438?v=4" width="100px;"/><br/><sub><b>gaearon</b></sub>](https://github.com/gaearon)<br/>|[<img src="https://avatars.githubusercontent.com/u/34906299?v=4" width="100px;"/><br/><sub><b>chnliquan</b></sub>](https://github.com/chnliquan)<br/>|[<img src="https://avatars.githubusercontent.com/u/360661?v=4" width="100px;"/><br/><sub><b>popomore</b></sub>](https://github.com/popomore)<br/>|
| :---: | :---: | :---: | :---: | :---: | :---: |
[<img src="https://avatars.githubusercontent.com/u/52845048?v=4" width="100px;"/><br/><sub><b>snapre</b></sub>](https://github.com/snapre)<br/>|[<img src="https://avatars.githubusercontent.com/u/56271907?v=4" width="100px;"/><br/><sub><b>yavuzakyuz</b></sub>](https://github.com/yavuzakyuz)<br/>|[<img src="https://avatars.githubusercontent.com/u/197375?v=4" width="100px;"/><br/><sub><b>antife-yinyue</b></sub>](https://github.com/antife-yinyue)<br/>

This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Wed Sep 21 2022 23:10:27 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

## License

[MIT](LICENSE)
