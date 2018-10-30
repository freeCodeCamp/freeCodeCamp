/**
 * Returns the string value of a template literal object.
 * Tries to build it as best as it can based on the passed
 * prop. For instance `This is a ${prop}` will return 'This is a {prop}'.
 *
 * If the template literal builds to undefined (`${undefined}`), then
 * this should return "".
 */
export default function extractValueFromTemplateLiteral(value) {
  const {
    quasis,
    expressions,
  } = value;
  const partitions = quasis.concat(expressions);

  return partitions.sort((a, b) => a.start - b.start).reduce((raw, part) => {
    const {
      type,
    } = part;
    if (type === 'TemplateElement') {
      return raw + part.value.raw;
    } else if (type === 'Identifier') {
      return part.name === 'undefined' ? raw : `${raw}{${part.name}}`;
    } else if (type.indexOf('Expression') > -1) {
      return `${raw}{${type}}`;
    }

    return raw;
  }, '');
}
