import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { last } from 'lodash';
import debug from 'debug';
import sanitizeHtml from 'sanitize-html';

import { createRerralHandler } from './popularity-handlers';

import NewsApp from '../../news/NewsApp';

const routerLog = debug('fcc:utils:news-handlers');

function stripTags(str) {
  return sanitizeHtml(str, {
    allowedTags: [],
    allowedAttributes: []
  });
}

export function createServeNewsApp(app) {
  const { Article } = app.models;

  function getArticleById(shortId) {
    return new Promise(resolve =>
      Article.findOne({ where: { shortId } }, (err, article) => {
        if (err || !article) {
          return resolve({});
        }
        return resolve(article);
      })
    );
  }

  function extractShortId(path) {
    const maybeContainsShortId = last(path.split('/'));
    const [, maybeShortId = ''] = maybeContainsShortId.split('--');
    return maybeShortId;
  }

  function buildSeed(req) {
    routerLog(req.path);

    const shortId = extractShortId(req.path);
    if (shortId) {
      return getArticleById(shortId, req)
        .then(article => article)
        .catch(() => ({}));
    }
    return Promise.resolve({});
  }

  return async function serveNewsApp(req, res) {
    const context = {};

    const article = await buildSeed(req);
    const markup = renderToString(
      <StaticRouter basename='/news' context={context} location={req.url}>
        <NewsApp />
      </StaticRouter>
    );
    if (context.url) {
      routerLog('redirect found in `renderToString`');
      // "client-side" routing hit on a redirect
      return res.redirect(context.url);
    }
    routerLog('news markup sending');
    const {
      title = 'Learn To Code | freeCodeCamp',
      renderableContent,
      featureImage
    } = article;
    const description = renderableContent
      ? renderableContent.match(/<p>(.*?)<\/p>/)[1]
      : 'Learn to code with free online courses, programming projects, ' +
        'and interview preparation for developer jobs.';
    const image =
      featureImage && featureImage.src
        ? featureImage.src
        : 'https://s3.amazonaws.com/freecodecamp/curriculum-diagram-full.jpg';
    return res.render('layout-news', {
      head: headTemplate({
        title: stripTags(title),
        description: stripTags(description),
        image
      }),
      markup
    });
  };
}

export function createShortLinkHandler(app) {
  const { Article } = app.models;

  const referralHandler = createRerralHandler(app);

  return function shortLinkHandler(req, res, next) {
    const { query, user } = req;
    const { shortId } = req.params;

    referralHandler(query, shortId, !!user);

    routerLog(req.origin);
    routerLog(query.refsource);
    if (!shortId) {
      return res.redirect('/news');
    }
    routerLog('shortId', shortId);
    return Article.findOne(
      {
        where: {
          or: [{ shortId }, { slugPart: shortId }]
        }
      },
      (err, article) => {
        if (err) {
          next(err);
        }
        if (!article) {
          return res.redirect('/news');
        }
        const {
          slugPart,
          shortId,
          author: { username }
        } = article;
        const slug = `/news/${username}/${slugPart}--${shortId}`;
        return res.redirect(slug);
      }
    );
  };
}

function headTemplate({ title, description, image }) {
  /* eslint-disable max-len */
  return `<link rel="stylesheet" type="text/css" href="/css/lato.css"/>
      <link rel="stylesheet" type="text/css" href="/css/ubuntu.css"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"/>
      <link rel="stylesheet" type="text/css" href="/css/main.css"/>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="csrf-token"/>
      <meta property="og:site_name" content="freeCodeCamp"/>
      <meta name="twitter:widgets:csp" content="on"/>
      <meta name="p:domain_verify" content="d0bc047a482c03c24f1168004c2a216a"/>
      <meta property="og:type" content="article"/>
      <meta property="article:publisher" content="https://www.facebook.com/freecodecamp"/>
      <meta property="article:section" content="Responsive"/>
      <title>${title} | freeCodeCamp</title>
      <link rel="publisher" href="https://plus.google.com/+Freecodecamp"/>
      <link rel="author" href="https://plus.google.com/+Freecodecamp"/>
      <meta property="og:title" content="${title} | freeCodeCamp" />
      <meta property="description" content="${description}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:image" content="${image}" />
      <meta name="twitter:creator" content="@freecodecamp"/>
      <meta name="twitter:url" content="http://www.freecodecamp.org"/>
      <meta name="twitter:site" content="@freecodecamp"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta content="a40ee5d5dba3bb091ad783ebd2b1383f" name="p:domain_verify"/>
      <meta name="msapplication-TileColor" content="#FFFFFF"/>
      <meta name="msapplication-TileImage" content="/"/>
      <link rel="android-chrome" sizes="144x144" href="https://s3.amazonaws.com/freecodecamp/favicons/android-chrome-144x144.png"/>
      <link rel="android-chrome" sizes="192x192" href="https://s3.amazonaws.com/freecodecamp/favicons/android-chrome-192x192.png"/>
      <link rel="android-chrome" sizes="36x36" href="https://s3.amazonaws.com/freecodecamp/favicons/android-chrome-36x36.png"/>
      <link rel="android-chrome" sizes="48x48" href="https://s3.amazonaws.com/freecodecamp/favicons/android-chrome-48x48.png"/>
      <link rel="android-chrome" sizes="72x72" href="https://s3.amazonaws.com/freecodecamp/favicons/android-chrome-72x72.png"/>
      <link rel="android-chrome" sizes="96x96" href="https://s3.amazonaws.com/freecodecamp/favicons/android-chrome-96x96.png"/>
      <link rel="android-chrome-manifest" href="https://s3.amazonaws.com/freecodecamp/favicons/android-chrome-manifest.json"/>
      <link rel="apple-touch-icon" sizes="114x114" href="https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon-180x180.png"/>
      <link rel="apple-touch-icon" sizes="57x57" href="https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon-76x76.png"/>
      <link rel="apple-touch-icon-precomposed" href="https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon-precomposed.png"/>
      <link rel="apple-touch-icon" href="https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon.png"/>
      <link rel="favicon" sizes="16x16" href="https://s3.amazonaws.com/freecodecamp/favicons/favicon-16x16.png"/>
      <link rel="favicon" sizes="32x32" href="https://s3.amazonaws.com/freecodecamp/favicons/favicon-32x32.png"/>
      <link rel="favicon" sizes="96x96" href="https://s3.amazonaws.com/freecodecamp/favicons/favicon-96x96.png"/>
      <link rel="mstile" sizes="144x144" href="https://s3.amazonaws.com/freecodecamp/favicons/mstile-144x144.png"/>
      <link rel="mstile" sizes="150x150" href="https://s3.amazonaws.com/freecodecamp/favicons/mstile-150x150.png"/>
      <link rel="mstile" sizes="310x310" href="https://s3.amazonaws.com/freecodecamp/favicons/mstile-310x310.png"/>
      <link rel="mstile" sizes="310x150" href="https://s3.amazonaws.com/freecodecamp/favicons/mstile-310x150.png"/>
      <link rel="mstile" sizes="70x70" href="https://s3.amazonaws.com/freecodecamp/favicons/mstile-70x70.png"/>
      <link rel="favicon" href="https://s3.amazonaws.com/freecodecamp/favicons/favicon.ico"/>
      <link rel="shortcut icon" href="//s3.amazonaws.com/freecodecamp/favicons/favicon.ico"/>
      <script>
        (function(i,s,o,g,r,a,m){ i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,"script","//www.google-analytics.com/analytics.js","ga");
        ga("create", "UA-55446531-1", "auto");
        ga("require", "displayfeatures");
        ga("send", "pageview");
      </script>
      <!-- Global site tag (gtag.js) - Google Ads: 795617839 -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-795617839"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());

        gtag("config", "AW-795617839");
      </script>
    `;
  /* eslint-enable max-len */
}
