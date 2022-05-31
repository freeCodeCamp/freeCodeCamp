const jsonServer = require('json-server');
const axios = require('axios').default;

const server = jsonServer.create();
const router = jsonServer.router('./data/curriculum.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
  axios.get('http://localhost:8000/api/revalidate').catch(err => {
    console.log(err.code, err.message);
  });
});
