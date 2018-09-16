import { regenerateCachedMap } from '../utils/map';


module.exports = (app) => {

    const api = app.loopback.Router();

    api.put('/reload', (req, res) => {
        regenerateCachedMap(app.models)
            .subscribe(
                () => {
                },
                () => {
                    res.status(503).send({ reloaded: false });
                },
                () => {
                    res.send({ reloaded: true });
                }
            );
    });

    app.use(api);
};

