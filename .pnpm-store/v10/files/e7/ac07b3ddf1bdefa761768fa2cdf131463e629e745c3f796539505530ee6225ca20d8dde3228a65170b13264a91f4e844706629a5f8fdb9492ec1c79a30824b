import { HostAddress } from '.././utils';
import {
  SERVER_SELECTION_FAILED,
  SERVER_SELECTION_STARTED,
  SERVER_SELECTION_SUCCEEDED,
  WAITING_FOR_SUITABLE_SERVER
} from '../constants';
import { type ReadPreference } from '../read_preference';
import { type ServerSelector } from './server_selection';
import type { TopologyDescription } from './topology_description';

/**
 * The base export class for all logs published from server selection
 * @internal
 * @category Log Type
 */
export abstract class ServerSelectionEvent {
  /** String representation of the selector being used to select the server.
   *  Defaults to 'custom selector' for application-provided custom selector case.
   */
  selector: string | ReadPreference | ServerSelector;
  /** The name of the operation for which a server is being selected.  */
  operation: string;
  /** 	The current topology description.  */
  topologyDescription: TopologyDescription;

  /** @internal */
  abstract name:
    | typeof SERVER_SELECTION_STARTED
    | typeof SERVER_SELECTION_SUCCEEDED
    | typeof SERVER_SELECTION_FAILED
    | typeof WAITING_FOR_SUITABLE_SERVER;

  abstract message: string;

  /** @internal */
  constructor(
    selector: string | ReadPreference | ServerSelector,
    topologyDescription: TopologyDescription,
    operation: string
  ) {
    this.selector = selector;
    this.operation = operation;
    this.topologyDescription = topologyDescription;
  }
}

/**
 * An event published when server selection starts
 * @internal
 * @category Event
 */
export class ServerSelectionStartedEvent extends ServerSelectionEvent {
  /** @internal */
  name = SERVER_SELECTION_STARTED;
  message = 'Server selection started';

  /** @internal */
  constructor(
    selector: string | ReadPreference | ServerSelector,
    topologyDescription: TopologyDescription,
    operation: string
  ) {
    super(selector, topologyDescription, operation);
  }
}

/**
 * An event published when a server selection fails
 * @internal
 * @category Event
 */
export class ServerSelectionFailedEvent extends ServerSelectionEvent {
  /** @internal */
  name = SERVER_SELECTION_FAILED;
  message = 'Server selection failed';
  /** Representation of the error the driver will throw regarding server selection failing. */
  failure: Error;

  /** @internal */
  constructor(
    selector: string | ReadPreference | ServerSelector,
    topologyDescription: TopologyDescription,
    error: Error,
    operation: string
  ) {
    super(selector, topologyDescription, operation);
    this.failure = error;
  }
}

/**
 * An event published when server selection succeeds
 * @internal
 * @category Event
 */
export class ServerSelectionSucceededEvent extends ServerSelectionEvent {
  /** @internal */
  name = SERVER_SELECTION_SUCCEEDED;
  message = 'Server selection succeeded';
  /** 	The hostname, IP address, or Unix domain socket path for the selected server. */
  serverHost: string;
  /** The port for the selected server. Optional; not present for Unix domain sockets. When the user does not specify a port and the default (27017) is used, the driver SHOULD include it here. */
  serverPort: number | undefined;

  /** @internal */
  constructor(
    selector: string | ReadPreference | ServerSelector,
    topologyDescription: TopologyDescription,
    address: string,
    operation: string
  ) {
    super(selector, topologyDescription, operation);
    const { host, port } = HostAddress.fromString(address).toHostPort();
    this.serverHost = host;
    this.serverPort = port;
  }
}

/**
 * An event published when server selection is waiting for a suitable server to become available
 * @internal
 * @category Event
 */
export class WaitingForSuitableServerEvent extends ServerSelectionEvent {
  /** @internal */
  name = WAITING_FOR_SUITABLE_SERVER;
  message = 'Waiting for suitable server to become available';
  /** The remaining time left until server selection will time out. */
  remainingTimeMS: number;

  /** @internal */
  constructor(
    selector: string | ReadPreference | ServerSelector,
    topologyDescription: TopologyDescription,
    remainingTimeMS: number,
    operation: string
  ) {
    super(selector, topologyDescription, operation);
    this.remainingTimeMS = remainingTimeMS;
  }
}
