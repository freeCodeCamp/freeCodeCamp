const delay = (time = 2000) => {
  return new Promise(resolve => setTimeout(() => resolve(true), time));
};

module.exports = delay;
