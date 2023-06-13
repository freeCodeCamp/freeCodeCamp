import { ObjectId } from 'mongodb';

// This is trivial, but makes it simple to refactor if we swap monogodb for
// bson, say.
export const isObjectID = (id: string): boolean => ObjectId.isValid(id);
