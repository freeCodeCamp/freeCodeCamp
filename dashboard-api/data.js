const fs = require('fs');

let data = require('./data.json');

const Container = {
  data,
  update(newData) {
    Container.data = newData;
  },
  getData() {
    return Container.data;
  }
};

module.exports = Container;
