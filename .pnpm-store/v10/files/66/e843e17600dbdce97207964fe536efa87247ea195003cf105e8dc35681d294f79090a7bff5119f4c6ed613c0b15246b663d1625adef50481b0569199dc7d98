// @flow
import assert from 'assert';

import validateModuleSpecifier from '../src/validateModuleSpecifier';

describe('Validate Module Specifiers', () => {
  it('Validate Module Specifiers', () => {
    let modules = [
      '@parcel/transformer-posthtml/package.json',
      '@some-org/package@v1.0.0',
      '@org/some-package@v1.0.0-alpha.1',
      'something.js/something/index.js',
      '@some.org/something.js/index.js',
      'lodash/something/index.js',
    ];

    assert.deepEqual(
      modules.map(module => validateModuleSpecifier(module)),
      [
        '@parcel/transformer-posthtml',
        '@some-org/package@v1.0.0',
        '@org/some-package@v1.0.0-alpha.1',
        'something.js',
        '@some.org/something.js',
        'lodash',
      ],
    );
  });

  it('Return empty on invalid modules', () => {
    let modules = ['./somewhere.js', './hello/world.js', '~/hello/world.js'];

    assert.deepEqual(
      modules.map(module => validateModuleSpecifier(module)),
      ['', '', ''],
    );
  });
});
