import path from 'path'
import { readCAFileSync } from './ca-file';

it('should read CA file', () => {
  expect(readCAFileSync(path.join(__dirname, 'fixtures/ca-file1.txt'))).toStrictEqual([
    `-----BEGIN CERTIFICATE-----
XXXX
-----END CERTIFICATE-----`,
    `-----BEGIN CERTIFICATE-----
YYYY
-----END CERTIFICATE-----`,
    `-----BEGIN CERTIFICATE-----
ZZZZ
-----END CERTIFICATE-----`,
  ]);
});

it('should not fail when the file does not exist', () => {
  expect(readCAFileSync(path.join(__dirname, 'not-exists.txt'))).toEqual(undefined)
})
