const RESTRICTED_CONFIG = [
  'error',
  {
    paths: [
      {
        name: '@parcel/workers',
        message:
          'Do not import workers inside utils. Instead, create a separate package.',
      },
    ],
  },
];

module.exports = {
  extends: '@parcel/eslint-config',
  rules: {
    'no-restricted-imports': RESTRICTED_CONFIG,
    'no-restricted-modules': RESTRICTED_CONFIG,
  },
};
