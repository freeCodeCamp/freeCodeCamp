let data = require('./sample_data.json');

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
