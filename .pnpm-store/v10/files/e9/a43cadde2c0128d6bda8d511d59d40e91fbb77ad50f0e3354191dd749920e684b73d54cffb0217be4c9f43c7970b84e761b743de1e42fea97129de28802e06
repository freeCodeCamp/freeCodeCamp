const ENV_EXPR = /(?<!\\)(\\*)\$\{([^${}]+)\}/g

export function envReplace(settingValue: string, env: NodeJS.ProcessEnv): string {
  return settingValue.replace(ENV_EXPR, replaceEnvMatch.bind(null, env))
}

function replaceEnvMatch (env: NodeJS.ProcessEnv, orig: string, escape: string, name: string): string {
  if (escape.length % 2) {
    return orig.slice((escape.length + 1) / 2)
  }
  const envValue = getEnvValue(env, name)
  if (envValue === undefined) {
    throw new Error(`Failed to replace env in config: ${orig}`)
  }
  return `${(escape.slice(escape.length / 2))}${envValue}`
}

const ENV_VALUE = /([^:-]+)(:?)-(.+)/

function getEnvValue (env: NodeJS.ProcessEnv, name: string): string {
  const matched = name.match(ENV_VALUE)
  if (!matched) return env[name]
  const [, variableName, colon, fallback] = matched
  if (Object.prototype.hasOwnProperty.call(env, variableName)) {
    return !env[variableName] && colon ? fallback : env[variableName]
  }
  return fallback
}
