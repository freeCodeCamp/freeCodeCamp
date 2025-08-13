import { Document } from 'mongodb';
import { user } from '../config/prisma/version-1';
import migratorV1 from './versions/1';

export const migrations = [
  {
    schemaVersion: 1,
    migrator: migratorV1
  }
] as const;

export function migrateDocument<T extends Document>(document: T): user {
  let startingVersion = 0;

  if ('schemaVersion' in document) {
    const schemaVersion: unknown = document['schemaVersion'];
    if (typeof schemaVersion === 'number') {
      startingVersion = schemaVersion;
    }
  }

  let updatedDocument = document;
  for (const migration of migrations) {
    if (migration.schemaVersion <= startingVersion) {
      continue;
    }

    updatedDocument = migration.migrator(updatedDocument);
    updatedDocument.schemaVersion = migration.schemaVersion;
  }

  return updatedDocument;
}
