const pino = require("../../../../");

module.exports = function() {
    const logger = pino(
        pino.transport({
            target: 'pino/file'
        })
    )

    logger.info('done!')
}
