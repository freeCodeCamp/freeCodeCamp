import { type Document, type Double, Long } from '../bson';
import { ServerType } from '../sdam/common';
import { parseServerType } from '../sdam/server_description';
import type { CompressorName } from './wire_protocol/compression';

const RESPONSE_FIELDS = [
  'minWireVersion',
  'maxWireVersion',
  'maxBsonObjectSize',
  'maxMessageSizeBytes',
  'maxWriteBatchSize',
  'logicalSessionTimeoutMinutes'
] as const;

/** @public */
export interface StreamDescriptionOptions {
  compressors?: CompressorName[];
  logicalSessionTimeoutMinutes?: number;
  loadBalanced: boolean;
}

/** @public */
export class StreamDescription {
  address: string;
  type: ServerType;
  minWireVersion?: number;
  maxWireVersion?: number;
  maxBsonObjectSize: number;
  maxMessageSizeBytes: number;
  maxWriteBatchSize: number;
  compressors: CompressorName[];
  compressor?: CompressorName;
  logicalSessionTimeoutMinutes?: number;
  loadBalanced: boolean;

  __nodejs_mock_server__?: boolean;

  zlibCompressionLevel?: number;
  serverConnectionId: bigint | null;

  public hello: Document | null = null;

  constructor(address: string, options?: StreamDescriptionOptions) {
    this.address = address;
    this.type = ServerType.Unknown;
    this.minWireVersion = undefined;
    this.maxWireVersion = undefined;
    this.maxBsonObjectSize = 16777216;
    this.maxMessageSizeBytes = 48000000;
    this.maxWriteBatchSize = 100000;
    this.logicalSessionTimeoutMinutes = options?.logicalSessionTimeoutMinutes;
    this.loadBalanced = !!options?.loadBalanced;
    this.compressors =
      options && options.compressors && Array.isArray(options.compressors)
        ? options.compressors
        : [];
    this.serverConnectionId = null;
  }

  receiveResponse(response: Document | null): void {
    if (response == null) {
      return;
    }
    this.hello = response;
    this.type = parseServerType(response);
    if ('connectionId' in response) {
      this.serverConnectionId = this.parseServerConnectionID(response.connectionId);
    } else {
      this.serverConnectionId = null;
    }
    for (const field of RESPONSE_FIELDS) {
      if (response[field] != null) {
        this[field] = response[field];
      }

      // testing case
      if ('__nodejs_mock_server__' in response) {
        this.__nodejs_mock_server__ = response['__nodejs_mock_server__'];
      }
    }

    if (response.compression) {
      this.compressor = this.compressors.filter(c => response.compression?.includes(c))[0];
    }
  }

  /* @internal */
  parseServerConnectionID(serverConnectionId: number | Double | bigint | Long): bigint {
    // Connection ids are always integral, so it's safe to coerce doubles as well as
    // any integral type.
    return Long.isLong(serverConnectionId)
      ? serverConnectionId.toBigInt()
      : // @ts-expect-error: Doubles are coercible to number
        BigInt(serverConnectionId);
  }
}
