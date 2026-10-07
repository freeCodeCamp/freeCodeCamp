import { type Document } from '../bson';
import { type Connection } from '../cmap/connection';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import type { Db } from '../db';
import { MongoInvalidArgumentError } from '../error';
import { enumToString } from '../utils';
import { CommandOperation, type CommandOperationOptions } from './command';

const levelValues = new Set(['off', 'slow_only', 'all']);

/** @public */
export const ProfilingLevel = Object.freeze({
  off: 'off',
  slowOnly: 'slow_only',
  all: 'all'
} as const);

/** @public */
export type ProfilingLevel = (typeof ProfilingLevel)[keyof typeof ProfilingLevel];

/** @public */
export type SetProfilingLevelOptions = Omit<CommandOperationOptions, 'rawData'>;

/** @internal */
export class SetProfilingLevelOperation extends CommandOperation<ProfilingLevel> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  override options: SetProfilingLevelOptions;
  level: ProfilingLevel;
  profile: 0 | 1 | 2;

  constructor(db: Db, level: ProfilingLevel, options: SetProfilingLevelOptions) {
    super(db, options);
    this.options = options;
    switch (level) {
      case ProfilingLevel.off:
        this.profile = 0;
        break;
      case ProfilingLevel.slowOnly:
        this.profile = 1;
        break;
      case ProfilingLevel.all:
        this.profile = 2;
        break;
      default:
        this.profile = 0;
        break;
    }

    this.level = level;
  }

  override get commandName() {
    return 'profile' as const;
  }

  override buildCommandDocument(_connection: Connection): Document {
    const level = this.level;

    if (!levelValues.has(level)) {
      // TODO(NODE-3483): Determine error to put here
      throw new MongoInvalidArgumentError(
        `Profiling level must be one of "${enumToString(ProfilingLevel)}"`
      );
    }

    return { profile: this.profile };
  }

  override handleOk(
    _response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>
  ): ProfilingLevel {
    return this.level;
  }
}
