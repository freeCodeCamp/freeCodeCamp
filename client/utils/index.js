exports.descriptionRegex = /<blockquote|<ol|<h4|<table/;

exports.isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};
