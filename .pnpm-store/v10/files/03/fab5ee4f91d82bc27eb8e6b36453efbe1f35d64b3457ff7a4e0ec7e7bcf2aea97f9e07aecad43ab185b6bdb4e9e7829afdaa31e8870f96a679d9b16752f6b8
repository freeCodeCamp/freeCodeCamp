import fs from 'graceful-fs'

export function readCAFileSync (filePath: string): string[] | undefined {
  try {
    const contents = fs.readFileSync(filePath, 'utf8')
    const delim = '-----END CERTIFICATE-----'
    const output = contents
      .split(delim)
      .filter((ca) => Boolean(ca.trim()))
      .map((ca) => `${ca.trimLeft()}${delim}`)
    return output
  } catch (err) {
    if (err.code === 'ENOENT') return undefined
    throw err
  }
}
