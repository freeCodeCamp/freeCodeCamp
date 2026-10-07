import { MongoInvalidArgumentError } from '../../error';
import { ReadPreference, type ReadPreferenceLike } from '../../read_preference';
import { ServerType } from '../../sdam/common';
import type { Server } from '../../sdam/server';
import type { ServerDescription } from '../../sdam/server_description';
import type { Topology } from '../../sdam/topology';
import { TopologyDescription } from '../../sdam/topology_description';
import type { Connection } from '../connection';

export interface ReadPreferenceOption {
  readPreference?: ReadPreferenceLike;
}

export function getReadPreference(options?: ReadPreferenceOption): ReadPreference {
  // Default to command version of the readPreference.
  let readPreference = options?.readPreference ?? ReadPreference.primary;

  if (typeof readPreference === 'string') {
    readPreference = ReadPreference.fromString(readPreference);
  }

  if (!(readPreference instanceof ReadPreference)) {
    throw new MongoInvalidArgumentError(
      'Option "readPreference" must be a ReadPreference instance'
    );
  }

  return readPreference;
}

export function isSharded(topologyOrServer?: Topology | Server | Connection): boolean {
  if (topologyOrServer == null) {
    return false;
  }

  if (topologyOrServer.description && topologyOrServer.description.type === ServerType.Mongos) {
    return true;
  }

  // NOTE: This is incredibly inefficient, and should be removed once command construction
  // happens based on `Server` not `Topology`.
  if (topologyOrServer.description && topologyOrServer.description instanceof TopologyDescription) {
    const servers: ServerDescription[] = Array.from(topologyOrServer.description.servers.values());
    return servers.some((server: ServerDescription) => server.type === ServerType.Mongos);
  }

  return false;
}
