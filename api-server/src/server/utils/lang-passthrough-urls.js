export default ['auth', 'services', 'link'].reduce((throughs, route) => {
  throughs[route] = true;
  return throughs;
}, {});
