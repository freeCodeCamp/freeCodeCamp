// @flow

const MODULE_REGEX = /^((@[^/\s]+\/){0,1}([^/\s.~]+[^/\s]*)){1}(@[^/\s]+){0,1}/;

export default function validateModuleSpecifier(moduleName: string): string {
  let matches = MODULE_REGEX.exec(moduleName);
  if (matches) {
    return matches[0];
  }

  return '';
}
