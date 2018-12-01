/* global describe expect it beforeEach */
import inMemoryCache from './in-memory-cache';

describe('InMemoryCache', () => {
  const theAnswer = 42;
  const before = 'before';
  const after = 'after';
  const emptyCacheValue = null;

  describe('get', () => {
    it('returns null for an empty cache', () => {
      const cache = inMemoryCache();
      expect(cache.get()).toBe(emptyCacheValue);
    });

    it('returns an initial value', () => {
      const cache = inMemoryCache(theAnswer);
      expect(cache.get()).toBe(theAnswer);
    });
  });

  describe('update', () => {
    it('updates the cached value', () => {
      const cache = inMemoryCache(before);
      cache.update(() => after);
      expect(cache.get()).toBe(after);
    });

    it('can handle promises correctly', done => {
      const cache = inMemoryCache(before);
      cache.update(() => new Promise(resolve => resolve(after)));
      // because async
      setImmediate(() => {
        expect(cache.get()).toBe(after);
        done();
      });
    });
  });

  describe('clear', () => {
    it('clears the  cache', () => {
      expect.assertions(2);
      const cache = inMemoryCache(theAnswer);
      expect(cache.get()).toBe(theAnswer);
      cache.clear();
      expect(cache.get()).toBe(emptyCacheValue);
    });
  });
});
