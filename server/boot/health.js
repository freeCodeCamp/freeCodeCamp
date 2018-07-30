function timestampIt() {
  return new Date(Date.now());
}

export default function bootHealth(app) {
  const api = app.loopback.Router();

  api.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong', timestamp: timestampIt() });
  });

  api.get('/', (req, res) => res.status(200).send(`OK at ${timestampIt()}`));

  app.use('/status', api);
}
