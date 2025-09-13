import fp from 'fastify-plugin';
import websocket from '@fastify/websocket';

/**
 * Plugin to enable WebSocket support for real-time payment status updates
 *
 * @param fastify The Fastify instance.
 * @param opts The plugin options.
 */
async function websocketPlugin(fastify: any, opts: any) {
  await fastify.register(websocket);

  fastify.register(async function (fastify: any) {
    fastify.get('/ws', { websocket: true }, (connection: any, req: any) => {
      const logger = fastify.log.child({ connectionId: req.id });
      logger.info('WebSocket connection established');

      connection.socket.on('message', (message: any) => {
        try {
          const data = JSON.parse(message.toString());
          logger.debug({ data }, 'Received WebSocket message');

          // Handle different types of WebSocket messages
          switch (data.type) {
            case 'ping':
              connection.socket.send(JSON.stringify({ type: 'pong', timestamp: new Date().toISOString() }));
              break;
            case 'subscribe_payment_updates':
              // Client wants to subscribe to payment status updates
              connection.socket.userId = data.userId;
              logger.info({ userId: data.userId }, 'Client subscribed to payment updates');
              break;
            default:
              logger.warn({ type: data.type }, 'Unknown WebSocket message type');
          }
        } catch (error) {
          logger.error(error, 'Error processing WebSocket message');
        }
      });

      connection.socket.on('close', () => {
        logger.info('WebSocket connection closed');
      });

      connection.socket.on('error', (error: any) => {
        logger.error(error, 'WebSocket error');
      });

      // Send initial connection confirmation
      connection.socket.send(JSON.stringify({
        type: 'connection_established',
        timestamp: new Date().toISOString()
      }));
    });
  });

  // Store WebSocket server reference for broadcasting
  fastify.decorate('websocketServer', {
    clients: new Set()
  });

  // Hook to track WebSocket clients
  fastify.addHook('onRequest', async (request: any, reply: any) => {
    if (request.raw.upgrade) {
      fastify.websocketServer.clients.add(request.raw);
    }
  });
}

export default fp(websocketPlugin, {
  name: 'websocket-plugin'
});