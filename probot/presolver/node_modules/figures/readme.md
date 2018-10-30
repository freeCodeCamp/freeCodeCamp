# figures [![Build Status: Linux](https://travis-ci.org/sindresorhus/figures.svg?branch=master)](https://travis-ci.org/sindresorhus/figures) [![Build status: Windows](https://ci.appveyor.com/api/projects/status/mb743hl70269be3r/branch/master?svg=true)](https://ci.appveyor.com/project/sindresorhus/figures/branch/master)

> Unicode symbols with Windows CMD fallbacks

[![](screenshot.png)](index.js)

[*and more...*](index.js)

Windows CMD only supports a [limited character set](http://en.wikipedia.org/wiki/Code_page_437).


## Install

```
$ npm install --save figures
```


## Usage

See the [source](index.js) for supported symbols.

```js
const figures = require('figures');

console.log(figures('✔︎ check'));
// On real OSes:  ✔︎ check
// On Windows:    √ check

console.log(figures.tick);
// On real OSes:  ✔︎
// On Windows:    √
```


## API

### figures(input)

Returns the input with replaced fallback unicode symbols on Windows.

All the below [figures](#figures) are attached to the main export as shown in the example above.

#### input

Type: `string`

String where the unicode symbols will be replaced with fallback symbols depending on the OS.


## Figures

| Name               | Real OSes | Windows |
| ------------------ | :-------: | :-----: |
| tick               |     ✔     |    √    |
| cross              |     ✖     |    ×    |
| star               |     ★     |    *    |
| square             |     ▇     |    █    |
| squareSmall        |     ◻     |   [ ]   |
| squareSmallFilled  |     ◼     |   [█]   |
| play               |     ▶     |    ►    |
| circle             |     ◯     |   ( )   |
| circleFilled       |     ◉     |   (*)   |
| circleDotted       |     ◌     |   ( )   |
| circleDouble       |     ◎     |   ( )   |
| circleCircle       |     ⓞ     |   (○)   |
| circleCross        |     ⓧ     |   (×)   |
| circlePipe         |     Ⓘ     |   (│)   |
| circleQuestionMark |     ?⃝    |   (?)   |
| bullet             |     ●     |    *    |
| dot                |     ․     |    .    |
| line               |     ─     |    ─    |
| ellipsis           |     …     |   ...   |
| pointer            |     ❯     |    >    |
| pointerSmall       |     ›     |    »    |
| info               |     ℹ     |    i    |
| warning            |     ⚠     |    ‼    |
| hamburger          |     ☰     |    ≡    |
| smiley             |     ㋡     |    ☺    |
| mustache           |     ෴     |   ┌─┐   |
| heart              |     ♥     |    ♥    |
| arrowUp            |     ↑     |    ↑    |
| arrowDown          |     ↓     |    ↓    |
| arrowLeft          |     ←     |    ←    |
| arrowRight         |     →     |    →    |
| radioOn            |     ◉     |   (*)   |
| radioOff           |     ◯     |   ( )   |
| checkboxOn         |     ☒     |   [×]   |
| checkboxOff        |     ☐     |   [ ]   |
| checkboxCircleOn   |     ⓧ     |   (×)   |
| checkboxCircleOff  |     Ⓘ     |   ( )   |
| questionMarkPrefix |     ?⃝    |    ？    |
| oneHalf            |     ½     |   1/2   |
| oneThird           |     ⅓     |   1/3   |
| oneQuarter         |     ¼     |   1/4   |
| oneFifth           |     ⅕     |   1/5   |
| oneSixth           |     ⅙     |   1/6   |
| oneSeventh         |     ⅐     |   1/7   |
| oneEighth          |     ⅛     |   1/8   |
| oneNinth           |     ⅑     |   1/9   |
| oneTenth           |     ⅒     |   1/10  |
| twoThirds          |     ⅔     |   2/3   |
| twoFifths          |     ⅖     |   2/5   |
| threeQuarters      |     ¾     |   3/4   |
| threeFifths        |     ⅗     |   3/5   |
| threeEighths       |     ⅜     |   3/8   |
| fourFifths         |     ⅘     |   4/5   |
| fiveSixths         |     ⅚     |   5/6   |
| fiveEighths        |     ⅝     |   5/8   |
| sevenEighths       |     ⅞     |   7/8   |


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
