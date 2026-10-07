/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IDisposable, IMarker } from 'common/Types';
import { Emitter } from 'vs/base/common/event';
import { dispose } from 'vs/base/common/lifecycle';

export class Marker implements IMarker {
  private static _nextId = 1;

  public isDisposed: boolean = false;
  private readonly _disposables: IDisposable[] = [];

  private readonly _id: number = Marker._nextId++;
  public get id(): number { return this._id; }

  private readonly _onDispose = this.register(new Emitter<void>());
  public readonly onDispose = this._onDispose.event;

  constructor(
    public line: number
  ) {
  }

  public dispose(): void {
    if (this.isDisposed) {
      return;
    }
    this.isDisposed = true;
    this.line = -1;
    // Emit before super.dispose such that dispose listeners get a change to react
    this._onDispose.fire();
    dispose(this._disposables);
    this._disposables.length = 0;
  }

  public register<T extends IDisposable>(disposable: T): T {
    this._disposables.push(disposable);
    return disposable;
  }
}
