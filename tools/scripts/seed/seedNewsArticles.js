const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
const MongoClient = require('mongodb').MongoClient;
const faker = require('faker');
const shortId = require('shortid');
const slugg = require('slugg');
const { homeLocation } = require('../../../config/env.json');
const debug = require('debug');

const log = debug('fcc:tools:seedNewsArticles');

const { MONGOHQ_URL, NODE_ENV: env } = process.env;

function handleError(err, client) {
  if (err) {
    console.error('Oh noes!!');
    console.error(err);
    try {
      client.close();
    } catch (e) {
      // no-op
    } finally {
      /* eslint-disable-next-line no-process-exit */
      process.exit(1);
    }
  }
}

if (env !== 'production') {
  MongoClient.connect(
    MONGOHQ_URL,
    { useNewUrlParser: true },
    async function(err, client) {
      handleError(err, client);

      log('Connected successfully to mongo');
      const db = client.db('freecodecamp');
      const articleCollection = db.collection('article');

      const articles = stubArticles(200);

      await articleCollection
        .deleteMany({})
        .catch(err => handleError(err, client));
      return articleCollection
        .insertMany(articles)
        .then(({ insertedCount }) => {
          log('inserted %d new articles', insertedCount);
          client.close();
        })
        .catch(err => handleError(err, client));
    }
  );
}

function stubArticles(numberOfArticles = 1) {
  return new Array(numberOfArticles).fill('').map(() => generateArticle());
}

const sixMonths = 15780000000;

function generateArticle() {
  const now = Date.now();
  const id = shortId.generate();
  const title = faker.lorem.sentence();
  const paragraphs = faker.random.number(10) || 1;
  const arrayToLoopOver = new Array(paragraphs).fill('');
  const fakeDate = faker.date.between(new Date(now - sixMonths), new Date(now));
  const fakeDateMs = new Date(fakeDate).getTime();
  return {
    shortId: id,
    slugPart: slugg(title),
    title,
    author: {
      name: faker.name.findName(),
      avatar: faker.internet.avatar(),
      twitter: 'https://twitter.com/camperbot',
      bio: faker.lorem.sentence(),
      username: faker.internet.userName()
    },
    featureImage: {
      src: faker.image.image(2000, 1300),
      alt: faker.lorem.sentence(),
      caption: paragraphs >= 5 ? faker.lorem.sentence() : ''
    },
    meta: {
      readTime: paragraphs,
      refLink: `${homeLocation}/n/${id}`
    },
    draft: 'this needs to be fixed',
    renderableContent: arrayToLoopOver.map(
      () => `<p>${faker.lorem.paragraph()}</p>`
    ),
    published: true,
    featured: true,
    underReview: false,
    viewCount: faker.random.number(90000),
    firstPublishedDate: fakeDate,
    createdDate: fakeDate,
    lastEditedDate: fakeDate,
    history: [
      {
        event: 'created',
        timestamp: fakeDateMs
      },
      {
        event: 'edited',
        timestamp: fakeDateMs
      },
      {
        event: 'publish',
        timestamp: fakeDateMs
      },
      {
        event: 'featured',
        timestamp: fakeDateMs
      }
    ]
  };
}
