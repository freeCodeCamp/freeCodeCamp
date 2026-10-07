import { MongoInvalidArgumentError } from '../error';
import { ReadPreference } from '../read_preference';
import { ServerType, TopologyType } from './common';
import type { ServerDescription, TagSet } from './server_description';
import type { TopologyDescription } from './topology_description';

// max staleness constants
const IDLE_WRITE_PERIOD = 10000;
const SMALLEST_MAX_STALENESS_SECONDS = 90;

//  Minimum version to try writes on secondaries.
export const MIN_SECONDARY_WRITE_WIRE_VERSION = 13;

/** @internal */
export type ServerSelector = (
  topologyDescription: TopologyDescription,
  servers: ServerDescription[],
  deprioritized?: ServerDescription[]
) => ServerDescription[];

/**
 * Returns a server selector that selects for writable servers
 */
export function writableServerSelector(): ServerSelector {
  return function writableServer(
    topologyDescription: TopologyDescription,
    servers: ServerDescription[]
  ): ServerDescription[] {
    return latencyWindowReducer(
      topologyDescription,
      servers.filter((s: ServerDescription) => s.isWritable)
    );
  };
}

/**
 * The purpose of this selector is to select the same server, only
 * if it is in a state that it can have commands sent to it.
 */
export function sameServerSelector(description?: ServerDescription): ServerSelector {
  return function sameServerSelector(
    topologyDescription: TopologyDescription,
    servers: ServerDescription[]
  ): ServerDescription[] {
    if (!description) return [];
    // Filter the servers to match the provided description only if
    // the type is not unknown.
    return servers.filter(sd => {
      return sd.address === description.address && sd.type !== ServerType.Unknown;
    });
  };
}

/**
 * Returns a server selector that uses a read preference to select a
 * server potentially for a write on a secondary.
 */
export function secondaryWritableServerSelector(
  wireVersion?: number,
  readPreference?: ReadPreference
): ServerSelector {
  // If server version < 5.0, read preference always primary.
  // If server version >= 5.0...
  // - If read preference is supplied, use that.
  // - If no read preference is supplied, use primary.
  if (
    !readPreference ||
    !wireVersion ||
    (wireVersion && wireVersion < MIN_SECONDARY_WRITE_WIRE_VERSION)
  ) {
    return readPreferenceServerSelector(ReadPreference.primary);
  }
  return readPreferenceServerSelector(readPreference);
}

/**
 * Reduces the passed in array of servers by the rules of the "Max Staleness" specification
 * found here:
 *
 * @see https://github.com/mongodb/specifications/blob/master/source/max-staleness/max-staleness.md
 *
 * @param readPreference - The read preference providing max staleness guidance
 * @param topologyDescription - The topology description
 * @param servers - The list of server descriptions to be reduced
 * @returns The list of servers that satisfy the requirements of max staleness
 */
function maxStalenessReducer(
  readPreference: ReadPreference,
  topologyDescription: TopologyDescription,
  servers: ServerDescription[]
): ServerDescription[] {
  if (readPreference.maxStalenessSeconds == null || readPreference.maxStalenessSeconds < 0) {
    return servers;
  }

  const maxStaleness = readPreference.maxStalenessSeconds;
  const maxStalenessVariance =
    (topologyDescription.heartbeatFrequencyMS + IDLE_WRITE_PERIOD) / 1000;
  if (maxStaleness < maxStalenessVariance) {
    throw new MongoInvalidArgumentError(
      `Option "maxStalenessSeconds" must be at least ${maxStalenessVariance} seconds`
    );
  }

  if (maxStaleness < SMALLEST_MAX_STALENESS_SECONDS) {
    throw new MongoInvalidArgumentError(
      `Option "maxStalenessSeconds" must be at least ${SMALLEST_MAX_STALENESS_SECONDS} seconds`
    );
  }

  if (topologyDescription.type === TopologyType.ReplicaSetWithPrimary) {
    const primary: ServerDescription = Array.from(topologyDescription.servers.values()).filter(
      primaryFilter
    )[0];

    return servers.reduce((result: ServerDescription[], server: ServerDescription) => {
      const stalenessMS =
        server.lastUpdateTime -
        server.lastWriteDate -
        (primary.lastUpdateTime - primary.lastWriteDate) +
        topologyDescription.heartbeatFrequencyMS;

      const staleness = stalenessMS / 1000;
      const maxStalenessSeconds = readPreference.maxStalenessSeconds ?? 0;
      if (staleness <= maxStalenessSeconds) {
        result.push(server);
      }

      return result;
    }, []);
  }

  if (topologyDescription.type === TopologyType.ReplicaSetNoPrimary) {
    if (servers.length === 0) {
      return servers;
    }

    const sMax = servers.reduce((max: ServerDescription, s: ServerDescription) =>
      s.lastWriteDate > max.lastWriteDate ? s : max
    );

    return servers.reduce((result: ServerDescription[], server: ServerDescription) => {
      const stalenessMS =
        sMax.lastWriteDate - server.lastWriteDate + topologyDescription.heartbeatFrequencyMS;

      const staleness = stalenessMS / 1000;
      const maxStalenessSeconds = readPreference.maxStalenessSeconds ?? 0;
      if (staleness <= maxStalenessSeconds) {
        result.push(server);
      }

      return result;
    }, []);
  }

  return servers;
}

/**
 * Determines whether a server's tags match a given set of tags
 *
 * @param tagSet - The requested tag set to match
 * @param serverTags - The server's tags
 */
function tagSetMatch(tagSet: TagSet, serverTags: TagSet) {
  const keys = Object.keys(tagSet);
  const serverTagKeys = Object.keys(serverTags);
  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    if (serverTagKeys.indexOf(key) === -1 || serverTags[key] !== tagSet[key]) {
      return false;
    }
  }

  return true;
}

/**
 * Reduces a set of server descriptions based on tags requested by the read preference
 *
 * @param readPreference - The read preference providing the requested tags
 * @param servers - The list of server descriptions to reduce
 * @returns The list of servers matching the requested tags
 */
function tagSetReducer(
  readPreference: ReadPreference,
  servers: ServerDescription[]
): ServerDescription[] {
  if (
    readPreference.tags == null ||
    (Array.isArray(readPreference.tags) && readPreference.tags.length === 0)
  ) {
    return servers;
  }

  for (let i = 0; i < readPreference.tags.length; ++i) {
    const tagSet = readPreference.tags[i];
    const serversMatchingTagset = servers.reduce(
      (matched: ServerDescription[], server: ServerDescription) => {
        if (tagSetMatch(tagSet, server.tags)) matched.push(server);
        return matched;
      },
      []
    );

    if (serversMatchingTagset.length) {
      return serversMatchingTagset;
    }
  }

  return [];
}

/**
 * Reduces a list of servers to ensure they fall within an acceptable latency window. This is
 * further specified in the "Server Selection" specification, found here:
 *
 * @see https://github.com/mongodb/specifications/blob/master/source/server-selection/server-selection.md
 *
 * @param topologyDescription - The topology description
 * @param servers - The list of servers to reduce
 * @returns The servers which fall within an acceptable latency window
 */
function latencyWindowReducer(
  topologyDescription: TopologyDescription,
  servers: ServerDescription[]
): ServerDescription[] {
  const low = servers.reduce(
    (min: number, server: ServerDescription) => Math.min(server.roundTripTime, min),
    Infinity
  );

  const high = low + topologyDescription.localThresholdMS;
  return servers.reduce((result: ServerDescription[], server: ServerDescription) => {
    if (server.roundTripTime <= high && server.roundTripTime >= low) result.push(server);
    return result;
  }, []);
}

// filters
function primaryFilter(server: ServerDescription): boolean {
  return server.type === ServerType.RSPrimary;
}

function secondaryFilter(server: ServerDescription): boolean {
  return server.type === ServerType.RSSecondary;
}

function nearestFilter(server: ServerDescription): boolean {
  return server.type === ServerType.RSSecondary || server.type === ServerType.RSPrimary;
}

function knownFilter(server: ServerDescription): boolean {
  return server.type !== ServerType.Unknown;
}

function loadBalancerFilter(server: ServerDescription): boolean {
  return server.type === ServerType.LoadBalancer;
}

/**
 * Returns a function which selects servers based on a provided read preference
 *
 * @param readPreference - The read preference to select with
 */
export function readPreferenceServerSelector(readPreference: ReadPreference): ServerSelector {
  if (!readPreference.isValid()) {
    throw new MongoInvalidArgumentError('Invalid read preference specified');
  }

  return function readPreferenceServers(
    topologyDescription: TopologyDescription,
    servers: ServerDescription[],
    deprioritized: ServerDescription[] = []
  ): ServerDescription[] {
    if (topologyDescription.type === TopologyType.LoadBalanced) {
      return servers.filter(loadBalancerFilter);
    }

    if (topologyDescription.type === TopologyType.Unknown) {
      return [];
    }

    if (topologyDescription.type === TopologyType.Single) {
      return latencyWindowReducer(topologyDescription, servers.filter(knownFilter));
    }

    if (topologyDescription.type === TopologyType.Sharded) {
      const filtered = servers.filter(server => {
        return !deprioritized.includes(server);
      });
      const selectable = filtered.length > 0 ? filtered : deprioritized;
      return latencyWindowReducer(topologyDescription, selectable.filter(knownFilter));
    }

    const mode = readPreference.mode;
    if (mode === ReadPreference.PRIMARY) {
      return servers.filter(primaryFilter);
    }

    if (mode === ReadPreference.PRIMARY_PREFERRED) {
      const result = servers.filter(primaryFilter);
      if (result.length) {
        return result;
      }
    }

    const filter = mode === ReadPreference.NEAREST ? nearestFilter : secondaryFilter;
    const selectedServers = latencyWindowReducer(
      topologyDescription,
      tagSetReducer(
        readPreference,
        maxStalenessReducer(readPreference, topologyDescription, servers.filter(filter))
      )
    );

    if (mode === ReadPreference.SECONDARY_PREFERRED && selectedServers.length === 0) {
      return servers.filter(primaryFilter);
    }

    return selectedServers;
  };
}
