module.exports = function increaseListers(app) {
  // increase loopback database ODM max listeners
  // this is a EventEmitter method
  app.dataSources.db.setMaxListeners(32);
};
