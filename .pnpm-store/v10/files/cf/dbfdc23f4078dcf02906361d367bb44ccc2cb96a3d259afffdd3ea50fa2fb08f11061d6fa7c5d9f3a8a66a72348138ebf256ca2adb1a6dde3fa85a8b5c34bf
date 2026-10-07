"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const bson_1 = require("./bson");
const execute_operation_1 = require("./operations/execute_operation");
const list_databases_1 = require("./operations/list_databases");
const remove_user_1 = require("./operations/remove_user");
const run_command_1 = require("./operations/run_command");
const validate_collection_1 = require("./operations/validate_collection");
const utils_1 = require("./utils");
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
class Admin {
    /**
     * Create a new Admin instance
     * @internal
     */
    constructor(db) {
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
    async command(command, options) {
        return await (0, execute_operation_1.executeOperation)(this.s.db.client, new run_command_1.RunCommandOperation(new utils_1.MongoDBNamespace('admin'), command, {
            ...(0, bson_1.resolveBSONOptions)(options),
            session: options?.session,
            readPreference: options?.readPreference,
            timeoutMS: options?.timeoutMS ?? this.s.db.timeoutMS
        }));
    }
    /**
     * Retrieve the server build information
     *
     * @param options - Optional settings for the command
     */
    async buildInfo(options) {
        return await this.command({ buildinfo: 1 }, options);
    }
    /**
     * Retrieve the server build information
     *
     * @param options - Optional settings for the command
     */
    async serverInfo(options) {
        return await this.command({ buildinfo: 1 }, options);
    }
    /**
     * Retrieve this db's server status.
     *
     * @param options - Optional settings for the command
     */
    async serverStatus(options) {
        return await this.command({ serverStatus: 1 }, options);
    }
    /**
     * Ping the MongoDB server and retrieve results
     *
     * @param options - Optional settings for the command
     */
    async ping(options) {
        return await this.command({ ping: 1 }, options);
    }
    /**
     * Remove a user from a database
     *
     * @param username - The username to remove
     * @param options - Optional settings for the command
     */
    async removeUser(username, options) {
        return await (0, execute_operation_1.executeOperation)(this.s.db.client, new remove_user_1.RemoveUserOperation(this.s.db, username, { dbName: 'admin', ...options }));
    }
    /**
     * Validate an existing collection
     *
     * @param collectionName - The name of the collection to validate.
     * @param options - Optional settings for the command
     */
    async validateCollection(collectionName, options = {}) {
        return await (0, execute_operation_1.executeOperation)(this.s.db.client, new validate_collection_1.ValidateCollectionOperation(this, collectionName, options));
    }
    /**
     * List the available databases
     *
     * @param options - Optional settings for the command
     */
    async listDatabases(options) {
        return await (0, execute_operation_1.executeOperation)(this.s.db.client, new list_databases_1.ListDatabasesOperation(this.s.db, { timeoutMS: this.s.db.timeoutMS, ...options }));
    }
    /**
     * Get ReplicaSet status
     *
     * @param options - Optional settings for the command
     */
    async replSetGetStatus(options) {
        return await this.command({ replSetGetStatus: 1 }, options);
    }
}
exports.Admin = Admin;
//# sourceMappingURL=admin.js.map