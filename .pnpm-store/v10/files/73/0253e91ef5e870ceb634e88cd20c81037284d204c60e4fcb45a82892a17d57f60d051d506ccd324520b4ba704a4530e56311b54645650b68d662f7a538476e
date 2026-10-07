// @flow strict-local

import assert from 'assert';
import urlJoin from '../src/urlJoin';

describe('urlJoin', () => {
  it('Should join two paths', () => {
    let joinedUrl = urlJoin('/', './image.jpeg?test=test');
    assert.equal(joinedUrl, '/image.jpeg?test=test');
  });

  it('Should join two paths with longer publicUrl', () => {
    let joinedUrl = urlJoin('/static', './image.jpeg?test=test');
    assert.equal(joinedUrl, '/static/image.jpeg?test=test');
  });

  it('Should join two paths with longer publicUrl', () => {
    let joinedUrl = urlJoin('/static', 'image.jpeg?test=test');
    assert.equal(joinedUrl, '/static/image.jpeg?test=test');
  });

  it('Should turn windows path into posix', () => {
    let joinedUrl = urlJoin('/static', '.\\image.jpeg?test=test');
    assert.equal(joinedUrl, '/static/image.jpeg?test=test');
  });

  it('should support paths with colons', () => {
    let joinedUrl = urlJoin('/static', 'a:b:c.html');
    assert.equal(joinedUrl, '/static/a:b:c.html');

    joinedUrl = urlJoin('/static', '/a:b:c.html');
    assert.equal(joinedUrl, '/static/a:b:c.html');

    joinedUrl = urlJoin('/static', './a:b:c.html');
    assert.equal(joinedUrl, '/static/a:b:c.html');
  });
});
