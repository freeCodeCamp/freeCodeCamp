/**
 * Copyright (c) 2022 The xterm.js authors. All rights reserved.
 * @license MIT
 */
import { IBufferService, IOscLinkService } from 'common/services/Services';
import { IMarker, IOscLinkData } from 'common/Types';

export class OscLinkService implements IOscLinkService {
  public serviceBrand: any;

  private _nextId = 1;

  /**
   * A map of the link key to link entry. This is used to add additional lines to links with ids.
   */
  private _entriesWithId: Map<string, IOscLinkEntryWithId> = new Map();

  /**
   * A map of the link id to the link entry. The "link id" (number) which is the numberic
   * representation of a unique link should not be confused with "id" (string) which comes in with
   * `id=` in the OSC link's properties.
   */
  private _dataByLinkId: Map<number, IOscLinkEntryNoId | IOscLinkEntryWithId> = new Map();

  constructor(
    @IBufferService private readonly _bufferService: IBufferService
  ) {
  }

  public registerLink(data: IOscLinkData): number {
    const buffer = this._bufferService.buffer;

    // Links with no id will only ever be registered a single time
    if (data.id === undefined) {
      const marker = buffer.addMarker(buffer.ybase + buffer.y);
      const entry: IOscLinkEntryNoId = {
        data,
        id: this._nextId++,
        lines: [marker]
      };
      marker.onDispose(() => this._removeMarkerFromLink(entry, marker));
      this._dataByLinkId.set(entry.id, entry);
      return entry.id;
    }

    // Add the line to the link if it already exists
    const castData = data as Required<IOscLinkData>;
    const key = this._getEntryIdKey(castData);
    const match = this._entriesWithId.get(key);
    if (match) {
      this.addLineToLink(match.id, buffer.ybase + buffer.y);
      return match.id;
    }

    // Create the link
    const marker = buffer.addMarker(buffer.ybase + buffer.y);
    const entry: IOscLinkEntryWithId = {
      id: this._nextId++,
      key: this._getEntryIdKey(castData),
      data: castData,
      lines: [marker]
    };
    marker.onDispose(() => this._removeMarkerFromLink(entry, marker));
    this._entriesWithId.set(entry.key, entry);
    this._dataByLinkId.set(entry.id, entry);
    return entry.id;
  }

  public addLineToLink(linkId: number, y: number): void {
    const entry = this._dataByLinkId.get(linkId);
    if (!entry) {
      return;
    }
    if (entry.lines.every(e => e.line !== y)) {
      const marker = this._bufferService.buffer.addMarker(y);
      entry.lines.push(marker);
      marker.onDispose(() => this._removeMarkerFromLink(entry, marker));
    }
  }

  public getLinkData(linkId: number): IOscLinkData | undefined {
    return this._dataByLinkId.get(linkId)?.data;
  }

  private _getEntryIdKey(linkData: Required<IOscLinkData>): string {
    return `${linkData.id};;${linkData.uri}`;
  }

  private _removeMarkerFromLink(entry: IOscLinkEntryNoId | IOscLinkEntryWithId, marker: IMarker): void {
    const index = entry.lines.indexOf(marker);
    if (index === -1) {
      return;
    }
    entry.lines.splice(index, 1);
    if (entry.lines.length === 0) {
      if (entry.data.id !== undefined) {
        this._entriesWithId.delete((entry as IOscLinkEntryWithId).key);
      }
      this._dataByLinkId.delete(entry.id);
    }
  }
}

interface IOscLinkEntry<T extends IOscLinkData> {
  data: T;
  id: number;
  lines: IMarker[];
}

interface IOscLinkEntryNoId extends IOscLinkEntry<IOscLinkData> {
}

interface IOscLinkEntryWithId extends IOscLinkEntry<Required<IOscLinkData>> {
  key: string;
}
