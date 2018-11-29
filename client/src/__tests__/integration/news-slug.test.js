/* global describe it expect */
import faker from 'faker';
import { kebabCase } from 'lodash';
import shortid from 'shortid';

import { createArticleSlug } from '../../../utils/news';
import { getShortIdFromSlug } from '../../utils';

shortid.characters(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$+'
);
const shortId = () => shortid.generate();

describe('news-slug integration', () => {
  it('returns the correct id from a generated slug', () => {
    expect.assertions(100);

    const generatedArguments = Array(100)
      .fill(null)
      .map(() => ({
        username: faker.internet.userName(),
        slugPart: kebabCase(faker.lorem.sentence()).toLowerCase(),
        shortId: shortId()
      }));

    return generatedArguments.forEach(arg => {
      const { shortId } = arg;
      const generatedSlug = createArticleSlug(arg);
      const extractedId = getShortIdFromSlug(generatedSlug);
      return expect(extractedId).toEqual(shortId);
    });
  });
});
