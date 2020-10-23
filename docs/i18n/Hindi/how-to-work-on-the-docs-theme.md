# डॉक्स थीम पर कैसे काम करें

> [!NOTE] एक त्वरित अनुस्मारक जिसे आपको प्रलेखन साइट के लिए सामग्री पर काम करने के लिए कुछ भी सेटअप करने की आवश्यकता नहीं है।
> 
> योगदान दिशानिर्देशों पर काम करने के लिए, आप यहां उपलब्ध `docs` directory[में फ़ाइलों को संपादित या जोड़ सकते हैं](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs)। जब आपके परिवर्तन को मर्ज कर दिया जाता है, तो इसे दस्तावेज साइट पर स्वचालित रूप से उपलब्ध कराया जाएगा।

## डॉक्स वेबसाइट की संरचना

The site is generated using [`docsify`](https://docsify.js.org), and served using GitHub pages.

आमतौर पर आपको स्थानीय रूप से साइट बनाने के लिए किसी भी कॉन्फ़िगरेशन को बदलने की आवश्यकता नहीं होगी। यदि आप रुचि रखते हैं, तो यहां यह बताया गया है कि यह कैसे काम करता है:

- The homepage's source for this site is available in [`docs/index.html`](index.html).
- We serve this file as a SPA using `docsify` and GitHub Pages.
- The `docsify` script generates the content of `markdown` files in `docs` directory on demand.
- The homepage is generated from the [`_coverpage.md`](_coverpage.md).
- the sidebar navigation is generated from [`_sidebar.md`](_sidebar.md).

## Serving the documentation site locally

freeCodeCamp को क्लोन करें:

```console
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Install `docsify`:

```console
npm install -g docsify
```

and serve the `/docs` directory

```console
docsify serve docs
```

Alternatively, if you have installed freeCodeCamp locally (see the local setup guide), we bundle the CLI with the development tools so you can run any of the below commands as needed from the root of the repo:

### Serve and launch the documentation site only

```console
npm run docs:serve
```

### स्थानीय रूप से freeCodeCamp के प्रलेखीकरण साइट को सर्व करें:

```console
npm run develop
```

> The documentation site should be available at <http://localhost:3200>