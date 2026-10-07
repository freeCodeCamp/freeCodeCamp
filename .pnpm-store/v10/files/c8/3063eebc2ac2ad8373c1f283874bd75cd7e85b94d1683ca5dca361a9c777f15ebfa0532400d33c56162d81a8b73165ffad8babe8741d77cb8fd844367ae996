import fs from 'node:fs/promises'

export const getVersion = async () => {
  const packageJson = JSON.parse(await fs.readFile(new URL('../package.json', import.meta.url)))
  return packageJson.version
}
