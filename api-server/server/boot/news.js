// import React from 'react';
// import { renderToString } from 'react-dom/server';
// // import { StaticRouter } from 'react-router-dom';
// import { has } from 'lodash';
import debug from 'debug';

// import NewsApp from '../../news/NewsApp';

const routerLog = debug('fcc:boot:news:router');
const apiLog = debug('fcc:boot:news:api');

export default function newsBoot(app) {
  // const router = app.loopback.Router();
  // const api = app.loopback.Router();

  // router.get('/n', (req, res) => res.redirect('/news'));
  // router.get('/n/:shortId', createShortLinkHandler(app));

  // router.get('/news', serveNewsApp);
  // router.get('/news/*', serveNewsApp);

  // api.post('/p', createPopularityHandler(app));

  // app.use(api);
  // app.use(router);
}

// function serveNewsApp(req, res) {
//   const context = {};
//   const markup = renderToString(
//     <StaticRouter basename='/news' context={context} location={req.url}>
//       <NewsApp />
//     </StaticRouter>
//   );
//   if (context.url) {
//     routerLog('redirect found in `renderToString`');
//     // 'client-side' routing hit on a redirect
//     return res.redirect(context.url);
//   }
//   routerLog('news markup sending');
//   return res.render('layout-news', { title: 'News | freeCodeCamp', markup });
// }

// function createShortLinkHandler(app) {
//   const { Article } = app.models;

//   const referralHandler = createRerralHandler(app);

//   return function shortLinkHandler(req, res, next) {
//     const { query, user } = req;
//     const { shortId } = req.params;

//     referralHandler(query, shortId, !!user);

//     routerLog(req.origin);
//     routerLog(query.refsource);
//     if (!shortId) {
//       return res.redirect('/news');
//     }
//     routerLog('shortId', shortId);
//     return Article.findOne(
//       {
//         where: {
//           or: [{ shortId }, { slugPart: shortId }]
//         }
//       },
//       (err, article) => {
//         if (err) {
//           next(err);
//         }
//         if (!article) {
//           return res.redirect('/news');
//         }
//         const {
//           slugPart,
//           shortId,
//           author: { username }
//         } = article;
//         const slug = `/news/${username}/${slugPart}--${shortId}`;
//         return res.redirect(slug);
//       }
//     );
//   };
// }

// function createPopularityHandler(app) {
//   const { Article, Popularity } = app.models;

//   return function handlePopularityStats(req, res, next) {
//     const { body, user } = req;

//     if (
//       !has(body, 'event') ||
//       !has(body, 'timestamp') ||
//       !has(body, 'shortId')
//     ) {
//       console.warn('Popularity event recieved from client is malformed');
//       console.log(JSON.stringify(body, null, 2));
//       // sending 200 because the client shouldn't care for this
//       return res.sendStatus(200);
//     }
//     res.sendStatus(200);
//     const { shortId } = body;
//     apiLog('shortId', shortId);
//     const populartiyUpdate = {
//       ...body,
//       byAuthenticatedUser: !!user
//     };
//     Popularity.findOne({ where: { articleId: shortId } }, (err, popularity) => {
//       if (err) {
//         apiLog(err);
//         return next(err);
//       }
//       if (popularity) {
//         return popularity.updateAttribute(
//           'events',
//           [populartiyUpdate, ...popularity.events],
//           err => {
//             if (err) {
//               apiLog(err);
//               return next(err);
//             }
//             return apiLog('poplarity updated');
//           }
//         );
//       }
//       return Popularity.create(
//         {
//           events: [populartiyUpdate],
//           articleId: shortId
//         },
//         err => {
//           if (err) {
//             apiLog(err);
//             return next(err);
//           }
//           return apiLog('poulartiy created');
//         }
//       );
//     });
//     return body.event === 'view'
//       ? Article.findOne({ where: { shortId } }, (err, article) => {
//           if (err) {
//             apiLog(err);
//             next(err);
//           }
//           return article.updateAttributes(
//             { viewCount: article.viewCount + 1 },
//             err => {
//               if (err) {
//                 apiLog(err);
//                 return next(err);
//               }
//               return apiLog('article views updated');
//             }
//           );
//         })
//       : null;
//   };
// }

// function createRerralHandler(app) {
//   const { Popularity } = app.models;

//   return function referralHandler(query, shortId, byAuthenticatedUser) {
//     if (!query.refsource) {
//       return null;
//     }
//     const eventUpdate = {
//       event: `referral - ${query.refsource}`,
//       timestamp: new Date(Date.now()),
//       byAuthenticatedUser
//     };
//     return Popularity.findOne(
//       { where: { articleId: shortId } },
//       (err, popularity) => {
//         if (err) {
//           console.error(
//             'Failed finding a `Popularity` in a referral handler',
//             err
//           );
//           return null;
//         }

//         if (popularity) {
//           return popularity.updateAttribute(
//             'events',
//             [eventUpdate, ...popularity.events],
//             err => {
//               if (err) {
//                 console.error(
//                   'Failed in updating the `events` attribute of a `popularity`',
//                   err
//                 );
//               }
//             }
//           );
//         }
//         return Popularity.create(
//           {
//             events: [eventUpdate],
//             articleId: shortId
//           },
//           err => {
//             if (err) {
//               return console.error('Failed creating a new `Popularity`', err);
//             }
//             return apiLog('poulartiy created');
//           }
//         );
//       }
//     );
//   };
// }
