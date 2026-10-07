/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IOscHandler, IHandlerCollection, OscFallbackHandlerType, IOscParser, ISubParserStackState } from 'common/parser/Types';
import { OscState, PAYLOAD_LIMIT } from 'common/parser/Constants';
import { utf32ToString } from 'common/input/TextDecoder';
import { IDisposable } from 'common/Types';

const EMPTY_HANDLERS: IOscHandler[] = [];

export class OscParser implements IOscParser {
  private _state = OscState.START;
  private _active = EMPTY_HANDLERS;
  private _id = -1;
  private _handlers: IHandlerCollection<IOscHandler> = Object.create(null);
  private _handlerFb: OscFallbackHandlerType = () => { };
  private _stack: ISubParserStackState = {
    paused: false,
    loopPosition: 0,
    fallThrough: false
  };

  public registerHandler(ident: number, handler: IOscHandler): IDisposable {
    if (this._handlers[ident] === undefined) {
      this._handlers[ident] = [];
    }
    const handlerList = this._handlers[ident];
    handlerList.push(handler);
    return {
      dispose: () => {
        const handlerIndex = handlerList.indexOf(handler);
        if (handlerIndex !== -1) {
          handlerList.splice(handlerIndex, 1);
        }
      }
    };
  }
  public clearHandler(ident: number): void {
    if (this._handlers[ident]) delete this._handlers[ident];
  }
  public setHandlerFallback(handler: OscFallbackHandlerType): void {
    this._handlerFb = handler;
  }

  public dispose(): void {
    this._handlers = Object.create(null);
    this._handlerFb = () => { };
    this._active = EMPTY_HANDLERS;
  }

  public reset(): void {
    // force cleanup handlers if payload was already sent
    if (this._state === OscState.PAYLOAD) {
      for (let j = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; j >= 0; --j) {
        this._active[j].end(false);
      }
    }
    this._stack.paused = false;
    this._active = EMPTY_HANDLERS;
    this._id = -1;
    this._state = OscState.START;
  }

  private _start(): void {
    this._active = this._handlers[this._id] || EMPTY_HANDLERS;
    if (!this._active.length) {
      this._handlerFb(this._id, 'START');
    } else {
      for (let j = this._active.length - 1; j >= 0; j--) {
        this._active[j].start();
      }
    }
  }

  private _put(data: Uint32Array, start: number, end: number): void {
    if (!this._active.length) {
      this._handlerFb(this._id, 'PUT', utf32ToString(data, start, end));
    } else {
      for (let j = this._active.length - 1; j >= 0; j--) {
        this._active[j].put(data, start, end);
      }
    }
  }

  public start(): void {
    // always reset leftover handlers
    this.reset();
    this._state = OscState.ID;
  }

  /**
   * Put data to current OSC command.
   * Expects the identifier of the OSC command in the form
   * OSC id ; payload ST/BEL
   * Payload chunks are not further processed and get
   * directly passed to the handlers.
   */
  public put(data: Uint32Array, start: number, end: number): void {
    if (this._state === OscState.ABORT) {
      return;
    }
    if (this._state === OscState.ID) {
      while (start < end) {
        const code = data[start++];
        if (code === 0x3b) {
          this._state = OscState.PAYLOAD;
          this._start();
          break;
        }
        if (code < 0x30 || 0x39 < code) {
          this._state = OscState.ABORT;
          return;
        }
        if (this._id === -1) {
          this._id = 0;
        }
        this._id = this._id * 10 + code - 48;
      }
    }
    if (this._state === OscState.PAYLOAD && end - start > 0) {
      this._put(data, start, end);
    }
  }

  /**
   * Indicates end of an OSC command.
   * Whether the OSC got aborted or finished normally
   * is indicated by `success`.
   */
  public end(success: boolean, promiseResult: boolean = true): void | Promise<boolean> {
    if (this._state === OscState.START) {
      return;
    }
    // do nothing if command was faulty
    if (this._state !== OscState.ABORT) {
      // if we are still in ID state and get an early end
      // means that the command has no payload thus we still have
      // to announce START and send END right after
      if (this._state === OscState.ID) {
        this._start();
      }

      if (!this._active.length) {
        this._handlerFb(this._id, 'END', success);
      } else {
        let handlerResult: boolean | Promise<boolean> = false;
        let j = this._active.length - 1;
        let fallThrough = false;
        if (this._stack.paused) {
          j = this._stack.loopPosition - 1;
          handlerResult = promiseResult;
          fallThrough = this._stack.fallThrough;
          this._stack.paused = false;
        }
        if (!fallThrough && handlerResult === false) {
          for (; j >= 0; j--) {
            handlerResult = this._active[j].end(success);
            if (handlerResult === true) {
              break;
            } else if (handlerResult instanceof Promise) {
              this._stack.paused = true;
              this._stack.loopPosition = j;
              this._stack.fallThrough = false;
              return handlerResult;
            }
          }
          j--;
        }
        // cleanup left over handlers
        // we always have to call .end for proper cleanup,
        // here we use `success` to indicate whether a handler should execute
        for (; j >= 0; j--) {
          handlerResult = this._active[j].end(false);
          if (handlerResult instanceof Promise) {
            this._stack.paused = true;
            this._stack.loopPosition = j;
            this._stack.fallThrough = true;
            return handlerResult;
          }
        }
      }

    }
    this._active = EMPTY_HANDLERS;
    this._id = -1;
    this._state = OscState.START;
  }
}

/**
 * Convenient class to allow attaching string based handler functions
 * as OSC handlers.
 */
export class OscHandler implements IOscHandler {
  private _data = '';
  private _hitLimit: boolean = false;

  constructor(private _handler: (data: string) => boolean | Promise<boolean>) { }

  public start(): void {
    this._data = '';
    this._hitLimit = false;
  }

  public put(data: Uint32Array, start: number, end: number): void {
    if (this._hitLimit) {
      return;
    }
    this._data += utf32ToString(data, start, end);
    if (this._data.length > PAYLOAD_LIMIT) {
      this._data = '';
      this._hitLimit = true;
    }
  }

  public end(success: boolean): boolean | Promise<boolean> {
    let ret: boolean | Promise<boolean> = false;
    if (this._hitLimit) {
      ret = false;
    } else if (success) {
      ret = this._handler(this._data);
      if (ret instanceof Promise) {
        // need to hold data until `ret` got resolved
        // dont care for errors, data will be freed anyway on next start
        return ret.then(res => {
          this._data = '';
          this._hitLimit = false;
          return res;
        });
      }
    }
    this._data = '';
    this._hitLimit = false;
    return ret;
  }
}
