// Refer : http://stackoverflow.com/a/430240/1932901
function trimTags(value) {
  const tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
  const tagOrComment = new RegExp(
    '<(?:' +
      // Comment body.
      '!--(?:(?:-*[^->])*--+|-?)' +
      // Special "raw text" elements whose content should be elided.
      '|script\\b' +
      tagBody +
      '>[\\s\\S]*?</script\\s*' +
      '|style\\b' +
      tagBody +
      '>[\\s\\S]*?</style\\s*' +
      // Regular name
      '|/?[a-z]' +
      tagBody +
      ')>',
    'gi'
  );
  let rawValue;
  do {
    rawValue = value;
    value = value.replace(tagOrComment, '');
  } while (value !== rawValue);

  return value.replace(/</g, '&lt;');
}

export { trimTags };
