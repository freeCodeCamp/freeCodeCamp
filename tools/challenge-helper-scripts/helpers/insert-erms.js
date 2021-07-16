// Update given value with markers (labels)
const insertErms = (seedCode, erms) => {
  if (!erms) {
    throw 'erms should be provided';
  }
  const lines = seedCode.split('\n');
  if (Number.isInteger(erms[0])) {
    lines.splice(erms[0], 0, '--fcc-editable-region--');
  }
  if (Number.isInteger(erms[1])) {
    lines.splice(erms[1], 0, '--fcc-editable-region--');
  }
  return lines.join('\n');
};

exports.insertErms = insertErms;
