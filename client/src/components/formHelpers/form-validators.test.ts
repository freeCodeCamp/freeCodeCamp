import {
  editorValidator,
  fCCValidator,
  localhostValidator,
  httpValidator,
  pathValidator
} from './form-validators';

test('editorValidator', () => {
  const editorAddresses = [
    'repl.it/@username',
    'repl.it/join/username',
    'replit.com/@username',
    'replit.com/join/username',
    'glitch.com/edit/#!',
    'codesandbox.io/s/',
    'https://github.com',
    'https://glitch.com/edit/#!/project',
    'https://glitch.com/edit/#!'
  ];

  const nonEditorAddresses = [
    'example.com',
    'http://example.com',
    'https://example.com',
    'http://repl.it',
    'http://glitch.com',
    'https://repl.it/home'
  ];

  editorAddresses.forEach(address => {
    expect(editorValidator(address)).not.toBeNull();
  });

  nonEditorAddresses.forEach(address => {
    expect(editorValidator(address)).toBeNull();
  });
});

test('fCCValidator', () => {
  const fCCAddresses = [
    'codepen.io/freecodecamp',
    'freecodecamp.rocks',
    'github.com/freecodecamp',
    '.freecodecamp.org',
    'https://codepen.io/freecodecamp',
    'https://freecodecamp.rocks',
    'https://github.com/freeCodeCamp',
    'https://www.freecodecamp.org'
  ];

  const nonFCCAddresses = [
    'example.com',
    'http://example.com',
    'https://example.com',
    'http://codepen.io',
    'https://github.com',
    'https://codepen.io/editor',
    'https://github.com/repo'
  ];

  fCCAddresses.forEach(address => {
    expect(fCCValidator(address)).not.toBeNull();
  });

  nonFCCAddresses.forEach(address => {
    expect(fCCValidator(address)).toBeNull();
  });
});

test('localhostValidator', () => {
  const privateAddresses = [
    'http://localhost:3000',
    'https://localhost:3000',
    'http://127.0.0.1',
    'http://127.0.0.1:3000',
    'https://127.0.0.1',
    'https://127.0.0.1:3000',
    'http://[::1]:3000'
  ];

  const publicAddresses = [
    'http://localhost.com',
    'http://example.com',
    'http://example.com:3000',
    'https://example.com',
    'https://example.com:3000'
  ];

  privateAddresses.forEach(address => {
    expect(localhostValidator(address)).not.toBeNull();
  });

  publicAddresses.forEach(address => {
    expect(localhostValidator(address)).toBeNull();
  });
});

test('httpValidator', () => {
  const allowedHttpAddresses = ['http://[::1]:3000', 'http://localhost:3000'];

  const disallowedHttpAddresses = [
    'http://example.com',
    'http://localhost.com'
  ];

  const nonHttpAddresses = [
    'ftp://example.com',
    'file://localhost',
    'ws://example.com',
    'wss://localhost',
    'https://example.com/test',
    'https://localhost.com'
  ];

  allowedHttpAddresses.forEach(address => {
    expect(httpValidator(address)).toBeNull();
  });

  disallowedHttpAddresses.forEach(address => {
    expect(httpValidator(address)).not.toBeNull();
  });

  nonHttpAddresses.forEach(address => {
    expect(httpValidator(address)).toBeNull();
  });
});

test('pathValidator', () => {
  const rootAddresses = [
    'http://example.com/',
    'http://example.com',
    'https://example.com/',
    'https://localhost.com'
  ];

  const nonRootAddresses = [
    'http://example.com/path',
    'http://example.com/path/',
    'https://example.com/path',
    'https://example.com/path/'
  ];

  rootAddresses.forEach(address => {
    expect(pathValidator(address)).toBeNull();
  });

  nonRootAddresses.forEach(address => {
    expect(pathValidator(address)).not.toBeNull();
  });
});
