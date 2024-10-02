import { ensureLowerCaseEmail } from './User-Identity';

test('returns lowercase email when one exists', () => {
  const profile = {
    id: 2,
    emails: [{ value: 'Example@Mail.com', name: 'John Doe' }]
  };
  expect(ensureLowerCaseEmail(profile)).toBe('example@mail.com');
});

test('returns empty string when value is undefined', () => {
  const profile = {
    id: 4,
    emails: []
  };
  expect(ensureLowerCaseEmail(profile)).toBe('');
});

test('returns empty string when emails is undefined', () => {
  const profile = {
    id: 5
  };
  expect(ensureLowerCaseEmail(profile)).toBe('');
});

test('returns empty string when profile is undefined', () => {
  let profile;
  expect(ensureLowerCaseEmail(profile)).toBe('');
});
