export default function bootStatus(app) {
  const api = app.loopback.Router();

  api.get('/status/ping', (req, res) => res.json({ msg: 'pong' }));
  app.use(api);
}
