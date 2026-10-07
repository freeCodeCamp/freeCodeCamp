import { inspect } from 'node:util'

import { bold, red, yellow } from './colors.js'
import { error, info, warning } from './figures.js'

export const configurationError = (opt, helpMsg, value) =>
  `${red(`${error} Validation Error:`)}

  Invalid value for '${bold(opt)}': ${bold(inspect(value))}

  ${helpMsg}`

export const NOT_GIT_REPO = red(`${error} Current directory is not a git directory!`)

export const FAILED_GET_STAGED_FILES = red(`${error} Failed to get staged files!`)

export const incorrectBraces = (before, after) =>
  yellow(
    `${warning} Detected incorrect braces with only single value: \`${before}\`. Reformatted as: \`${after}\`
`
  )

export const NO_CONFIGURATION = `${error} lint-staged could not find any valid configuration.`

export const NO_STAGED_FILES = `${info} lint-staged could not find any staged files.`

export const NO_TASKS = `${info} lint-staged could not find any staged files matching configured tasks.`

export const skippingBackup = (hasInitialCommit, diff) => {
  const reason =
    diff !== undefined
      ? '`--diff` was used'
      : (hasInitialCommit ? '`--no-stash` was used' : 'there’s no initial commit yet') +
        '. This might result in data loss'

  return yellow(`${warning} Skipping backup because ${reason}.\n`)
}

export const SKIPPING_HIDE_PARTIALLY_CHANGED = yellow(
  `${warning} Skipping hiding unstaged changes from partially staged files because \`--no-hide-partially-staged\` was used.\n`
)

export const DEPRECATED_GIT_ADD = yellow(
  `${warning} Some of your tasks use \`git add\` command. Please remove it from the config since all modifications made by tasks will be automatically added to the git commit index.
`
)

export const TASK_ERROR = 'Skipped because of errors from tasks.'

export const PREVENTED_TASK_MODIFICATIONS = `\n${error} lint-staged failed because \`--fail-on-changes\` was used.`

export const SKIPPED_GIT_ERROR = 'Skipped because of previous git error.'

export const GIT_ERROR = `\n  ${red(`${error} lint-staged failed due to a git error.`)}`

export const invalidOption = (name, value, message) => `${red(`${error} Validation Error:`)}

  Invalid value for option '${bold(name)}': ${bold(value)}

  ${message}

See https://github.com/okonet/lint-staged#command-line-flags`

export const PREVENTED_EMPTY_COMMIT = `
  ${yellow(`${warning} lint-staged prevented an empty git commit.
  Use the --allow-empty option to continue, or check your task configuration`)}
`

export const restoreStashExample = (
  hash = 'h0a0s0h0'
) => `Any lost modifications can be restored from a git stash:

  > git stash list --format="%h %s"
  ${hash} On main: lint-staged automatic backup
  > git apply --index ${hash}`

export const CONFIG_STDIN_ERROR = red(`${error} Failed to read config from stdin.`)

export const failedToLoadConfig = (filepath) =>
  red(`${error} Failed to read config from file "${filepath}".`)

export const failedToParseConfig = (
  filepath,
  error
) => `${red(`${error} Failed to parse config from file "${filepath}".`)}

${error}

See https://github.com/okonet/lint-staged#configuration.`

export const UNSTAGED_CHANGES_BACKUP_STASH_LOCATION = `Unstaged changes have been kept back in a patch file:`
