# color-string

> library for parsing and generating CSS color strings.

## Install

With [npm](http://npmjs.org/):

```console
$ npm install color-string
```

## Usage

### Parsing

```js
colorString.get('#FFF')                          // {model: 'rgb', value: [255, 255, 255, 1]}
colorString.get('#FFFA')                         // {model: 'rgb', value: [255, 255, 255, 0.67]}
colorString.get('#FFFFFFAA')                     // {model: 'rgb', value: [255, 255, 255, 0.67]}
colorString.get('hsl(360, 100%, 50%)')           // {model: 'hsl', value: [0, 100, 50, 1]}
colorString.get('hsl(360 100% 50%)')             // {model: 'hsl', value: [0, 100, 50, 1]}
colorString.get('hwb(60, 3%, 60%)')              // {model: 'hwb', value: [60, 3, 60, 1]}

colorString.get.rgb('#FFF')                      // [255, 255, 255, 1]
colorString.get.rgb('blue')                      // [0, 0, 255, 1]
colorString.get.rgb('rgba(200, 60, 60, 0.3)')    // [200, 60, 60, 0.3]
colorString.get.rgb('rgba(200 60 60 / 0.3)')     // [200, 60, 60, 0.3]
colorString.get.rgb('rgba(200 60 60 / 30%)')     // [200, 60, 60, 0.3]
colorString.get.rgb('rgb(200, 200, 200)')        // [200, 200, 200, 1]
colorString.get.rgb('rgb(200 200 200)')          // [200, 200, 200, 1]

colorString.get.hsl('hsl(360, 100%, 50%)')       // [0, 100, 50, 1]
colorString.get.hsl('hsl(360 100% 50%)')         // [0, 100, 50, 1]
colorString.get.hsl('hsla(360, 60%, 50%, 0.4)')  // [0, 60, 50, 0.4]
colorString.get.hsl('hsl(360 60% 50% / 0.4)')    // [0, 60, 50, 0.4]

colorString.get.hwb('hwb(60, 3%, 60%)')          // [60, 3, 60, 1]
colorString.get.hwb('hwb(60, 3%, 60%, 0.6)')     // [60, 3, 60, 0.6]

colorString.get.rgb('invalid color string')      // null
```

### Generation

```js
colorString.to.hex([255, 255, 255])     // "#FFFFFF"
colorString.to.hex([0, 0, 255, 0.4])    // "#0000FF66"
colorString.to.hex([0, 0, 255], 0.4)    // "#0000FF66"
colorString.to.rgb([255, 255, 255])     // "rgb(255, 255, 255)"
colorString.to.rgb([0, 0, 255, 0.4])    // "rgba(0, 0, 255, 0.4)"
colorString.to.rgb([0, 0, 255], 0.4)    // "rgba(0, 0, 255, 0.4)"
colorString.to.rgb.percent([0, 0, 255]) // "rgb(0%, 0%, 100%)"
colorString.to.keyword([255, 255, 0])   // "yellow"
colorString.to.hsl([360, 100, 100])     // "hsl(360, 100%, 100%)"
colorString.to.hwb([50, 3, 15])         // "hwb(50, 3%, 15%)"

// all functions also support swizzling
colorString.to.rgb(0, [0, 255], 0.4)    // "rgba(0, 0, 255, 0.4)"
colorString.to.rgb([0, 0], [255], 0.4)  // "rgba(0, 0, 255, 0.4)"
colorString.to.rgb([0], 0, [255, 0.4])  // "rgba(0, 0, 255, 0.4)"
```
