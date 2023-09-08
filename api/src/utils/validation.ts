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
