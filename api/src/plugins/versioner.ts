import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

import { version } from '../../package.json';

/**
 * Plugin which sets the api version in a response header.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
const versioner: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.addHook('onRequest', (req, rep, done) => {
    // TODO: Handle client expected api version?
    //       Maybe send to correct version of the API?
    // const requestedVersion = req.headers['version'];
    // if (typeof requestedVersion === "string") {
    //   const [expectedMajor] = requestedVersion.split('.');
    //   const [currentMajor] = version.split('.');
    //   if (expectedMajor !== currentMajor) {
    //     void rep.code(400)
    //     return rep.send({
    //       code: 'ERR_UNSUPPORTED_VERSION',
    //       message: `Client requested version ${requestedVersion} but server is version ${version}`
    //     });
    //   }
    // }

    // Set header to send to client of current version
    void rep.header('Version', version);
    done();
  });
  done();
};

export default fp(versioner);
