/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IInternalDecoration } from 'common/services/Services';

export interface IColorZoneStore {
  readonly zones: IColorZone[];
  clear(): void;
  addDecoration(decoration: IInternalDecoration): void;
  /**
   * Sets the amount of padding in lines that will be added between zones, if new lines intersect
   * the padding they will be merged into the same zone.
   */
  setPadding(padding: { [position: string]: number }): void;
}

export interface IColorZone {
  /** Color in a format supported by canvas' fillStyle. */
  color: string;
  position: 'full' | 'left' | 'center' | 'right' | undefined;
  startBufferLine: number;
  endBufferLine: number;
}

interface IMinimalDecorationForColorZone {
  marker: Pick<IInternalDecoration['marker'], 'line'>;
  options: Pick<IInternalDecoration['options'], 'overviewRulerOptions'>;
}

export class ColorZoneStore implements IColorZoneStore {
  private _zones: IColorZone[] = [];

  // The zone pool is used to keep zone objects from being freed between clearing the color zone
  // store and fetching the zones. This helps reduce GC pressure since the color zones are
  // accumulated on potentially every scroll event.
  private _zonePool: IColorZone[] = [];
  private _zonePoolIndex = 0;

  private _linePadding: { [position: string]: number } = {
    full: 0,
    left: 0,
    center: 0,
    right: 0
  };

  public get zones(): IColorZone[] {
    // Trim the zone pool to free unused memory
    this._zonePool.length = Math.min(this._zonePool.length, this._zones.length);
    return this._zones;
  }

  public clear(): void {
    this._zones.length = 0;
    this._zonePoolIndex = 0;
  }

  public addDecoration(decoration: IMinimalDecorationForColorZone): void {
    if (!decoration.options.overviewRulerOptions) {
      return;
    }
    for (const z of this._zones) {
      if (z.color === decoration.options.overviewRulerOptions.color &&
          z.position === decoration.options.overviewRulerOptions.position) {
        if (this._lineIntersectsZone(z, decoration.marker.line)) {
          return;
        }
        if (this._lineAdjacentToZone(z, decoration.marker.line, decoration.options.overviewRulerOptions.position)) {
          this._addLineToZone(z, decoration.marker.line);
          return;
        }
      }
    }
    // Create using zone pool if possible
    if (this._zonePoolIndex < this._zonePool.length) {
      this._zonePool[this._zonePoolIndex].color = decoration.options.overviewRulerOptions.color;
      this._zonePool[this._zonePoolIndex].position = decoration.options.overviewRulerOptions.position;
      this._zonePool[this._zonePoolIndex].startBufferLine = decoration.marker.line;
      this._zonePool[this._zonePoolIndex].endBufferLine = decoration.marker.line;
      this._zones.push(this._zonePool[this._zonePoolIndex++]);
      return;
    }
    // Create
    this._zones.push({
      color: decoration.options.overviewRulerOptions.color,
      position: decoration.options.overviewRulerOptions.position,
      startBufferLine: decoration.marker.line,
      endBufferLine: decoration.marker.line
    });
    this._zonePool.push(this._zones[this._zones.length - 1]);
    this._zonePoolIndex++;
  }

  public setPadding(padding: { [position: string]: number }): void {
    this._linePadding = padding;
  }

  private _lineIntersectsZone(zone: IColorZone, line: number): boolean {
    return (
      line >= zone.startBufferLine &&
      line <= zone.endBufferLine
    );
  }

  private _lineAdjacentToZone(zone: IColorZone, line: number, position: IColorZone['position']): boolean {
    return (
      (line >= zone.startBufferLine - this._linePadding[position || 'full']) &&
      (line <= zone.endBufferLine + this._linePadding[position || 'full'])
    );
  }

  private _addLineToZone(zone: IColorZone, line: number): void {
    zone.startBufferLine = Math.min(zone.startBufferLine, line);
    zone.endBufferLine = Math.max(zone.endBufferLine, line);
  }
}
