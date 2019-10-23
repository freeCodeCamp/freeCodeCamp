import debug from 'debug';

const log = debug('fcc:boot:news');

export default function newsBoot(app) {
  const router = app.loopback.Router();

  router.get('/n', (req, res) => res.redirect('/news'));
  router.get('/n/:shortId', createShortLinkHandler(app));
}

function createShortLinkHandler(app) {
  const { Article } = app.models;

  return function shortLinkHandler(req, res, next) {
    const { shortId } = req.params;

    if (!shortId) {
      return res.redirect('/news');
    }
    log('shortId', shortId);
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
        const { slugPart } = article;
        const slug = `/news/${slugPart}`;
        return res.redirect(slug);
      }
    );
  };
}
