# react-i18next [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Awesome%20react-i18next%20for%20react.js%20based%20on%20i18next%20internationalization%20ecosystem%20&url=https://github.com/i18next/react-i18next&via=jamuhl&hashtags=i18n,reactjs,js,dev)

[![CI](https://github.com/i18next/react-i18next/actions/workflows/CI.yml/badge.svg)](https://github.com/i18next/react-i18next/actions/workflows/CI.yml)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/i18next/react-i18next)
[![Coverage Status](https://coveralls.io/repos/github/i18next/react-i18next/badge.svg)](https://coveralls.io/github/i18next/react-i18next)
[![Quality][quality-badge]][quality-url]
[![npm][npm-dl-badge]][npm-url]

[npm-icon]: https://nodei.co/npm/react-i18next.png?downloads=true
[npm-url]: https://npmjs.org/package/react-i18next
[quality-badge]: https://npm.packagequality.com/shield/react-i18next.svg
[quality-url]: https://packagequality.com/#?package=react-i18next
[npm-dl-badge]: https://img.shields.io/npm/dw/react-i18next

### IMPORTANT:

Master Branch is the newest version using hooks (>= v10).

```bash
$ >=v10.0.0
npm i react-i18next
```

**react-native: To use hooks within react-native, you must use react-native v0.59.0 or higher**

For the legacy version please use the [v9.x.x Branch](https://github.com/i18next/react-i18next/tree/v9.x.x)

```bash
$ v9.0.10 (legacy)
npm i react-i18next@legacy
```

### Documentation

The documentation is published on [react.i18next.com](https://react.i18next.com) and PR changes can be supplied [here](https://github.com/i18next/react-i18next-gitbook).

The general i18next documentation is published on [www.i18next.com](https://www.i18next.com) and PR changes can be supplied [here](https://github.com/i18next/i18next-gitbook).

### What will my code look like?

**Before:** Your react code would have looked something like:

```html
...
<div>Just simple content</div>
<div>
  Hello <strong title="this is your name">{name}</strong>, you have {count} unread message(s). <Link to="/msgs">Go to messages</Link>.
</div>
...
```

**After:** With the trans component just change it to:

```html
...
<div>{t('simpleContent')}</div>
<Trans i18nKey="userMessagesUnread" count={count}>
  Hello <strong title={t('nameTitle')}>{{name}}</strong>, you have {{count}} unread message. <Link to="/msgs">Go to messages</Link>.
</Trans>
...
```

### 📖 What others say

- [How to properly internationalize a React application using i18next](https://locize.com/blog/react-i18next/) by Adriano Raiano
- [I18n with React and i18next](https://alligator.io/react/i18n-with-react-and-i18next) via Alligator.io by Danny Hurlburt
- [Ultimate Localization of React (Mobx) App with i18next](https://itnext.io/ultimate-localization-of-react-mobx-app-with-i18next-efab77712149) via itnext.io by Viktor Shevchenko
- [Internationalization for react done right Using the i18next i18n ecosystem](https://reactjsexample.com/internationalization-for-react-done-right-using-the-i18next-i18n-ecosystem/) via reactjsexample.com
- [How to translate React application with react-i18next](https://codetain.com/blog/how-to-translate-react-application-with-react-i18next/) via codetain.co by Norbert Suski
- [Building i18n with Gatsby](https://www.gatsbyjs.org/blog/2017-10-17-building-i18n-with-gatsby/) via gatsbyjs.org by Samuel Goudie
- [Get your react.js application translated with style](https://medium.com/@jamuhl/get-your-react-js-application-translated-with-style-4ad090aefc2c) by Jan Mühlemann
- [Translate your expo.io / react-native mobile application](https://medium.com/@jamuhl/translate-your-expo-io-react-native-mobile-application-aa220b2362d2) by Jan Mühlemann
- You're welcome to share your story...

### Why i18next?

- **Simplicity:** no need to change your webpack configuration or add additional babel transpilers, just use create-react-app and go.
- **Production ready** we know there are more needs for production than just doing i18n on the clientside, so we offer wider support on [serverside](https://www.i18next.com/overview/supported-frameworks) too (nodejs, php, ruby, .net, ...). **Learn once - translate everywhere**.
- **Beyond i18n** comes with [locize](https://locize.com) bridging the gap between development and translations - covering the whole translation process.

![ecosystem](https://raw.githubusercontent.com/i18next/i18next/master/assets/i18next-ecosystem.jpg)

### Localization workflow

Want to learn more about how seamless your internationalization and translation process can be?

[![video](example/locize/video_sample.png)](https://youtu.be/osScyaGMVqo)

[watch the video](https://youtu.be/osScyaGMVqo)

### Installation

Source can be loaded via [npm](https://www.npmjs.com/package/react-i18next) or [downloaded](https://github.com/i18next/react-i18next/blob/master/react-i18next.min.js) from this repo.

```
# npm package
$ npm install react-i18next
```

- If you don't use a module loader it will be added to `window.reactI18next`

### Do you like to read a more complete step by step tutorial?

[Here](https://locize.com/blog/react-i18next/) you'll find a simple tutorial on how to best use react-i18next.
Some basics of i18next and some cool possibilities on how to optimize your localization workflow.

### Examples

- [Example react](https://github.com/i18next/react-i18next/tree/master/example/react)
- [React examples with typescript](https://github.com/i18next/react-i18next/tree/master/example/react-typescript)
- [Example locize.com](https://github.com/i18next/react-i18next/tree/master/example/locize)

#### v9 samples

- [Example react](https://github.com/i18next/react-i18next/tree/v9.x.x/example/react)
- [Example preact](https://github.com/i18next/react-i18next/tree/v9.x.x/example/preact)
- [Example react-native](https://github.com/i18next/react-i18next/tree/v9.x.x/example/reactnative-expo)
- [Example expo.io](https://github.com/i18next/react-i18next/tree/v9.x.x/example/reactnative-expo)
- [Example next.js](https://github.com/i18next/react-i18next/tree/v9.x.x/example/nextjs)
- [Example razzle](https://github.com/i18next/react-i18next/tree/v9.x.x/example/razzle-ssr)
- [Example hashbase / beaker browser](https://github.com/i18next/react-i18next/tree/v9.x.x/example/dat)
- [Example storybook](https://github.com/i18next/react-i18next/tree/v9.x.x/example/storybook)
- [Example locize.com](https://github.com/i18next/react-i18next/tree/v9.x.x/example/locize)
- [Example test with jest](https://github.com/i18next/react-i18next/tree/v9.x.x/example/test-jest)

### Requirements

- react >= **16.8.0**
- react-dom >= **16.8.0**
- react-native >= **0.59.0**
- i18next >= **10.0.0** (typescript users: >=17.0.9)

#### v9

- react >= **0.14.0** (in case of < v16 or preact you will need to define parent in [Trans component](https://react.i18next.com/legacy-v9/trans-component#trans-props) or globally in [i18next.react options](https://react.i18next.com/legacy-v9/trans-component#additional-options-on-i-18-next-init))
- i18next >= **2.0.0**

## Core Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://twitter.com/jamuhl"><img src="https://avatars3.githubusercontent.com/u/977772?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jan Mühlemann</b></sub></a><br /><a href="https://github.com/i18next/react-i18next/commits?author=jamuhl" title="Code">💻</a> <a href="#example-jamuhl" title="Examples">💡</a> <a href="https://github.com/i18next/react-i18next/pulls?q=is%3Apr+reviewed-by%3Ajamuhl+" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/i18next/react-i18next/commits?author=jamuhl" title="Documentation">📖</a> <a href="#question-jamuhl" title="Answering Questions">💬</a></td>
    <td align="center"><a href="http://twitter.com/#!/adrirai"><img src="https://avatars0.githubusercontent.com/u/1086194?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adriano Raiano</b></sub></a><br /><a href="https://github.com/i18next/react-i18next/commits?author=adrai" title="Code">💻</a> <a href="#example-adrai" title="Examples">💡</a> <a href="https://github.com/i18next/react-i18next/pulls?q=is%3Apr+reviewed-by%3Aadrai+" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/i18next/react-i18next/commits?author=adrai" title="Documentation">📖</a> <a href="#question-adrai" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://github.com/pedrodurek"><img src="https://avatars1.githubusercontent.com/u/12190482?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pedro Durek</b></sub></a><br /><a href="https://github.com/i18next/react-i18next/commits?author=pedrodurek" title="Code">💻</a> <a href="#example-pedrodurek" title="Examples">💡</a> <a href="https://github.com/i18next/react-i18next/pulls?q=is%3Apr+reviewed-by%3Apedrodurek+" title="Reviewed Pull Requests">👀</a> <a href="#question-pedrodurek" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://tigerabrodi.dev/"><img src="https://avatars1.githubusercontent.com/u/49603590?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tiger Abrodi</b></sub></a><br /><a href="https://github.com/i18next/react-i18next/commits?author=tigerabrodi" title="Code">💻</a> <a href="https://github.com/i18next/react-i18next/pulls?q=is%3Apr+reviewed-by%3Atigerabrodi" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!

---

<h3 align="center">Gold Sponsors</h3>

<p align="center">
  <a href="https://locize.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/i18next/i18next/master/assets/locize_sponsor_240.gif" width="240px">
  </a>
</p>

---

**localization as a service - locize.com**

Needing a translation management? Want to edit your translations with an InContext Editor? Use the original provided to you by the maintainers of i18next!

![locize](https://cdn.prod.website-files.com/67a323e323a50df7f24f0a6f/67b8bbb29365c3a3c21c0898_github_locize.png)

By using [locize](http://locize.com/?utm_source=react_i18next_readme&utm_medium=github) you directly support the future of i18next and react-i18next.

---
