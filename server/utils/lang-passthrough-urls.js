export default [
  'auth',
  'services'
].reduce((throughs, route) => {
  throughs[route] = true; return throughs;
}, {});
