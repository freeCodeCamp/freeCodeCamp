/**
 * Copyright (c) 2017 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IColorContrastCache } from 'browser/Types';
import { IColor } from 'common/Types';
import { TwoKeyMap } from 'common/MultiKeyMap';

export class ColorContrastCache implements IColorContrastCache {
  private _color: TwoKeyMap</* bg */number, /* fg */number, IColor | null> = new TwoKeyMap();
  private _css: TwoKeyMap</* bg */number, /* fg */number, string | null> = new TwoKeyMap();

  public setCss(bg: number, fg: number, value: string | null): void {
    this._css.set(bg, fg, value);
  }

  public getCss(bg: number, fg: number): string | null | undefined {
    return this._css.get(bg, fg);
  }

  public setColor(bg: number, fg: number, value: IColor | null): void {
    this._color.set(bg, fg, value);
  }

  public getColor(bg: number, fg: number): IColor | null | undefined {
    return this._color.get(bg, fg);
  }

  public clear(): void {
    this._color.clear();
    this._css.clear();
  }
}
