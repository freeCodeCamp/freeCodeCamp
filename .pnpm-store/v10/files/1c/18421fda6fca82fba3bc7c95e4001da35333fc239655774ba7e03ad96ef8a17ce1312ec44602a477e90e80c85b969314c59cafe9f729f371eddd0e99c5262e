import { type Document, resolveBSONOptions } from './bson';
import type { Db } from './db';
import type { CommandOperationOptions } from './operations/command';
import { executeOperation } from './operations/execute_operation';
import {
  ListDatabasesOperation,
  type ListDatabasesOptions,
  type ListDatabasesResult
} from './operations/list_databases';
import { RemoveUserOperation, type RemoveUserOptions } from './operations/remove_user';
import { RunCommandOperation, type RunCommandOptions } from './operations/run_command';
import {
  ValidateCollectionOperation,
  type ValidateCollectionOptions
} from './operations/validate_collection';
import { MongoDBNamespace } from './utils';

/** @internal */
export interface AdminPrivate {
  db: Db;
}

/**
 * The **Admin** class is an internal class that allows convenient access to
 * the admin functionality and commands for MongoDB.
 *
 * **ADMIN Cannot directly be instantiated**
 * @public
 *
 * @example
 * ```ts
 * import { MongoClient } from 'mongodb';
 *
 * const client = new MongoClient('mongodb://localhost:27017');
 * const admin = client.db().admin();
 * const dbInfo = await admin.listDatabases();
 * for (const db of dbInfo.databases) {
 *   console.log(db.name);
 * }
 * ```
 */
export class Admin {
  /** @internal */
  s: AdminPrivate;

  /**
   * Create a new Admin instance
   * @internal
   */
  constructor(db: Db) {
    this.s = { db };
  }

  /**
   * Execute a command
   *
   * The driver will ensure the following fields are attached to the command sent to the server:
   * - `lsid` - sourced from an implicit session or options.session
   * - `$readPreference` - defaults to primary or can be configured by options.readPreference
   * - `$db` - sourced from the name of this database
   *
   * If the client has a serverApi setting:
   * - `apiVersion`
   * - `apiStrict`
   * - `apiDeprecationErrors`
   *
   * When in a transaction:
   * - `readConcern` - sourced from readConcern set on the TransactionOptions
   * - `writeConcern` - sourced from writeConcern set on the TransactionOptions
   *
   * Attaching any of the above fields to the command will have no effect as the driver will overwrite the value.
   *
   * @param command - The command to execute
   * @param options - Optional settings for the command
   */
  async command(command: Document, options?: RunCommandOptions): Promise<Document> {
    return await executeOperation(
      this.s.db.client,
      new RunCommandOperation(new MongoDBNamespace('admin'), command, {
        ...resolveBSONOptions(options),
        session: options?.session,
        readPreference: options?.readPreference,
        timeoutMS: options?.timeoutMS ?? this.s.db.timeoutMS
      })
    );
  }

  /**
   * Retrieve the server build information
   *
   * @param options - Optional settings for the command
   */
  async buildInfo(options?: CommandOperationOptions): Promise<Document> {
    return await this.command({ buildinfo: 1 }, options);
  }

  /**
   * Retrieve the server build information
   *
   * @param options - Optional settings for the command
   */
  async serverInfo(options?: CommandOperationOptions): Promise<Document> {
    return await this.command({ buildinfo: 1 }, options);
  }

  /**
   * Retrieve this db's server status.
   *
   * @param options - Optional settings for the command
   */
  async serverStatus(options?: CommandOperationOptions): Promise<Document> {
    return await this.command({ serverStatus: 1 }, options);
  }

  /**
   * Ping the MongoDB server and retrieve results
   *
   * @param options - Optional settings for the command
   */
  async ping(options?: CommandOperationOptions): Promise<Document> {
    return await this.command({ ping: 1 }, options);
  }

  /**
   * Remove a user from a database
   *
   * @param username - The username to remove
   * @param options - Optional settings for the command
   */
  async removeUser(username: string, options?: RemoveUserOptions): Promise<boolean> {
    return await executeOperation(
      this.s.db.client,
      new RemoveUserOperation(this.s.db, username, { dbName: 'admin', ...options })
    );
  }

  /**
   * Validate an existing collection
   *
   * @param collectionName - The name of the collection to validate.
   * @param options - Optional settings for the command
   */
  async validateCollection(
    collectionName: string,
    options: ValidateCollectionOptions = {}
  ): Promise<Document> {
    return await executeOperation(
      this.s.db.client,
      new ValidateCollectionOperation(this, collectionName, options)
    );
  }

  /**
   * List the available databases
   *
   * @param options - Optional settings for the command
   */
  async listDatabases(options?: ListDatabasesOptions): Promise<ListDatabasesResult> {
    return await executeOperation(
      this.s.db.client,
      new ListDatabasesOperation(this.s.db, { timeoutMS: this.s.db.timeoutMS, ...options })
    );
  }

  /**
   * Get ReplicaSet status
   *
   * @param options - Optional settings for the command
   */
  async replSetGetStatus(options?: CommandOperationOptions): Promise<Document> {
    return await this.command({ replSetGetStatus: 1 }, options);
  }
}
