<img align="right" width="200" src="http://static.nfl.com/static/content/public/static/img/logos/react-helmet.jpg" />

# React Helmet

[![npm Version](https://img.shields.io/npm/v/react-helmet.svg?style=flat-square)](https://www.npmjs.org/package/react-helmet)
[![codecov.io](https://img.shields.io/codecov/c/github/nfl/react-helmet.svg?branch=master&style=flat-square)](https://codecov.io/github/nfl/react-helmet?branch=master)
[![Build Status](https://img.shields.io/travis/nfl/react-helmet/master.svg?style=flat-square)](https://travis-ci.org/nfl/react-helmet)
[![Dependency Status](https://img.shields.io/david/nfl/react-helmet.svg?style=flat-square)](https://david-dm.org/nfl/react-helmet)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md#pull-requests)

This reusable React component will manage all of your changes to the document head.

Helmet _takes_ plain HTML tags and _outputs_ plain HTML tags. It's dead simple, and React beginner friendly.

## [6.0.0 Breaking Changes](https://github.com/nfl/react-helmet/releases/tag/6.0.0)


## Example
```javascript
import React from "react";
import {Helmet} from "react-helmet";

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
    );
  }
};
```

Nested or latter components will override duplicate changes:

```javascript
<Parent>
    <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
    </Helmet>

    <Child>
        <Helmet>
            <title>Nested Title</title>
            <meta name="description" content="Nested component" />
        </Helmet>
    </Child>
</Parent>
```

outputs:

```html
<head>
    <title>Nested Title</title>
    <meta name="description" content="Nested component">
</head>
```

See below for a full reference guide.

## Features
- Supports all valid head tags: `title`, `base`, `meta`, `link`, `script`, `noscript`, and `style` tags.
- Supports attributes for `body`, `html` and `title` tags.
- Supports server-side rendering.
- Nested components override duplicate head changes.
- Duplicate head changes are preserved when specified in the same component (support for tags like "apple-touch-icon").
- Callback for tracking DOM changes.

## Compatibility

Helmet 5 is fully backward-compatible with previous Helmet releases, so you can upgrade at any time without fear of breaking changes. We encourage you to update your code to our more semantic API, but please feel free to do so at your own pace.

## Installation

Yarn:
```bash
yarn add react-helmet
```

npm:
```bash
npm install --save react-helmet
```

## Server Usage
To use on the server, call `Helmet.renderStatic()` after `ReactDOMServer.renderToString` or `ReactDOMServer.renderToStaticMarkup` to get the head data for use in your prerender.

Because this component keeps track of mounted instances, **you have to make sure to call `renderStatic` on server**, or you'll get a memory leak.

```javascript
ReactDOMServer.renderToString(<Handler />);
const helmet = Helmet.renderStatic();
```

This `helmet` instance contains the following properties:
- `base`
- `bodyAttributes`
- `htmlAttributes`
- `link`
- `meta`
- `noscript`
- `script`
- `style`
- `title`

Each property contains `toComponent()` and `toString()` methods. Use whichever is appropriate for your environment. For attributes, use the JSX spread operator on the object returned by `toComponent()`. E.g:

### As string output
```javascript
const html = `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="content">
                // React stuff here
            </div>
        </body>
    </html>
`;
```

### As React components
```javascript
function HTML () {
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
        <html {...htmlAttrs}>
            <head>
                {helmet.title.toComponent()}
                {helmet.meta.toComponent()}
                {helmet.link.toComponent()}
            </head>
            <body {...bodyAttrs}>
                <div id="content">
                    // React stuff here
                </div>
            </body>
        </html>
    );
}
```

### Note: Use the same instance
If you are using a prebuilt compilation of your app with webpack in the server be sure to include this in the `webpack file` so that the same instance of `react-helmet` is used.
```
externals: ["react-helmet"],
```
Or to import the *react-helmet* instance from the app on the server.

### Reference Guide

```javascript
<Helmet
    {/* (optional) set to false to disable string encoding (server-only) */}
    encodeSpecialCharacters={true}

    {/*
        (optional) Useful when you want titles to inherit from a template:

        <Helmet
            titleTemplate="%s | MyAwesomeWebsite.com"
        >
            <title>Nested Title</title>
        </Helmet>

        outputs:

        <head>
            <title>Nested Title | MyAwesomeWebsite.com</title>
        </head>
    */}
    titleTemplate="MySite.com - %s"

    {/*
        (optional) used as a fallback when a template exists but a title is not defined

        <Helmet
            defaultTitle="My Site"
            titleTemplate="My Site - %s"
        />

        outputs:

        <head>
            <title>My Site</title>
        </head>
    */}
    defaultTitle="My Default Title"

    {/* (optional) callback that tracks DOM changes */}
    onChangeClientState={(newState, addedTags, removedTags) => console.log(newState, addedTags, removedTags)}
>
    {/* html attributes */}
    <html lang="en" amp />

    {/* body attributes */}
    <body className="root" />

    {/* title attributes and value */}
    <title itemProp="name" lang="en">My Plain Title or {`dynamic`} title</title>

    {/* base element */}
    <base target="_blank" href="http://mysite.com/" />

    {/* multiple meta elements */}
    <meta name="description" content="Helmet application" />
    <meta property="og:type" content="article" />

    {/* multiple link elements */}
    <link rel="canonical" href="http://mysite.com/example" />
    <link rel="apple-touch-icon" href="http://mysite.com/img/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="http://mysite.com/img/apple-touch-icon-72x72.png" />
    {locales.map((locale) => {
        <link rel="alternate" href="http://example.com/{locale}" hrefLang={locale} key={locale}/>
    })}

    {/* multiple script elements */}
    <script src="http://include.com/pathtojs.js" type="text/javascript" />

    {/* inline script elements */}
    <script type="application/ld+json">{`
        {
            "@context": "http://schema.org"
        }
    `}</script>

    {/* noscript elements */}
    <noscript>{`
        <link rel="stylesheet" type="text/css" href="foo.css" />
    `}</noscript>

    {/* inline style elements */}
    <style type="text/css">{`
        body {
            background-color: blue;
        }

        p {
            font-size: 12px;
        }
    `}</style>
</Helmet>
```

## Contributing to this project
Please take a moment to review the [guidelines for contributing](CONTRIBUTING.md).

* [Pull requests](CONTRIBUTING.md#pull-requests)
* [Development Process](CONTRIBUTING.md#development)

## License

MIT

<img align="left" height="200" src="http://static.nfl.com/static/content/public/static/img/logos/ENG_SigilLockup_4C_POS_RGB.png" />
