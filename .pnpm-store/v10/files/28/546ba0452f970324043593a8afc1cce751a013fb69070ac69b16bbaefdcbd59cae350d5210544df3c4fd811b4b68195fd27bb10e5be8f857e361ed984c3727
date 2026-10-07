/**
 * Copyright (c) 2021 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { CellData } from 'common/buffer/CellData';
import { IBufferLine, ICellData } from 'common/Types';
import { IBufferCell as IBufferCellApi, IBufferLine as IBufferLineApi } from '@xterm/xterm';

export class BufferLineApiView implements IBufferLineApi {
  constructor(private _line: IBufferLine) { }

  public get isWrapped(): boolean { return this._line.isWrapped; }
  public get length(): number { return this._line.length; }
  public getCell(x: number, cell?: IBufferCellApi): IBufferCellApi | undefined {
    if (x < 0 || x >= this._line.length) {
      return undefined;
    }

    if (cell) {
      this._line.loadCell(x, cell as ICellData);
      return cell;
    }
    return this._line.loadCell(x, new CellData());
  }
  public translateToString(trimRight?: boolean, startColumn?: number, endColumn?: number): string {
    return this._line.translateToString(trimRight, startColumn, endColumn);
  }
}
