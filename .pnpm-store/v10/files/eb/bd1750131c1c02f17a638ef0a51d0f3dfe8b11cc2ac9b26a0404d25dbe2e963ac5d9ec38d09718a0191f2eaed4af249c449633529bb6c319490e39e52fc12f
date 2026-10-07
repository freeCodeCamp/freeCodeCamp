import { EOL } from 'node:os'
import { Writable } from 'node:stream'

import { ListrLogger, ProcessOutput } from 'listr2'

const EOLRegex = new RegExp(EOL + '$')

const bindLogger = (consoleLogMethod) =>
  new Writable({
    write: function (chunk, encoding, next) {
      consoleLogMethod(chunk.toString().replace(EOLRegex, ''))
      next()
    },
  })

const getMainRendererOptions = ({ color, debug, quiet }, logger, env) => {
  if (quiet) {
    return {
      renderer: 'silent',
    }
  }

  if (env.NODE_ENV === 'test') {
    return {
      renderer: 'test',
      rendererOptions: {
        logger: new ListrLogger({
          processOutput: new ProcessOutput(bindLogger(logger.log), bindLogger(logger.error)),
        }),
      },
    }
  }

  if (debug || !color) {
    return {
      renderer: 'verbose',
    }
  }

  return {
    renderer: 'update',
    rendererOptions: {
      formatOutput: 'truncate',
    },
  }
}

const getFallbackRenderer = ({ renderer }, { color = false }) => {
  if (renderer === 'silent' || renderer === 'test' || !color) {
    return renderer
  }

  return 'verbose'
}

export const getRenderer = ({ color, debug, quiet }, logger, env = process.env) => {
  const mainRendererOptions = getMainRendererOptions({ color, debug, quiet }, logger, env)

  return {
    ...mainRendererOptions,
    fallbackRenderer: getFallbackRenderer(mainRendererOptions, { color }),
  }
}
