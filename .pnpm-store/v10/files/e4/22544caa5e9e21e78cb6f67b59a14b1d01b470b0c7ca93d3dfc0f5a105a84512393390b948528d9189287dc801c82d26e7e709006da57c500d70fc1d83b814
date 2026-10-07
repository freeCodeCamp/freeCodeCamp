export default (function (o, c) {
  var proto = c.prototype;
  var pluralAliases = ['milliseconds', 'seconds', 'minutes', 'hours', 'days', 'weeks', 'isoWeeks', 'months', 'quarters', 'years', 'dates'];
  pluralAliases.forEach(function (alias) {
    proto[alias] = proto[alias.replace(/s$/, '')];
  });
});