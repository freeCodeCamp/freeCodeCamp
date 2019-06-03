import Parser from 'rss-parser';
import _ from 'lodash';

const parser = new Parser();

const mediumFeed = 'https://medium.freecodecamp.org/feed';

function getExtract(str) {
  return str.slice(0, str.indexOf('</p>') + 4);
}

function addResponsiveClass(str) {
  return str.replace(/<img/g, '<img class="img-responsive"');
}

export function getMediumFeed() {
  return new Promise((resolve, reject) => {
    parser.parseURL(mediumFeed, (err, feed) => {
      if (err) {
        reject(err);
      }

      const items = feed.items
        .map(item =>
          _.pick(item, ['title', 'link', 'isoDate', 'content:encoded'])
        )
        .map(item => ({
          ...item,
          extract: getExtract(item['content:encoded'])
        }))
        .map(item => _.omit(item, ['content:encoded']))
        .map(item => ({ ...item, extract: addResponsiveClass(item.extract) }));
      resolve(items);
    });
  });
}
