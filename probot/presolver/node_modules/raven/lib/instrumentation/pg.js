'use strict';
module.exports = function(Raven, pg, originals) {
  // Using fill helper here is hard because of `this` binding
  var origQuery = pg.Connection.prototype.query;
  pg.Connection.prototype.query = function(text) {
    Raven.captureBreadcrumb({
      category: 'postgres',
      message: text
    });
    origQuery.call(this, text);
  };
  // todo thread this through
  // originals.push([pg.Connection.prototype, 'query', origQuery]);
};
