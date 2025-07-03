import 'i18next';

// This should not be necessary when upgrading to v23.0.0
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
