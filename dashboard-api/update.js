require('dotenv').config({ path: './sweeper/.env' });
const fetch = require('node-fetch');

const HOST = process.env.NODE_DEV
  ? process.env.LOCAL_HOST
  : process.env.PRODUCTION_URL;

fetch(`${HOST}/update?password=${process.env.UPDATE_SECRET}`, {
  method: 'GET'
})
.then(() => {
  console.log(`Finished updating data on ${HOST}`);
})
.catch((err) => {
  console.log(err);
});
