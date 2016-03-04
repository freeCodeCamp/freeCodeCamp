export default [
  'auth'
].reduce((passThroughs, subroute) => {
  passThroughs[subroute] = true;
  return passThroughs;
}, {});
