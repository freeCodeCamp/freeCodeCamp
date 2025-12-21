import { ObjectId } from 'mongodb';

// This is trivial, but makes it simple to refactor if we swap monogodb for
// bson, say.

/**
 * Checks if a string is a valid MongoDB ObjectID.
 * @param id A string to check.
 * @returns A boolean indicating if the string is a valid MongoDB ObjectID.
 */
export const isObjectID = (id?: string): boolean =>
  id ? ObjectId.isValid(id) : false;

// Refer : http://stackoverflow.com/a/430240/1932901
/**
 * Sanitizes a input by removing HTML tags.
 * @deprecated
 * @param value A string to sanitize.
 * @returns A string with HTML tags removed.
 */
export const trimTags = (value: string): string => {
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
};
