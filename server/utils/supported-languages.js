export default [
  'en',
  'es'
].reduce((langs, lang) => (langs[lang] = true, langs), {});
