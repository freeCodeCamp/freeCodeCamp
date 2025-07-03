import http from 'http';
import _ from 'lodash';

const lybsynFeed = 'http://freecodecamp.libsyn.com/render-type/json';

export function getLybsynFeed() {
  return new Promise((resolve, reject) => {
    http.get(lybsynFeed, res => {
      let raw = '';

      res.on('data', chunk => {
        raw += chunk;
      });

      res.on('error', err => reject(err));

      res.on('end', () => {
        let feed = [];

        try {
          feed = JSON.parse(raw);
        } catch (err) {
          return reject(err);
        }
        const items = feed
          .map(item =>
            _.pick(item, [
              'full_item_url',
              'item_title',
              'release_date',
              'item_body_short'
            ])
          )
          /* eslint-disable camelcase */
          .map(
            ({ full_item_url, item_title, release_date, item_body_short }) => ({
              title: item_title,
              extract: item_body_short,
              isoDate: new Date(release_date).toISOString(),
              link: full_item_url
            })
          );
        /* eslint-enable camelcase */
        return resolve(items);
      });
    });
  });
}
