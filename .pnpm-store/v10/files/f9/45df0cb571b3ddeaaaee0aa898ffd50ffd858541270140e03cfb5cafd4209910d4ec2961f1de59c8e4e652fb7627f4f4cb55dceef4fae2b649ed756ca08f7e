import type { Long } from '../bson';
import { type Connection } from '../cmap/connection';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import { type MongoError, MongoRuntimeError } from '../error';
import type { Server, ServerCommandOptions } from '../sdam/server';
import type { ClientSession } from '../sessions';
import { type TimeoutContext } from '../timeout';
import { type MongoDBNamespace } from '../utils';
import { AbstractOperation, Aspect, defineAspects, type OperationOptions } from './operation';

/**
 * https://www.mongodb.com/docs/manual/reference/command/killCursors/
 * @internal
 */
interface KillCursorsCommand {
  killCursors: string;
  cursors: Long[];
  comment?: unknown;
}

export class KillCursorsOperation extends AbstractOperation<void> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  cursorId: Long;

  constructor(cursorId: Long, ns: MongoDBNamespace, server: Server, options: OperationOptions) {
    super(options);
    this.ns = ns;
    this.cursorId = cursorId;
    this.server = server;
  }

  override get commandName() {
    return 'killCursors' as const;
  }

  override buildCommand(_connection: Connection, _session?: ClientSession): KillCursorsCommand {
    const killCursors = this.ns.collection;
    if (killCursors == null) {
      // Cursors should have adopted the namespace returned by MongoDB
      // which should always defined a collection name (even a pseudo one, ex. db.aggregate())
      throw new MongoRuntimeError('A collection name must be determined before killCursors');
    }

    const killCursorsCommand: KillCursorsCommand = {
      killCursors,
      cursors: [this.cursorId]
    };

    return killCursorsCommand;
  }

  override buildOptions(timeoutContext: TimeoutContext): ServerCommandOptions {
    return {
      session: this.session,
      timeoutContext
    };
  }

  override handleError(_error: MongoError): void {
    // The driver should never emit errors from killCursors, this is spec-ed behavior
  }
}

defineAspects(KillCursorsOperation, [Aspect.MUST_SELECT_SAME_SERVER]);
